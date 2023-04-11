import { Account } from "./account";
import { App } from "./app";
import { Authorization } from "./authorization";
import { Bt } from "./bt";
import { Content } from "./content";
import { Ee } from "./ee";
import { Itv } from "./itv";
import { Profile } from "./profile";
import { Registration } from "./registration";
import { Support } from "./support";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["/api"];
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
 * An Orchestration Layer that takes ISL services and packages them in a more targeted way for front-end applications.
 *
 * @remarks
 * This in turn makes client integration easier and reduces the complexity and size of front-end applications.
 *
 * Rocket is also customisable - allowing UI engineers to ‘remix’ the existing back-end services into something that
 * best suits the application they are developing.
 *
 */
export declare class SDK {
    account: Account;
    app: App;
    authorization: Authorization;
    bt: Bt;
    content: Content;
    ee: Ee;
    itv: Itv;
    profile: Profile;
    registration: Registration;
    support: Support;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
