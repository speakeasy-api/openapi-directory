import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ElasticsearchBufferingHints } from "./elasticsearchbufferinghints";
import { ElasticsearchIndexRotationPeriodEnum } from "./elasticsearchindexrotationperiodenum";
import { ElasticsearchRetryOptions } from "./elasticsearchretryoptions";
import { ElasticsearchS3BackupModeEnum } from "./elasticsearchs3backupmodeenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
import { VpcConfiguration } from "./vpcconfiguration";
/**
 * Describes the configuration of a destination in Amazon ES.
 */
export declare class ElasticsearchDestinationConfiguration extends SpeakeasyBase {
    bufferingHints?: ElasticsearchBufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    clusterEndpoint?: string;
    domainARN?: string;
    indexName: string;
    indexRotationPeriod?: ElasticsearchIndexRotationPeriodEnum;
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: ElasticsearchRetryOptions;
    roleARN: string;
    s3BackupMode?: ElasticsearchS3BackupModeEnum;
    s3Configuration: S3DestinationConfiguration;
    typeName?: string;
    vpcConfiguration?: VpcConfiguration;
}
