import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePaymentPolicySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class UpdatePaymentPolicyRequest extends SpeakeasyBase {
    /**
     * Payment policy request
     */
    paymentPolicyRequest: shared.PaymentPolicyRequest;
    /**
     * This path parameter specifies the ID of the payment policy you want to update.
     */
    paymentPolicyId: string;
}
export declare class UpdatePaymentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    setPaymentPolicyResponse?: shared.SetPaymentPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
