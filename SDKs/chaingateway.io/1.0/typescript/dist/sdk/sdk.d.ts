import { AxiosInstance } from "axios";
import { AddressRequests } from "./addressrequests";
import { InfoRequests } from "./inforequests";
import { SubscriptionIpnRequests } from "./subscriptionipnrequests";
import { TransactionRequests } from "./transactionrequests";
export declare const ServerList: readonly ["https://eu.eth.chaingateway.io/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    addressRequests: AddressRequests;
    infoRequests: InfoRequests;
    subscriptionIPNRequests: SubscriptionIpnRequests;
    transactionRequests: TransactionRequests;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
