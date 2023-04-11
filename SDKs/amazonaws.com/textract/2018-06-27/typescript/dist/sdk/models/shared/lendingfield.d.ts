import { SpeakeasyBase } from "../../../internal/utils";
import { LendingDetection } from "./lendingdetection";
/**
 * Holds the normalized key-value pairs returned by AnalyzeDocument, including the document type, detected text, and geometry.
 */
export declare class LendingField extends SpeakeasyBase {
    /**
     * The results extracted for a lending document.
     */
    keyDetection?: LendingDetection;
    type?: string;
    valueDetections?: LendingDetection[];
}
