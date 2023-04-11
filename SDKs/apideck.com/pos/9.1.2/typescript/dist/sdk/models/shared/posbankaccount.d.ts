import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.
 */
export declare class PosBankAccountAchDetails extends SpeakeasyBase {
    /**
     * The last few digits of the bank account number.
     */
    accountNumberSuffix?: string;
    /**
     * The type of the bank account performing the transfer. The account type can be `CHECKING`,
     *
     * @remarks
     * `SAVINGS`, or `UNKNOWN`.
     */
    accountType?: string;
    /**
     * The routing number for the bank account.
     */
    routingNumber?: string;
}
/**
 * Card details for this payment. This field is currently not available. Reach out to our team for more info.
 */
export declare class PosBankAccount extends SpeakeasyBase {
    /**
     * The ownership type of the bank account performing the transfer.
     *
     * @remarks
     * The type can be `INDIVIDUAL`, `COMPANY`, or `UNKNOWN`.
     */
    accountOwnershipType?: string;
    /**
     * ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.
     */
    achDetails?: PosBankAccountAchDetails;
    /**
     * The name of the bank associated with the bank account.
     */
    bankName?: string;
    /**
     * Country code according to ISO 3166-1 alpha-2.
     */
    country?: string;
    /**
     * Uniquely identifies the bank account for this seller and can be used
     *
     * @remarks
     * to determine if payments are from the same bank account.
     */
    fingerprint?: string;
    /**
     * The statement description as sent to the bank.
     */
    statementDescription?: string;
    /**
     * The type of the bank transfer. The type can be `ACH` or `UNKNOWN`.
     */
    transferType?: string;
}
