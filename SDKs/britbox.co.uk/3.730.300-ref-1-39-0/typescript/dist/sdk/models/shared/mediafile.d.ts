import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The way in which the media file is delivered.
 */
export declare enum MediaFileDeliveryTypeEnum {
    Stream = "Stream",
    Progressive = "Progressive",
    Download = "Download"
}
/**
 * The resolution of the video media.
 */
export declare enum MediaFileResolutionEnum1 {
    Sd = "SD",
    Hd720 = "HD-720",
    Hd1080 = "HD-1080",
    Hd4K = "HD-4K",
    External = "External",
    Unknown = "Unknown"
}
export declare class MediaFile extends SpeakeasyBase {
    /**
     * The number of audio channels.
     */
    channels?: number;
    /**
     * The way in which the media file is delivered.
     */
    deliveryType: MediaFileDeliveryTypeEnum;
    /**
     * The type of drm used to encrypt the media. 'None' if unencrypted.
     */
    drm: string;
    /**
     * The format the media was encoded in.
     */
    format: string;
    /**
     * The height of the video media.
     */
    height: number;
    /**
     * The language code for the media, e.g. 'en'.
     */
    language: string;
    /**
     * The name of the media file.
     */
    name: string;
    /**
     * The resolution of the video media.
     */
    resolution: MediaFileResolutionEnum1;
    /**
     * The url to access the media file.
     */
    url: string;
    /**
     * The width of the video media.
     */
    width: number;
}
