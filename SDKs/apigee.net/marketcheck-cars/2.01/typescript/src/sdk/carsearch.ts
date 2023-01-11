import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CarSearch {
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
   * autoComplete - API for auto-completion of inputs
   *
   * Auto-complete the inputs of your end users
  **/
  autoComplete(
    req: operations.AutoCompleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AutoCompleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AutoCompleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/car/auto-complete";
    
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
        const res: operations.AutoCompleteResponse = {statusCode: httpRes.status, contentType: contentType};
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

  
  /**
   * getListing - Listing by id
   *
   * Get a particular dealer listing by its id
  **/
  getListing(
    req: operations.GetListingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/car/{id}", req.pathParams);
    
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
        const res: operations.GetListingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listing = httpRes?.data;
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
   * getCarDealerInventoryActive - Get dealers active inventory
   *
   * Get dealers active inventory
  **/
  getCarDealerInventoryActive(
    req: operations.GetCarDealerInventoryActiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCarDealerInventoryActiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCarDealerInventoryActiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/car/dealer/inventory/active";
    
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
        const res: operations.GetCarDealerInventoryActiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.searchResponse = httpRes?.data;
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
   * getListingCarAuctionId - Listing by id
   *
   * Get a particular auction listing by its id
  **/
  getListingCarAuctionId(
    req: operations.GetListingCarAuctionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingCarAuctionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingCarAuctionIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/car/auction/{id}", req.pathParams);
    
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
        const res: operations.GetListingCarAuctionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listing = httpRes?.data;
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
   * getListingCarAuctionIdExtra - Long text Listings attributes for Listing with the given id
   *
   * Get listing options, features, seller comments
  **/
  getListingCarAuctionIdExtra(
    req: operations.GetListingCarAuctionIdExtraRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingCarAuctionIdExtraResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingCarAuctionIdExtraRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/car/auction/{id}/extra", req.pathParams);
    
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
        const res: operations.GetListingCarAuctionIdExtraResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getListingCarAuctionIdMedia - Listing media by id
   *
   * Get listing media (photo, photos) by id
  **/
  getListingCarAuctionIdMedia(
    req: operations.GetListingCarAuctionIdMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingCarAuctionIdMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingCarAuctionIdMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/car/auction/{id}/media", req.pathParams);
    
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
        const res: operations.GetListingCarAuctionIdMediaResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getListingCarFsboId - Listing by id
   *
   * Get a particular private party listing by its id
  **/
  getListingCarFsboId(
    req: operations.GetListingCarFsboIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingCarFsboIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingCarFsboIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/car/fsbo/{id}", req.pathParams);
    
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
        const res: operations.GetListingCarFsboIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listing = httpRes?.data;
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
   * getListingCarFsboIdExtra - Long text Listings attributes for Listing with the given id
   *
   * Get listing options, features, seller comments
  **/
  getListingCarFsboIdExtra(
    req: operations.GetListingCarFsboIdExtraRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingCarFsboIdExtraResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingCarFsboIdExtraRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/car/fsbo/{id}/extra", req.pathParams);
    
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
        const res: operations.GetListingCarFsboIdExtraResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getListingCarFsboIdMedia - Listing media by id
   *
   * Get listing media (photo, photos) by id
  **/
  getListingCarFsboIdMedia(
    req: operations.GetListingCarFsboIdMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingCarFsboIdMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingCarFsboIdMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/car/fsbo/{id}/media", req.pathParams);
    
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
        const res: operations.GetListingCarFsboIdMediaResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getListingCarIdExtra - Long text Listings attributes for Listing with the given id
   *
   * Get listing options, features, seller comments
  **/
  getListingCarIdExtra(
    req: operations.GetListingCarIdExtraRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingCarIdExtraResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingCarIdExtraRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/car/{id}/extra", req.pathParams);
    
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
        const res: operations.GetListingCarIdExtraResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getListingCarIdMedia - Listing media by id
   *
   * Get listing media (photo, photos) by id
  **/
  getListingCarIdMedia(
    req: operations.GetListingCarIdMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingCarIdMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingCarIdMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/listing/car/{id}/media", req.pathParams);
    
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
        const res: operations.GetListingCarIdMediaResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getSearchCarAuctionActive - Gets active auction car listings for the given search criteria
   *
   * This API produces a list of currently active auction cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
   *  The search API facilitates the following use cases - 
   * 1. Search Cars around a given geo-point within a given radius 
   * 2. Search cars for a specific year / make / model or combination of these 
   * 3. Search cars matching multiple year, make, model combinatins in the same search request
   * 4. Filter results by most car specification attributes
   * 5. Search for similar cars by VIN or Taxonomy VIN 
   * 6. Filter cars within a given price / miles / days on market (dom) range
   * 7. Specify a sort order for the results on price / miles / dom / listed date 
   * 8. Search cars for a given City / State combination 
   * 9. Get Facets to build the search drill downs 
   * 10. Get Market averages for price/miles/dom for your search
  **/
  getSearchCarAuctionActive(
    req: operations.GetSearchCarAuctionActiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchCarAuctionActiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchCarAuctionActiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/car/auction/active";
    
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
        const res: operations.GetSearchCarAuctionActiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.searchResponse = httpRes?.data;
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
   * getSearchCarFsboActive - Gets active private party car listings for the given search criteria
   *
   * This API produces a list of currently active FSBO cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
   *  The search API facilitates the following use cases - 
   * 1. Search Cars around a given geo-point within a given radius 
   * 2. Search cars for a specific year / make / model or combination of these 
   * 3. Search cars matching multiple year, make, model combinatins in the same search request
   * 4. Filter results by most car specification attributes
   * 5. Search for similar cars by VIN or Taxonomy VIN 
   * 6. Filter cars within a given price / miles / days on market (dom) range
   * 7. Specify a sort order for the results on price / miles / dom / listed date 
   * 8. Search cars for a given City / State combination 
   * 9. Get Facets to build the search drill downs 
   * 10. Get Market averages for price/miles/dom for your search
  **/
  getSearchCarFsboActive(
    req: operations.GetSearchCarFsboActiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchCarFsboActiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchCarFsboActiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/car/fsbo/active";
    
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
        const res: operations.GetSearchCarFsboActiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.searchResponse = httpRes?.data;
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
   * getSearchCarRecents - Gets Recent car listings for the given search criteria
   *
   * This API produces a list of recently active (past 90 days) cars from the market for the given search criteria
  **/
  getSearchCarRecents(
    req: operations.GetSearchCarRecentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchCarRecentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchCarRecentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/car/recents";
    
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
        const res: operations.GetSearchCarRecentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.searchResponse = httpRes?.data;
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
   * search - Gets active car listings for the given search criteria
   *
   * This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows. 
   *  The search API facilitates the following use cases - 
   * 1. Search Cars around a given geo-point within a given radius 
   * 2. Search cars for a specific year / make / model or combination of these 
   * 3. Search cars matching multiple year, make, model combinatins in the same search request
   * 4. Filter results by most car specification attributes
   * 5. Search for similar cars by VIN or Taxonomy VIN 
   * 6. Filter cars within a given price / miles / days on market (dom) range
   * 7. Specify a sort order for the results on price / miles / dom / listed date 
   * 8. Search cars for a given City / State combination 
   * 9. Get Facets to build the search drill downs 
   * 10. Get Market averages for price/miles/dom for your search
  **/
  search(
    req: operations.SearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/car/active";
    
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
        const res: operations.SearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.searchResponse = httpRes?.data;
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
