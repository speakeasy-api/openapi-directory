import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TimeOffRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Time Off Request
     *
     * @remarks
     * Create Time Off Request
     */
    timeOffRequestsAdd(req: operations.TimeOffRequestsAddRequest, security: operations.TimeOffRequestsAddSecurity, config?: AxiosRequestConfig): Promise<operations.TimeOffRequestsAddResponse>;
    /**
     * List Time Off Requests
     *
     * @remarks
     * List Time Off Requests
     */
    timeOffRequestsAll(req: operations.TimeOffRequestsAllRequest, security: operations.TimeOffRequestsAllSecurity, config?: AxiosRequestConfig): Promise<operations.TimeOffRequestsAllResponse>;
    /**
     * Delete Time Off Request
     *
     * @remarks
     * Delete Time Off Request
     */
    timeOffRequestsDelete(req: operations.TimeOffRequestsDeleteRequest, security: operations.TimeOffRequestsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TimeOffRequestsDeleteResponse>;
    /**
     * Get Time Off Request
     *
     * @remarks
     * Get Time Off Request
     */
    timeOffRequestsOne(req: operations.TimeOffRequestsOneRequest, security: operations.TimeOffRequestsOneSecurity, config?: AxiosRequestConfig): Promise<operations.TimeOffRequestsOneResponse>;
    /**
     * Update Time Off Request
     *
     * @remarks
     * Update Time Off Request
     */
    timeOffRequestsUpdate(req: operations.TimeOffRequestsUpdateRequest, security: operations.TimeOffRequestsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TimeOffRequestsUpdateResponse>;
}
