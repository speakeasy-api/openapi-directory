import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to update a current custom policy.
 */
export declare class CustomPolicyRequest extends SpeakeasyBase {
    /**
     * Details of the seller's specific policy and terms for this policy.<br/><br/><b>Max length:</b> 15,000
     */
    description?: string;
    /**
     * Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65
     */
    label?: string;
    /**
     * The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br/><br/><b>Max length:</b> 65
     */
    name?: string;
}
