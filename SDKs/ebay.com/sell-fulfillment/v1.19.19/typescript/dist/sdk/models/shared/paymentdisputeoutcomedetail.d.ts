import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleAmount } from "./simpleamount";
/**
 * This type is used by the <strong>resolution</strong> container that is returned for payment disputes that have been resolved.
 */
export declare class PaymentDisputeOutcomeDetail extends SpeakeasyBase {
    /**
     * This type defines the monetary value of the payment dispute, and the currency used.
     */
    fees?: SimpleAmount;
    /**
     * This type defines the monetary value of the payment dispute, and the currency used.
     */
    protectedAmount?: SimpleAmount;
    /**
     * This enumeration value indicates if the seller is fully protected, partially protected, or not protected by eBay for the payment dispute. This field is always returned once the payment dispute is resolved. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ProtectionStatusEnum'>eBay API documentation</a>
     */
    protectionStatus?: string;
    /**
     * The enumeration value returned in this field indicates the outcome of the payment dispute for the seller. This field is always returned once the payment dispute is resolved. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:OutcomeEnum'>eBay API documentation</a>
     */
    reasonForClosure?: string;
    /**
     * This type defines the monetary value of the payment dispute, and the currency used.
     */
    recoupAmount?: SimpleAmount;
    /**
     * This type defines the monetary value of the payment dispute, and the currency used.
     */
    totalFeeCredit?: SimpleAmount;
}
