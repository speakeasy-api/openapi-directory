import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUploadSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2AuthorizationCode?: string;
}
export declare class PostUploadRequest extends SpeakeasyBase {
    upload?: shared.Upload;
    /**
     * Email address associated with a Climate account, used when to sending to another user.
     */
    xRecipientEmail?: string;
}
export declare class PostUploadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Returns a new upload with ID used to PUT file contents.
     */
    createdUpload?: string;
    /**
     * Bad Input
     */
    error?: shared.ErrorT;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
