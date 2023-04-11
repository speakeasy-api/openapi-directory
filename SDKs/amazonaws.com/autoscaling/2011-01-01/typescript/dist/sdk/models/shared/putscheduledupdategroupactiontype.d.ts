import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutScheduledUpdateGroupActionType extends SpeakeasyBase {
    autoScalingGroupName: string;
    desiredCapacity?: number;
    endTime?: Date;
    maxSize?: number;
    minSize?: number;
    recurrence?: string;
    scheduledActionName: string;
    startTime?: Date;
    time?: Date;
    timeZone?: string;
}
