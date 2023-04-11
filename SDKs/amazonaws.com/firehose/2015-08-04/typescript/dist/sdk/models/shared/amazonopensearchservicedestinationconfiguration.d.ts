import { SpeakeasyBase } from "../../../internal/utils";
import { AmazonopensearchserviceBufferingHints } from "./amazonopensearchservicebufferinghints";
import { AmazonopensearchserviceIndexRotationPeriodEnum } from "./amazonopensearchserviceindexrotationperiodenum";
import { AmazonopensearchserviceRetryOptions } from "./amazonopensearchserviceretryoptions";
import { AmazonopensearchserviceS3BackupModeEnum } from "./amazonopensearchservices3backupmodeenum";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
import { VpcConfiguration } from "./vpcconfiguration";
/**
 * Describes the configuration of a destination in Amazon OpenSearch Service
 */
export declare class AmazonopensearchserviceDestinationConfiguration extends SpeakeasyBase {
    bufferingHints?: AmazonopensearchserviceBufferingHints;
    /**
     * Describes the Amazon CloudWatch logging options for your delivery stream.
     */
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    clusterEndpoint?: string;
    domainARN?: string;
    indexName: string;
    indexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriodEnum;
    /**
     * Describes a data processing configuration.
     */
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: AmazonopensearchserviceRetryOptions;
    roleARN: string;
    s3BackupMode?: AmazonopensearchserviceS3BackupModeEnum;
    /**
     * Describes the configuration of a destination in Amazon S3.
     */
    s3Configuration: S3DestinationConfiguration;
    typeName?: string;
    /**
     * The details of the VPC of the Amazon ES destination.
     */
    vpcConfiguration?: VpcConfiguration;
}
