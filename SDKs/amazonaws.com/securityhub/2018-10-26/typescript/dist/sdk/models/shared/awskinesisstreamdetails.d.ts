import { SpeakeasyBase } from "../../../internal/utils";
import { AwsKinesisStreamStreamEncryptionDetails } from "./awskinesisstreamstreamencryptiondetails";
/**
 * Provides information about an Amazon Kinesis data stream.
 */
export declare class AwsKinesisStreamDetails extends SpeakeasyBase {
    arn?: string;
    name?: string;
    retentionPeriodHours?: number;
    shardCount?: number;
    streamEncryption?: AwsKinesisStreamStreamEncryptionDetails;
}
