import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ApIs {
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
   * micer - Migration Certificate
   *
   * API to verify Migration Certificate.
  **/
  micer(
    req: operations.MicerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MicerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MicerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/micer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.MicerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.micer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.micer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.micer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.micer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.micer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.micer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.micer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * pvcer - Provisional Certificate
   *
   * API to verify Provisional Certificate.
  **/
  pvcer(
    req: operations.PvcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PvcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PvcerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pvcer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.PvcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pvcer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pvcer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pvcer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pvcer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pvcer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pvcer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pvcer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
