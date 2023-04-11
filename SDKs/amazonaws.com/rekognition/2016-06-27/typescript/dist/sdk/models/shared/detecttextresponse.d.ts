import { SpeakeasyBase } from "../../../internal/utils";
import { TextDetection } from "./textdetection";
/**
 * Success
 */
export declare class DetectTextResponse extends SpeakeasyBase {
    textDetections?: TextDetection[];
    textModelVersion?: string;
}
