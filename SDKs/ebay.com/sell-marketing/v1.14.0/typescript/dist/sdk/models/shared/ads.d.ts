import { SpeakeasyBase } from "../../../internal/utils";
import { Ad } from "./ad";
/**
 * This type defines the container for an array of ads.
 */
export declare class Ads extends SpeakeasyBase {
    /**
     * A list of ad IDs. An ad ID is generated for each successfully created ad.
     */
    ads?: Ad[];
}
