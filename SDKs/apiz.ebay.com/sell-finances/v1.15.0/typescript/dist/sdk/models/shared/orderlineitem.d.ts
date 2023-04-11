import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Fee } from "./fee";
/**
 * This type is used to show the fees that are deducted from a seller payout for each line item in an order.
 */
export declare class OrderLineItem extends SpeakeasyBase {
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    feeBasisAmount?: Amount;
    /**
     * The unique identifier of an order line item.
     */
    lineItemId?: string;
    /**
     * An array of all fees accrued for the order line item and deducted from a seller payout.
     */
    marketplaceFees?: Fee[];
}
