import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ConnectorResources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Connector Resource
     *
     * @remarks
     * Get Connector Resource
     */
    connectorResourcesOne(req: operations.ConnectorResourcesOneRequest, security: operations.ConnectorResourcesOneSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorResourcesOneResponse>;
}
