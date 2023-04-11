import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of events to describe. By default, all events are described.
 */
export declare enum DescribeSpotFleetRequestHistoryRequestEventTypeEnum {
    InstanceChange = "instanceChange",
    FleetRequestChange = "fleetRequestChange",
    Error = "error",
    Information = "information"
}
/**
 * Contains the parameters for DescribeSpotFleetRequestHistory.
 */
export declare class DescribeSpotFleetRequestHistoryRequest extends SpeakeasyBase {
    dryRun?: boolean;
    eventType?: DescribeSpotFleetRequestHistoryRequestEventTypeEnum;
    maxResults?: number;
    nextToken?: string;
    spotFleetRequestId: string;
    startTime: Date;
}
