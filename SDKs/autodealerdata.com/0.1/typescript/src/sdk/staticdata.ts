import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class StaticData {
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
   * getBrandNamesGetBrandsGet - Get a list of brand names
   *
   * Get vehicle brand names. 
   * 
   * These names are used as arguments for other endpoints. The names are generally not case sensitive
   * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
  **/
  getBrandNamesGetBrandsGet(
    req: operations.GetBrandNamesGetBrandsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBrandNamesGetBrandsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBrandNamesGetBrandsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getBrands";
    
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
        const res: operations.GetBrandNamesGetBrandsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.brandResp = httpRes?.data;
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
   * getModelNamesAllGetInactiveModelsGet - Get a list of model names including discontinued models
   *
   * Get all model names including discontinued models. Because these models are no longer built, or have very poor market performance
   * they are not incuded in the normal getModels endpoint. Many users itterate through the model names with our new vehicle sales
   * endpoints and waste some of their quota making self contradictory requests. This endpoint was created to aleviate the use case where
   * someone requests information on new vehicle sales for a model that has not been sold new for a long, long, time. 
   * 
   * These names are used as arguments for other endpoints. The names are generally not case sensitive
   * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
  **/
  getModelNamesAllGetInactiveModelsGet(
    req: operations.GetModelNamesAllGetInactiveModelsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelNamesAllGetInactiveModelsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelNamesAllGetInactiveModelsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getInactiveModels";
    
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
        const res: operations.GetModelNamesAllGetInactiveModelsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.modelResp = httpRes?.data;
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
   * getModelNamesGetModelsGet - Get a list of model names
   *
   * Get brand model names for currently active models. This endpoint does not return model names that have been discontinued or have 
   * sold less than 10 vehicles in the last month and a half.
   * 
   * These names are used as arguments for other endpoints. The names are generally not case sensitive
   * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
  **/
  getModelNamesGetModelsGet(
    req: operations.GetModelNamesGetModelsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelNamesGetModelsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelNamesGetModelsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getModels";
    
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
        const res: operations.GetModelNamesGetModelsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.modelResp = httpRes?.data;
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
   * getRegionsGetRegionsGet - Get a list of region names
   *
   * Get region names. These names are used as arguments for other endpoints. The names are generally not case sensitive
   * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
  **/
  getRegionsGetRegionsGet(
    req: operations.GetRegionsGetRegionsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRegionsGetRegionsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRegionsGetRegionsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getRegions";
    
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
        const res: operations.GetRegionsGetRegionsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.regionResp = httpRes?.data;
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
