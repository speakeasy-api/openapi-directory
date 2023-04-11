import { SpeakeasyBase } from "../../../internal/utils";
import { NormalizedValue } from "./normalizedvalue";
/**
 * Used to contain the information detected by an AnalyzeID operation.
 */
export declare class AnalyzeIDDetections extends SpeakeasyBase {
    confidence?: number;
    normalizedValue?: NormalizedValue;
    text: string;
}
