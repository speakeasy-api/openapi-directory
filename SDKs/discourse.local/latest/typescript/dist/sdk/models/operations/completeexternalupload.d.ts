import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompleteExternalUploadRequestBody extends SpeakeasyBase {
    /**
     * Optionally set this to true if the upload is for a
     *
     * @remarks
     * private message.
     */
    forPrivateMessage?: string;
    /**
     * Optionally set this to true if the upload is for a
     *
     * @remarks
     * site setting.
     */
    forSiteSetting?: string;
    /**
     * Optionally set this to true if the upload was pasted
     *
     * @remarks
     * into the upload area. This will convert PNG files to JPEG.
     */
    pasted?: string;
    /**
     * The unique identifier returned in the original /generate-presigned-put
     *
     * @remarks
     * request.
     */
    uniqueIdentifier: string;
}
/**
 * external upload initialized
 */
export declare class CompleteExternalUpload200ApplicationJSON extends SpeakeasyBase {
    dominantColor?: string;
    extension: string;
    filesize: number;
    height: number;
    humanFilesize: string;
    id: number;
    originalFilename: string;
    retainHours: string;
    shortPath: string;
    shortUrl: string;
    thumbnailHeight: number;
    thumbnailWidth: number;
    url: string;
    width: number;
}
export declare class CompleteExternalUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * external upload initialized
     */
    completeExternalUpload200ApplicationJSONObject?: CompleteExternalUpload200ApplicationJSON;
}
