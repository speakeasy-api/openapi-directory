import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Health {
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
   * getHeartbeat - Ping the server for liveness
  **/
  getHeartbeat(
    req: operations.GetHeartbeatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHeartbeatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHeartbeatRequest(req);
    }
    
    let baseURL: string = operations.GetHeartbeatServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/heartbeat";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetHeartbeatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `text/plain`)) {
                res.getHeartbeat200TextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getServerHealth - Get state of the server and its dependencies.
  **/
  getServerHealth(
    req: operations.GetServerHealthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetServerHealthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetServerHealthRequest(req);
    }
    
    let baseURL: string = operations.GetServerHealthServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/health";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetServerHealthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getServerHealth200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
