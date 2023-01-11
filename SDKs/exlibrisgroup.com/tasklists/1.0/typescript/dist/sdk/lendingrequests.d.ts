import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LendingRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAlmawsV1TaskListsRsLendingRequests - Get Lending Requests
     *
     * This API returns a list of lending requests in Alma
    **/
    getAlmawsV1TaskListsRsLendingRequests(req: operations.GetAlmawsV1TaskListsRsLendingRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetAlmawsV1TaskListsRsLendingRequestsResponse>;
    /**
     * postAlmawsV1TaskListsRsLendingRequests - Act on Lending Requests
     *
     * This API preforms the requested action on a list (specified by given filters) of lending requests in Alma
    **/
    postAlmawsV1TaskListsRsLendingRequests(req: operations.PostAlmawsV1TaskListsRsLendingRequestsRequest, config?: AxiosRequestConfig): Promise<operations.PostAlmawsV1TaskListsRsLendingRequestsResponse>;
}
