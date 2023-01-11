import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ChargingLocations {
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
   * deleteCharginglocationsCharginglocationid - Delete Charging Location
   *
   * Delete a Charging Location
  **/
  deleteCharginglocationsCharginglocationid(
    req: operations.DeleteCharginglocationsCharginglocationidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCharginglocationsCharginglocationidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCharginglocationsCharginglocationidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/charging-locations/{chargingLocationId}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCharginglocationsCharginglocationidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * getCharginglocations - List Charging Locations
   *
   * Returns a list of Charging Locations registered to the User
  **/
  getCharginglocations(
    req: operations.GetCharginglocationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCharginglocationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCharginglocationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/charging-locations";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCharginglocationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onechargingLocationsPostRequestBodyContentApplication1jsonSchemas = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCharginglocationsCharginglocationid - Get Charging Location
  **/
  getCharginglocationsCharginglocationid(
    req: operations.GetCharginglocationsCharginglocationidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCharginglocationsCharginglocationidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCharginglocationsCharginglocationidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/charging-locations/{chargingLocationId}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCharginglocationsCharginglocationidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onechargingLocationsPostRequestBodyContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCharginglocations - Create Charging Location
  **/
  postCharginglocations(
    req: operations.PostCharginglocationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCharginglocationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCharginglocationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/charging-locations";

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
        const res: operations.PostCharginglocationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onechargingLocationsPostRequestBodyContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putCharginglocationsCharginglocationid - Update Charging Location
   *
   * Updates a charging location with new configuration
  **/
  putCharginglocationsCharginglocationid(
    req: operations.PutCharginglocationsCharginglocationidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutCharginglocationsCharginglocationidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutCharginglocationsCharginglocationidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/charging-locations/{chargingLocationId}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutCharginglocationsCharginglocationidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onechargingLocationsPostRequestBodyContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
