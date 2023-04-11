import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:
 *
 * @remarks
 * - `urls` *(array of urls, required)* - A JSON array of direct URLs to PDFs. Api2Pdf will consume the PDF files in the list and then merge them all together..
 * - `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.
 * - `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.
 */
export declare class MergeRequest extends SpeakeasyBase {
    fileName?: string;
    inlinePdf?: boolean;
    urls: string[];
}
