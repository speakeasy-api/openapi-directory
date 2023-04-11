import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentPolicy } from "./paymentpolicy";
/**
 * The response payload for the <b>getPaymentPolicies</b> method. <br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getPaymentPolicies</b>, so all of the pagination-related fields are for future use.</span>
 */
export declare class PaymentPolicyResponse extends SpeakeasyBase {
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
     * A list of all of the seller's payment business policies defined for the specified marketplace. This array will be returned as empty if no payment business policies are defined for the specified marketplace.
     */
    paymentPolicies?: PaymentPolicy[];
    /**
     * This field is for future use.
     */
    prev?: string;
    /**
     * The total number of payment business policies retrieved in the result set.  <br/><br/>If no payment business policies are defined for the specified marketplace, this field is returned with a value of <code>0</code>.
     */
    total?: number;
}
