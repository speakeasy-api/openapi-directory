import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadDocumentRequest extends SpeakeasyBase {
    id: number;
}
export declare class DownloadDocumentResponse extends SpeakeasyBase {
    /**
     * Document PDF has not generated yet. You should try to download again later.
     */
    clientError?: shared.ClientError;
    /**
     * The request is malformed.
     */
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    /**
     * Document PDF file.
     */
    downloadDocument200ApplicationPdfBinaryString?: Uint8Array;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Internal server error.
     */
    serverErrorResponse?: shared.ServerErrorResponse;
    /**
     * Validation errors occured.
     */
    validationErrorResponse?: shared.ValidationErrorResponse;
}
