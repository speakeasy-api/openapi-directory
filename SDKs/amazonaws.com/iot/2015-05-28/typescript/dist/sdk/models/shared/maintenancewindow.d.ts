import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional configuration within the <code>SchedulingConfig</code> to setup a recurring maintenance window with a predetermined start time and duration for the rollout of a job document to all devices in a target group for a job.
 */
export declare class MaintenanceWindow extends SpeakeasyBase {
    durationInMinutes: number;
    startTime: string;
}
