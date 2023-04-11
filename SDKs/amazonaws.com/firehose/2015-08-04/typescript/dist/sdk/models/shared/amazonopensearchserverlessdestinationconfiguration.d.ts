import { SpeakeasyBase } from "../../../internal/utils";
import { AmazonOpenSearchServerlessBufferingHints } from "./amazonopensearchserverlessbufferinghints";
import { AmazonOpenSearchServerlessRetryOptions } from "./amazonopensearchserverlessretryoptions";
import { AmazonOpenSearchServerlessS3BackupModeEnum } from "./amazonopensearchserverlesss3backupmodeenum";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
import { VpcConfiguration } from "./vpcconfiguration";
/**
 * Describes the configuration of a destination in the Serverless offering for Amazon OpenSearch Service.
 */
export declare class AmazonOpenSearchServerlessDestinationConfiguration extends SpeakeasyBase {
    bufferingHints?: AmazonOpenSearchServerlessBufferingHints;
    /**
     * Describes the Amazon CloudWatch logging options for your delivery stream.
     */
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    collectionEndpoint?: string;
    indexName: string;
    /**
     * Describes a data processing configuration.
     */
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: AmazonOpenSearchServerlessRetryOptions;
    roleARN: string;
    s3BackupMode?: AmazonOpenSearchServerlessS3BackupModeEnum;
    /**
     * Describes the configuration of a destination in Amazon S3.
     */
    s3Configuration: S3DestinationConfiguration;
    /**
     * The details of the VPC of the Amazon ES destination.
     */
    vpcConfiguration?: VpcConfiguration;
}
