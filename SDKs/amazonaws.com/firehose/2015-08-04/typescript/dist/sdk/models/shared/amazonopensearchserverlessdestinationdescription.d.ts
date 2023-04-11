import { SpeakeasyBase } from "../../../internal/utils";
import { AmazonOpenSearchServerlessBufferingHints } from "./amazonopensearchserverlessbufferinghints";
import { AmazonOpenSearchServerlessRetryOptions } from "./amazonopensearchserverlessretryoptions";
import { AmazonOpenSearchServerlessS3BackupModeEnum } from "./amazonopensearchserverlesss3backupmodeenum";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationDescription } from "./s3destinationdescription";
import { VpcConfigurationDescription } from "./vpcconfigurationdescription";
/**
 * The destination description in the Serverless offering for Amazon OpenSearch Service.
 */
export declare class AmazonOpenSearchServerlessDestinationDescription extends SpeakeasyBase {
    bufferingHints?: AmazonOpenSearchServerlessBufferingHints;
    /**
     * Describes the Amazon CloudWatch logging options for your delivery stream.
     */
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    collectionEndpoint?: string;
    indexName?: string;
    /**
     * Describes a data processing configuration.
     */
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: AmazonOpenSearchServerlessRetryOptions;
    roleARN?: string;
    s3BackupMode?: AmazonOpenSearchServerlessS3BackupModeEnum;
    /**
     * Describes a destination in Amazon S3.
     */
    s3DestinationDescription?: S3DestinationDescription;
    /**
     * The details of the VPC of the Amazon ES destination.
     */
    vpcConfigurationDescription?: VpcConfigurationDescription;
}
