import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Point location in 2D in an image, where 0, 0 represents the top/left corner of the image
 */
export declare class Point extends SpeakeasyBase {
    /**
     * X location in 2D in the image, where 0 represents the left edge of the image
     */
    x?: number;
    /**
     * Y location in 2D in the image, where 0 represents the top edge of the image
     */
    y?: number;
}
