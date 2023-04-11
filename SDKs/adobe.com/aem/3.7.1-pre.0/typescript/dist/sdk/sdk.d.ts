import { Console } from "./console";
import { Cq } from "./cq";
import { Crx } from "./crx";
import { Custom } from "./custom";
import { Granite } from "./granite";
import * as shared from "./models/shared";
import { Sling } from "./sling";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["/", "http://adobe.local"];
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
 * Swagger AEM is an OpenAPI specification for Adobe Experience Manager (AEM) API
 */
export declare class SDK {
    console: Console;
    cq: Cq;
    crx: Crx;
    custom: Custom;
    granite: Granite;
    sling: Sling;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
