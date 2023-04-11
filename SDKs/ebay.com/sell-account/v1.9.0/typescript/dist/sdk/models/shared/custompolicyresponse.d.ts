import { SpeakeasyBase } from "../../../internal/utils";
import { CompactCustomPolicyResponse } from "./compactcustompolicyresponse";
/**
 * Success
 */
export declare class CustomPolicyResponse extends SpeakeasyBase {
    /**
     * This array contains the custom policies that match the input criteria.
     */
    customPolicies?: CompactCustomPolicyResponse[];
    /**
     * <i>This field is for future use.</i>
     */
    href?: string;
    /**
     * <i>This field is for future use.</i>
     */
    limit?: number;
    /**
     * <i>This field is for future use.</i>
     */
    next?: string;
    /**
     * <i>This field is for future use.</i>
     */
    offset?: number;
    /**
     * <i>This field is for future use.</i>
     */
    prev?: string;
    /**
     * <i>This field is for future use.</i>
     */
    total?: number;
}
