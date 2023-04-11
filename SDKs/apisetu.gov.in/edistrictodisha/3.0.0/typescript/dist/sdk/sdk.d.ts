import { APIs } from "./apis";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://apisetu.gov.in/edistrictodisha/v3"];
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
 * eDistrict Odisha (http://edistrictodisha.gov.in/) is the online service delivery portal for Odisha State Govt. Certain documents issued by it (e.g. Income, Caste, Residence Certificates etc) are made available in citizens' DigiLocker accounts.
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
