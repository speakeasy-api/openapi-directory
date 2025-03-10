import { Transactions } from "./transactions";
import { Transfers } from "./transfers";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://balanceplatform-api-test.adyen.com/btl/v2"];
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
 * The Transfers API provides endpoints that you can use to get information about all your transactions, move funds within your balance platform or send funds from your balance platform to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments).
 *
 * @remarks
 *
 * ## Authentication
 * Your Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * Alternatively, you can use the username and password to connect to the API using basic authentication. For example:
 *
 * ```
 * curl
 * -H "Content-Type: application/json" \
 * -U "ws@BalancePlatform.YOUR_BALANCE_PLATFORM":"YOUR_WS_PASSWORD" \
 * ...
 * ```
 * ## Roles and permissions
 * To use the Transfers API, you need an additional role for your API credential. Transfers must also be enabled for the source balance account. Your Adyen contact will set up the roles and permissions for you.
 * ## Versioning
 * The Transfers API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 * ```
 * https://balanceplatform-api-test.adyen.com/btl/v2/transfers
 * ```
 * ## Going live
 * When going live, your Adyen contact will provide your API credential for the live environment. You can then use the username and password to send requests to `https://balanceplatform-api-live.adyen.com/btl/v2`.
 *
 *
 */
export declare class SDK {
    transactions: Transactions;
    transfers: Transfers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
