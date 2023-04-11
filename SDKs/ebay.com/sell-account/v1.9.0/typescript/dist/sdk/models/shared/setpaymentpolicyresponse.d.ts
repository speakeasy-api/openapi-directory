import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { Deposit } from "./deposit";
import { ErrorT } from "./error";
import { PaymentMethod } from "./paymentmethod";
import { TimeDuration } from "./timeduration";
/**
 * A complex type that is populated with a response containing a payment policy.
 */
export declare class SetPaymentPolicyResponse extends SpeakeasyBase {
    /**
     * This container indicates whether the payment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings.
     */
    categoryTypes?: CategoryType[];
    /**
     * This type is used to specify/indicate that an initial deposit is required for a motor vehicle listing.
     */
    deposit?: Deposit;
    /**
     * A seller-defined description of the payment business policy. This description is only for the seller's use, and is not exposed on any eBay pages. This field is returned if set for the policy. <br/><br/><b>Max length</b>: 250
     */
    description?: string;
    /**
     * A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned.
     */
    fullPaymentDueIn?: TimeDuration;
    /**
     * The value returned in this field will reflect the value set by the seller in the <b>immediatePay</b> request field. A value of <code>true</code> indicates that immediate payment is required from the buyer for: <ul><li>A fixed-price item</li><li>An auction item where the buyer is using the 'Buy it Now' option</li><li>A deposit for a motor vehicle listing</li></ul><br />It is possible for the seller to set this field as <code>true</code> in the payment business policy, but it will not apply in some scenarios. For example, immediate payment is not applicable for auction listings that have a winning bidder, for buyer purchases that involve the Best Offer feature, or for transactions that happen offline between the buyer and seller.
     */
    immediatePay?: boolean;
    /**
     * The ID of the eBay marketplace to which this payment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a>
     */
    marketplaceId?: string;
    /**
     * A seller-defined name for this payment business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64
     */
    name?: string;
    /**
     * <p class="tablenote"><b>Note:</b> NO LONGER SUPPORTED. Although this field may be returned for some older payment business policies, payment instructions are no longer supported by payment business policies. If this field is returned, it can be ignored and these payment instructions will not appear in any listings that use the corresponding business policy.</p>A free-form string field that allows sellers to add detailed payment instructions to their listings.
     */
    paymentInstructions?: string;
    /**
     * This array shows the available payment methods that the seller has set for the payment business policy.<br /><br />Sellers do not have to specify any electronic payment methods for listings, so this array will often be returned empty unless the payment business policy is intended for motor vehicle listings or other items in categories where offline payments are required or supported.
     */
    paymentMethods?: PaymentMethod[];
    /**
     * A unique eBay-assigned ID for a payment business policy. This ID is generated when the policy is created.
     */
    paymentPolicyId?: string;
    /**
     * An array of one or more errors or warnings that were generated during the processing of the request. If there were no issues with the request, this array will return empty.
     */
    warnings?: ErrorT[];
}
