import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProductTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a list of global Product Types. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" field.
     */
    productTypesGet(config?: AxiosRequestConfig): Promise<operations.ProductTypesGetResponse>;
}
