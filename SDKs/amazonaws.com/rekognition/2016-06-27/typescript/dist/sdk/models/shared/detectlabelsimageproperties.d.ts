import { SpeakeasyBase } from "../../../internal/utils";
import { DetectLabelsImageBackground } from "./detectlabelsimagebackground";
import { DetectLabelsImageForeground } from "./detectlabelsimageforeground";
import { DetectLabelsImageQuality } from "./detectlabelsimagequality";
import { DominantColor } from "./dominantcolor";
/**
 * Information about the quality and dominant colors of an input image. Quality and color information is returned for the entire image, foreground, and background.
 */
export declare class DetectLabelsImageProperties extends SpeakeasyBase {
    background?: DetectLabelsImageBackground;
    dominantColors?: DominantColor[];
    foreground?: DetectLabelsImageForeground;
    quality?: DetectLabelsImageQuality;
}
