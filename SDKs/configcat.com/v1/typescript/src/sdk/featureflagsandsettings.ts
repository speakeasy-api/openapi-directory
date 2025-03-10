/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * With these endpoints you can manage your Feature Flags or Settings within a Config.
 *
 * @remarks
 * However you can't use them for manipulating the values of your Feature Flags and Settings,
 * to do that please visit the [Feature Flag & Setting values using SDK Key](#tag/Feature-Flag-and-Setting-values-using-SDK-Key)
 * and [Feature Flag & Setting values](#tag/Feature-Flag-and-Setting-values) sections of the API.
 *
 * For using these endpoints, first you have to select which Config you want to work with by its `configId`
 * which can be obtained from the [List Configs](#operation/get-configs) endpoint.
 * Then you can use it to create new Feature Flags or to get information about existing ones.
 *
 * Then you can obtain the `settingId` or `key` of your desired Feature Flag or Setting
 * to use them for further operations in this API.
 *
 * <a href="https://configcat.com/docs/main-concepts/#setting" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Settings.
 */
export class FeatureFlagsAndSettings {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Create Flag
   *
   * @remarks
   * This endpoint creates a new Feature Flag or Setting in a specified Config
   * identified by the `configId` parameter.
   *
   * **Important:** The `key` attribute must be unique within the given Config.
   */
  createSetting(
    req: operations.CreateSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSettingRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/configs/{configId}/settings",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "createSettingInitialValues",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CreateSettingResponse =
        new operations.CreateSettingResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/hal+json`)) {
            res.settingModelHaljson = utils.objectToClass(
              httpRes?.data,
              shared.SettingModelHaljson
            );
          }
          if (utils.matchContentType(contentType, `application/json`)) {
            res.settingModel = utils.objectToClass(
              httpRes?.data,
              shared.SettingModel
            );
          }
          break;
        case [400, 401, 404, 429].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * Delete Flag
   *
   * @remarks
   * This endpoint removes a Feature Flag or Setting from a specified Config,
   * identified by the `configId` parameter.
   */
  deleteSetting(
    req: operations.DeleteSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSettingRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/settings/{settingId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteSettingResponse =
        new operations.DeleteSettingResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case [204, 400, 401, 404, 429].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * Get Flag
   *
   * @remarks
   * This endpoint returns the metadata attributes of a Feature Flag or Setting
   * identified by the `settingId` parameter.
   */
  getSetting(
    req: operations.GetSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/settings/{settingId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetSettingResponse =
        new operations.GetSettingResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/hal+json`)) {
            res.settingModelHaljson = utils.objectToClass(
              httpRes?.data,
              shared.SettingModelHaljson
            );
          }
          if (utils.matchContentType(contentType, `application/json`)) {
            res.settingModel = utils.objectToClass(
              httpRes?.data,
              shared.SettingModel
            );
          }
          break;
        case [400, 401, 404, 429].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * List Flags
   *
   * @remarks
   * This endpoint returns the list of the Feature Flags and Settings defined in a
   * specified Config, identified by the `configId` parameter.
   */
  getSettings(
    req: operations.GetSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/configs/{configId}/settings",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetSettingsResponse =
        new operations.GetSettingsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/hal+json`)) {
            res.settingModelHaljsons = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.settingModelHaljsons = utils.objectToClass(
              httpRes?.data,
              shared.SettingModelHaljson,
              resFieldDepth
            );
          }
          if (utils.matchContentType(contentType, `application/json`)) {
            res.settingModels = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.settingModels = utils.objectToClass(
              httpRes?.data,
              shared.SettingModel,
              resFieldDepth
            );
          }
          break;
        case [400, 401, 404, 429].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * Update Flag
   *
   * @remarks
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
   */
  updateSetting(
    req: operations.UpdateSettingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSettingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSettingRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/settings/{settingId}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "jsonPatchInput",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdateSettingResponse =
        new operations.UpdateSettingResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/hal+json`)) {
            res.settingModelHaljson = utils.objectToClass(
              httpRes?.data,
              shared.SettingModelHaljson
            );
          }
          if (utils.matchContentType(contentType, `application/json`)) {
            res.settingModel = utils.objectToClass(
              httpRes?.data,
              shared.SettingModel
            );
          }
          break;
        case [400, 401, 404, 429].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }
}
