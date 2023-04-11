import { AddressRequests } from "./addressrequests";
import { InfoRequests } from "./inforequests";
import { SubscriptionIPNRequests } from "./subscriptionipnrequests";
import { TransactionRequests } from "./transactionrequests";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://eu.eth.chaingateway.io/v1"];
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
 * # Chaingateway.io
 *
 * @remarks
 *
 * REST API to build the bridge between Ethereum and the real world
 *
 * Please check out our [website](https://chaingateway.io?utm_source=postman) for detailed information about this API.
 *
 * To use our API, you need an API Key (Described as Authorization header in the examples below).
 * To get one, please create an account on our [website](https://chaingateway.io/register?utm_source=postman).
 *
 * For our internal documentation, please check out our [Docs Site](https://chaingateway.io/docs?utm_source=postman).
 *
 * If you need help with integrating our API in your application, you can reach us via [email](mailto:support@chaingateway.io) or join our official [Telegram](https://t.me/chaingateway) group.
 */
export declare class SDK {
    /**
     * Requests to create, list and delete addresses
     */
    addressRequests: AddressRequests;
    /**
     * Requests that return information on balances, transactions, gas price, exchange rates, ...
     */
    infoRequests: InfoRequests;
    /**
     * Requests for creating, deleting and listing existing subscriptions
     */
    subscriptionIPNRequests: SubscriptionIPNRequests;
    /**
     * Requests to send Tokens, Ethereum and clear addresses
     */
    transactionRequests: TransactionRequests;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
