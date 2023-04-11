import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
/**
 * whether a tag has been pushed to or pulled in the past month
 */
export declare enum TagStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * repository tag
 */
export declare class Tag extends SpeakeasyBase {
    /**
     * ID of the user that pushed the tag
     */
    creator?: number;
    /**
     * compressed size (sum of all layers) of the tagged image
     */
    fullSize?: number;
    /**
     * tag ID
     */
    id?: number;
    images?: Image;
    /**
     * datetime of last update
     */
    lastUpdated?: string;
    /**
     * ID of the last user that updated the tag
     */
    lastUpdater?: number;
    /**
     * Hub username of the user that updated the tag
     */
    lastUpdaterUsername?: string;
    /**
     * name of the tag
     */
    name?: string;
    /**
     * repository ID
     */
    repository?: number;
    /**
     * whether a tag has been pushed to or pulled in the past month
     */
    status?: TagStatusEnum;
    /**
     * datetime of last pull
     */
    tagLastPulled?: string;
    /**
     * datetime of last push
     */
    tagLastPushed?: string;
    /**
     * repository API version
     */
    v2?: string;
}
