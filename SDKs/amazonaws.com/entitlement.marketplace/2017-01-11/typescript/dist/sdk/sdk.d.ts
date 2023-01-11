import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["http://entitlement.marketplace.{region}.amazonaws.com", "https://entitlement.marketplace.{region}.amazonaws.com", "http://entitlement.marketplace.{region}.amazonaws.com.cn", "https://entitlement.marketplace.{region}.amazonaws.com.cn"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * getEntitlements - GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
    **/
    getEntitlements(req: operations.GetEntitlementsRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitlementsResponse>;
}
