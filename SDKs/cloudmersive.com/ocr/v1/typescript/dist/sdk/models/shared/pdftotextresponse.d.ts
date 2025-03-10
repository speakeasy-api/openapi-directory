import { SpeakeasyBase } from "../../../internal/utils";
import { OcrPageResult } from "./ocrpageresult";
/**
 * Response from an OCR to text operation.  Includes the confidence rating and converted text result.
 */
export declare class PdfToTextResponse extends SpeakeasyBase {
    /**
     * Page OCR results
     */
    ocrPages?: OcrPageResult[];
    /**
     * True if successful, false otherwise
     */
    successful?: boolean;
}
