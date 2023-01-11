import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DealershipData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDealersGetDealersByIdGet - Premium. Dealers by ID
     *
     * Premium. Dealership information using the internal ID. Returns name, address, state, zipCode, and ID for a single dealer in the same format as the /getDealers endpoint.
     * Dealer IDs are generally retrieved via the /getDealers or /getDealersByRegion endpoints.
    **/
    getDealersGetDealersByIdGet(req: operations.GetDealersGetDealersByIdGetRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersGetDealersByIdGetResponse>;
    /**
     * getDealersGetDealersByRegionGet - Premium. Dealers in a region.
     *
     * Premium. Dealership information in a given region. Returns name, address, state, zipCode, and IDs. Results are paginated with up to 30 results per page.
    **/
    getDealersGetDealersByRegionGet(req: operations.GetDealersGetDealersByRegionGetRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersGetDealersByRegionGetResponse>;
    /**
     * getDealersGetDealersGet - Premium. Dealers in a zip code.
     *
     * Premium. Dealership information in a given zip code using the first 4 digits. Returns name, address, state, zipCode, and IDs.
     * For example a call with the zip code 92701 would return dealers with zip codes in the range [92700, 92709]
    **/
    getDealersGetDealersGet(req: operations.GetDealersGetDealersGetRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersGetDealersGetResponse>;
}
