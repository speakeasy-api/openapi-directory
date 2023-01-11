import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class HeavyEquipmentSearch {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getListingHeavyEquipmentId - Heavy equipment listing by id
     *
     * Get a particular Heavy equipment listing by its id
    **/
    getListingHeavyEquipmentId(req: operations.GetListingHeavyEquipmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListingHeavyEquipmentIdResponse>;
    /**
     * getListingHeavyEquipmentIdExtra - Long text Heavy equipment Listings attributes for Listing with the given id
     *
     * Get Heavy equipment listing options, features, seller comments
    **/
    getListingHeavyEquipmentIdExtra(req: operations.GetListingHeavyEquipmentIdExtraRequest, config?: AxiosRequestConfig): Promise<operations.GetListingHeavyEquipmentIdExtraResponse>;
    /**
     * getListingHeavyEquipmentIdMedia - Listing media by id
     *
     * Get listing media (photo, photos) by id
    **/
    getListingHeavyEquipmentIdMedia(req: operations.GetListingHeavyEquipmentIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetListingHeavyEquipmentIdMediaResponse>;
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
    getSearchHeavyEquipmentActive(req: operations.GetSearchHeavyEquipmentActiveRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchHeavyEquipmentActiveResponse>;
    /**
     * getSearchHeavyEquipmentAutoComplete - API for auto-completion of inputs
     *
     * Auto-complete the inputs of your end users
    **/
    getSearchHeavyEquipmentAutoComplete(req: operations.GetSearchHeavyEquipmentAutoCompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchHeavyEquipmentAutoCompleteResponse>;
}
