import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Shopping {
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
   * getFlightOffers - Return list of Flight Offers based on searching criteria.
  **/
  getFlightOffers(
    req: operations.GetFlightOffersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFlightOffersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFlightOffersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shopping/flight-offers";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetFlightOffersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/vnd.amadeus+json`)) {
                res.success = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/vnd.amadeus+json`)) {
                res.error400 = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/vnd.amadeus+json`)) {
                res.error500 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * searchFlightOffers - Return list of Flight Offers based on posted searching criteria.
  **/
  searchFlightOffers(
    req: operations.SearchFlightOffersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchFlightOffersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchFlightOffersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shopping/flight-offers";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.SearchFlightOffersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/vnd.amadeus+json`)) {
                res.success = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/vnd.amadeus+json`)) {
                res.error400 = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/vnd.amadeus+json`)) {
                res.error500 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
