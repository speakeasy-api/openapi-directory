import { SpeakeasyBase } from "../../../internal/utils";
import { Point } from "./point";
/**
 * A single text in an OCR document
 */
export declare class OcrPhotoTextElement extends SpeakeasyBase {
    /**
     * Points that form the bounding polygon around the text
     */
    boundingPoints?: Point[];
    /**
     * Confidence level of the machine learning result; possible values are 0.0 (lowest accuracy) - 1.0 (highest accuracy)
     */
    confidenceLevel?: number;
    /**
     * Height of the word in pixels
     */
    height?: number;
    /**
     * Text of the word
     */
    text?: string;
    /**
     * Width of the word in pixels
     */
    width?: number;
    /**
     * X location of the left edge of the word in pixels
     */
    xLeft?: number;
    /**
     * Y location of the top edge of the word in pixels
     */
    yTop?: number;
}
