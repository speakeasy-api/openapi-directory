import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The bank account type.
 *
 * @remarks
 *
 * Possible values: **checking** only.
 */
export declare enum BankAccountAccountTypeEnum {
    Checking = "checking"
}
export declare class BankAccount extends SpeakeasyBase {
    /**
     * The bank account number, without separators or whitespace.
     */
    accountNumber?: string;
    /**
     * The bank account type.
     *
     * @remarks
     *
     * Possible values: **checking** only.
     */
    accountType?: BankAccountAccountTypeEnum;
    /**
     * The [International Bank Account Number](https://en.wikipedia.org/wiki/International_Bank_Account_Number) (IBAN).
     */
    iban: string;
    /**
     * The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.
     */
    routingNumber?: string;
}
