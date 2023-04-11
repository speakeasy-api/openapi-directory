import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompaniesCompanyIdShippingLocationsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetCompaniesCompanyIdShippingLocationsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the company account.
     */
    companyId: string;
    /**
     * The number of locations to return.
     */
    limit?: number;
    /**
     * The name of the shipping location.
     */
    name?: string;
    /**
     * The number of locations to skip.
     */
    offset?: number;
}
export declare class GetCompaniesCompanyIdShippingLocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    /**
     * OK - the request has succeeded.
     */
    shippingLocationsResponse?: shared.ShippingLocationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
