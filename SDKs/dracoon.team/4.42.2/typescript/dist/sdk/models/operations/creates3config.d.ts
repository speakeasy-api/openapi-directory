import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateS3ConfigRequest extends SpeakeasyBase {
    s3ConfigCreateRequest: shared.S3ConfigCreateRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class CreateS3ConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Created
     */
    s3Config?: shared.S3Config;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
