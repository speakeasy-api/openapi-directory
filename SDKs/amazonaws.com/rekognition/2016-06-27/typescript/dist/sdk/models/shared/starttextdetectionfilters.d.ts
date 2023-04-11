import { SpeakeasyBase } from "../../../internal/utils";
import { DetectionFilter } from "./detectionfilter";
import { RegionOfInterest } from "./regionofinterest";
/**
 * Set of optional parameters that let you set the criteria text must meet to be included in your response. <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the screen to look for text in.
 */
export declare class StartTextDetectionFilters extends SpeakeasyBase {
    regionsOfInterest?: RegionOfInterest[];
    wordFilter?: DetectionFilter;
}
