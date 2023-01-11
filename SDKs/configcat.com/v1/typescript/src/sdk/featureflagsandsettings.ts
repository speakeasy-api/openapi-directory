import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class FeatureFlagsAndSettings {
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
   * createSetting - Create Flag
   *
   * This endpoint creates a new Feature Flag or Setting in a specified Config
   * identified by the `configId` parameter.
   * 
   * **Important:** The `key` attribute must be unique within the given Config.
  **/
  createSetting(
    req: operations.CreateSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSettingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/configs/{configId}/settings", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateSettingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljson = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/json`)) {
                res.settingModel = httpRes?.data;
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
   * deleteSetting - Delete Flag
   *
   * This endpoint removes a Feature Flag or Setting from a specified Config, 
   * identified by the `configId` parameter.
  **/
  deleteSetting(
    req: operations.DeleteSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSettingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/settings/{settingId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSettingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
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

  
  /**
   * getSetting - Get Flag
   *
   * This endpoint returns the metadata attributes of a Feature Flag or Setting 
   * identified by the `settingId` parameter.
  **/
  getSetting(
    req: operations.GetSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/settings/{settingId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljson = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/json`)) {
                res.settingModel = httpRes?.data;
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
   * getSettings - List Flags
   *
   * This endpoint returns the list of the Feature Flags and Settings defined in a 
   * specified Config, identified by the `configId` parameter.
  **/
  getSettings(
    req: operations.GetSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/configs/{configId}/settings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljsons = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/json`)) {
                res.settingModels = httpRes?.data;
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
   * updateSetting - Update Flag
   *
   * This endpoint updates the metadata of a Feature Flag or Setting 
   * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.
   * 
   * Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
   * The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.
   * 
   * The advantage of using JSON Patch is that you can describe individual update operations on a resource
   * without touching attributes that you don't want to change.
   * 
   * For example: We have the following resource.
   * ```
   * {
   * 	"settingId": 5345,
   * 	"key": "myGrandFeature",
   * 	"name": "Tihs is a naem with soem typos.",
   * 	"hint": "This flag controls my grandioso feature.",
   * 	"settingType": "boolean",
   * 	"tags": [
   * 		{
   * 			"tagId": 0,
   * 			"name": "sample tag",
   * 			"color": "whale"
   * 		}
   * 	]
   * }
   * ```
   * If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
   * ```
   * [
   * 	{
   * 		"op": "replace",
   * 		"path": "/name",
   * 		"value": "This is the name without typos."
   * 	},
   * 	{
   * 		"op": "add",
   * 		"path": "/tags/-",
   * 		"value": 2
   * 	}
   * ]
   * ```
   * Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
   * So we get a response like this:
   * ```
   * {
   * 	"settingId": 5345,
   * 	"key": "myGrandFeature",
   * 	"name": "This is the name without typos.",
   * 	"hint": "This flag controls my grandioso feature.",
   * 	"settingType": "boolean",
   * 	"tags": [
   * 		{
   * 			"tagId": 0,
   * 			"name": "sample tag",
   * 			"color": "whale"
   * 		},
   * 		{
   * 			"tagId": 2,
   * 			"name": "another tag",
   * 			"color": "koala"
   * 		}
   * 	]
   * }
   * ```
  **/
  updateSetting(
    req: operations.UpdateSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSettingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/settings/{settingId}", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateSettingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/hal+json`)) {
                res.settingModelHaljson = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/json`)) {
                res.settingModel = httpRes?.data;
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

}
