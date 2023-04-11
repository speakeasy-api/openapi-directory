import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the event.
 */
export declare class DescribeFleetHistoryResultHistoryRecordsEventInformation extends SpeakeasyBase {
    eventDescription?: string;
    eventSubType?: string;
    instanceId?: string;
}
/**
 * The event type.
 */
export declare enum DescribeFleetHistoryResultHistoryRecordsEventTypeEnum {
    InstanceChange = "instance-change",
    FleetChange = "fleet-change",
    ServiceError = "service-error"
}
/**
 * Describes an event in the history of an EC2 Fleet.
 */
export declare class DescribeFleetHistoryResultHistoryRecords extends SpeakeasyBase {
    eventInformation?: DescribeFleetHistoryResultHistoryRecordsEventInformation;
    eventType?: DescribeFleetHistoryResultHistoryRecordsEventTypeEnum;
    timestamp?: Date;
}
/**
 * Success
 */
export declare class DescribeFleetHistoryResult extends SpeakeasyBase {
    fleetId?: string;
    historyRecords?: DescribeFleetHistoryResultHistoryRecords[];
    lastEvaluatedTime?: Date;
    nextToken?: string;
    startTime?: Date;
}
