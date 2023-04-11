import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about requests
 */
export declare class Requests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Request
     *
     * @remarks
     * Delete Request
     */
    deleteRequestsId(req: operations.DeleteRequestsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRequestsIdResponse>;
    /**
     * List Requests
     *
     * @remarks
     * List Requests
     */
    getRequests(req: operations.GetRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestsResponse>;
    /**
     * List Requests
     *
     * @remarks
     * List Requests
     */
    getRequestsFoldersPath(req: operations.GetRequestsFoldersPathRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestsFoldersPathResponse>;
    /**
     * Create Request
     *
     * @remarks
     * Create Request
     */
    postRequests(req: operations.PostRequestsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostRequestsResponse>;
}
