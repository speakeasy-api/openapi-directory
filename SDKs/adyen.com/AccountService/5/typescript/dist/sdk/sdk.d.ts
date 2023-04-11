import { AccountHolders } from "./accountholders";
import { Accounts } from "./accounts";
import { Verification } from "./verification";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://cal-test.adyen.com/cal/services/Account/v5"];
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
 * This API is used for the classic integration. If you are just starting your implementation, refer to our [new integration guide](https://docs.adyen.com/marketplaces-and-platforms) instead.
 *
 * @remarks
 *
 * The Account API provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and verification-related documents. The management operations include actions such as creation, retrieval, updating, and deletion of them.
 *
 * For more information, refer to our [documentation](https://docs.adyen.com/marketplaces-and-platforms/classic).
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
 * -U "ws@MarketPlace.YOUR_PLATFORM_ACCOUNT":"YOUR_WS_PASSWORD" \
 * -H "Content-Type: application/json" \
 * ...
 * ```
 * When going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).
 *
 * ## Versioning
 * The Account API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 * ```
 * https://cal-test.adyen.com/cal/services/Account/v5/createAccountHolder
 * ```
 */
export declare class SDK {
    accountHolders: AccountHolders;
    accounts: Accounts;
    verification: Verification;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
