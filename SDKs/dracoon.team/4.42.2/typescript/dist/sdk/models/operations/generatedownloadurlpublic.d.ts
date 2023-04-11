import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenerateDownloadUrlPublicRequest extends SpeakeasyBase {
    publicDownloadTokenGenerateRequest?: shared.PublicDownloadTokenGenerateRequest;
    /**
     * Access key
     */
    accessKey: string;
}
export declare class GenerateDownloadUrlPublicResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Created
     */
    publicDownloadTokenGenerateResponse?: shared.PublicDownloadTokenGenerateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
