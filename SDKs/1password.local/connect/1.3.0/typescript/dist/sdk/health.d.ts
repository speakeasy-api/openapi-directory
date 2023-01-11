import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Health {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getHeartbeat - Ping the server for liveness
    **/
    getHeartbeat(req: operations.GetHeartbeatRequest, config?: AxiosRequestConfig): Promise<operations.GetHeartbeatResponse>;
    /**
     * getServerHealth - Get state of the server and its dependencies.
    **/
    getServerHealth(req: operations.GetServerHealthRequest, config?: AxiosRequestConfig): Promise<operations.GetServerHealthResponse>;
}
