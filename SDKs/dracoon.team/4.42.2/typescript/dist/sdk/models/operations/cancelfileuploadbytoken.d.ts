import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelFileUploadByTokenRequest extends SpeakeasyBase {
    /**
     * Upload token
     */
    token: string;
}
export declare class CancelFileUploadByTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
