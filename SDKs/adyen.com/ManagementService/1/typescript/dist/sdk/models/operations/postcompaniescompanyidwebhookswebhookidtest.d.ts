import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCompaniesCompanyIdWebhooksWebhookIdTestSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostCompaniesCompanyIdWebhooksWebhookIdTestRequest extends SpeakeasyBase {
    testCompanyWebhookRequest?: shared.TestCompanyWebhookRequest;
    /**
     * The unique identifier of the company account.
     */
    companyId: string;
    /**
     * Unique identifier of the webhook configuration.
     */
    webhookId: string;
}
export declare class PostCompaniesCompanyIdWebhooksWebhookIdTestResponse extends SpeakeasyBase {
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
    testWebhookResponse?: shared.TestWebhookResponse;
}
