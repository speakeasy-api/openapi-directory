import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Drive Groups resource represents the groups of drives in the cloud storage service. It provides methods for managing and accessing the drive groups, such as creating, deleting, and listing drive groups. A drive group is a logical grouping of drives, which can be used to manage the drives in the cloud storage service.
 */
export declare class DriveGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create DriveGroup
     *
     * @remarks
     * Create DriveGroup
     */
    driveGroupsAdd(req: operations.DriveGroupsAddRequest, security: operations.DriveGroupsAddSecurity, config?: AxiosRequestConfig): Promise<operations.DriveGroupsAddResponse>;
    /**
     * List DriveGroups
     *
     * @remarks
     * List DriveGroups
     */
    driveGroupsAll(req: operations.DriveGroupsAllRequest, security: operations.DriveGroupsAllSecurity, config?: AxiosRequestConfig): Promise<operations.DriveGroupsAllResponse>;
    /**
     * Delete DriveGroup
     *
     * @remarks
     * Delete DriveGroup
     */
    driveGroupsDelete(req: operations.DriveGroupsDeleteRequest, security: operations.DriveGroupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DriveGroupsDeleteResponse>;
    /**
     * Get DriveGroup
     *
     * @remarks
     * Get DriveGroup
     */
    driveGroupsOne(req: operations.DriveGroupsOneRequest, security: operations.DriveGroupsOneSecurity, config?: AxiosRequestConfig): Promise<operations.DriveGroupsOneResponse>;
    /**
     * Update DriveGroup
     *
     * @remarks
     * Update DriveGroup
     */
    driveGroupsUpdate(req: operations.DriveGroupsUpdateRequest, security: operations.DriveGroupsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DriveGroupsUpdateResponse>;
}
