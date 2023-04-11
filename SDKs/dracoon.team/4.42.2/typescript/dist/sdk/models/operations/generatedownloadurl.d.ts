import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenerateDownloadUrlRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * File ID
     */
    fileId: number;
}
export declare class GenerateDownloadUrlResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    downloadTokenGenerateResponse?: shared.DownloadTokenGenerateResponse;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
