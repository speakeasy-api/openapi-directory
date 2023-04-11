import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:
 *
 * @remarks
 * - `url` *(string, required)* - A direct URL to the file. Api2Pdf will consume the file at that URL and then convert it.
 * - `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.
 * - `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.
 */
export declare class LibreOfficeConvertRequest extends SpeakeasyBase {
    fileName?: string;
    inlinePdf?: boolean;
    url: string;
}
