import { SpeakeasyBase } from "../../../internal/utils";
import { JobEndBehaviorEnum } from "./jobendbehaviorenum";
import { MaintenanceWindow } from "./maintenancewindow";
/**
 * Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group. Additionally, you can specify the end behavior for each job execution when it reaches the scheduled end time.
 */
export declare class SchedulingConfig extends SpeakeasyBase {
    endBehavior?: JobEndBehaviorEnum;
    endTime?: string;
    maintenanceWindows?: MaintenanceWindow[];
    startTime?: string;
}
