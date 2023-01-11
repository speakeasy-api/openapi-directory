import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class VehicleData {
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
   * getHistory2VehicleHistoryGet - Premium. Simple Vehicle History Report
   *
   * Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale,
   * price, new/used condition, mileage, dealership state, and dealership zip code. Data availability goes back to early 2016. 
   * 
   * If your use case involves checking if a vehicle has appeared on the open market on or after a given date see 
   * the /vehicleSeen endpoint.
  **/
  getHistory2VehicleHistoryGet(
    req: operations.GetHistory2VehicleHistoryGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHistory2VehicleHistoryGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHistory2VehicleHistoryGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/vehicleHistory";
    
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
        const res: operations.GetHistory2VehicleHistoryGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.historyResp = httpRes?.data;
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
   * getListings2Listings2Get - Flexible Listing Search
   *
   * Generic getter for listings supporting a wide array of selection criteria. This is the new primary listing endpoint and we will phase out the older listing endpoints over time.
   * The other listing endpoints return the same data, but are more restrictive in the available geographic and vehicle selection criteria.
   * 
   * Dealer selection uses the most restictive criteria supplied. 
   * 
   * 
   * Listing selection logically ANDs all options given. 
   * 
   * Time interval selection will prefer explicit start and end dates. If only one of startDate/endDate is supplied, this endpoint will use it 
   * as an anchor and look forward or backwards by the daysBack value. If neither is supplied endpoint will set endDate to today
   * and look back by the supplied daysBack value.
   * 
   * Maximum time interval is 45 days.
   * 
   * ExtendedSearch modifies the slice of listings returned. If false (default) it only returns vehicles satisfying lastSeen >= startDate and lastSeen < endDate.
   * If true it will return vehicles that were in dealer's inventory at any point between startDate and endDate including vehicles that were sold after endDate.
   * Setting extendedSearch to true will result in a slower response time. 
   * 
   * For example: If both a region name and dealer ID are supplied the dealer ID will be used because it is the most restrictive.
   * 
   * If a brandName of Ford and modelYear of 2019, modelName of F-150, and newCars of False is supplied this endpoint will return 
   * used 2019 model year Ford F-150s. If a contradictory listing selection is supplied (for example Ford + Camry) no listings will be returned
   * because the request matched no listings.
   * 
   * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
  **/
  getListings2Listings2Get(
    req: operations.GetListings2Listings2GetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListings2Listings2GetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListings2Listings2GetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listings2";
    
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
        const res: operations.GetListings2Listings2GetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listingResp = httpRes?.data;
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
   * getListingsByDealerListingsByDateGet - Listings by Dealer ID and Date
   *
   * See /listings2 endpoint for more flexible listing search.
   * Returns a dealer's listings over the given timespan by dealer ID. The ID can be found by calling the /getDealers endpoint. 
   * Maximum time interval between startDate and endDate is 45 days.
   * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
   * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
  **/
  getListingsByDealerListingsByDateGet(
    req: operations.GetListingsByDealerListingsByDateGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsByDealerListingsByDateGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsByDealerListingsByDateGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listingsByDate";
    
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
        const res: operations.GetListingsByDealerListingsByDateGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listingResp = httpRes?.data;
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
   * getListingsByDealerListingsGet - Listings by Dealer ID
   *
   * See /listings2 endpoint for more flexible listing search.
   * Returns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint. 
   * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
   * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
  **/
  getListingsByDealerListingsGet(
    req: operations.GetListingsByDealerListingsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsByDealerListingsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsByDealerListingsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listings";
    
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
        const res: operations.GetListingsByDealerListingsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listingResp = httpRes?.data;
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
   * getListingsByRegionAndDateListingsByRegionAndDateGet - Listings by Region and Date
   *
   * See /listings2 endpoint for more flexible listing search.
   * Returns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days 
   * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
   * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
  **/
  getListingsByRegionAndDateListingsByRegionAndDateGet(
    req: operations.GetListingsByRegionAndDateListingsByRegionAndDateGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsByRegionAndDateListingsByRegionAndDateGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listingsByRegionAndDate";
    
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
        const res: operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listingResp = httpRes?.data;
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
   * getListingsByRegionListingsByRegionGet - Listings by Region
   *
   * See /listings2 endpoint for more flexible listing search.
   * Returns a dealer's listings over up to the last 45 days by region. 
   * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
   * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
  **/
  getListingsByRegionListingsByRegionGet(
    req: operations.GetListingsByRegionListingsByRegionGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsByRegionListingsByRegionGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsByRegionListingsByRegionGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listingsByRegion";
    
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
        const res: operations.GetListingsByRegionListingsByRegionGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listingResp = httpRes?.data;
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
   * getVehicleSeenVehicleSeenGet - Checks if a VIN appeared on the market on or after a given date.
   *
   * Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response. 
   * This endpoint is more cost effective than the /vehicleHistory endpoint if your use case
   * requires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).
  **/
  getVehicleSeenVehicleSeenGet(
    req: operations.GetVehicleSeenVehicleSeenGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVehicleSeenVehicleSeenGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVehicleSeenVehicleSeenGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/vehicleSeen";
    
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
        const res: operations.GetVehicleSeenVehicleSeenGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.booleanResp = httpRes?.data;
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
   * listingsByZipCodeAndDateListingsByZipCodeAndDateGet - Listings by ZipCode and Date
   *
   * See /listings2 endpoint for more flexible listing search.
   * Returns a dealer's listings over up to the last 45 days in the provided dealership's zip code. For example 92701.
   * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
   * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
  **/
  listingsByZipCodeAndDateListingsByZipCodeAndDateGet(
    req: operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listingsByZipCodeAndDate";
    
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
        const res: operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listingResp = httpRes?.data;
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
   * listingsByZipCodeListingsByZipCodeGet - Listings by ZipCode
   *
   * See /listings2 endpoint for more flexible listing search.
   * Returns a dealer's listings over up to the last 45 days in the provided dealerhip's zip code. For example 92701.
   * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
   * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
  **/
  listingsByZipCodeListingsByZipCodeGet(
    req: operations.ListingsByZipCodeListingsByZipCodeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListingsByZipCodeListingsByZipCodeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListingsByZipCodeListingsByZipCodeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listingsByZipCode";
    
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
        const res: operations.ListingsByZipCodeListingsByZipCodeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listingResp = httpRes?.data;
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
   * vinDecodeVinDecodeGet - Vin decoder and Recall Info
   *
   * Decodes the provided North American vin and provides recall information if available. 
   * We require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive.
   * If passEmpty (default False) is True we will also include the empty fields in the response json. 
   * If includeRecall (default True) is True we will include recall data reported to the NHTSA. Set False for a faster response.
  **/
  vinDecodeVinDecodeGet(
    req: operations.VinDecodeVinDecodeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VinDecodeVinDecodeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VinDecodeVinDecodeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/vinDecode";
    
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
        const res: operations.VinDecodeVinDecodeGetResponse = {statusCode: httpRes.status, contentType: contentType};
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
