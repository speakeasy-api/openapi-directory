import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type is used by the <b>balanceAdjustment</b> container, which shows the seller payout balance that will be applied toward the charges outlined in the <b>charges</b> array.
 */
export declare class BalanceAdjustment extends SpeakeasyBase {
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    adjustmentAmount?: Amount;
    /**
     * The enumeration value returned here indicates if the charge is a <code>DEBIT</code> or a <code>CREDIT</code> to the seller. Generally, all transfer transaction types are going to be <code>DEBIT</code>, since the money is being tranferred from the seller to eBay. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
     */
    adjustmentType?: string;
}
