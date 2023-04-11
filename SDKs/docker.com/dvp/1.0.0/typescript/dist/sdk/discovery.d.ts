import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Discovery {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get namespace
     *
     * @remarks
     * Gets metadata associated with specified namespace, including extra repos associated with the namespace
     */
    getNamespace(req: operations.GetNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNamespaceResponse>;
    /**
     * Get namespaces and repos
     *
     * @remarks
     * Gets a list of your namespaces and repos which have data available
     */
    getNamespaces(config?: AxiosRequestConfig): Promise<operations.GetNamespacesResponse>;
}
