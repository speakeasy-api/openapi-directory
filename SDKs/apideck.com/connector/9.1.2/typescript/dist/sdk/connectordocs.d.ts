import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ConnectorDocs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Connector Doc content
     *
     * @remarks
     * Get Connector Doc content
     */
    connectorDocsOne(req: operations.ConnectorDocsOneRequest, security: operations.ConnectorDocsOneSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorDocsOneResponse>;
}
