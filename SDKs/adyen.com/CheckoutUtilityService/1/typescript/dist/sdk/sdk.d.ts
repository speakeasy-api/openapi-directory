import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://checkout-test.adyen.com/v1"];
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
 * A web service containing utility functions available for merchants integrating with Checkout APIs.
 *
 * @remarks
 * ## Authentication
 * Each request to the Checkout Utility API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the Checkout API key](https://docs.adyen.com/developers/user-management/how-to-get-the-checkout-api-key). Then set this key to the `X-API-Key` header value, for example:
 *
 * ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: Your_Checkout_API_key" \
 * ...
 * ```
 * Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/developers/api-reference/live-endpoints).
 *
 * ## Versioning
 * Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 * ```
 * https://checkout-test.adyen.com/v1/originKeys
 * ```
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Create originKey values for one or more merchant domains.
     *
     * @remarks
     * This operation takes the origin domains and returns a JSON object containing the corresponding origin keys for the domains.
     */
    postOriginKeys(req: shared.CheckoutUtilityRequest, config?: AxiosRequestConfig): Promise<operations.PostOriginKeysResponse>;
}
