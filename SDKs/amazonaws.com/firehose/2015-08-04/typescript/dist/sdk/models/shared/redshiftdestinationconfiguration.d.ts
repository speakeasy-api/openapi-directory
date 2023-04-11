import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CopyCommand } from "./copycommand";
import { ProcessingConfiguration } from "./processingconfiguration";
import { RedshiftRetryOptions } from "./redshiftretryoptions";
import { RedshiftS3BackupModeEnum } from "./redshifts3backupmodeenum";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
/**
 * Describes the configuration of a destination in Amazon Redshift.
 */
export declare class RedshiftDestinationConfiguration extends SpeakeasyBase {
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    clusterJDBCURL: string;
    copyCommand: CopyCommand;
    password: string;
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: RedshiftRetryOptions;
    roleARN: string;
    s3BackupConfiguration?: S3DestinationConfiguration;
    s3BackupMode?: RedshiftS3BackupModeEnum;
    s3Configuration: S3DestinationConfiguration;
    username: string;
}
