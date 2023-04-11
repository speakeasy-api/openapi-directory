import { SpeakeasyBase } from "../../../internal/utils";
import { AmazonopensearchserviceBufferingHints } from "./amazonopensearchservicebufferinghints";
import { AmazonopensearchserviceIndexRotationPeriodEnum } from "./amazonopensearchserviceindexrotationperiodenum";
import { AmazonopensearchserviceRetryOptions } from "./amazonopensearchserviceretryoptions";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationUpdate } from "./s3destinationupdate";
/**
 * Describes an update for a destination in Amazon OpenSearch Service.
 */
export declare class AmazonopensearchserviceDestinationUpdate extends SpeakeasyBase {
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
    /**
     * Describes an update for a destination in Amazon S3.
     */
    s3Update?: S3DestinationUpdate;
    typeName?: string;
}
