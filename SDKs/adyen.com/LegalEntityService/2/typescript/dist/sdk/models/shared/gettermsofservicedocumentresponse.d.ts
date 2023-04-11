import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of Terms of Service.
 */
export declare enum GetTermsOfServiceDocumentResponseTypeEnum {
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
export declare class GetTermsOfServiceDocumentResponse extends SpeakeasyBase {
    /**
     * The Terms of Service document in Base64-encoded format.
     */
    document?: string;
    /**
     * The unique identifier of the legal entity.
     */
    id?: string;
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
    type?: GetTermsOfServiceDocumentResponseTypeEnum;
}
