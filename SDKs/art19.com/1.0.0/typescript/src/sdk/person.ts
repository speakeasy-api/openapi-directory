import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Person {
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
   * getPeople - Get a list of people
   *
   * Each series, season, and episode has a Credits section where you may add people and roles.
   * This is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.
   * Each Person added will have no additional access or permissions granted as a result of being included in the Credits section.
   * 
  **/
  getPeople(
    req: operations.GetPeopleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPeopleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPeopleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/people";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPeopleResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                res.getPeople200ApplicationVndApiPlusJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                res.getPeople400ApplicationVndApiPlusJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
  }

  
  /**
   * getPeopleId - Get a specific person
   *
   * Each series, season, and episode has a Credits section where you may add people and roles.
   * This is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.
   * Each Person added will have no additional access or permissions granted as a result of being included in the Credits section.
   * 
  **/
  getPeopleId(
    req: operations.GetPeopleIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPeopleIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPeopleIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/people/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPeopleIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                res.getPeopleId200ApplicationVndApiPlusJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
  }

}
