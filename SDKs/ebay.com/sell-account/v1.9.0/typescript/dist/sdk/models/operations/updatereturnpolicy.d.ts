import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateReturnPolicySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class UpdateReturnPolicyRequest extends SpeakeasyBase {
    /**
     * Container for a return policy request.
     */
    returnPolicyRequest: shared.ReturnPolicyRequest;
    /**
     * This path parameter specifies the ID of the return policy you want to update.
     */
    returnPolicyId: string;
}
export declare class UpdateReturnPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    setReturnPolicyResponse?: shared.SetReturnPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
