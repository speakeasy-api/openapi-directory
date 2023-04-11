import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://eos.local", "https://{protocol}://{host}:{port}/v1/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * connect
     *
     * @remarks
     * Initiate a connection to a specified peer.
     */
    connect(req: operations.ConnectRequestBody, config?: AxiosRequestConfig): Promise<operations.ConnectResponse>;
    /**
     * connections
     *
     * @remarks
     * Returns an array of all peer connection statuses.
     */
    connections(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.ConnectionsResponse>;
    /**
     * disconnect
     *
     * @remarks
     * Initiate disconnection from a specified peer.
     */
    disconnect(req: operations.DisconnectRequestBody, config?: AxiosRequestConfig): Promise<operations.DisconnectResponse>;
    /**
     * status
     *
     * @remarks
     * Retrieves the connection status for a specified peer.
     */
    status(req: operations.StatusRequestBody, config?: AxiosRequestConfig): Promise<operations.StatusResponse>;
}
