import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMerchantsMerchantIdWebhooksWebhookIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetMerchantsMerchantIdWebhooksWebhookIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
    /**
     * Unique identifier of the webhook configuration.
     */
    webhookId: string;
}
export declare class GetMerchantsMerchantIdWebhooksWebhookIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    /**
     * OK - the request has succeeded.
     */
    webhook?: shared.Webhook;
}
