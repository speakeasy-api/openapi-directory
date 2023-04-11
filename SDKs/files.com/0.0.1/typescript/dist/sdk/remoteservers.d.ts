import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about remote_servers
 */
export declare class RemoteServers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Remote Server
     *
     * @remarks
     * Delete Remote Server
     */
    deleteRemoteServersId(req: operations.DeleteRemoteServersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRemoteServersIdResponse>;
    /**
     * List Remote Servers
     *
     * @remarks
     * List Remote Servers
     */
    getRemoteServers(req: operations.GetRemoteServersRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoteServersResponse>;
    /**
     * Show Remote Server
     *
     * @remarks
     * Show Remote Server
     */
    getRemoteServersId(req: operations.GetRemoteServersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoteServersIdResponse>;
    /**
     * Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)
     *
     * @remarks
     * Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)
     */
    getRemoteServersIdConfigurationFile(req: operations.GetRemoteServersIdConfigurationFileRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoteServersIdConfigurationFileResponse>;
    /**
     * Update Remote Server
     *
     * @remarks
     * Update Remote Server
     */
    patchRemoteServersId(req: operations.PatchRemoteServersIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchRemoteServersIdResponse>;
    /**
     * Create Remote Server
     *
     * @remarks
     * Create Remote Server
     */
    postRemoteServers(req: operations.PostRemoteServersRequestBody, config?: AxiosRequestConfig): Promise<operations.PostRemoteServersResponse>;
    /**
     * Post local changes, check in, and download configuration file (used by some Remote Server integrations, such as the Files.com Agent)
     *
     * @remarks
     * Post local changes, check in, and download configuration file (used by some Remote Server integrations, such as the Files.com Agent)
     */
    postRemoteServersIdConfigurationFile(req: operations.PostRemoteServersIdConfigurationFileRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoteServersIdConfigurationFileResponse>;
}
