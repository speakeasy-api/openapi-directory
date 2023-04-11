import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesIdDocumentsDownloadSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
/**
 * Documents to archive
 */
export declare class PostSpacesIdDocumentsDownloadRequestBody extends SpeakeasyBase {
    documentId: string[];
}
export declare class PostSpacesIdDocumentsDownloadRequest extends SpeakeasyBase {
    /**
     * Documents to archive
     */
    requestBody: PostSpacesIdDocumentsDownloadRequestBody;
    /**
     * Id of the space
     */
    id: string;
}
/**
 * Zip file base64 encoded
 */
export declare class PostSpacesIdDocumentsDownload201MultipartFormData extends SpeakeasyBase {
    zipFile?: Uint8Array;
}
/**
 * Zip file base64 encoded
 */
export declare class PostSpacesIdDocumentsDownload201ApplicationJSON extends SpeakeasyBase {
    zipFile?: string;
}
export declare class PostSpacesIdDocumentsDownloadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Zip file base64 encoded
     */
    postSpacesIdDocumentsDownload201ApplicationJSONObject?: PostSpacesIdDocumentsDownload201ApplicationJSON;
}
