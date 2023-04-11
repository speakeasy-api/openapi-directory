import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicy } from "./returnpolicy";
/**
 * The response payload for the <b>getReturnPolicies</b> method. <br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getReturnPolicies</b>, so all of the pagination-related fields are for future use.</span>
 */
export declare class ReturnPolicyResponse extends SpeakeasyBase {
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
     * A list of all of the seller's return business policies defined for the specified marketplace. This array will be returned as empty if no return business policies are defined for the specified marketplace.
     */
    returnPolicies?: ReturnPolicy[];
    /**
     * The total number of return business policies retrieved in the result set.  <br/><br/>If no return business policies are defined for the specified marketplace, this field is returned with a value of <code>0</code>.
     */
    total?: number;
}
