import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The format for the flow log.
 */
export declare enum DescribeFlowLogsResultFlowLogsDestinationOptionsFileFormatEnum {
    PlainText = "plain-text",
    Parquet = "parquet"
}
/**
 * The destination options.
 */
export declare class DescribeFlowLogsResultFlowLogsDestinationOptions extends SpeakeasyBase {
    fileFormat?: DescribeFlowLogsResultFlowLogsDestinationOptionsFileFormatEnum;
    hiveCompatiblePartitions?: boolean;
    perHourPartition?: boolean;
}
/**
 * The type of destination for the flow log data.
 */
export declare enum DescribeFlowLogsResultFlowLogsLogDestinationTypeEnum {
    CloudWatchLogs = "cloud-watch-logs",
    S3 = "s3",
    KinesisDataFirehose = "kinesis-data-firehose"
}
/**
 * Describes a tag.
 */
export declare class DescribeFlowLogsResultFlowLogsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of traffic captured for the flow log.
 */
export declare enum DescribeFlowLogsResultFlowLogsTrafficTypeEnum {
    Accept = "ACCEPT",
    Reject = "REJECT",
    All = "ALL"
}
/**
 * Describes a flow log.
 */
export declare class DescribeFlowLogsResultFlowLogs extends SpeakeasyBase {
    creationTime?: Date;
    deliverCrossAccountRole?: string;
    deliverLogsErrorMessage?: string;
    deliverLogsPermissionArn?: string;
    deliverLogsStatus?: string;
    destinationOptions?: DescribeFlowLogsResultFlowLogsDestinationOptions;
    flowLogId?: string;
    flowLogStatus?: string;
    logDestination?: string;
    logDestinationType?: DescribeFlowLogsResultFlowLogsLogDestinationTypeEnum;
    logFormat?: string;
    logGroupName?: string;
    maxAggregationInterval?: number;
    resourceId?: string;
    tags?: DescribeFlowLogsResultFlowLogsTags[];
    trafficType?: DescribeFlowLogsResultFlowLogsTrafficTypeEnum;
}
/**
 * Success
 */
export declare class DescribeFlowLogsResult extends SpeakeasyBase {
    flowLogs?: DescribeFlowLogsResultFlowLogs[];
    nextToken?: string;
}
