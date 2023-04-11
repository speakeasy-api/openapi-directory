import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Manage your API Applications and Webhooks
 */
export declare class Api {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a new API Application
     *
     * @remarks
     * Create a new API Application with specified permissions
     */
    createApiApplication(req: operations.CreateApiApplicationNewApiApplication, config?: AxiosRequestConfig): Promise<operations.CreateApiApplicationResponse>;
}
