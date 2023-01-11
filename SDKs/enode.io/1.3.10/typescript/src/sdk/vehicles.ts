import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Vehicles {
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
   * getVehicleChargestate - Get Vehicle Charge State
  **/
  getVehicleChargestate(
    req: operations.GetVehicleChargestateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVehicleChargestateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVehicleChargestateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/vehicles/{vehicleId}/charge-state", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVehicleChargestateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getVehicleChargestate200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getVehicles - List Vehicles
  **/
  getVehicles(
    req: operations.GetVehiclesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVehiclesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVehiclesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/vehicles";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetVehiclesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchemas = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getVehiclesVehicleid - Get Vehicle
  **/
  getVehiclesVehicleid(
    req: operations.GetVehiclesVehicleidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVehiclesVehicleidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVehiclesVehicleidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/vehicles/{vehicleId}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetVehiclesVehicleidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getVehiclesVehicleid200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getVehiclesVehicleidInformation - Get Vehicle Information
  **/
  getVehiclesVehicleidInformation(
    req: operations.GetVehiclesVehicleidInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVehiclesVehicleidInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVehiclesVehicleidInformationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/vehicles/{vehicleId}/information", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVehiclesVehicleidInformationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getVehiclesVehicleidInformation200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getVehiclesVehicleidLocation - Get Vehicle Location
  **/
  getVehiclesVehicleidLocation(
    req: operations.GetVehiclesVehicleidLocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVehiclesVehicleidLocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVehiclesVehicleidLocationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/vehicles/{vehicleId}/location", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVehiclesVehicleidLocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getVehiclesVehicleidLocation200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getVehiclesVehicleidOdometer - Get Vehicle Odometer
  **/
  getVehiclesVehicleidOdometer(
    req: operations.GetVehiclesVehicleidOdometerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVehiclesVehicleidOdometerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVehiclesVehicleidOdometerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/vehicles/{vehicleId}/odometer", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVehiclesVehicleidOdometerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getVehiclesVehicleidOdometer200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getVehiclesVehicleidSmartchargingpolicy - Get Vehicle Smart Charging Policy
  **/
  getVehiclesVehicleidSmartchargingpolicy(
    req: operations.GetVehiclesVehicleidSmartchargingpolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVehiclesVehicleidSmartchargingpolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVehiclesVehicleidSmartchargingpolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/vehicles/{vehicleId}/smart-charging-policy", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVehiclesVehicleidSmartchargingpolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postVehiclesVehicleidCharging - Start / Stop Charging
   *
   * Instruct the vehicle to start or stop charging. 
   * 
   * #### Precedence over smart charging
   * If the vehicle is at a charging location where smart charging is activated:
   * - a request to `start` charging will override smart charging and charging will stay on until fully charged. 
   * - a request to `stop` charging will override smart charging and charging will be kept off for the duration of the current smart charging cycle.
   * 
   * The smart charging settings are not altered by these actions.
  **/
  postVehiclesVehicleidCharging(
    req: operations.PostVehiclesVehicleidChargingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostVehiclesVehicleidChargingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostVehiclesVehicleidChargingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/vehicles/{vehicleId}/charging", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostVehiclesVehicleidChargingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * postVehiclesVehicleidWatch - Start Watching Vehicle
   *
   * Temporarily triggers high-rate updates of the vehicle's properties, and this state expires automatically. This gives you a way to tell us that user may be interacting with your application and are expecting as-fast-as-possible updates on the status of their vehicle in your UI.
   * 
   * Any data changes resulting from this high-rate updating are reflected everywhere, whether you pull data from the `Vehicles` endpoint, or recieve it via the [Firehose Webhook](#tag/Webhooks)
   * 
   * The specifics of the expiration times, watch behaviors, and change thresholds are tuned by us to make sure that they work as expected, without causing undue interruption to the vehicle. For many vendors, it is not appropriate to let the high-rate monitoring last indefinitely, as it will keep systems within the car awake that should be allowed to fall into low-power/standby modes.
   * 
  **/
  postVehiclesVehicleidWatch(
    req: operations.PostVehiclesVehicleidWatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostVehiclesVehicleidWatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostVehiclesVehicleidWatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/vehicles/{vehicleId}/watch", req.pathParams);

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
        const res: operations.PostVehiclesVehicleidWatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putVehiclesVehicleidSmartchargingpolicy - Update Vehicle Smart Charging Policy
   *
   * Updates the Smart Charging settings for a vehicle
  **/
  putVehiclesVehicleidSmartchargingpolicy(
    req: operations.PutVehiclesVehicleidSmartchargingpolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutVehiclesVehicleidSmartchargingpolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutVehiclesVehicleidSmartchargingpolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/vehicles/{vehicleId}/smart-charging-policy", req.pathParams);

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
        const res: operations.PutVehiclesVehicleidSmartchargingpolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
