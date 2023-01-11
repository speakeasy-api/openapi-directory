import { SpeakeasyBase } from "../../../internal/utils";
export declare class PreviewFileAttributes extends SpeakeasyBase {
    image?: string;
    imageHash?: string;
    pageCount?: number;
    size?: number;
}
/**
 * Object with preview image properties.
**/
export declare class PreviewFile extends SpeakeasyBase {
    attributes?: PreviewFileAttributes;
    id?: number;
    type?: string;
}
