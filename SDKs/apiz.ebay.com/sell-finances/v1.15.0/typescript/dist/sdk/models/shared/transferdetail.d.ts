import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { BalanceAdjustment } from "./balanceadjustment";
import { Charge } from "./charge";
/**
 * This type is used by the <b>transferDetail</b> container, which provides more details about the transfer and the charge(s) associated with the transfer.
 */
export declare class TransferDetail extends SpeakeasyBase {
    /**
     * This type is used by the <b>balanceAdjustment</b> container, which shows the seller payout balance that will be applied toward the charges outlined in the <b>charges</b> array.
     */
    balanceAdjustment?: BalanceAdjustment;
    /**
     * This container is an array of one or more charges related to the transfer. Charges can be related to an order cancellation, order return, case, payment dispute, etc.
     */
    charges?: Charge[];
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    totalChargeNetAmount?: Amount;
}
