import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompleteS3FileUploadRequest extends SpeakeasyBase {
    completeS3FileUploadRequest: shared.CompleteS3FileUploadRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Upload channel ID
     */
    uploadId: string;
}
export declare class CompleteS3FileUploadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
