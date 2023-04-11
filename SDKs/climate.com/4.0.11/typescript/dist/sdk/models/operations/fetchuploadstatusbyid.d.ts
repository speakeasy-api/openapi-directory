import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchUploadStatusByIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2AuthorizationCode?: string;
}
export declare class FetchUploadStatusByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier of an Upload.
     */
    uploadId: string;
}
export declare class FetchUploadStatusByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Input
     */
    error?: shared.ErrorT;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    uploadStatus?: shared.UploadStatus;
}
