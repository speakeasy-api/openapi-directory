import { SpeakeasyBase } from "../../../internal/utils";
import { FulfillmentPolicy } from "./fulfillmentpolicy";
/**
 * The response payload for the <b>getFulfillmentPolicies</b> method.<br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getFulfillmentPolicies</b>, so all of the pagination-related fields are for future use.</span>
 */
export declare class FulfillmentPolicyResponse extends SpeakeasyBase {
    /**
     * A list of all of the seller's fulfillment policies defined for the specified marketplace. This array will be returned as empty if no fulfillment policies are defined for the specified marketplace.
     */
    fulfillmentPolicies?: FulfillmentPolicy[];
    /**
     * This field is for future use.
     */
    href?: string;
    /**
     * This field is for future use.
     */
    limit?: number;
    /**
     * This field is for future use.
     */
    next?: string;
    /**
     * This field is for future use.
     */
    offset?: number;
    /**
     * This field is for future use.
     */
    prev?: string;
    /**
     * The total number of fulfillment policies retrieved in the result set.  <br/><br/>If no fulfillment policies are defined for the specified marketplace, this field is returned with a value of <code>0</code>.
     */
    total?: number;
}
