import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Scheduler {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * executeDestinationCheckConnection - Run check connection for a given destination configuration
    **/
    executeDestinationCheckConnection(req: operations.ExecuteDestinationCheckConnectionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteDestinationCheckConnectionResponse>;
    /**
     * executeSourceCheckConnection - Run check connection for a given source configuration
    **/
    executeSourceCheckConnection(req: operations.ExecuteSourceCheckConnectionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteSourceCheckConnectionResponse>;
    /**
     * executeSourceDiscoverSchema - Run discover schema for a given source a source configuration
    **/
    executeSourceDiscoverSchema(req: operations.ExecuteSourceDiscoverSchemaRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteSourceDiscoverSchemaResponse>;
}
