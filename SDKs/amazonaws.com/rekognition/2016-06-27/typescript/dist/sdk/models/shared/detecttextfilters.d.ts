import { SpeakeasyBase } from "../../../internal/utils";
import { DetectionFilter } from "./detectionfilter";
import { RegionOfInterest } from "./regionofinterest";
/**
 * A set of optional parameters that you can use to set the criteria that the text must meet to be included in your response. <code>WordFilter</code> looks at a word’s height, width, and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the image to look for text in.
 */
export declare class DetectTextFilters extends SpeakeasyBase {
    regionsOfInterest?: RegionOfInterest[];
    /**
     * A set of parameters that allow you to filter out certain results from your returned results.
     */
    wordFilter?: DetectionFilter;
}
