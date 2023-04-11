import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateFileUploadChannelRequest extends SpeakeasyBase {
    createFileUploadRequest: shared.CreateFileUploadRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class CreateFileUploadChannelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    createFileUploadResponse?: shared.CreateFileUploadResponse;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
