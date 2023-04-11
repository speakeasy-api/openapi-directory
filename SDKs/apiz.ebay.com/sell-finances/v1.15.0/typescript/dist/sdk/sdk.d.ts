import { Payout } from "./payout";
import { SellerFundsSummary } from "./sellerfundssummary";
import { Transaction } from "./transaction";
import { Transfer } from "./transfer";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://apiz.ebay.com{basePath}"];
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
 * This API is used to retrieve seller payouts and monetary transaction details related to those payouts.
 */
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
    private _globals;
    constructor(props?: SDKProps);
}
