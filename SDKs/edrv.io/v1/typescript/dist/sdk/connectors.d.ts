import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Connectors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a connector
     */
    deleteConnector(req: operations.DeleteConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectorResponse>;
    /**
     * Get a connector
     */
    getConnector(req: operations.GetConnectorRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorResponse>;
    /**
     * List connectors
     */
    getConnectors(req: operations.GetConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsResponse>;
    /**
     * Update a connector's data
     */
    patchConnector(req: operations.PatchConnectorRequest, config?: AxiosRequestConfig): Promise<operations.PatchConnectorResponse>;
    /**
     * Create a new connector
     */
    postConnectors(req: operations.PostConnectorsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostConnectorsResponse>;
}
