import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCompaniesCompanyIdShippingLocationsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostCompaniesCompanyIdShippingLocationsRequest extends SpeakeasyBase {
    shippingLocation?: shared.ShippingLocation;
    /**
     * The unique identifier of the company account.
     */
    companyId: string;
}
export declare class PostCompaniesCompanyIdShippingLocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    /**
     * OK - the request has succeeded.
     */
    shippingLocation?: shared.ShippingLocation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
