import { SpeakeasyBase } from "../../../internal/utils";
import { KYCCheckSummary } from "./kycchecksummary";
/**
 * The status of the check.
 *
 * @remarks
 *
 * Possible values: **AWAITING_DATA** , **DATA_PROVIDED**, **FAILED**, **INVALID_DATA**, **PASSED**, **PENDING**, **RETRY_LIMIT_REACHED**.
 */
export declare enum KYCCheckStatusDataStatusEnum {
    AwaitingData = "AWAITING_DATA",
    DataProvided = "DATA_PROVIDED",
    Failed = "FAILED",
    InvalidData = "INVALID_DATA",
    Passed = "PASSED",
    Pending = "PENDING",
    PendingReview = "PENDING_REVIEW",
    RetryLimitReached = "RETRY_LIMIT_REACHED",
    Unchecked = "UNCHECKED"
}
/**
 * The type of check.
 *
 * @remarks
 *
 * Possible values:
 *
 *  * **BANK_ACCOUNT_VERIFICATION**: Used in v5 and earlier. Replaced by **PAYOUT_METHOD_VERIFICATION** in v6 and later.
 *
 *  * **COMPANY_VERIFICATION**
 *
 *   * **CARD_VERIFICATION**
 *
 * * **IDENTITY_VERIFICATION**
 *
 * * **LEGAL_ARRANGEMENT_VERIFICATION**
 *
 * * **NONPROFIT_VERIFICATION**
 *
 *  * **PASSPORT_VERIFICATION**
 *
 * * **PAYOUT_METHOD_VERIFICATION**: Used in v6 and later.
 *
 * * **PCI_VERIFICATION**
 */
export declare enum KYCCheckStatusDataTypeEnum {
    BankAccountVerification = "BANK_ACCOUNT_VERIFICATION",
    CardVerification = "CARD_VERIFICATION",
    CompanyVerification = "COMPANY_VERIFICATION",
    IdentityVerification = "IDENTITY_VERIFICATION",
    LegalArrangementVerification = "LEGAL_ARRANGEMENT_VERIFICATION",
    NonprofitVerification = "NONPROFIT_VERIFICATION",
    PassportVerification = "PASSPORT_VERIFICATION",
    PayoutMethodVerification = "PAYOUT_METHOD_VERIFICATION",
    PciVerification = "PCI_VERIFICATION"
}
export declare class KYCCheckStatusData extends SpeakeasyBase {
    /**
     * A list of the fields required for execution of the check.
     */
    requiredFields?: string[];
    /**
     * The status of the check.
     *
     * @remarks
     *
     * Possible values: **AWAITING_DATA** , **DATA_PROVIDED**, **FAILED**, **INVALID_DATA**, **PASSED**, **PENDING**, **RETRY_LIMIT_REACHED**.
     */
    status: KYCCheckStatusDataStatusEnum;
    summary?: KYCCheckSummary;
    /**
     * The type of check.
     *
     * @remarks
     *
     * Possible values:
     *
     *  * **BANK_ACCOUNT_VERIFICATION**: Used in v5 and earlier. Replaced by **PAYOUT_METHOD_VERIFICATION** in v6 and later.
     *
     *  * **COMPANY_VERIFICATION**
     *
     *   * **CARD_VERIFICATION**
     *
     * * **IDENTITY_VERIFICATION**
     *
     * * **LEGAL_ARRANGEMENT_VERIFICATION**
     *
     * * **NONPROFIT_VERIFICATION**
     *
     *  * **PASSPORT_VERIFICATION**
     *
     * * **PAYOUT_METHOD_VERIFICATION**: Used in v6 and later.
     *
     * * **PCI_VERIFICATION**
     */
    type: KYCCheckStatusDataTypeEnum;
}
