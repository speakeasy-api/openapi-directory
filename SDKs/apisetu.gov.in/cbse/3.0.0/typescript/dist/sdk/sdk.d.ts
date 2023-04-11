import { APIs } from "./apis";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://apisetu.gov.in/cbse/v3"];
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
 * CBSE (http://www.cbse.nic.in/) is issuing marksheets, passing certificates, migration certificates etc. through DigiLocker. These are either pushed, or can be pulled by students into their DigiLocker accounts. Currently available - 2004 - 2020 [Class XII], 2004 - 2020 [Class X], 2017 (NEET Rank Letter & Marksheet), 2016 (NEET Rank Letter), 2018 December (CTET Eligibility Certificate & Marksheet).
 */
export declare class SDK {
    apIs: APIs;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
