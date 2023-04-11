import { Account } from "./account";
import { Alerting } from "./alerting";
import { Analytics } from "./analytics";
import { Billing } from "./billing";
import { Build } from "./build";
import { Codepush } from "./codepush";
import { Crash } from "./crash";
import { Distribute } from "./distribute";
import { Errors } from "./errors";
import { Export } from "./export";
import { Gdpr } from "./gdpr";
import { Test } from "./test";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.appcenter.ms"];
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
 * Microsoft Visual Studio App Center API
 */
export declare class SDK {
    account: Account;
    alerting: Alerting;
    analytics: Analytics;
    billing: Billing;
    build: Build;
    codepush: Codepush;
    crash: Crash;
    distribute: Distribute;
    errors: Errors;
    export: Export;
    gdpr: Gdpr;
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
