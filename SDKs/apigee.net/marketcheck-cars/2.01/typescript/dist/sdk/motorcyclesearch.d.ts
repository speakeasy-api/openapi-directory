import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MotorcycleSearch {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getListingMotorcycleId - Motorcycle listing by id
     *
     * Get a particular Motorcycle listing by its id
    **/
    getListingMotorcycleId(req: operations.GetListingMotorcycleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListingMotorcycleIdResponse>;
    /**
     * getListingMotorcycleIdExtra - Long text Motorcycle Listings attributes for Listing with the given id
     *
     * Get Motorcycle listing options, features, seller comments
    **/
    getListingMotorcycleIdExtra(req: operations.GetListingMotorcycleIdExtraRequest, config?: AxiosRequestConfig): Promise<operations.GetListingMotorcycleIdExtraResponse>;
    /**
     * getListingMotorcycleIdMedia - Motorcycle listing media by id
     *
     * Get Motorcycle listing media (photo, photos) by id
    **/
    getListingMotorcycleIdMedia(req: operations.GetListingMotorcycleIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetListingMotorcycleIdMediaResponse>;
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
    getSearchMotorcycleActive(req: operations.GetSearchMotorcycleActiveRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchMotorcycleActiveResponse>;
    /**
     * getSearchMotorcycleAutoComplete - API for auto-completion of inputs
     *
     * Auto-complete the inputs of your end users
    **/
    getSearchMotorcycleAutoComplete(req: operations.GetSearchMotorcycleAutoCompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchMotorcycleAutoCompleteResponse>;
}
