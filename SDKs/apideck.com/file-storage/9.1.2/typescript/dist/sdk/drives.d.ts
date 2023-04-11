import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Drives resource represents logical containers for storing folders and files in the cloud storage service. It provides methods for managing and accessing the drives, such as creating, deleting, and listing drives.
 */
export declare class Drives {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Drive
     *
     * @remarks
     * Create Drive
     */
    drivesAdd(req: operations.DrivesAddRequest, security: operations.DrivesAddSecurity, config?: AxiosRequestConfig): Promise<operations.DrivesAddResponse>;
    /**
     * List Drives
     *
     * @remarks
     * List Drives
     */
    drivesAll(req: operations.DrivesAllRequest, security: operations.DrivesAllSecurity, config?: AxiosRequestConfig): Promise<operations.DrivesAllResponse>;
    /**
     * Delete Drive
     *
     * @remarks
     * Delete Drive
     */
    drivesDelete(req: operations.DrivesDeleteRequest, security: operations.DrivesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DrivesDeleteResponse>;
    /**
     * Get Drive
     *
     * @remarks
     * Get Drive
     */
    drivesOne(req: operations.DrivesOneRequest, security: operations.DrivesOneSecurity, config?: AxiosRequestConfig): Promise<operations.DrivesOneResponse>;
    /**
     * Update Drive
     *
     * @remarks
     * Update Drive
     */
    drivesUpdate(req: operations.DrivesUpdateRequest, security: operations.DrivesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DrivesUpdateResponse>;
}
