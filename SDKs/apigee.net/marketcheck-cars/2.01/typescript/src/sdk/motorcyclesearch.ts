import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class MotorcycleSearch {
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
   * getListingMotorcycleId - Motorcycle listing by id
   *
   * Get a particular Motorcycle listing by its id
  **/
  getListingMotorcycleId(
    req: operations.GetListingMotorcycleIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingMotorcycleIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingMotorcycleIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/motorcycle/{id}", req.pathParams);
    
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
        const res: operations.GetListingMotorcycleIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.motorcycleListing = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getListingMotorcycleIdExtra - Long text Motorcycle Listings attributes for Listing with the given id
   *
   * Get Motorcycle listing options, features, seller comments
  **/
  getListingMotorcycleIdExtra(
    req: operations.GetListingMotorcycleIdExtraRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingMotorcycleIdExtraResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingMotorcycleIdExtraRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/motorcycle/{id}/extra", req.pathParams);
    
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
        const res: operations.GetListingMotorcycleIdExtraResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listingExtraAttributes = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getListingMotorcycleIdMedia - Motorcycle listing media by id
   *
   * Get Motorcycle listing media (photo, photos) by id
  **/
  getListingMotorcycleIdMedia(
    req: operations.GetListingMotorcycleIdMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingMotorcycleIdMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingMotorcycleIdMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/motorcycle/{id}/media", req.pathParams);
    
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
        const res: operations.GetListingMotorcycleIdMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listingMedia = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSearchMotorcycleActive - Gets active motorcycle listings for the given search criteria
   *
   * This endpoint provides search on motorcycle inventory. This API produces a list of currently active motorcycles from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
   *  The search API facilitates the following use cases - 
   * 1. Search motorcycles around a given geo-point within a given radius 
   * 2. Search motorcycles for a specific year / make / model or combination of these 
   * 3. Search motorcycles matching multiple year, make, model combinatins in the same search request
   * 4. Filter results by most motorcycle specification attributes
   * 5. Search for similar motorcycles by VIN or Taxonomy VIN 
   * 6. Filter motorcycles within a given price / miles range
   * 7. Specify a sort order for the results on price / miles / listed date 
   * 8. Search motorcycles for a given City / State combination 
   * 9. Get Facets to build the search drill downs 
   * 10. Get Market averages for price/miles for your search
  **/
  getSearchMotorcycleActive(
    req: operations.GetSearchMotorcycleActiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchMotorcycleActiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchMotorcycleActiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/motorcycle/active";
    
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
        const res: operations.GetSearchMotorcycleActiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.motorcycleSearchResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSearchMotorcycleAutoComplete - API for auto-completion of inputs
   *
   * Auto-complete the inputs of your end users
  **/
  getSearchMotorcycleAutoComplete(
    req: operations.GetSearchMotorcycleAutoCompleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchMotorcycleAutoCompleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchMotorcycleAutoCompleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/motorcycle/auto-complete";
    
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
        const res: operations.GetSearchMotorcycleAutoCompleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.searchAutoCompleteResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
