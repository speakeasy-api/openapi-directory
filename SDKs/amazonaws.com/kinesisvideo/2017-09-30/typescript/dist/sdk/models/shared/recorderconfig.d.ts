import { SpeakeasyBase } from "../../../internal/utils";
import { MediaSourceConfig } from "./mediasourceconfig";
import { ScheduleConfig } from "./scheduleconfig";
/**
 * The recorder configuration consists of the local <code>MediaSourceConfig</code> details that are used as credentials to accesss the local media files streamed on the camera.
 */
export declare class RecorderConfig extends SpeakeasyBase {
    mediaSourceConfig: MediaSourceConfig;
    scheduleConfig?: ScheduleConfig;
}
