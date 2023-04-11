import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestS3TagRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * S3 tag ID
     */
    id: number;
}
export declare class RequestS3TagResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    s3Tag?: shared.S3Tag;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
