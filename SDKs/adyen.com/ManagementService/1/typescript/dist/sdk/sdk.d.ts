import { AccountCompanyLevel } from "./accountcompanylevel";
import { AccountMerchantLevel } from "./accountmerchantlevel";
import { AccountStoreLevel } from "./accountstorelevel";
import { AllowedOriginsCompanyLevel } from "./allowedoriginscompanylevel";
import { AllowedOriginsMerchantLevel } from "./allowedoriginsmerchantlevel";
import { APICredentialsCompanyLevel } from "./apicredentialscompanylevel";
import { APICredentialsMerchantLevel } from "./apicredentialsmerchantlevel";
import { APIKeyCompanyLevel } from "./apikeycompanylevel";
import { APIKeyMerchantLevel } from "./apikeymerchantlevel";
import { ClientKeyCompanyLevel } from "./clientkeycompanylevel";
import { ClientKeyMerchantLevel } from "./clientkeymerchantlevel";
import { MyAPICredential } from "./myapicredential";
import { PaymentMethodsMerchantLevel } from "./paymentmethodsmerchantlevel";
import { PayoutSettingsMerchantLevel } from "./payoutsettingsmerchantlevel";
import { TerminalActionsCompanyLevel } from "./terminalactionscompanylevel";
import { TerminalActionsTerminalLevel } from "./terminalactionsterminallevel";
import { TerminalOrdersCompanyLevel } from "./terminalorderscompanylevel";
import { TerminalOrdersMerchantLevel } from "./terminalordersmerchantlevel";
import { TerminalSettingsCompanyLevel } from "./terminalsettingscompanylevel";
import { TerminalSettingsMerchantLevel } from "./terminalsettingsmerchantlevel";
import { TerminalSettingsStoreLevel } from "./terminalsettingsstorelevel";
import { TerminalSettingsTerminalLevel } from "./terminalsettingsterminallevel";
import { TerminalsTerminalLevel } from "./terminalsterminallevel";
import { UsersCompanyLevel } from "./userscompanylevel";
import { UsersMerchantLevel } from "./usersmerchantlevel";
import { WebhooksCompanyLevel } from "./webhookscompanylevel";
import { WebhooksMerchantLevel } from "./webhooksmerchantlevel";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://management-test.adyen.com/v1"];
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
 * Configure and manage your Adyen company and merchant accounts, stores, and payment terminals.
 *
 * @remarks
 * ## Authentication
 * Each request to the Management API must be signed with an API key. [Generate your API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) in the Customer Area and then set this key to the `X-API-Key` header value.
 *
 * To access the live endpoints, you need to generate a new API key in your live Customer Area.
 * ## Versioning
 *
 * Management API handles versioning as part of the endpoint URL. For example, to send a request to version 1 of the `/companies/{companyId}/webhooks` endpoint, use:
 *
 * ```text
 * https://management-test.adyen.com/v1/companies/{companyId}/webhooks
 * ```
 *
 * ## Going live
 *
 * To access the live endpoints, you need an API key from your live Customer Area. Use this API key to make requests to:
 *
 * ```text
 * https://management-live.adyen.com/v1
 * ```
 */
export declare class SDK {
    apiCredentialsCompanyLevel: APICredentialsCompanyLevel;
    apiCredentialsMerchantLevel: APICredentialsMerchantLevel;
    apiKeyCompanyLevel: APIKeyCompanyLevel;
    apiKeyMerchantLevel: APIKeyMerchantLevel;
    accountCompanyLevel: AccountCompanyLevel;
    accountMerchantLevel: AccountMerchantLevel;
    accountStoreLevel: AccountStoreLevel;
    allowedOriginsCompanyLevel: AllowedOriginsCompanyLevel;
    allowedOriginsMerchantLevel: AllowedOriginsMerchantLevel;
    clientKeyCompanyLevel: ClientKeyCompanyLevel;
    clientKeyMerchantLevel: ClientKeyMerchantLevel;
    myAPICredential: MyAPICredential;
    paymentMethodsMerchantLevel: PaymentMethodsMerchantLevel;
    payoutSettingsMerchantLevel: PayoutSettingsMerchantLevel;
    terminalActionsCompanyLevel: TerminalActionsCompanyLevel;
    terminalActionsTerminalLevel: TerminalActionsTerminalLevel;
    terminalOrdersCompanyLevel: TerminalOrdersCompanyLevel;
    terminalOrdersMerchantLevel: TerminalOrdersMerchantLevel;
    terminalSettingsCompanyLevel: TerminalSettingsCompanyLevel;
    terminalSettingsMerchantLevel: TerminalSettingsMerchantLevel;
    terminalSettingsStoreLevel: TerminalSettingsStoreLevel;
    terminalSettingsTerminalLevel: TerminalSettingsTerminalLevel;
    terminalsTerminalLevel: TerminalsTerminalLevel;
    usersCompanyLevel: UsersCompanyLevel;
    usersMerchantLevel: UsersMerchantLevel;
    webhooksCompanyLevel: WebhooksCompanyLevel;
    webhooksMerchantLevel: WebhooksMerchantLevel;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
