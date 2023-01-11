import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class FeatureFlagAndSettingValues {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getSettingValue - Get value
   *
   * This endpoint returns the value of a Feature Flag or Setting 
   * in a specified Environment identified by the `environmentId` parameter.
   * 
   * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
   * The `value` represents what the clients will get when the evaluation requests of our SDKs 
   * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
   * 
   * The `rolloutRules` and `percentageRules` attributes are representing the current 
   * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
   * in an **ordered** collection, which means the order of the returned rules is matching to the
   * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
  **/
  getSettingValue(
    req: operations.GetSettingValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingValueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
  }

  
  /**
   * getSettingValues - Get values
   *
   * This endpoint returns the value of a specified Config's Feature Flags or Settings identified by the `configId` parameter
   * in a specified Environment identified by the `environmentId` parameter.
   * 
   * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
   * The `value` represents what the clients will get when the evaluation requests of our SDKs 
   * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
   * 
   * The `rolloutRules` and `percentageRules` attributes are representing the current 
   * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
   * in an **ordered** collection, which means the order of the returned rules is matching to the
   * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
  **/
  getSettingValues(
    req: operations.GetSettingValuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingValuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingValuesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/configs/{configId}/environments/{environmentId}/values", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingValuesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/hal+json`)) {
                res.configSettingValuesModel = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/json`)) {
                res.configSettingValuesModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
  }

  
  /**
   * replaceSettingValue - Replace value
   *
   * This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.
   * 
   * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
   * 
   * **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
   * want to change in its original state. Not listing one means that it will reset.
   * 
   * For example: We have the following resource.
   * ```
   * {
   * 	"rolloutPercentageItems": [
   * 		{
   * 			"percentage": 30,
   * 			"value": true
   * 		},
   * 		{
   * 			"percentage": 70,
   * 			"value": false
   * 		}
   * 	],
   * 	"rolloutRules": [],
   * 	"value": false
   * }
   * ```
   * If we send a replace request body as below:
   * ```
   * {
   * 	"value": true
   * }
   * ```
   * Then besides that the default value is set to `true`, all the Percentage Rules are deleted. 
   * So we get a response like this:
   * ```
   * {
   * 	"rolloutPercentageItems": [],
   * 	"rolloutRules": [],
   * 	"value": true
   * }
   * ```
  **/
  replaceSettingValue(
    req: operations.ReplaceSettingValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReplaceSettingValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReplaceSettingValueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReplaceSettingValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
  }

  
  /**
   * updateSettingValue - Update value
   *
   * This endpoint updates the value of a Feature Flag or Setting 
   * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.
   * 
   * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
   * 
   * The advantage of using JSON Patch is that you can describe individual update operations on a resource
   * without touching attributes that you don't want to change. It supports collection reordering, so it also 
   * can be used for reordering the targeting rules of a Feature Flag or Setting.
   * 
   * For example: We have the following resource.
   * ```
   * {
   * 	"rolloutPercentageItems": [
   * 		{
   * 			"percentage": 30,
   * 			"value": true
   * 		},
   * 		{
   * 			"percentage": 70,
   * 			"value": false
   * 		}
   * 	],
   * 	"rolloutRules": [],
   * 	"value": false
   * }
   * ```
   * If we send an update request body as below:
   * ```
   * [
   * 	{
   * 		"op": "replace",
   * 		"path": "/value",
   * 		"value": true
   * 	}
   * ]
   * ```
   * Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
   * So we get a response like this:
   * ```
   * {
   * 	"rolloutPercentageItems": [
   * 		{
   * 			"percentage": 30,
   * 			"value": true
   * 		},
   * 		{
   * 			"percentage": 70,
   * 			"value": false
   * 		}
   * 	],
   * 	"rolloutRules": [],
   * 	"value": true
   * }
   * ```
  **/
  updateSettingValue(
    req: operations.UpdateSettingValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSettingValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSettingValueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateSettingValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/hal+json`)) {
                res.settingValueModelHaljson = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/json`)) {
                res.settingValueModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
  }

}
