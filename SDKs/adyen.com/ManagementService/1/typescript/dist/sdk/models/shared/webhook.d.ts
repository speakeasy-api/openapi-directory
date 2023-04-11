import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalSettingsResponse } from "./additionalsettingsresponse";
import { WebhookLinks } from "./webhooklinks";
/**
 * Format or protocol for receiving webhooks. Possible values:
 *
 * @remarks
 * * **soap**
 * * **http**
 * * **json**
 */
export declare enum WebhookCommunicationFormatEnum {
    Http = "http",
    Json = "json",
    Soap = "soap"
}
/**
 * Shows how merchant accounts are included in company-level webhooks. Possible values:
 *
 * @remarks
 * * **includeAccounts**
 * * **excludeAccounts**
 * * **allAccounts**: Includes all merchant accounts, and does not require specifying `filterMerchantAccounts`.
 */
export declare enum WebhookFilterMerchantAccountTypeEnum {
    AllAccounts = "allAccounts",
    ExcludeAccounts = "excludeAccounts",
    IncludeAccounts = "includeAccounts"
}
/**
 * Network type for Terminal API details webhooks.
 */
export declare enum WebhookNetworkTypeEnum {
    Local = "LOCAL",
    Public = "PUBLIC"
}
/**
 * SSL version to access the public webhook URL specified in the `url` field. Possible values:
 *
 * @remarks
 * * **TLSv1.3**
 * * **TLSv1.2**
 * * **HTTP** - Only allowed on Test environment.
 *
 * If not specified, the webhook will use `sslVersion`: **TLSv1.2**.
 */
export declare enum WebhookSslVersionEnum {
    Http = "HTTP",
    Ssl = "SSL",
    SSLv3 = "SSLv3",
    Tls = "TLS",
    TLSv1 = "TLSv1",
    TLSv11 = "TLSv1.1",
    TLSv12 = "TLSv1.2",
    TLSv13 = "TLSv1.3"
}
/**
 * OK - the request has succeeded.
 */
export declare class Webhook extends SpeakeasyBase {
    links?: WebhookLinks;
    /**
     * Indicates if expired SSL certificates are accepted. Default value: **false**.
     */
    acceptsExpiredCertificate?: boolean;
    /**
     * Indicates if self-signed SSL certificates are accepted. Default value: **false**.
     */
    acceptsSelfSignedCertificate?: boolean;
    /**
     * Indicates if untrusted SSL certificates are accepted. Default value: **false**.
     */
    acceptsUntrustedRootCertificate?: boolean;
    /**
     * Reference to the account the webook is set on.
     */
    accountReference?: string;
    /**
     * Indicates if the webhook configuration is active. The field must be **true** for you to receive webhooks about events related an account.
     */
    active: boolean;
    additionalSettings?: AdditionalSettingsResponse;
    /**
     * The alias of our SSL certificate. When you receive a notification from us, the alias from the HMAC signature will match this alias.
     */
    certificateAlias?: string;
    /**
     * Format or protocol for receiving webhooks. Possible values:
     *
     * @remarks
     * * **soap**
     * * **http**
     * * **json**
     */
    communicationFormat: WebhookCommunicationFormatEnum;
    /**
     * Your description for this webhook configuration.
     */
    description?: string;
    /**
     * Shows how merchant accounts are included in company-level webhooks. Possible values:
     *
     * @remarks
     * * **includeAccounts**
     * * **excludeAccounts**
     * * **allAccounts**: Includes all merchant accounts, and does not require specifying `filterMerchantAccounts`.
     */
    filterMerchantAccountType?: WebhookFilterMerchantAccountTypeEnum;
    /**
     * A list of merchant account names that are included or excluded from receiving the webhook. Inclusion or exclusion is based on the value defined for `filterMerchantAccountType`.
     *
     * @remarks
     *
     * Required if `filterMerchantAccountType` is either:
     * * **includeAccounts**
     * * **excludeAccounts**
     *
     * Not needed for `filterMerchantAccountType`: **allAccounts**.
     */
    filterMerchantAccounts?: string[];
    /**
     * Indicates if the webhook configuration has errors that need troubleshooting. If the value is **true**, troubleshoot the configuration using the [testing endpoint](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/webhooks/{webhookid}/test).
     */
    hasError?: boolean;
    /**
     * Indicates if the webhook is password protected.
     */
    hasPassword?: boolean;
    /**
     * The [checksum](https://en.wikipedia.org/wiki/Key_checksum_value) of the HMAC key generated for this webhook. You can use this value to uniquely identify the HMAC key configured for this webhook.
     */
    hmacKeyCheckValue?: string;
    /**
     * Unique identifier for this webhook.
     */
    id?: string;
    /**
     * Network type for Terminal API details webhooks.
     */
    networkType?: WebhookNetworkTypeEnum;
    /**
     * Indicates if the SOAP action header needs to be populated. Default value: **false**.
     *
     * @remarks
     *
     * Only applies if `communicationFormat`: **soap**.
     */
    populateSoapActionHeader?: boolean;
    /**
     * SSL version to access the public webhook URL specified in the `url` field. Possible values:
     *
     * @remarks
     * * **TLSv1.3**
     * * **TLSv1.2**
     * * **HTTP** - Only allowed on Test environment.
     *
     * If not specified, the webhook will use `sslVersion`: **TLSv1.2**.
     */
    sslVersion?: WebhookSslVersionEnum;
    /**
     * The type of webhook. Possible values are:
     *
     * @remarks
     *
     * - **standard**
     * - **account-settings-notification**
     * - **banktransfer-notification**
     * - **boletobancario-notification**
     * - **directdebit-notification**
     * - **pending-notification**
     * - **ideal-notification**
     * - **ideal-pending-notification**
     * - **report-notification**
     * - **terminal-api-notification**
     *
     * Find out more about [standard notification webhooks](https://docs.adyen.com/development-resources/webhooks/understand-notifications#event-codes) and [other types of notifications](https://docs.adyen.com/development-resources/webhooks/understand-notifications#other-notifications).
     */
    type: string;
    /**
     * Public URL where webhooks will be sent, for example **https://www.domain.com/webhook-endpoint**.
     */
    url: string;
    /**
     * Username to access the webhook URL.
     */
    username?: string;
}
