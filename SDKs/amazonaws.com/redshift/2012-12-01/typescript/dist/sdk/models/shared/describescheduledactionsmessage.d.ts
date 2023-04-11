import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledActionFilterList } from "./scheduledactionfilterlist";
import { ScheduledActionTypeValuesEnum } from "./scheduledactiontypevaluesenum";
export declare class DescribeScheduledActionsMessage extends SpeakeasyBase {
    active?: boolean;
    endTime?: Date;
    filters?: ScheduledActionFilterList[];
    marker?: string;
    maxRecords?: number;
    scheduledActionName?: string;
    startTime?: Date;
    targetActionType?: ScheduledActionTypeValuesEnum;
}
