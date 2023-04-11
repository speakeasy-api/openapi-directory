import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Collection {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List collection listings
     *
     * @remarks
     * List collection listings
     */
    collectionListingsAll(req: operations.CollectionListingsAllRequest, config?: AxiosRequestConfig): Promise<operations.CollectionListingsAllResponse>;
    /**
     * List collections
     *
     * @remarks
     * List collections
     */
    collectionsAll(req: operations.CollectionsAllRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsAllResponse>;
    /**
     * Get collection
     *
     * @remarks
     * Get collection
     */
    collectionsOne(req: operations.CollectionsOneRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsOneResponse>;
}
