import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReturnPolicySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetReturnPolicyRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the of the return policy you want to retrieve.
     */
    returnPolicyId: string;
}
export declare class GetReturnPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    returnPolicy?: shared.ReturnPolicy;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
