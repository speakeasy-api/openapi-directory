import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
import { DominantColor } from "./dominantcolor";
/**
 * An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>) or by Amazon Rekognition Video (<a>GetLabelDetection</a>).
 */
export declare class Instance extends SpeakeasyBase {
    boundingBox?: BoundingBox;
    confidence?: number;
    dominantColors?: DominantColor[];
}
