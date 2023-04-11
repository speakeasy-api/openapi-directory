import { SpeakeasyBase } from "../../../internal/utils";
import { DetectLabelsImageQuality } from "./detectlabelsimagequality";
import { DominantColor } from "./dominantcolor";
/**
 * The background of the image with regard to image quality and dominant colors.
 */
export declare class DetectLabelsImageBackground extends SpeakeasyBase {
    dominantColors?: DominantColor[];
    quality?: DetectLabelsImageQuality;
}
