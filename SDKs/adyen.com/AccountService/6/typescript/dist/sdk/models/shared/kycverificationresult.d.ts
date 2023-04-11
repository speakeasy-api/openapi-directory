import { SpeakeasyBase } from "../../../internal/utils";
import { KYCCheckResult } from "./kyccheckresult";
import { KYCLegalArrangementCheckResult } from "./kyclegalarrangementcheckresult";
import { KYCLegalArrangementEntityCheckResult } from "./kyclegalarrangemententitycheckresult";
import { KYCPayoutMethodCheckResult } from "./kycpayoutmethodcheckresult";
import { KYCShareholderCheckResult } from "./kycshareholdercheckresult";
import { KYCSignatoryCheckResult } from "./kycsignatorycheckresult";
import { KYCUltimateParentCompanyCheckResult } from "./kycultimateparentcompanycheckresult";
export declare class KYCVerificationResult extends SpeakeasyBase {
    accountHolder?: KYCCheckResult;
    /**
     * The results of the checks on the legal arrangements.
     */
    legalArrangements?: KYCLegalArrangementCheckResult[];
    /**
     * The results of the checks on the legal arrangement entities.
     */
    legalArrangementsEntities?: KYCLegalArrangementEntityCheckResult[];
    /**
     * The results of the checks on the payout methods.
     */
    payoutMethods?: KYCPayoutMethodCheckResult[];
    /**
     * The results of the checks on the shareholders.
     */
    shareholders?: KYCShareholderCheckResult[];
    /**
     * The results of the checks on the signatories.
     */
    signatories?: KYCSignatoryCheckResult[];
    /**
     * The result of the check on the Ultimate Parent Company.
     */
    ultimateParentCompany?: KYCUltimateParentCompanyCheckResult[];
}
