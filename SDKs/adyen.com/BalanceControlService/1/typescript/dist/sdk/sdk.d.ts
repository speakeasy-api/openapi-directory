import { General } from "./general";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://pal-test.adyen.com/pal/servlet/BalanceControl/v1"];
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
 * The Balance Control API lets you transfer funds between merchant accounts that belong to the same legal entity and are under the same company account.
 *
 * @remarks
 *
 * ## Authentication
 * To connect to the Balance Control API, you must authenticate your requests with an [API key or basic auth username and password](https://docs.adyen.com/development-resources/api-authentication). To learn how you can generate these, see [API credentials](https://docs.adyen.com/development-resources/api-credentials).Here is an example of authenticating a request with an API key:
 *
 * ```
 * curl
 * -H "X-API-Key: Your_API_key" \
 * -H "Content-Type: application/json" \
 * ...
 * ```
 * Note that when going live, you need to generate API credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).
 *
 * ## Versioning
 * The Balance Control API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 *
 * ```
 * https://pal-test.adyen.com/pal/servlet/BalanceControl/v1/balanceTransfer
 * ```
 *
 */
export declare class SDK {
    general: General;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
