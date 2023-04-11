import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateS3ConfigRequest extends SpeakeasyBase {
    s3ConfigUpdateRequest: shared.S3ConfigUpdateRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class UpdateS3ConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    s3Config?: shared.S3Config;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
