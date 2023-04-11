import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadFileAsMultipartRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UploadFileAsMultipartRequestBody extends SpeakeasyBase {
    /**
     * File
     */
    file: UploadFileAsMultipartRequestBodyFile;
}
export declare class UploadFileAsMultipartRequest extends SpeakeasyBase {
    /**
     * Content-Range
     *
     * @remarks
     *
     * e.g. `bytes 0-999/3980`
     */
    contentRange?: string;
    requestBody?: UploadFileAsMultipartRequestBody;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Upload channel ID
     */
    uploadId: string;
}
export declare class UploadFileAsMultipartResponse extends SpeakeasyBase {
    /**
     * Created
     */
    chunkUploadResponse?: shared.ChunkUploadResponse;
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
