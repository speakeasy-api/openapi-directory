import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmTypeEnum } from "./alarmtypeenum";
import { HistoryItemTypeEnum } from "./historyitemtypeenum";
import { ScanByEnum } from "./scanbyenum";
export declare class DescribeAlarmHistoryInput extends SpeakeasyBase {
    alarmName?: string;
    alarmTypes?: AlarmTypeEnum[];
    endDate?: Date;
    historyItemType?: HistoryItemTypeEnum;
    maxRecords?: number;
    nextToken?: string;
    scanBy?: ScanByEnum;
    startDate?: Date;
}
