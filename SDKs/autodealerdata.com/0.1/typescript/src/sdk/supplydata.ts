import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class SupplyData {
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
   * daysSupplyDaysSupplyGet - Days worth of supply left on dealer lots
   *
   * Average, median, standard deviation, population variance, and whole region average of the 
   * days of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
   * a dealer by dealer basis while the whole region average treats the entire region like a single dealership. 
   * The average field may differ from the whole region average, especially when dealers are out of 
   * a given model. 
   * 
   * The available brand and region names can be retrieved from their respective endpoints.
  **/
  daysSupplyDaysSupplyGet(
    req: operations.DaysSupplyDaysSupplyGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DaysSupplyDaysSupplyGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DaysSupplyDaysSupplyGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/daysSupply";
    
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
        const res: operations.DaysSupplyDaysSupplyGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * daysToSellDaysToSellGet - Days a vehicle takes to sell
   *
   * Average, median, standard deviation, population variance, and whole region average of the 
   * number of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
   * a dealer by dealer basis while the whole region average treats the entire region like a single dealership. 
   * The average field may differ from the whole region average.
   * 
   * The available brand and region names can be retrieved from their respective endpoints.
  **/
  daysToSellDaysToSellGet(
    req: operations.DaysToSellDaysToSellGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DaysToSellDaysToSellGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DaysToSellDaysToSellGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/daysToSell";
    
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
        const res: operations.DaysToSellDaysToSellGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
