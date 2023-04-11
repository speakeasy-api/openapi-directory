import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The name of the data and how often it should be pulled from the source.
 */
export declare class ScheduleConfiguration extends SpeakeasyBase {
    firstExecutionFrom?: string;
    object?: string;
    scheduleExpression: string;
}
