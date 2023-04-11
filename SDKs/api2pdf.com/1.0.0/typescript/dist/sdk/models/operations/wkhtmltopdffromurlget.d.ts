import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WkhtmltopdfFromUrlGETSecurity extends SpeakeasyBase {
    queryApiKey: string;
}
export declare class WkhtmltopdfFromUrlGETRequest extends SpeakeasyBase {
    /**
     * Specify output=json to receive a JSON output. Defaults to PDF file.
     */
    output?: string;
    /**
     * Url of the page to convert to PDF. Must start with http:// or https://.
     */
    url: string;
}
export declare class WkhtmltopdfFromUrlGETResponse extends SpeakeasyBase {
    /**
     * Failed to generate PDF
     */
    apiResponseFailure?: shared.ApiResponseFailure;
    /**
     * A PDF file or a JSON object depending on the `output` query parameter
     */
    apiResponseSuccess?: shared.ApiResponseSuccess;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A PDF file or a JSON object depending on the `output` query parameter
     */
    wkhtmltopdfFromUrlGET200ApplicationPdfBinaryString?: Uint8Array;
}
