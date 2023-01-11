import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class FeatureFlagAndSettingValuesUsingSDKKey {
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
   * getSettingValueBySdkkey - Get value
   *
   * This endpoint returns the value of a Feature Flag or Setting 
   * in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
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
  getSettingValueBySdkkey(
    req: operations.GetSettingValueBySdkkeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingValueBySdkkeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingValueBySdkkeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/settings/{settingKeyOrId}/value", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingValueBySdkkeyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * replaceSettingValueBySdkkey - Replace value
   *
   * This endpoint replaces the value of a Feature Flag or Setting 
   * in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
   * 
   * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
   * 
   * **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
   * want to change to its original state. Not listing one means that it will reset.
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
   * Then besides that the default served value is set to `true`, all the Percentage Rules are deleted. 
   * So we get a response like this:
   * ```
   * {
   * 	"rolloutPercentageItems": [],
   * 	"rolloutRules": [],
   * 	"value": true
   * }
   * ```
  **/
  replaceSettingValueBySdkkey(
    req: operations.ReplaceSettingValueBySdkkeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReplaceSettingValueBySdkkeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReplaceSettingValueBySdkkeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/settings/{settingKeyOrId}/value", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ReplaceSettingValueBySdkkeyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * updateSettingValueBySdkkey - Update value
   *
   * This endpoint updates the value of a Feature Flag or Setting 
   * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment
   * identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
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
   * Only the default served value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
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
  updateSettingValueBySdkkey(
    req: operations.UpdateSettingValueBySdkkeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSettingValueBySdkkeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSettingValueBySdkkeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/settings/{settingKeyOrId}/value", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateSettingValueBySdkkeyResponse = {statusCode: httpRes.status, contentType: contentType};
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
