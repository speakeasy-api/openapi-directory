import { SpeakeasyBase } from "../../../internal/utils";
import { KYCBankAccountCheckResult } from "./kycbankaccountcheckresult";
import { KYCCheckResult } from "./kyccheckresult";
import { KYCShareholderCheckResult } from "./kycshareholdercheckresult";
import { KYCSignatoryCheckResult } from "./kycsignatorycheckresult";
export declare class KYCVerificationResult extends SpeakeasyBase {
    accountHolder?: KYCCheckResult;
    /**
     * The results of the checks on the bank accounts.
     */
    bankAccounts?: KYCBankAccountCheckResult[];
    /**
     * The results of the checks on the shareholders.
     */
    shareholders?: KYCShareholderCheckResult[];
    /**
     * The results of the checks on the signatories.
     */
    signatories?: KYCSignatoryCheckResult[];
}
