import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentPoliciesSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetPaymentPoliciesRequest extends SpeakeasyBase {
    /**
     * This query parameter specifies the eBay marketplace of the policies you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum
     */
    marketplaceId: string;
}
export declare class GetPaymentPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    paymentPolicyResponse?: shared.PaymentPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
