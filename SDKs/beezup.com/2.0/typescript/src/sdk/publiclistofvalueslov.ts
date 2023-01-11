import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PublicListOfValuesLov {
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
   * getPublicListOfValues - Get the list of values related to this list name
  **/
  getPublicListOfValues(
    req: operations.GetPublicListOfValuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicListOfValuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPublicListOfValuesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/public/lov/{listName}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPublicListOfValuesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.publicListOfValuesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPublicLovIndex - Get all list names
  **/
  getPublicLovIndex(
    req: operations.GetPublicLovIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicLovIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPublicLovIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/public/lov/";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPublicLovIndexResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.publicLovIndex = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
