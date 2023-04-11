import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnAddress } from "./returnaddress";
/**
 * This type is used by base request of the <strong>acceptPaymentDispute</strong> method.
 */
export declare class AcceptPaymentDisputeRequest extends SpeakeasyBase {
    /**
     * This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller.
     */
    returnAddress?: ReturnAddress;
    /**
     * This integer value indicates the revision number of the payment dispute. This field is required. The current <strong>revision</strong> number for a payment dispute can be retrieved with the <strong>getPaymentDispute</strong> method. Each time an action is taken against a payment dispute, this integer value increases by 1.
     */
    revision?: number;
}
