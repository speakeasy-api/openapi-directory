import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsDestination } from "./cloudwatchlogsdestination";
import { S3Destination } from "./s3destination";
/**
 * A structure that contains information about where Evidently is to store evaluation events for longer term storage.
 */
export declare class ProjectDataDelivery extends SpeakeasyBase {
    cloudWatchLogs?: CloudWatchLogsDestination;
    s3Destination?: S3Destination;
}
