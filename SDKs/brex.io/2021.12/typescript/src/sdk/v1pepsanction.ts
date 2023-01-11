import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class V1Pepsanction {
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
   * pepMonitorList - Retrieves a list of monitor entries
   *
   * Retrieve a list of all active Pep Sanction Report monitors for this account
  **/
  pepMonitorList(
    req: operations.PepMonitorListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PepMonitorListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PepMonitorListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/pepsanction/monitor/list";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PepMonitorListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pepMonitorList200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pepMonitorListDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * pepMonitorUnregister - Deactive a pep sanction monitor
   *
   * Unregister a previously created Pep Sanction Report Monitor
  **/
  pepMonitorUnregister(
    req: operations.PepMonitorUnregisterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PepMonitorUnregisterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PepMonitorUnregisterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/pepsanction/monitor/unregister/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PepMonitorUnregisterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pepMonitorUnregister200ApplicationJSONAny = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pepMonitorUnregisterDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * pepMonitorUpdate - Update details of active Pep Sanction monitor
   *
   * Update the webhook URL of an active Pep Sanction Report Monitor
  **/
  pepMonitorUpdate(
    req: operations.PepMonitorUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PepMonitorUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PepMonitorUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/pepsanction/monitor/update/{id}", req.pathParams);

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
        const res: operations.PepMonitorUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pepMonitorUpdate200ApplicationJSONAny = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pepMonitorUpdateDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * pepOrder - Orders a new Pep Sanction Check Report
   *
   * Order a new Pep Sanction Check by providing either a business or person name with some additional optional parameters.
  **/
  pepOrder(
    req: operations.PepOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PepOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PepOrderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/pepsanction/order/{type}/{search}", req.pathParams);

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
        const res: operations.PepOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pepOrder200ApplicationJSONAny = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pepOrderDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * pepRetrieve - Returns a json or pdf report
   *
   * Retrieve a completed Pep Sanction check structured or in pdf depending on given accept header
  **/
  pepRetrieve(
    req: operations.PepRetrieveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PepRetrieveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PepRetrieveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/pepsanction/retrieve/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.PepRetrieveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pepRetrieve200ApplicationJSONAny = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pepRetrieveDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
