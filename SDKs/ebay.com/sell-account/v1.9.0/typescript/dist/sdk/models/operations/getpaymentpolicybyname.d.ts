import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentPolicyByNameSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetPaymentPolicyByNameRequest extends SpeakeasyBase {
    /**
     * This query parameter specifies the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum
     */
    marketplaceId: string;
    /**
     * This query parameter specifies the seller-defined name of the payment policy you want to retrieve.
     */
    name: string;
}
export declare class GetPaymentPolicyByNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    paymentPolicy?: shared.PaymentPolicy;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
