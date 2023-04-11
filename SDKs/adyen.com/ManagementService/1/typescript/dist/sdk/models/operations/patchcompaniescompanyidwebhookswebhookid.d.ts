import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchCompaniesCompanyIdWebhooksWebhookIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PatchCompaniesCompanyIdWebhooksWebhookIdRequest extends SpeakeasyBase {
    updateCompanyWebhookRequest?: shared.UpdateCompanyWebhookRequest;
    /**
     * The unique identifier of the company account.
     */
    companyId: string;
    /**
     * Unique identifier of the webhook configuration.
     */
    webhookId: string;
}
export declare class PatchCompaniesCompanyIdWebhooksWebhookIdResponse extends SpeakeasyBase {
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
