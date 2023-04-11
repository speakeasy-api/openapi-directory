import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
/**
 * The type of bank account.
 */
export declare enum BankAccountAccountTypeEnum {
    BankAccount = "bank_account",
    CreditCard = "credit_card",
    Other = "other"
}
export declare class BankAccount extends SpeakeasyBase {
    /**
     * The name which you used in opening your bank account.
     */
    accountName?: string;
    /**
     * A bank account number is a number that is tied to your bank account. If you have several bank accounts, such as personal, joint, business (and so on), each account will have a different account number.
     */
    accountNumber?: string;
    /**
     * The type of bank account.
     */
    accountType?: BankAccountAccountTypeEnum;
    /**
     * A bank code is a code assigned by a central bank, a bank supervisory body or a Bankers Association in a country to all its licensed member banks or financial institutions.
     */
    bankCode?: string;
    bic?: string;
    /**
     * A branch identifier is a unique identifier for a branch of a bank or financial institution.
     */
    branchIdentifier?: string;
    /**
     * A BSB is a 6 digit numeric code used for identifying the branch of an Australian or New Zealand bank or financial institution.
     */
    bsbNumber?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    iban?: string;
}
