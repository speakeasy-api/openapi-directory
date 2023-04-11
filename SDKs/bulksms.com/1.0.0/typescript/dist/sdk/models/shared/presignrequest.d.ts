import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the file to upload
 */
export declare class PreSignRequest extends SpeakeasyBase {
    /**
     * The extension of the file.  Usually related to the media type.
     */
    fileExtension?: string;
    /**
     * The media type of the file you would like to upload.  If you are not sure what value to use here, check out the standard [list of media types](https://www.iana.org/assignments/media-types/media-types.xhtml).
     */
    mediaType?: string;
}
