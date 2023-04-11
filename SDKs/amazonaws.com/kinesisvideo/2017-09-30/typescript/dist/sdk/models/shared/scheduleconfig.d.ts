import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>This API enables you to specify the duration that the camera, or local media file, should record onto the Edge Agent. The <code>ScheduleConfig</code> consists of the <code>ScheduleExpression</code> and the <code>DurationInMinutes</code> attributes. </p> <p>If the <code>ScheduleExpression</code> is not provided, then the Edge Agent will always be set to recording mode.</p>
 */
export declare class ScheduleConfig extends SpeakeasyBase {
    durationInSeconds: number;
    scheduleExpression: string;
}
