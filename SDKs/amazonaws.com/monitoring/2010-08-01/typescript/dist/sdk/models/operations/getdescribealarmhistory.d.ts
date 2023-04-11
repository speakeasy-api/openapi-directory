import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETDescribeAlarmHistoryActionEnum {
    DescribeAlarmHistory = "DescribeAlarmHistory"
}
/**
 * The type of alarm histories to retrieve.
 */
export declare enum GETDescribeAlarmHistoryHistoryItemTypeEnum {
    ConfigurationUpdate = "ConfigurationUpdate",
    StateUpdate = "StateUpdate",
    Action = "Action"
}
/**
 * Specified whether to return the newest or oldest alarm history first. Specify <code>TimestampDescending</code> to have the newest event history returned first, and specify <code>TimestampAscending</code> to have the oldest history returned first.
 */
export declare enum GETDescribeAlarmHistoryScanByEnum {
    TimestampDescending = "TimestampDescending",
    TimestampAscending = "TimestampAscending"
}
export declare enum GETDescribeAlarmHistoryVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GETDescribeAlarmHistoryRequest extends SpeakeasyBase {
    action: GETDescribeAlarmHistoryActionEnum;
    /**
     * The name of the alarm.
     */
    alarmName?: string;
    /**
     * Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter, only metric alarms are returned.
     */
    alarmTypes?: shared.AlarmTypeEnum[];
    /**
     * The ending date to retrieve alarm history.
     */
    endDate?: Date;
    /**
     * The type of alarm histories to retrieve.
     */
    historyItemType?: GETDescribeAlarmHistoryHistoryItemTypeEnum;
    /**
     * The maximum number of alarm history records to retrieve.
     */
    maxRecords?: number;
    /**
     * The token returned by a previous call to indicate that there is more data available.
     */
    nextToken?: string;
    /**
     * Specified whether to return the newest or oldest alarm history first. Specify <code>TimestampDescending</code> to have the newest event history returned first, and specify <code>TimestampAscending</code> to have the oldest history returned first.
     */
    scanBy?: GETDescribeAlarmHistoryScanByEnum;
    /**
     * The starting date to retrieve alarm history.
     */
    startDate?: Date;
    version: GETDescribeAlarmHistoryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeAlarmHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
