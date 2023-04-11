import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { OrderRefund } from "./orderrefund";
import { Payment } from "./payment";
/**
 * This type contains information about the various monetary exchanges that apply to the net balance due for the order.
 */
export declare class PaymentSummary extends SpeakeasyBase {
    /**
     * This array consists of payment information for the order, including payment status, payment method, payment amount, and payment date. This array is always returned, although some of the fields under this container will not be returned until payment has been made.
     */
    payments?: Payment[];
    /**
     * This array is always returned, but is returned as an empty array unless the seller has submitted a partial or full refund to the buyer for the order. If a refund has occurred, the refund amount and refund date will be shown for each refund.
     */
    refunds?: OrderRefund[];
    /**
     * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
     */
    totalDueSeller?: Amount;
}
