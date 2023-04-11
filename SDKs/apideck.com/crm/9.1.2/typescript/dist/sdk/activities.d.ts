import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Activities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create activity
     *
     * @remarks
     * Create activity
     */
    activitiesAdd(req: operations.ActivitiesAddRequest, security: operations.ActivitiesAddSecurity, config?: AxiosRequestConfig): Promise<operations.ActivitiesAddResponse>;
    /**
     * List activities
     *
     * @remarks
     * List activities
     */
    activitiesAll(req: operations.ActivitiesAllRequest, security: operations.ActivitiesAllSecurity, config?: AxiosRequestConfig): Promise<operations.ActivitiesAllResponse>;
    /**
     * Delete activity
     *
     * @remarks
     * Delete activity
     */
    activitiesDelete(req: operations.ActivitiesDeleteRequest, security: operations.ActivitiesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ActivitiesDeleteResponse>;
    /**
     * Get activity
     *
     * @remarks
     * Get activity
     */
    activitiesOne(req: operations.ActivitiesOneRequest, security: operations.ActivitiesOneSecurity, config?: AxiosRequestConfig): Promise<operations.ActivitiesOneResponse>;
    /**
     * Update activity
     *
     * @remarks
     * Update activity
     */
    activitiesUpdate(req: operations.ActivitiesUpdateRequest, security: operations.ActivitiesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ActivitiesUpdateResponse>;
}
