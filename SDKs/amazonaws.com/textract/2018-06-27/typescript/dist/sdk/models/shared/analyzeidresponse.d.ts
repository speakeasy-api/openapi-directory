import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentMetadata } from "./documentmetadata";
import { IdentityDocument } from "./identitydocument";
/**
 * Success
 */
export declare class AnalyzeIDResponse extends SpeakeasyBase {
    analyzeIDModelVersion?: string;
    /**
     * Information about the input document.
     */
    documentMetadata?: DocumentMetadata;
    identityDocuments?: IdentityDocument[];
}
