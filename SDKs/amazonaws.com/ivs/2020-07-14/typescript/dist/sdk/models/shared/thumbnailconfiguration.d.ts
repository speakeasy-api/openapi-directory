import { SpeakeasyBase } from "../../../internal/utils";
import { RecordingModeEnum } from "./recordingmodeenum";
/**
 * An object representing a configuration of thumbnails for recorded video.
 */
export declare class ThumbnailConfiguration extends SpeakeasyBase {
    recordingMode?: RecordingModeEnum;
    targetIntervalSeconds?: number;
}
