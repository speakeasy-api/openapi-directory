import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response from an OCR to text operation.  Includes the confience rating and converted text result.
 */
export declare class ImageToTextResponse extends SpeakeasyBase {
    /**
     * Confidence level rating of the OCR operation; ratings above 80% are strong.
     */
    meanConfidenceLevel?: number;
    /**
     * Converted text string from the image input.
     */
    textResult?: string;
}
