import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://arespass.net/v1.0"];
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
/**
 * Analyzes a password and calculates its entropy.
 */
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
     * Metadata about this API&#58; version number, release date and available languages.
     *
     * Metadata requests are NOT billed.
     *
     */
    getAbout(req: operations.GetAboutRequest, config?: AxiosRequestConfig): Promise<operations.GetAboutResponse>;
    /**
     * The entropy calculator - alias ec -, analyzes a password and calculates its entropy.
     *
     * Entropy calculator requests are billed.
     *
     */
    getEc(req: operations.GetEcRequest, config?: AxiosRequestConfig): Promise<operations.GetEcResponse>;
}
