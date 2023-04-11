import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentPolicySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetPaymentPolicyRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the ID of the payment policy you want to retrieve.
     */
    paymentPolicyId: string;
}
export declare class GetPaymentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    paymentPolicy?: shared.PaymentPolicy;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
