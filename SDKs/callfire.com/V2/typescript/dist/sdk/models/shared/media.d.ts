import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a media file which can be added to a text message
 */
export declare class Media extends SpeakeasyBase {
    /**
     * ~
     */
    accountId?: number;
    /**
     * The time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000
     */
    created?: number;
    /**
     * An id of a media file
     */
    id?: number;
    /**
     * A size of a media file in bytes
     */
    lengthInBytes?: number;
    /**
     * A MIME type of media file, ex: image/jpeg, image/png, video/mp4, audio/mp3, etc
     */
    mediaType?: string;
    /**
     * A name of a media file
     */
    name?: string;
    /**
     * A public URL of a media file
     */
    publicUrl?: string;
}
