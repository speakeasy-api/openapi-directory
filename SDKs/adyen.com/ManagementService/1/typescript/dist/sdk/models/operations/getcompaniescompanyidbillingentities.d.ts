import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompaniesCompanyIdBillingEntitiesSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetCompaniesCompanyIdBillingEntitiesRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the company account.
     */
    companyId: string;
    /**
     * The name of the billing entity.
     */
    name?: string;
}
export declare class GetCompaniesCompanyIdBillingEntitiesResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    billingEntitiesResponse?: shared.BillingEntitiesResponse;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
