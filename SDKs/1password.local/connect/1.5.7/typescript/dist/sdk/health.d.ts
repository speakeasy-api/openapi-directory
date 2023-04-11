import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Health {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Ping the server for liveness
     */
    getHeartbeat(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.GetHeartbeatResponse>;
    /**
     * Get state of the server and its dependencies.
     */
    getServerHealth(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.GetServerHealthResponse>;
}
