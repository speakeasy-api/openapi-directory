import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMerchantsMerchantIdShippingLocationsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetMerchantsMerchantIdShippingLocationsRequest extends SpeakeasyBase {
    /**
     * The number of locations to return.
     */
    limit?: number;
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
    /**
     * The name of the shipping location.
     */
    name?: string;
    /**
     * The number of locations to skip.
     */
    offset?: number;
}
export declare class GetMerchantsMerchantIdShippingLocationsResponse extends SpeakeasyBase {
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
