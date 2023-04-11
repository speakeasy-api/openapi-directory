import { Calls } from "./calls";
import { Campaigns } from "./campaigns";
import { Contacts } from "./contacts";
import { Keywords } from "./keywords";
import { Me } from "./me";
import { Media } from "./media";
import { Numbers } from "./numbers";
import { Orders } from "./orders";
import { Reports } from "./reports";
import { Texts } from "./texts";
import { Webhooks } from "./webhooks";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.callfire.com/v2"];
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
 * CallFire
 */
export declare class SDK {
    calls: Calls;
    campaigns: Campaigns;
    contacts: Contacts;
    keywords: Keywords;
    me: Me;
    media: Media;
    numbers: Numbers;
    orders: Orders;
    reports: Reports;
    texts: Texts;
    webhooks: Webhooks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
