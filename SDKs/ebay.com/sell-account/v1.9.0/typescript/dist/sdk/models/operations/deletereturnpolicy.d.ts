import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteReturnPolicySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class DeleteReturnPolicyRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the ID of the return policy you want to delete.
     */
    returnPolicyId: string;
}
export declare class DeleteReturnPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
