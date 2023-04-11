import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Metadata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get schema
     *
     * @remarks
     * Get schema
     */
    getSchema(config?: AxiosRequestConfig): Promise<operations.GetSchemaResponse>;
    /**
     * Get status
     *
     * @remarks
     * Get the current iPlayer business layer status. This tells the caller the status of the iPlayer data, but not necessarily the overall status of the website. In the future it might include the status of the dependent data services within the BBC.
     */
    getStatus(config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
}
