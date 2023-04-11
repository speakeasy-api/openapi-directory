import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum CreateUploadRequestBodyTypeEnum {
    Avatar = "avatar",
    ProfileBackground = "profile_background",
    CardBackground = "card_background",
    CustomEmoji = "custom_emoji",
    Composer = "composer"
}
export declare class CreateUploadRequestBody extends SpeakeasyBase {
    file?: any;
    /**
     * Use this flag to return an id and url
     */
    synchronous?: boolean;
    type: CreateUploadRequestBodyTypeEnum;
    /**
     * required if uploading an avatar
     */
    userId?: number;
}
/**
 * file uploaded
 */
export declare class CreateUpload200ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * file uploaded
     */
    createUpload200ApplicationJSONObject?: CreateUpload200ApplicationJSON;
}
