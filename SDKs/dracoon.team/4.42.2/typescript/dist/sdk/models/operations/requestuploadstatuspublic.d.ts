import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestUploadStatusPublicRequest extends SpeakeasyBase {
    /**
     * Access key
     */
    accessKey: string;
    /**
     * Upload channel ID
     */
    uploadId: string;
}
export declare class RequestUploadStatusPublicResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    s3ShareUploadStatus?: shared.S3ShareUploadStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
