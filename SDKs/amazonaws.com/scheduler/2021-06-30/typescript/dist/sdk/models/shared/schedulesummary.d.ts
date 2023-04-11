import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduleStateEnum } from "./schedulestateenum";
import { TargetSummary } from "./targetsummary";
/**
 * The details of a schedule.
 */
export declare class ScheduleSummary extends SpeakeasyBase {
    arn?: string;
    creationDate?: Date;
    groupName?: string;
    lastModificationDate?: Date;
    name?: string;
    state?: ScheduleStateEnum;
    target?: TargetSummary;
}
