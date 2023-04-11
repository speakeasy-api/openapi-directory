import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFulfillmentPolicySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetFulfillmentPolicyRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the ID of the fulfillment policy you want to retrieve.
     */
    fulfillmentPolicyId: string;
}
export declare class GetFulfillmentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    fulfillmentPolicy?: shared.FulfillmentPolicy;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
