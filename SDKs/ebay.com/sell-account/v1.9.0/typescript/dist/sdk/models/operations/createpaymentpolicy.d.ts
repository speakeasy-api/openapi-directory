import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePaymentPolicySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreatePaymentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Created
     */
    setPaymentPolicyResponse?: shared.SetPaymentPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
