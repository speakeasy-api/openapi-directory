import { SpeakeasyBase } from "../../../internal/utils";
import { SplitAmount } from "./splitamount";
/**
 * The type of split.
 *
 * @remarks
 * Possible values: **Default**, **PaymentFee**, **VAT**, **Commission**, **MarketPlace**, **BalanceAccount**, **Remainder**, **Surcharge**, **Tip**.
 */
export declare enum SplitTypeEnum {
    BalanceAccount = "BalanceAccount",
    Commission = "Commission",
    Default = "Default",
    MarketPlace = "MarketPlace",
    PaymentFee = "PaymentFee",
    Remainder = "Remainder",
    Surcharge = "Surcharge",
    Tip = "Tip",
    Vat = "VAT",
    Verification = "Verification"
}
export declare class Split extends SpeakeasyBase {
    /**
     * Unique identifier of the account where the split amount should be sent. This is required if `type` is **MarketPlace** or **BalanceAccount**.
     *
     * @remarks
     *
     *
     */
    account?: string;
    amount: SplitAmount;
    /**
     * A description of this split.
     */
    description?: string;
    /**
     * Your reference for the split, which you can use to link the split to other operations such as captures and refunds.
     *
     * @remarks
     *
     * This is required if `type` is **MarketPlace** or **BalanceAccount**. For the other types, we also recommend sending a reference so you can reconcile the split and the associated payment in the transaction overview and in the reports. If the reference is not provided, the split is reported as part of the aggregated [TransferBalance record type](https://docs.adyen.com/reporting/marketpay-payments-accounting-report) in Adyen for Platforms.
     */
    reference?: string;
    /**
     * The type of split.
     *
     * @remarks
     * Possible values: **Default**, **PaymentFee**, **VAT**, **Commission**, **MarketPlace**, **BalanceAccount**, **Remainder**, **Surcharge**, **Tip**.
     */
    type: SplitTypeEnum;
}
