import { SpeakeasyBase } from "../../../internal/utils";
import { Detection } from "./detection";
/**
 * Success
 */
export declare class ListResourceProfileDetectionsResponse extends SpeakeasyBase {
    detections?: Detection[];
    nextToken?: string;
}
