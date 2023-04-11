import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCompaniesCompanyIdWebhooksSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostCompaniesCompanyIdWebhooksRequest extends SpeakeasyBase {
    createCompanyWebhookRequest?: shared.CreateCompanyWebhookRequest;
    /**
     * Unique identifier of the [company account](https://docs.adyen.com/account/account-structure#company-account).
     */
    companyId: string;
}
export declare class PostCompaniesCompanyIdWebhooksResponse extends SpeakeasyBase {
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
