import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A log represents a request made for a given consumer. Logs include requests made to unified APIs, connectors and the Vault API.
 */
export declare class Logs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all consumer request logs
     *
     * @remarks
     * This endpoint includes all consumer request logs.
     *
     */
    logsAll(req: operations.LogsAllRequest, security: operations.LogsAllSecurity, config?: AxiosRequestConfig): Promise<operations.LogsAllResponse>;
}
