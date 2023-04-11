import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFulfillmentPolicySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class DeleteFulfillmentPolicyRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the ID of the fulfillment policy to delete.
     */
    fulfillmentPolicyId: string;
}
export declare class DeleteFulfillmentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
