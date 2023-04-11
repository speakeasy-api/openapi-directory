import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GeneratePresignedUrlsFilesRequest extends SpeakeasyBase {
    generatePresignedUrlsRequest: shared.GeneratePresignedUrlsRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Upload channel ID
     */
    uploadId: string;
}
export declare class GeneratePresignedUrlsFilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Created
     */
    presignedUrlList?: shared.PresignedUrlList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
