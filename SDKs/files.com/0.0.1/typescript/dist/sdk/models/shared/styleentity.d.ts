import { SpeakeasyBase } from "../../../internal/utils";
import { ImageEntity } from "./imageentity";
/**
 * Show Style
 */
export declare class StyleEntity extends SpeakeasyBase {
    /**
     * Style ID
     */
    id?: number;
    logo?: ImageEntity;
    /**
     * Folder path
     */
    path?: string;
    thumbnail?: ImageEntity;
}
