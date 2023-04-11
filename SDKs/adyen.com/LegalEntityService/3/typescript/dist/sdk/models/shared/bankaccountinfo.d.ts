import { SpeakeasyBase } from "../../../internal/utils";
export declare class BankAccountInfo extends SpeakeasyBase {
    /**
     * Identification of the bank account.
     */
    accountIdentification?: any;
    /**
     * The type of bank account.
     */
    accountType?: string;
    /**
     * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the bank account is registered. For example, **NL**.
     */
    countryCode?: string;
}
