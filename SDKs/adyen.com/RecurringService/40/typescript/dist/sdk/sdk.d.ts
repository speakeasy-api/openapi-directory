import { General } from "./general";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://pal-test.adyen.com/pal/servlet/Recurring/v40"];
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
 * The Recurring APIs allow you to manage and remove your tokens or saved payment details. Tokens should be created with validation during a payment request.
 *
 * @remarks
 *
 * For more information, refer to our [Tokenization documentation](https://docs.adyen.com/online-payments/tokenization).
 * ## Authentication
 * You need an [API credential](https://docs.adyen.com/development-resources/api-credentials) to authenticate to the API.
 *
 * If using an API key, add an `X-API-Key` header with the API key as the value, for example:
 *
 *  ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "X-API-Key: YOUR_API_KEY" \
 * ...
 * ```
 *
 * Alternatively, you can use the username and password to connect to the API using basic authentication, for example:
 *
 * ```
 * curl
 * -U "ws@Company.YOUR_COMPANY_ACCOUNT":"YOUR_BASIC_AUTHENTICATION_PASSWORD" \
 * -H "Content-Type: application/json" \
 * ...
 * ```
 *
 * ## Versioning
 * Recurring API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 * ```
 * https://pal-test.adyen.com/pal/servlet/Recurring/v40/disable
 * ```
 *
 * ## Going live
 *
 * To authenticate to the live endpoints, you need an [API credential](https://docs.adyen.com/development-resources/api-credentials) from your live Customer Area.
 *
 * The live endpoint URLs contain a prefix which is unique to your company account:
 * ```
 *
 * https://{PREFIX}-pal-live.adyenpayments.com/pal/servlet/Recurring/v40/disable
 * ```
 *
 * Get your `{PREFIX}` from your live Customer Area under **Developers** > **API URLs** > **Prefix**.
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
