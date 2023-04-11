import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateFulfillmentPolicySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class UpdateFulfillmentPolicyRequest extends SpeakeasyBase {
    /**
     * Fulfillment policy request
     */
    fulfillmentPolicyRequest: shared.FulfillmentPolicyRequest;
    /**
     * This path parameter specifies the ID of the fulfillment policy you want to update.
     */
    fulfillmentPolicyId: string;
}
export declare class UpdateFulfillmentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    setFulfillmentPolicyResponse?: shared.SetFulfillmentPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
