import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Resource Owner data endpoints.
 */
export declare class ResourceOwners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a resource owner by ID
     *
     * @remarks
     * Retrieve a resource owner for the given `resourceOwnerId`.
     */
    getResourceOwner(req: operations.GetResourceOwnerRequest, security: operations.GetResourceOwnerSecurity, config?: AxiosRequestConfig): Promise<operations.GetResourceOwnerResponse>;
}
