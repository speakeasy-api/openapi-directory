import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduleConfig } from "./scheduleconfig";
/**
 * The configuration that consists of the <code>ScheduleExpression</code> and the <code>DurationInMinutesdetails</code>, that specify the scheduling to record from a camera, or local media file, onto the Edge Agent. If the <code>ScheduleExpression</code> is not provided, then the Edge Agent will always be in upload mode.
 */
export declare class UploaderConfig extends SpeakeasyBase {
    scheduleConfig: ScheduleConfig;
}
