import { SpeakeasyBase } from "../../../internal/utils";
import { Layer } from "./layer";
/**
 * Status of the image
 */
export declare enum ImageStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class Image extends SpeakeasyBase {
    /**
     * CPU architecture
     */
    architecture?: string;
    /**
     * image digest
     */
    digest?: string;
    /**
     * CPU features
     */
    features?: string;
    /**
     * datetime of last pull
     */
    lastPulled?: string;
    /**
     * datetime of last push
     */
    lastPushed?: string;
    layers?: Layer[];
    /**
     * operating system
     */
    os?: string;
    /**
     * OS features
     */
    osFeatures?: string;
    /**
     * OS version
     */
    osVersion?: string;
    /**
     * size of the image
     */
    size?: number;
    /**
     * Status of the image
     */
    status?: ImageStatusEnum;
    /**
     * CPU variant
     */
    variant?: string;
}
