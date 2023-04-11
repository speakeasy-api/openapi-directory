import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single word in an OCR document
 */
export declare class OcrWordElement extends SpeakeasyBase {
    /**
     * Index of the containing block
     */
    blockNumber?: number;
    /**
     * Confidence level of the machine learning result; possible values are 0.0 (lowest accuracy) - 1.0 (highest accuracy)
     */
    confidenceLevel?: number;
    /**
     * Height of the word in pixels
     */
    height?: number;
    /**
     * Line number of the word
     */
    lineNumber?: number;
    /**
     * Index of the containing page
     */
    pageNumber?: number;
    /**
     * Index of the containing paragraph
     */
    paragraphNumber?: number;
    /**
     * Width of the word in pixels
     */
    width?: number;
    /**
     * Index of the word in the line
     */
    wordNumber?: number;
    /**
     * Text of the word
     */
    wordText?: string;
    /**
     * X location of the left edge of the word in pixels
     */
    xLeft?: number;
    /**
     * Y location of the top edge of the word in pixels
     */
    yTop?: number;
}
