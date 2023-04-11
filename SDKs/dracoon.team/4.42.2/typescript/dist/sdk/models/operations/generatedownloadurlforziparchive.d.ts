import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenerateDownloadUrlForZipArchiveRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    zipDownloadRequest: shared.ZipDownloadRequest;
}
export declare class GenerateDownloadUrlForZipArchiveResponse extends SpeakeasyBase {
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
