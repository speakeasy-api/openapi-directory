import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of Terms of Service.
 */
export declare enum TermsOfServiceAcceptanceInfoTypeEnum {
    AdyenAccount = "adyenAccount",
    AdyenCapital = "adyenCapital",
    AdyenCard = "adyenCard",
    AdyenForPlatformsAdvanced = "adyenForPlatformsAdvanced",
    AdyenForPlatformsManage = "adyenForPlatformsManage",
    AdyenFranchisee = "adyenFranchisee",
    AdyenIssuing = "adyenIssuing"
}
export declare class TermsOfServiceAcceptanceInfo extends SpeakeasyBase {
    /**
     * The unique identifier of the user that accepted the Terms of Service.
     */
    acceptedBy?: string;
    /**
     * The unique identifier of the legal entity for which the Terms of Service are accepted.
     */
    acceptedFor?: string;
    /**
     * The date when the Terms of Service were accepted.
     */
    createdAt?: Date;
    /**
     * An Adyen-generated reference for the accepted Terms of Service.
     */
    id?: string;
    /**
     * The type of Terms of Service.
     */
    type?: TermsOfServiceAcceptanceInfoTypeEnum;
}
