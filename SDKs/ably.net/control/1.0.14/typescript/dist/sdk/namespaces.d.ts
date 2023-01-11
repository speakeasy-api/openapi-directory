import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Namespaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAppsAppIdNamespacesNamespaceId - Deletes a namespace
     *
     * Deletes the namespace with the specified ID, for the specified application ID.
    **/
    deleteAppsAppIdNamespacesNamespaceId(req: operations.DeleteAppsAppIdNamespacesNamespaceIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdNamespacesNamespaceIdResponse>;
    /**
     * getAppsAppIdNamespaces - Lists namespaces
     *
     * List the namespaces for the specified application ID.
    **/
    getAppsAppIdNamespaces(req: operations.GetAppsAppIdNamespacesRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdNamespacesResponse>;
    /**
     * patchAppsAppIdNamespacesNamespaceId - Updates a namespace
     *
     * Updates the namespace with the specified ID, for the application with the specified application ID.
    **/
    patchAppsAppIdNamespacesNamespaceId(req: operations.PatchAppsAppIdNamespacesNamespaceIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsAppIdNamespacesNamespaceIdResponse>;
    /**
     * postAppsAppIdNamespaces - Creates a namespace
     *
     * Creates a namespace for the specified application ID.
    **/
    postAppsAppIdNamespaces(req: operations.PostAppsAppIdNamespacesRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdNamespacesResponse>;
}
