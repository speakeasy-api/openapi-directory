import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateReturnPolicySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateReturnPolicyResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Created
     */
    setReturnPolicyResponse?: shared.SetReturnPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
