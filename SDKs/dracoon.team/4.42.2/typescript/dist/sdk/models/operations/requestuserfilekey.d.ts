import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestUserFileKeyRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * File ID
     */
    fileId: number;
    /**
     * Version (NEW)
     */
    version?: string;
}
export declare class RequestUserFileKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    fileKey?: shared.FileKey;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
