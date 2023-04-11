import { LendingRequests } from "./lendingrequests";
import * as shared from "./models/shared";
import { Printouts } from "./printouts";
import { RequestedResources } from "./requestedresources";
import { Test } from "./test";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api-eu.hosted.exlibrisgroup.com", "https://api-na.hosted.exlibrisgroup.com", "https://api-ap.hosted.exlibrisgroup.com", "https://api-cn.hosted.exlibrisgroup.com", "https://api-ca.hosted.exlibrisgroup.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * For more information on how to use these APIs, including how to create an API key required for authentication, see [Alma REST APIs](https://developers.exlibrisgroup.com/alma/apis).
 *
 * @see {@link https://developers.exlibrisgroup.com/alma/apis/} - Detailed documentation on these APIs at the Ex Libris Developer Network.
 */
export declare class SDK {
    lendingRequests: LendingRequests;
    printouts: Printouts;
    requestedResources: RequestedResources;
    test: Test;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
