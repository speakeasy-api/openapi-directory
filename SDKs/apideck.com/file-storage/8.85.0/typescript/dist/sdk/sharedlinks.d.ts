import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SharedLinks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sharedLinksAdd - Create Shared Link
     *
     * Create Shared Link
    **/
    sharedLinksAdd(req: operations.SharedLinksAddRequest, config?: AxiosRequestConfig): Promise<operations.SharedLinksAddResponse>;
    /**
     * sharedLinksAll - List SharedLinks
     *
     * List SharedLinks
    **/
    sharedLinksAll(req: operations.SharedLinksAllRequest, config?: AxiosRequestConfig): Promise<operations.SharedLinksAllResponseOutput>;
    /**
     * sharedLinksDelete - Delete Shared Link
     *
     * Delete Shared Link
    **/
    sharedLinksDelete(req: operations.SharedLinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SharedLinksDeleteResponse>;
    /**
     * sharedLinksOne - Get Shared Link
     *
     * Get Shared Link
    **/
    sharedLinksOne(req: operations.SharedLinksOneRequest, config?: AxiosRequestConfig): Promise<operations.SharedLinksOneResponseOutput>;
    /**
     * sharedLinksUpdate - Update Shared Link
     *
     * Update Shared Link
    **/
    sharedLinksUpdate(req: operations.SharedLinksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SharedLinksUpdateResponse>;
}
