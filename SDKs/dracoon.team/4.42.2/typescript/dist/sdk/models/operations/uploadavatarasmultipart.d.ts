import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadAvatarAsMultipartRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UploadAvatarAsMultipartRequestBody extends SpeakeasyBase {
    /**
     * File
     */
    file: UploadAvatarAsMultipartRequestBodyFile;
}
export declare class UploadAvatarAsMultipartRequest extends SpeakeasyBase {
    requestBody?: UploadAvatarAsMultipartRequestBody;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class UploadAvatarAsMultipartResponse extends SpeakeasyBase {
    /**
     * Created
     */
    avatar?: shared.Avatar;
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
