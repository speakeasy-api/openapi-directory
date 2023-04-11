import { SpeakeasyBase } from "../../../internal/utils";
import { OcrWordElement } from "./ocrwordelement";
/**
 * OCR results of a page, including words of text and their location
 */
export declare class OcrPageResultWithWordsWithLocation extends SpeakeasyBase {
    /**
     * Page number of the page that was OCR-ed, starting with 1 for the first page in the PDF file
     */
    pageNumber?: number;
    /**
     * True if successful, false otherwise
     */
    successful?: boolean;
    /**
     * Word elements in the image
     */
    words?: OcrWordElement[];
}
