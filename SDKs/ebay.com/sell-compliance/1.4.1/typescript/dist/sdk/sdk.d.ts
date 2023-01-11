import { AxiosInstance } from "axios";
import { ListingViolation } from "./listingviolation";
import { ListingViolationSummary } from "./listingviolationsummary";
export declare const ServerList: readonly ["https://api.ebay.com{basePath}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    listingViolation: ListingViolation;
    listingViolationSummary: ListingViolationSummary;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
