import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadDocumentPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DownloadDocumentRequest extends SpeakeasyBase {
    pathParams: DownloadDocumentPathParams;
}
export declare class DownloadDocumentResponse extends SpeakeasyBase {
    clientError?: shared.ClientError;
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    downloadDocument200ApplicationPdfBinaryString?: Uint8Array;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
