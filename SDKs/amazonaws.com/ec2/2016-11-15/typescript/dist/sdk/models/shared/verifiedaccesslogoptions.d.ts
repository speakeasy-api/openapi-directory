import { SpeakeasyBase } from "../../../internal/utils";
import { VerifiedAccessLogCloudWatchLogsDestinationOptions } from "./verifiedaccesslogcloudwatchlogsdestinationoptions";
import { VerifiedAccessLogKinesisDataFirehoseDestinationOptions } from "./verifiedaccesslogkinesisdatafirehosedestinationoptions";
import { VerifiedAccessLogS3DestinationOptions } from "./verifiedaccesslogs3destinationoptions";
/**
 * Describes the destinations for Verified Access logs.
 */
export declare class VerifiedAccessLogOptions extends SpeakeasyBase {
    cloudWatchLogs?: VerifiedAccessLogCloudWatchLogsDestinationOptions;
    kinesisDataFirehose?: VerifiedAccessLogKinesisDataFirehoseDestinationOptions;
    s3?: VerifiedAccessLogS3DestinationOptions;
}
