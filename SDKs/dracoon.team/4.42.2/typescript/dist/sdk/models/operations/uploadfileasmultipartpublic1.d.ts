import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadFileAsMultipartPublic1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UploadFileAsMultipartPublic1RequestBody extends SpeakeasyBase {
    /**
     * File
     */
    file: UploadFileAsMultipartPublic1RequestBodyFile;
}
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum UploadFileAsMultipartPublic1XSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class UploadFileAsMultipartPublic1Request extends SpeakeasyBase {
    /**
     * Content-Range
     *
     * @remarks
     *
     * e.g. `bytes 0-999/3980`
     */
    contentRange?: string;
    requestBody?: UploadFileAsMultipartPublic1RequestBody;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: UploadFileAsMultipartPublic1XSdsDateFormatEnum;
    /**
     * Access key
     */
    accessKey: string;
    /**
     * Upload channel ID
     */
    uploadId: string;
}
export declare class UploadFileAsMultipartPublic1Response extends SpeakeasyBase {
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
