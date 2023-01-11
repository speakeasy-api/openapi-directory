import { AxiosInstance } from "axios";
import { Payout } from "./payout";
import { SellerFundsSummary } from "./sellerfundssummary";
import { Transaction } from "./transaction";
import { Transfer } from "./transfer";
export declare const ServerList: readonly ["https://apiz.ebay.com{basePath}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    payout: Payout;
    sellerFundsSummary: SellerFundsSummary;
    transaction: Transaction;
    transfer: Transfer;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
