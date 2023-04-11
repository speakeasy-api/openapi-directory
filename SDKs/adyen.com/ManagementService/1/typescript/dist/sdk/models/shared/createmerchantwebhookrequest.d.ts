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
export declare enum CreateMerchantWebhookRequestCommunicationFormatEnum {
    Http = "http",
    Json = "json",
    Soap = "soap"
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
export declare enum CreateMerchantWebhookRequestNetworkTypeEnum {
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
export declare enum CreateMerchantWebhookRequestSslVersionEnum {
    Http = "HTTP",
    Ssl = "SSL",
    SSLv3 = "SSLv3",
    Tls = "TLS",
    TLSv1 = "TLSv1",
    TLSv11 = "TLSv1.1",
    TLSv12 = "TLSv1.2",
    TLSv13 = "TLSv1.3"
}
export declare class CreateMerchantWebhookRequest extends SpeakeasyBase {
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
    active: boolean;
    additionalSettings?: AdditionalSettings;
    /**
     * Format or protocol for receiving webhooks. Possible values:
     *
     * @remarks
     * * **soap**
     * * **http**
     * * **json**
     */
    communicationFormat: CreateMerchantWebhookRequestCommunicationFormatEnum;
    /**
     * Your description for this webhook configuration.
     */
    description?: string;
    /**
     * Network type for Terminal API notification webhooks. Possible values:
     *
     * @remarks
     * * **public**
     * * **local**
     *
     * Default Value: **public**.
     */
    networkType?: CreateMerchantWebhookRequestNetworkTypeEnum;
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
    sslVersion?: CreateMerchantWebhookRequestSslVersionEnum;
    /**
     * The type of webhook that is being created. Possible values are:
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
     * - **rreq-notification**
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
