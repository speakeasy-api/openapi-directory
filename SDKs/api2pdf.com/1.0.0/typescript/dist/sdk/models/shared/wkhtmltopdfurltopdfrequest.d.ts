import { SpeakeasyBase } from "../../../internal/utils";
import { WkHtmlToPdfAdvancedOptions } from "./wkhtmltopdfadvancedoptions";
/**
 * A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:
 *
 * @remarks
 * - `url` *(string, required)* - Url to the web page to convert to PDF
 * - `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.
 * - `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.
 * - `options` *(object, optional)* - Include advanced WkHtmlToPdf options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-wkhtmltopdf/).
 */
export declare class WkHtmlToPdfUrlToPdfRequest extends SpeakeasyBase {
    fileName?: string;
    inlinePdf?: boolean;
    options?: WkHtmlToPdfAdvancedOptions;
    url: string;
}
