import { Amz } from "./amz";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.axesso.de"];
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
 * Use this api to fetch information to Amazon products and more.
 *
 * @see {@link http://api-doc.axesso.de/} - Find out more about Swagger
 */
export declare class SDK {
    /**
     * APIs for request on Amazon
     *
     * @see {@link http://api.axesso.de/} - Find out more
     */
    amz: Amz;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
