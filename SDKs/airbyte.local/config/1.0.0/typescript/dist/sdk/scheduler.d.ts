import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Scheduler {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Run check connection for a given destination configuration
     */
    executeDestinationCheckConnection(req: shared.DestinationCoreConfig, config?: AxiosRequestConfig): Promise<operations.ExecuteDestinationCheckConnectionResponse>;
    /**
     * Run check connection for a given source configuration
     */
    executeSourceCheckConnection(req: shared.SourceCoreConfig, config?: AxiosRequestConfig): Promise<operations.ExecuteSourceCheckConnectionResponse>;
    /**
     * Run discover schema for a given source a source configuration
     */
    executeSourceDiscoverSchema(req: shared.SourceCoreConfig, config?: AxiosRequestConfig): Promise<operations.ExecuteSourceDiscoverSchemaResponse>;
}
