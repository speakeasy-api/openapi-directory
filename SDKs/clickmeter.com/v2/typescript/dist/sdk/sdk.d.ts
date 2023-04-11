import { Account } from "./account";
import { Aggregated } from "./aggregated";
import { ClickStream } from "./clickstream";
import { Conversions } from "./conversions";
import { DataPoints } from "./datapoints";
import { Domains } from "./domains";
import { Groups } from "./groups";
import { Hits } from "./hits";
import { Me } from "./me";
import * as shared from "./models/shared";
import { Retargeting } from "./retargeting";
import { Tags } from "./tags";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://apiv2.clickmeter.com:80", "https://apiv2.clickmeter.com:80"];
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
 * Api dashboard for ClickMeter API
 */
export declare class SDK {
    account: Account;
    aggregated: Aggregated;
    clickStream: ClickStream;
    conversions: Conversions;
    dataPoints: DataPoints;
    domains: Domains;
    groups: Groups;
    hits: Hits;
    me: Me;
    retargeting: Retargeting;
    tags: Tags;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
