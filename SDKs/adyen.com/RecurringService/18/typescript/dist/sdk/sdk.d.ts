import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://pal-test.adyen.com/pal/servlet/Recurring/v18"];
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
 * Additional methods that allow you to manage payment details stored for recurring payments. For more information, refer to [Recurring payments](https://docs.adyen.com/developers/features/recurring-payments).
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
     * Disables stored payment details.
     *
     * @remarks
     * Disables stored payment details to stop charging a shopper with this particular recurring detail ID.
     *
     * For more information, refer to [Disable stored details](https://docs.adyen.com/developers/features/recurring-payments/disable-stored-details).
     */
    postDisable(req: shared.DisableRequest, config?: AxiosRequestConfig): Promise<operations.PostDisableResponse>;
    /**
     * Retrieves stored payment details for a shopper.
     *
     * @remarks
     * Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.
     *
     * For more information, refer to [Retrieve stored details](https://docs.adyen.com/developers/features/recurring-payments/retrieve-stored-details).
     */
    postListRecurringDetails(req: shared.RecurringDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PostListRecurringDetailsResponse>;
}
