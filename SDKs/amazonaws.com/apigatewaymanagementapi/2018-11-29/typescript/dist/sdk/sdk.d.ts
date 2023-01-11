import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["http://execute-api.{region}.amazonaws.com", "https://execute-api.{region}.amazonaws.com", "http://execute-api.{region}.amazonaws.com.cn", "https://execute-api.{region}.amazonaws.com.cn"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * deleteConnection - Delete the connection with the provided id.
    **/
    deleteConnection(req: operations.DeleteConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionResponse>;
    /**
     * getConnection - Get information about the connection with the provided id.
    **/
    getConnection(req: operations.GetConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionResponse>;
    /**
     * postToConnection - Sends the provided data to the specified connection.
    **/
    postToConnection(req: operations.PostToConnectionRequest, config?: AxiosRequestConfig): Promise<operations.PostToConnectionResponse>;
}
