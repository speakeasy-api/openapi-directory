import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompleteMultipartRequestBody extends SpeakeasyBase {
    /**
     * All of the part numbers and their corresponding ETags
     *
     * @remarks
     * that have been uploaded must be provided.
     */
    parts: any[];
    /**
     * The unique identifier returned in the original /create-multipart
     *
     * @remarks
     * request.
     */
    uniqueIdentifier: string;
}
/**
 * external upload initialized
 */
export declare class CompleteMultipart200ApplicationJSON extends SpeakeasyBase {
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
export declare class CompleteMultipartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * external upload initialized
     */
    completeMultipart200ApplicationJSONObject?: CompleteMultipart200ApplicationJSON;
}
