import { Authentication } from "./authentication";
import { History } from "./history";
import * as shared from "./models/shared";
import { Publishing } from "./publishing";
import { Push } from "./push";
import { Stats } from "./stats";
import { Status } from "./status";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://rest.ably.io"];
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
 * The [REST API specification](https://www.ably.io/documentation/rest-api) for Ably.
 */
export declare class SDK {
    authentication: Authentication;
    history: History;
    publishing: Publishing;
    push: Push;
    stats: Stats;
    status: Status;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
