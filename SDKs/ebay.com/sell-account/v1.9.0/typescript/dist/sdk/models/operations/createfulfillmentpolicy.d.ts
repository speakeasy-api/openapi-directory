import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateFulfillmentPolicySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateFulfillmentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Created
     */
    setFulfillmentPolicyResponse?: shared.SetFulfillmentPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
