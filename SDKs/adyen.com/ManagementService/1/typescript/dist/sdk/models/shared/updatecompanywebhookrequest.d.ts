import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalSettings } from "./additionalsettings";
/**
 * Format or protocol for receiving webhooks. Possible values:
 *
 * @remarks
 * * **soap**
 * * **http**
 * * **json**
 */
export declare enum UpdateCompanyWebhookRequestCommunicationFormatEnum {
    Http = "http",
    Json = "json",
    Soap = "soap"
}
/**
 * Shows how merchant accounts are filtered when configuring the webhook. Possible values:
 *
 * @remarks
 * * **includeAccounts**: The webhook is configured for the merchant accounts listed in `filterMerchantAccounts`.
 * * **excludeAccounts**: The webhook is not configured for the merchant accounts listed in `filterMerchantAccounts`.
 * * **allAccounts**: Includes all merchant accounts, and does not require specifying `filterMerchantAccounts`.
 */
export declare enum UpdateCompanyWebhookRequestFilterMerchantAccountTypeEnum {
    AllAccounts = "allAccounts",
    ExcludeAccounts = "excludeAccounts",
    IncludeAccounts = "includeAccounts"
}
/**
 * Network type for Terminal API notification webhooks. Possible values:
 *
 * @remarks
 * * **public**
 * * **local**
 *
 * Default Value: **public**.
 */
export declare enum UpdateCompanyWebhookRequestNetworkTypeEnum {
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
export declare enum UpdateCompanyWebhookRequestSslVersionEnum {
    Http = "HTTP",
    Ssl = "SSL",
    SSLv3 = "SSLv3",
    Tls = "TLS",
    TLSv1 = "TLSv1",
    TLSv11 = "TLSv1.1",
    TLSv12 = "TLSv1.2",
    TLSv13 = "TLSv1.3"
}
export declare class UpdateCompanyWebhookRequest extends SpeakeasyBase {
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
     * Indicates if the webhook configuration is active. The field must be **true** for us to send webhooks about events related an account.
     */
    active?: boolean;
    additionalSettings?: AdditionalSettings;
    /**
     * Format or protocol for receiving webhooks. Possible values:
     *
     * @remarks
     * * **soap**
     * * **http**
     * * **json**
     */
    communicationFormat?: UpdateCompanyWebhookRequestCommunicationFormatEnum;
    /**
     * Your description for this webhook configuration.
     */
    description?: string;
    /**
     * Shows how merchant accounts are filtered when configuring the webhook. Possible values:
     *
     * @remarks
     * * **includeAccounts**: The webhook is configured for the merchant accounts listed in `filterMerchantAccounts`.
     * * **excludeAccounts**: The webhook is not configured for the merchant accounts listed in `filterMerchantAccounts`.
     * * **allAccounts**: Includes all merchant accounts, and does not require specifying `filterMerchantAccounts`.
     */
    filterMerchantAccountType?: UpdateCompanyWebhookRequestFilterMerchantAccountTypeEnum;
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
     * Network type for Terminal API notification webhooks. Possible values:
     *
     * @remarks
     * * **public**
     * * **local**
     *
     * Default Value: **public**.
     */
    networkType?: UpdateCompanyWebhookRequestNetworkTypeEnum;
    /**
     * Password to access the webhook URL.
     */
    password?: string;
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
    sslVersion?: UpdateCompanyWebhookRequestSslVersionEnum;
    /**
     * Public URL where webhooks will be sent, for example **https://www.domain.com/webhook-endpoint**.
     */
    url?: string;
    /**
     * Username to access the webhook URL.
     */
    username?: string;
}
