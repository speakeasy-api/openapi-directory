import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the specific inference event, including start and end time, diagnostics information, event duration and so on.
 */
export declare class InferenceEventSummary extends SpeakeasyBase {
    diagnostics?: string;
    eventDurationInSeconds?: number;
    eventEndTime?: Date;
    eventStartTime?: Date;
    inferenceSchedulerArn?: string;
    inferenceSchedulerName?: string;
}
