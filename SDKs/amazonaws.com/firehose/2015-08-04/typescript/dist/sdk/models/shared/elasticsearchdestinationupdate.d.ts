import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ElasticsearchBufferingHints } from "./elasticsearchbufferinghints";
import { ElasticsearchIndexRotationPeriodEnum } from "./elasticsearchindexrotationperiodenum";
import { ElasticsearchRetryOptions } from "./elasticsearchretryoptions";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationUpdate } from "./s3destinationupdate";
/**
 * Describes an update for a destination in Amazon ES.
 */
export declare class ElasticsearchDestinationUpdate extends SpeakeasyBase {
    bufferingHints?: ElasticsearchBufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    clusterEndpoint?: string;
    domainARN?: string;
    indexName?: string;
    indexRotationPeriod?: ElasticsearchIndexRotationPeriodEnum;
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: ElasticsearchRetryOptions;
    roleARN?: string;
    s3Update?: S3DestinationUpdate;
    typeName?: string;
}
