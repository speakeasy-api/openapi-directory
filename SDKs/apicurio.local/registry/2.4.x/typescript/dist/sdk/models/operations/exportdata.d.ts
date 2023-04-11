import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportDataRequest extends SpeakeasyBase {
    /**
     * Indicates if the operation is done for a browser.  If true, the response will be a JSON payload with a property called `href`.  This `href` will be a single-use, naked download link suitable for use by a web browser to download the content.
     */
    forBrowser?: boolean;
}
export declare class ExportDataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response when the export is successful.
     */
    downloadRef?: shared.DownloadRef;
    /**
     * Common response for all operations that can fail with an unexpected server error.
     */
    error?: shared.ErrorT;
    /**
     * Response when the export is successful.
     */
    fileContent?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
