import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DriveGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * driveGroupsAdd - Create DriveGroup
     *
     * Create DriveGroup
    **/
    driveGroupsAdd(req: operations.DriveGroupsAddRequest, config?: AxiosRequestConfig): Promise<operations.DriveGroupsAddResponse>;
    /**
     * driveGroupsAll - List DriveGroups
     *
     * List DriveGroups
    **/
    driveGroupsAll(req: operations.DriveGroupsAllRequest, config?: AxiosRequestConfig): Promise<operations.DriveGroupsAllResponse>;
    /**
     * driveGroupsDelete - Delete DriveGroup
     *
     * Delete DriveGroup
    **/
    driveGroupsDelete(req: operations.DriveGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DriveGroupsDeleteResponse>;
    /**
     * driveGroupsOne - Get DriveGroup
     *
     * Get DriveGroup
    **/
    driveGroupsOne(req: operations.DriveGroupsOneRequest, config?: AxiosRequestConfig): Promise<operations.DriveGroupsOneResponse>;
    /**
     * driveGroupsUpdate - Update DriveGroup
     *
     * Update DriveGroup
    **/
    driveGroupsUpdate(req: operations.DriveGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DriveGroupsUpdateResponse>;
}
