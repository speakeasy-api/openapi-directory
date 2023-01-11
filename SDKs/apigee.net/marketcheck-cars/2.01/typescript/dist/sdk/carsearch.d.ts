import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CarSearch {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * autoComplete - API for auto-completion of inputs
     *
     * Auto-complete the inputs of your end users
    **/
    autoComplete(req: operations.AutoCompleteRequest, config?: AxiosRequestConfig): Promise<operations.AutoCompleteResponse>;
    /**
     * getListing - Listing by id
     *
     * Get a particular dealer listing by its id
    **/
    getListing(req: operations.GetListingRequest, config?: AxiosRequestConfig): Promise<operations.GetListingResponse>;
    /**
     * getCarDealerInventoryActive - Get dealers active inventory
     *
     * Get dealers active inventory
    **/
    getCarDealerInventoryActive(req: operations.GetCarDealerInventoryActiveRequest, config?: AxiosRequestConfig): Promise<operations.GetCarDealerInventoryActiveResponse>;
    /**
     * getListingCarAuctionId - Listing by id
     *
     * Get a particular auction listing by its id
    **/
    getListingCarAuctionId(req: operations.GetListingCarAuctionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarAuctionIdResponse>;
    /**
     * getListingCarAuctionIdExtra - Long text Listings attributes for Listing with the given id
     *
     * Get listing options, features, seller comments
    **/
    getListingCarAuctionIdExtra(req: operations.GetListingCarAuctionIdExtraRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarAuctionIdExtraResponse>;
    /**
     * getListingCarAuctionIdMedia - Listing media by id
     *
     * Get listing media (photo, photos) by id
    **/
    getListingCarAuctionIdMedia(req: operations.GetListingCarAuctionIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarAuctionIdMediaResponse>;
    /**
     * getListingCarFsboId - Listing by id
     *
     * Get a particular private party listing by its id
    **/
    getListingCarFsboId(req: operations.GetListingCarFsboIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarFsboIdResponse>;
    /**
     * getListingCarFsboIdExtra - Long text Listings attributes for Listing with the given id
     *
     * Get listing options, features, seller comments
    **/
    getListingCarFsboIdExtra(req: operations.GetListingCarFsboIdExtraRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarFsboIdExtraResponse>;
    /**
     * getListingCarFsboIdMedia - Listing media by id
     *
     * Get listing media (photo, photos) by id
    **/
    getListingCarFsboIdMedia(req: operations.GetListingCarFsboIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarFsboIdMediaResponse>;
    /**
     * getListingCarIdExtra - Long text Listings attributes for Listing with the given id
     *
     * Get listing options, features, seller comments
    **/
    getListingCarIdExtra(req: operations.GetListingCarIdExtraRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarIdExtraResponse>;
    /**
     * getListingCarIdMedia - Listing media by id
     *
     * Get listing media (photo, photos) by id
    **/
    getListingCarIdMedia(req: operations.GetListingCarIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetListingCarIdMediaResponse>;
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
    getSearchCarAuctionActive(req: operations.GetSearchCarAuctionActiveRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchCarAuctionActiveResponse>;
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
    getSearchCarFsboActive(req: operations.GetSearchCarFsboActiveRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchCarFsboActiveResponse>;
    /**
     * getSearchCarRecents - Gets Recent car listings for the given search criteria
     *
     * This API produces a list of recently active (past 90 days) cars from the market for the given search criteria
    **/
    getSearchCarRecents(req: operations.GetSearchCarRecentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchCarRecentsResponse>;
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
    search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
}
