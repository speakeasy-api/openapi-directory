import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestSystemRescueKeyRequest extends SpeakeasyBase {
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
export declare class RequestSystemRescueKeyResponse extends SpeakeasyBase {
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
