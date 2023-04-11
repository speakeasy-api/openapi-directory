import { SpeakeasyBase } from "../../../internal/utils";
export declare class OcrPageResult extends SpeakeasyBase {
    /**
     * Confidence level rating of the OCR operation; ratings above 80% are strong.
     */
    meanConfidenceLevel?: number;
    /**
     * Page number of the page that was OCR-ed, starting with 1 for the first page in the PDF file
     */
    pageNumber?: number;
    /**
     * Converted text string from the image input.
     */
    textResult?: string;
}
