import { SpeakeasyBase } from "../../../internal/utils";
import { LendingField } from "./lendingfield";
import { SignatureDetection } from "./signaturedetection";
/**
 * Holds the structured data returned by AnalyzeDocument for lending documents.
 */
export declare class LendingDocument extends SpeakeasyBase {
    lendingFields?: LendingField[];
    signatureDetections?: SignatureDetection[];
}
