import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PricingData {
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
   * getAvgListPriceListPriceGet - Stats on ask price of new vehicles
   *
   * Average, median, standard deviation, and population variance of the ask price of new vehicles over the last 15 days for a given brand and region.
   * 
   * The available brand and region names can be retrieved from their respective endpoints.
  **/
  getAvgListPriceListPriceGet(
    req: operations.GetAvgListPriceListPriceGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAvgListPriceListPriceGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAvgListPriceListPriceGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listPrice";
    
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
        const res: operations.GetAvgListPriceListPriceGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicModelStatsResp = httpRes?.data;
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
   * getAvgSalePriceSalePriceGet - Stats on sale price of new vehicles
   *
   * Average, median, standard deviation, and population variance of the sale price of new vehicles over the last 15 days for a given brand and region.
   * 
   * The available brand and region names can be retrieved from their respective endpoints.
  **/
  getAvgSalePriceSalePriceGet(
    req: operations.GetAvgSalePriceSalePriceGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAvgSalePriceSalePriceGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAvgSalePriceSalePriceGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/salePrice";
    
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
        const res: operations.GetAvgSalePriceSalePriceGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicModelStatsResp = httpRes?.data;
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
   * getMarket3SimilarSalePriceGet - Premium. Simple Vehicle Market Report
   *
   * Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN. 
   * Optionally restricts report to vehicles of the same model year and goes back up to 120 days.
  **/
  getMarket3SimilarSalePriceGet(
    req: operations.GetMarket3SimilarSalePriceGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMarket3SimilarSalePriceGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMarket3SimilarSalePriceGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/similarSalePrice";
    
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
        const res: operations.GetMarket3SimilarSalePriceGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.similarSalePriceResp = httpRes?.data;
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
   * getModelSaleBucketsSalePriceHistogramGet - Histogram of sales price of new vehicles by model
   *
   * Histogram of the sale price of vehicles over the last 45 days for a given model and region. 
   * Price buckets are grouped in units of $1000
   * The available brand, model, and region names can be retrieved from their respective endpoints.
  **/
  getModelSaleBucketsSalePriceHistogramGet(
    req: operations.GetModelSaleBucketsSalePriceHistogramGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelSaleBucketsSalePriceHistogramGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelSaleBucketsSalePriceHistogramGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/salePriceHistogram";
    
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
        const res: operations.GetModelSaleBucketsSalePriceHistogramGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bucketResp = httpRes?.data;
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
