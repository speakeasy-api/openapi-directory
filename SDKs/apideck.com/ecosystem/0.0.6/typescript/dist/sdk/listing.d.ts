import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Listing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List listings
     *
     * @remarks
     * List listings
     */
    listingsAll(req: operations.ListingsAllRequest, config?: AxiosRequestConfig): Promise<operations.ListingsAllResponse>;
    /**
     * Get listing
     *
     * @remarks
     * Get listing
     */
    listingsOne(req: operations.ListingsOneRequest, config?: AxiosRequestConfig): Promise<operations.ListingsOneResponse>;
}
