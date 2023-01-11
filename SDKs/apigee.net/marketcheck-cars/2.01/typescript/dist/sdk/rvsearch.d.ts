import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RvSearch {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getListingRvId - RV listing by id
     *
     * Get a particular RV listing by its id
    **/
    getListingRvId(req: operations.GetListingRvIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListingRvIdResponse>;
    /**
     * getListingRvIdExtra - Long text RV Listings attributes for Listing with the given id
     *
     * Get RV listing options, features, seller comments
    **/
    getListingRvIdExtra(req: operations.GetListingRvIdExtraRequest, config?: AxiosRequestConfig): Promise<operations.GetListingRvIdExtraResponse>;
    /**
     * getListingRvIdMedia - Listing media by id
     *
     * Get listing media (photo, photos) by id
    **/
    getListingRvIdMedia(req: operations.GetListingRvIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetListingRvIdMediaResponse>;
    /**
     * getSearchRvActive - Gets active RV listings for the given search criteria
     *
     * This endpoint provides search on RV inventory. This API produces a list of currently active RV from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.
     *  The search API facilitates the following use cases -
     * 1. Search RV around a given geo-point within a given radius
     * 2. Search RV for a specific year / make / model or combination of these
     * 3. Search RV matching multiple year, make, model combinatins in the same search request
     * 4. Filter results by most RV specification attributes
     * 5. Filter RV within a given price / miles range
     * 6. Specify a sort order for the results on price / miles / listed date
     * 7. Search RV for a given City / State combination
     * 8. Get Facets to build the search drill downs
     * 9. Get Market averages for price/miles for your search
    **/
    getSearchRvActive(req: operations.GetSearchRvActiveRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchRvActiveResponse>;
    /**
     * getSearchRvAutoComplete - API for auto-completion of inputs
     *
     * Auto-complete the inputs of your end users
    **/
    getSearchRvAutoComplete(req: operations.GetSearchRvAutoCompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchRvAutoCompleteResponse>;
}
