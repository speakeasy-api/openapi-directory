import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmTypeEnum } from "./alarmtypeenum";
import { StateValueEnum } from "./statevalueenum";
export declare class DescribeAlarmsInput extends SpeakeasyBase {
    actionPrefix?: string;
    alarmNamePrefix?: string;
    alarmNames?: string[];
    alarmTypes?: AlarmTypeEnum[];
    childrenOfAlarmName?: string;
    maxRecords?: number;
    nextToken?: string;
    parentsOfAlarmName?: string;
    stateValue?: StateValueEnum;
}
