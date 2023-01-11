import { AxiosInstance } from "axios";
import { RateLimit } from "./ratelimit";
import { UserRateLimit } from "./userratelimit";
export declare const ServerList: readonly ["https://api.ebay.com{basePath}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    rateLimit: RateLimit;
    userRateLimit: UserRateLimit;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
