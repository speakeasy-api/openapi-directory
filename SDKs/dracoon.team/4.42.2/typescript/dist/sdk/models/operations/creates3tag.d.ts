import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateS3TagRequest extends SpeakeasyBase {
    s3TagCreateRequest: shared.S3TagCreateRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class CreateS3TagResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Created
     */
    s3Tag?: shared.S3Tag;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
