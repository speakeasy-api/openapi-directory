import { SpeakeasyBase } from "../../../internal/utils";
export declare class BankAccountInfo extends SpeakeasyBase {
    /**
     * The bank account number (without separators).
     *
     * @remarks
     *
     *  When this is provided, the `branchCode` is also required.
     */
    accountNumber?: string;
    /**
     * The type of bank account.
     */
    accountType?: string;
    /**
     * The bank's BIC or SWIFT code.
     */
    bankBicSwift?: string;
    /**
     * The city where the bank is located.
     */
    bankCity?: string;
    /**
     * The bank code of the banking institution with which the bank account is registered.
     */
    bankCode?: string;
    /**
     * The name of the banking institution where the bank account is held.
     */
    bankName?: string;
    /**
     * The branch code of the branch under which the bank account is registered.
     *
     * @remarks
     *
     * Required when you provide an `accountNumber`.
     *
     *  In the following countries, this value corresponds to:
     *
     *
     * * United States: routing number
     * * United Kingdom: sort code
     * * Germany: Bankleitzahl
     */
    branchCode?: string;
    /**
     * The check code of the bank account.
     */
    checkCode?: string;
    /**
     * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the bank account is registered. For example, **NL**.
     */
    countryCode?: string;
    /**
     * The account's three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). For example, **EUR**.
     */
    currencyCode: string;
    /**
     * The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.
     */
    iban?: string;
}
