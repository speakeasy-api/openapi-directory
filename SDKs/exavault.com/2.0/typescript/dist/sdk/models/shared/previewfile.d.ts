import { SpeakeasyBase } from "../../../internal/utils";
export declare class PreviewFileAttributes extends SpeakeasyBase {
    /**
     * Binary image content, base64 encoded.
     */
    image?: string;
    /**
     * hash of the image.
     */
    imageHash?: string;
    /**
     * Amount of pages available in the file. Used only for multipage documents.
     */
    pageCount?: number;
    /**
     * Size of the image in bytes.
     */
    size?: number;
}
/**
 * Object with preview image properties.
 */
export declare class PreviewFile extends SpeakeasyBase {
    attributes?: PreviewFileAttributes;
    id?: number;
    type?: string;
}
