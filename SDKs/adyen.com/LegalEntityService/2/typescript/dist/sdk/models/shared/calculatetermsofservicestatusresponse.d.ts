import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CalculateTermsOfServiceStatusResponseTermsOfServiceTypesEnum {
    AdyenAccount = "adyenAccount",
    AdyenCapital = "adyenCapital",
    AdyenCard = "adyenCard",
    AdyenForPlatformsAdvanced = "adyenForPlatformsAdvanced",
    AdyenForPlatformsManage = "adyenForPlatformsManage",
    AdyenFranchisee = "adyenFranchisee",
    AdyenIssuing = "adyenIssuing"
}
/**
 * OK - the request has succeeded.
 */
export declare class CalculateTermsOfServiceStatusResponse extends SpeakeasyBase {
    /**
     * The type of Terms of Service that the legal entity needs to accept. If empty, no Terms of Service needs to be accepted.
     */
    termsOfServiceTypes?: CalculateTermsOfServiceStatusResponseTermsOfServiceTypesEnum[];
}
