import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadFileByTokenAsMultipart1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UploadFileByTokenAsMultipart1RequestBody extends SpeakeasyBase {
    /**
     * File
     */
    file: UploadFileByTokenAsMultipart1RequestBodyFile;
}
export declare class UploadFileByTokenAsMultipart1Request extends SpeakeasyBase {
    /**
     * Content-Range
     *
     * @remarks
     *
     * e.g. `bytes 0-999/3980`
     */
    contentRange?: string;
    requestBody?: UploadFileByTokenAsMultipart1RequestBody;
    /**
     * Upload token
     */
    token: string;
}
export declare class UploadFileByTokenAsMultipart1Response extends SpeakeasyBase {
    /**
     * OK
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
