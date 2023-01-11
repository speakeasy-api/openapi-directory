import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Connectors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteConnector - Delete a connector
    **/
    deleteConnector(req: operations.DeleteConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectorResponse>;
    /**
     * getConnector - Get a connector
    **/
    getConnector(req: operations.GetConnectorRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorResponse>;
    /**
     * getConnectors - List connectors
    **/
    getConnectors(req: operations.GetConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsResponse>;
    /**
     * patchConnector - Update a connector's data
    **/
    patchConnector(req: operations.PatchConnectorRequest, config?: AxiosRequestConfig): Promise<operations.PatchConnectorResponse>;
    /**
     * postConnectors - Create a new connector
    **/
    postConnectors(req: operations.PostConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.PostConnectorsResponse>;
}
