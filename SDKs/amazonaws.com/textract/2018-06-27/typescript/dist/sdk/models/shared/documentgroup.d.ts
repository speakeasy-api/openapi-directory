import { SpeakeasyBase } from "../../../internal/utils";
import { DetectedSignature } from "./detectedsignature";
import { SplitDocument } from "./splitdocument";
import { UndetectedSignature } from "./undetectedsignature";
/**
 * Summary information about documents grouped by the same document type.
 */
export declare class DocumentGroup extends SpeakeasyBase {
    detectedSignatures?: DetectedSignature[];
    splitDocuments?: SplitDocument[];
    type?: string;
    undetectedSignatures?: UndetectedSignature[];
}
