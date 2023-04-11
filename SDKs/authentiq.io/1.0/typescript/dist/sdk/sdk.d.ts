import { Authentication } from "./authentication";
import { ClientManagement } from "./clientmanagement";
import { SessionManagement } from "./sessionmanagement";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://connect.authentiq.io"];
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
 * Authentiq Connect OAuth 2.0 and OpenID Connect API reference.
 *
 * @remarks
 * Learn about [Authentiq ID](https://www.authentiq.com/) or check out the [Authentiq Connect](https://developers.authentiq.com) developer documentation.
 *
 *
 * @see {@link https://developers.authentiq.com/} - Authentiq Developer Docs
 */
export declare class SDK {
    authentication: Authentication;
    clientManagement: ClientManagement;
    sessionManagement: SessionManagement;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
