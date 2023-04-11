import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompleteS3FileUploadViaShareRequest extends SpeakeasyBase {
    completeS3ShareUploadRequest: shared.CompleteS3ShareUploadRequest;
    /**
     * Access key
     */
    accessKey: string;
    /**
     * Upload channel ID
     */
    uploadId: string;
}
export declare class CompleteS3FileUploadViaShareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
