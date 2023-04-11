import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes information used for one or more scheduled scaling action updates in a <a>BatchPutScheduledUpdateGroupAction</a> operation.
 */
export declare class ScheduledUpdateGroupActionRequest extends SpeakeasyBase {
    desiredCapacity?: number;
    endTime?: Date;
    maxSize?: number;
    minSize?: number;
    recurrence?: string;
    scheduledActionName: string;
    startTime?: Date;
    timeZone?: string;
}
