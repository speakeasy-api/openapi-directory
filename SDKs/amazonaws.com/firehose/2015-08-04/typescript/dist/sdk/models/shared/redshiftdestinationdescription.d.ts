import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CopyCommand } from "./copycommand";
import { ProcessingConfiguration } from "./processingconfiguration";
import { RedshiftRetryOptions } from "./redshiftretryoptions";
import { RedshiftS3BackupModeEnum } from "./redshifts3backupmodeenum";
import { S3DestinationDescription } from "./s3destinationdescription";
/**
 * Describes a destination in Amazon Redshift.
 */
export declare class RedshiftDestinationDescription extends SpeakeasyBase {
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    clusterJDBCURL: string;
    copyCommand: CopyCommand;
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: RedshiftRetryOptions;
    roleARN: string;
    s3BackupDescription?: S3DestinationDescription;
    s3BackupMode?: RedshiftS3BackupModeEnum;
    s3DestinationDescription: S3DestinationDescription;
    username: string;
}
