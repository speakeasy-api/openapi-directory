import { SpeakeasyBase } from "../../../internal/utils";
import { OcrWordElement } from "./ocrwordelement";
/**
 * Result of an image to words-with-location OCR operation
 */
export declare class ImageToWordsWithLocationResult extends SpeakeasyBase {
    /**
     * True if successful, false otherwise
     */
    successful?: boolean;
    /**
     * Word elements in the image
     */
    words?: OcrWordElement[];
}
