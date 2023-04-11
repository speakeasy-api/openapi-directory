import { SpeakeasyBase } from "../../../internal/utils";
import { AmazonopensearchserviceBufferingHints } from "./amazonopensearchservicebufferinghints";
import { AmazonopensearchserviceIndexRotationPeriodEnum } from "./amazonopensearchserviceindexrotationperiodenum";
import { AmazonopensearchserviceRetryOptions } from "./amazonopensearchserviceretryoptions";
import { AmazonopensearchserviceS3BackupModeEnum } from "./amazonopensearchservices3backupmodeenum";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationDescription } from "./s3destinationdescription";
import { VpcConfigurationDescription } from "./vpcconfigurationdescription";
/**
 * The destination description in Amazon OpenSearch Service.
 */
export declare class AmazonopensearchserviceDestinationDescription extends SpeakeasyBase {
    bufferingHints?: AmazonopensearchserviceBufferingHints;
    /**
     * Describes the Amazon CloudWatch logging options for your delivery stream.
     */
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    clusterEndpoint?: string;
    domainARN?: string;
    indexName?: string;
    indexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriodEnum;
    /**
     * Describes a data processing configuration.
     */
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: AmazonopensearchserviceRetryOptions;
    roleARN?: string;
    s3BackupMode?: AmazonopensearchserviceS3BackupModeEnum;
    /**
     * Describes a destination in Amazon S3.
     */
    s3DestinationDescription?: S3DestinationDescription;
    typeName?: string;
    /**
     * The details of the VPC of the Amazon ES destination.
     */
    vpcConfigurationDescription?: VpcConfigurationDescription;
}
