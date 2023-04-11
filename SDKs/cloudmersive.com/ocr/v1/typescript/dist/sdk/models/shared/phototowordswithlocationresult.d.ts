import { SpeakeasyBase } from "../../../internal/utils";
import { OcrPhotoTextElement } from "./ocrphototextelement";
/**
 * Result of an photo to words-with-location OCR operation
 */
export declare class PhotoToWordsWithLocationResult extends SpeakeasyBase {
    /**
     * Typically null.  To analyze OCR performance, enable diagnostic mode by adding the HTTP header "DiagnosticMode" with the value "true".  When this is true, a diagnostic image showing the details of the OCR result will be set in PNG format into DiagnosticImage.
     */
    diagnosticImage?: string;
    /**
     * True if successful, false otherwise
     */
    successful?: boolean;
    /**
     * Word elements in the image
     */
    textElements?: OcrPhotoTextElement[];
}
