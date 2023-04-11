import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsDestinationConfiguration } from "./cloudwatchlogsdestinationconfiguration";
import { FirehoseDestinationConfiguration } from "./firehosedestinationconfiguration";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
/**
 * A complex type that describes a location where chat logs will be stored. Each member represents the configuration of one log destination. For logging, you define only one type of destination (for CloudWatch Logs, Kinesis Firehose, or S3).
 */
export declare class DestinationConfiguration extends SpeakeasyBase {
    cloudWatchLogs?: CloudWatchLogsDestinationConfiguration;
    firehose?: FirehoseDestinationConfiguration;
    s3?: S3DestinationConfiguration;
}
