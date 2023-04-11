import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Shared links resource represents the links to files and folders in the cloud storage service that have been shared with other users. It provides methods for managing and accessing the shared links, such as creating, deleting, and listing shared links. A shared link allows other users to access the file or folder that it points to, either by viewing it online or by downloading it.
 */
export declare class SharedLinks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Shared Link
     *
     * @remarks
     * Create Shared Link
     */
    sharedLinksAdd(req: operations.SharedLinksAddRequest, security: operations.SharedLinksAddSecurity, config?: AxiosRequestConfig): Promise<operations.SharedLinksAddResponse>;
    /**
     * List SharedLinks
     *
     * @remarks
     * List SharedLinks
     */
    sharedLinksAll(req: operations.SharedLinksAllRequest, security: operations.SharedLinksAllSecurity, config?: AxiosRequestConfig): Promise<operations.SharedLinksAllResponse>;
    /**
     * Delete Shared Link
     *
     * @remarks
     * Delete Shared Link
     */
    sharedLinksDelete(req: operations.SharedLinksDeleteRequest, security: operations.SharedLinksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SharedLinksDeleteResponse>;
    /**
     * Get Shared Link
     *
     * @remarks
     * Get Shared Link
     */
    sharedLinksOne(req: operations.SharedLinksOneRequest, security: operations.SharedLinksOneSecurity, config?: AxiosRequestConfig): Promise<operations.SharedLinksOneResponse>;
    /**
     * Update Shared Link
     *
     * @remarks
     * Update Shared Link
     */
    sharedLinksUpdate(req: operations.SharedLinksUpdateRequest, security: operations.SharedLinksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.SharedLinksUpdateResponse>;
}
