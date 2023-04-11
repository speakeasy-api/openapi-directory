import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelFileUploadViaShareRequest extends SpeakeasyBase {
    /**
     * Access key
     */
    accessKey: string;
    /**
     * Upload channel ID
     */
    uploadId: string;
}
export declare class CancelFileUploadViaShareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
