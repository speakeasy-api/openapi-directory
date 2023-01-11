import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { LendingRequests } from "./lendingrequests";
import { Printouts } from "./printouts";
import { RequestedResources } from "./requestedresources";
import { Test } from "./test";
export declare const ServerList: readonly ["https://api-eu.hosted.exlibrisgroup.com", "https://api-na.hosted.exlibrisgroup.com", "https://api-ap.hosted.exlibrisgroup.com", "https://api-cn.hosted.exlibrisgroup.com", "https://api-ca.hosted.exlibrisgroup.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
