import { AxiosInstance } from "axios";
import { CustomerServiceMetric } from "./customerservicemetric";
import { SellerStandardsProfile } from "./sellerstandardsprofile";
import { TrafficReport } from "./trafficreport";
export declare const ServerList: readonly ["https://api.ebay.com{basePath}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    customerServiceMetric: CustomerServiceMetric;
    sellerStandardsProfile: SellerStandardsProfile;
    trafficReport: TrafficReport;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
