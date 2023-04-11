import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of Terms of Service.
 */
export declare enum GetTermsOfServiceDocumentRequestTypeEnum {
    AdyenAccount = "adyenAccount",
    AdyenCapital = "adyenCapital",
    AdyenCard = "adyenCard",
    AdyenForPlatformsAdvanced = "adyenForPlatformsAdvanced",
    AdyenForPlatformsManage = "adyenForPlatformsManage",
    AdyenFranchisee = "adyenFranchisee",
    AdyenIssuing = "adyenIssuing"
}
export declare class GetTermsOfServiceDocumentRequest extends SpeakeasyBase {
    /**
     * The language to be used for the Terms of Service document, specified by the two letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. For example, **nl** for Dutch.
     */
    language?: string;
    /**
     * The type of Terms of Service.
     */
    type?: GetTermsOfServiceDocumentRequestTypeEnum;
}
