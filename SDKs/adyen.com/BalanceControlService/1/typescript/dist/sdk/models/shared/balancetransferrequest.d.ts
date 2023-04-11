import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * The type of balance transfer. Possible values: **tax**, **fee**, **terminalSale**, **credit**, **debit**, and **adjustment**.
 */
export declare enum BalanceTransferRequestTypeEnum {
    Tax = "tax",
    Fee = "fee",
    TerminalSale = "terminalSale",
    Credit = "credit",
    Debit = "debit",
    Adjustment = "adjustment"
}
export declare class BalanceTransferRequest extends SpeakeasyBase {
    amount: Amount;
    /**
     * A human-readable description for the transfer. You can use alphanumeric characters and hyphens. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.
     */
    description?: string;
    /**
     * The unique identifier of the source merchant account from which funds are deducted.
     */
    fromMerchant: string;
    /**
     * A reference for the balance transfer. If you don't provide this in the request, Adyen generates a unique reference.
     *
     * @remarks
     * Maximum length: 80 characters.
     */
    reference?: string;
    /**
     * The unique identifier of the destination merchant account from which funds are transferred.
     */
    toMerchant: string;
    /**
     * The type of balance transfer. Possible values: **tax**, **fee**, **terminalSale**, **credit**, **debit**, and **adjustment**.
     */
    type: BalanceTransferRequestTypeEnum;
}
