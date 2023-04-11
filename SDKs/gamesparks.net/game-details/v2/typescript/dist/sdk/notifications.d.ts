import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Log Summary Restv 2 Controller
 */
export declare class Notifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGameSummary
     */
    getGameSummaryUsingGET(req: operations.GETGameSummaryUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGameSummaryUsingGETResponse>;
}
