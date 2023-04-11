import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompaniesCompanyIdWebhooksSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetCompaniesCompanyIdWebhooksRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the [company account](https://docs.adyen.com/account/account-structure#company-account).
     */
    companyId: string;
    /**
     * The number of the page to fetch.
     */
    pageNumber?: number;
    /**
     * The number of items to have on a page, maximum 100. The default is 10 items on a page.
     */
    pageSize?: number;
}
export declare class GetCompaniesCompanyIdWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    listWebhooksResponse?: shared.ListWebhooksResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
