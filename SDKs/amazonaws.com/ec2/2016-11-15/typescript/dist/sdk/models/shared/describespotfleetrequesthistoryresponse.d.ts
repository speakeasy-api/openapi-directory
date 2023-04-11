import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the event.
 */
export declare class DescribeSpotFleetRequestHistoryResponseHistoryRecordsEventInformation extends SpeakeasyBase {
    eventDescription?: string;
    eventSubType?: string;
    instanceId?: string;
}
/**
 * <p>The event type.</p> <ul> <li> <p> <code>error</code> - An error with the Spot Fleet request.</p> </li> <li> <p> <code>fleetRequestChange</code> - A change in the status or configuration of the Spot Fleet request.</p> </li> <li> <p> <code>instanceChange</code> - An instance was launched or terminated.</p> </li> <li> <p> <code>Information</code> - An informational event.</p> </li> </ul>
 */
export declare enum DescribeSpotFleetRequestHistoryResponseHistoryRecordsEventTypeEnum {
    InstanceChange = "instanceChange",
    FleetRequestChange = "fleetRequestChange",
    Error = "error",
    Information = "information"
}
/**
 * Describes an event in the history of the Spot Fleet request.
 */
export declare class DescribeSpotFleetRequestHistoryResponseHistoryRecords extends SpeakeasyBase {
    eventInformation?: DescribeSpotFleetRequestHistoryResponseHistoryRecordsEventInformation;
    eventType?: DescribeSpotFleetRequestHistoryResponseHistoryRecordsEventTypeEnum;
    timestamp?: Date;
}
/**
 * Contains the output of DescribeSpotFleetRequestHistory.
 */
export declare class DescribeSpotFleetRequestHistoryResponse extends SpeakeasyBase {
    historyRecords?: DescribeSpotFleetRequestHistoryResponseHistoryRecords[];
    lastEvaluatedTime?: Date;
    nextToken?: string;
    spotFleetRequestId?: string;
    startTime?: Date;
}
