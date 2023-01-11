import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class HeavyEquipmentSearch {
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
   * getListingHeavyEquipmentId - Heavy equipment listing by id
   *
   * Get a particular Heavy equipment listing by its id
  **/
  getListingHeavyEquipmentId(
    req: operations.GetListingHeavyEquipmentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingHeavyEquipmentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingHeavyEquipmentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/heavy-equipment/{id}", req.pathParams);
    
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
        const res: operations.GetListingHeavyEquipmentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.heavyEquipmentsListing = httpRes?.data;
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
   * getListingHeavyEquipmentIdExtra - Long text Heavy equipment Listings attributes for Listing with the given id
   *
   * Get Heavy equipment listing options, features, seller comments
  **/
  getListingHeavyEquipmentIdExtra(
    req: operations.GetListingHeavyEquipmentIdExtraRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingHeavyEquipmentIdExtraResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingHeavyEquipmentIdExtraRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/heavy-equipment/{id}/extra", req.pathParams);
    
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
        const res: operations.GetListingHeavyEquipmentIdExtraResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getListingHeavyEquipmentIdMedia - Listing media by id
   *
   * Get listing media (photo, photos) by id
  **/
  getListingHeavyEquipmentIdMedia(
    req: operations.GetListingHeavyEquipmentIdMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingHeavyEquipmentIdMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingHeavyEquipmentIdMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/heavy-equipment/{id}/media", req.pathParams);
    
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
        const res: operations.GetListingHeavyEquipmentIdMediaResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getSearchHeavyEquipmentActive - Gets active heavy equipment listings for the given search criteria
   *
   * This endpoint provides search on heavy equipment inventory. This API produces a list of currently active heavy equipments from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
   *  The search API facilitates the following use cases - 
   * 1. Search heavy equipments around a given geo-point within a given radius 
   * 2. Search heavy equipments for a specific year / make / model or combination of these 
   * 3. Search heavy equipments matching multiple year, make, model combinatins in the same search request
   * 4. Filter results by most heavy equipment specification attributes
   * 5. Filter heavy equipments within a given price / miles range
   * 6. Specify a sort order for the results on price / miles / listed date 
   * 7. Search heavy equipments for a given City / State combination 
   * 8. Get Facets to build the search drill downs 
   * 9. Get Market averages for price/miles for your search
  **/
  getSearchHeavyEquipmentActive(
    req: operations.GetSearchHeavyEquipmentActiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchHeavyEquipmentActiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchHeavyEquipmentActiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/heavy-equipment/active";
    
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
        const res: operations.GetSearchHeavyEquipmentActiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.heavyEquipmentsSearchResponse = httpRes?.data;
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
   * getSearchHeavyEquipmentAutoComplete - API for auto-completion of inputs
   *
   * Auto-complete the inputs of your end users
  **/
  getSearchHeavyEquipmentAutoComplete(
    req: operations.GetSearchHeavyEquipmentAutoCompleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchHeavyEquipmentAutoCompleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchHeavyEquipmentAutoCompleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/heavy-equipment/auto-complete";
    
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
        const res: operations.GetSearchHeavyEquipmentAutoCompleteResponse = {statusCode: httpRes.status, contentType: contentType};
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
