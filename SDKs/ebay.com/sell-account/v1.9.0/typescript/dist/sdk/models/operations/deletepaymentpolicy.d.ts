import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePaymentPolicySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class DeletePaymentPolicyRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the ID of the payment policy you want to delete.
     */
    paymentPolicyId: string;
}
export declare class DeletePaymentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
