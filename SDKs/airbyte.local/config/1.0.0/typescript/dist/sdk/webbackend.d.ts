import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WebBackend {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * webBackendCreateConnection - Create a connection
    **/
    webBackendCreateConnection(req: operations.WebBackendCreateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendCreateConnectionResponse>;
    /**
     * webBackendGetConnection - Get a connection
    **/
    webBackendGetConnection(req: operations.WebBackendGetConnectionRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendGetConnectionResponse>;
    /**
     * webBackendListConnectionsForWorkspace - Returns all connections for a workspace.
    **/
    webBackendListConnectionsForWorkspace(req: operations.WebBackendListConnectionsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendListConnectionsForWorkspaceResponse>;
    /**
     * webBackendRecreateDestination - Recreate a destination
    **/
    webBackendRecreateDestination(req: operations.WebBackendRecreateDestinationRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendRecreateDestinationResponse>;
    /**
     * webBackendRecreateSource - Recreate a source
    **/
    webBackendRecreateSource(req: operations.WebBackendRecreateSourceRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendRecreateSourceResponse>;
    /**
     * webBackendUpdateConnection - Update a connection
    **/
    webBackendUpdateConnection(req: operations.WebBackendUpdateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendUpdateConnectionResponse>;
}
