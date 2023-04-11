import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about user_requests
 */
export declare class UserRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete User Request
     *
     * @remarks
     * Delete User Request
     */
    deleteUserRequestsId(req: operations.DeleteUserRequestsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserRequestsIdResponse>;
    /**
     * List User Requests
     *
     * @remarks
     * List User Requests
     */
    getUserRequests(req: operations.GetUserRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserRequestsResponse>;
    /**
     * Show User Request
     *
     * @remarks
     * Show User Request
     */
    getUserRequestsId(req: operations.GetUserRequestsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserRequestsIdResponse>;
    /**
     * Create User Request
     *
     * @remarks
     * Create User Request
     */
    postUserRequests(req: operations.PostUserRequestsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostUserRequestsResponse>;
}
