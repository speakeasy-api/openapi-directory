import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentsProgramSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetPaymentsProgramRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the eBay marketplace of the payments program for which you want to retrieve the seller's status.
     */
    marketplaceId: string;
    /**
     * This path parameter specifies the payments program whose status is returned by the call.
     */
    paymentsProgramType: string;
}
export declare class GetPaymentsProgramResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    paymentsProgramResponse?: shared.PaymentsProgramResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
