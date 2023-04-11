import { SpeakeasyBase } from "../../../internal/utils";
import { FlexibleTimeWindow } from "./flexibletimewindow";
import { ScheduleStateEnum } from "./schedulestateenum";
import { Target } from "./target";
/**
 * Success
 */
export declare class GetScheduleOutput extends SpeakeasyBase {
    arn?: string;
    creationDate?: Date;
    description?: string;
    endDate?: Date;
    flexibleTimeWindow?: FlexibleTimeWindow;
    groupName?: string;
    kmsKeyArn?: string;
    lastModificationDate?: Date;
    name?: string;
    scheduleExpression?: string;
    scheduleExpressionTimezone?: string;
    startDate?: Date;
    state?: ScheduleStateEnum;
    target?: Target;
}
