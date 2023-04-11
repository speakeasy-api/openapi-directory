import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of Terms of Service.
 */
export declare enum AcceptTermsOfServiceResponseTypeEnum {
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
export declare class AcceptTermsOfServiceResponse extends SpeakeasyBase {
    /**
     * The unique identifier of the user that accepted the Terms of Service.
     */
    acceptedBy?: string;
    /**
     * The unique identifier of the Terms of Service acceptance.
     */
    id?: string;
    /**
     * The IP address of the user that accepted the Terms of Service.
     */
    ipAddress?: string;
    /**
     * The language used for the Terms of Service document, specified by the two letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. For example, **nl** for Dutch.
     */
    language?: string;
    /**
     * The unique identifier of the Terms of Service document.
     */
    termsOfServiceDocumentId?: string;
    /**
     * The type of Terms of Service.
     */
    type?: AcceptTermsOfServiceResponseTypeEnum;
}
