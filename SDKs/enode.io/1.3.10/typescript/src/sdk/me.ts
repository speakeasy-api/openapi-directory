import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Me {
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
   * disconnectVendor - Disconnect Vendor
   *
   * Disconnect a single Vendor from the User's account.
   * 
   * All stored data about their Vendor account will be deleted, and any vehicles that were provided by that Vendor will disappear from the system.
  **/
  disconnectVendor(
    req: operations.DisconnectVendorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisconnectVendorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisconnectVendorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/me/vendors/{vendor}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DisconnectVendorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * getMe - Get My User
   *
   * Returns metadata about the authenticated User, including a list of vendors for which the user has provided credentials.
  **/
  getMe(
    req: operations.GetMeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getMe200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
