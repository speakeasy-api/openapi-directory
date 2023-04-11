import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ElasticsearchBufferingHints } from "./elasticsearchbufferinghints";
import { ElasticsearchIndexRotationPeriodEnum } from "./elasticsearchindexrotationperiodenum";
import { ElasticsearchRetryOptions } from "./elasticsearchretryoptions";
import { ElasticsearchS3BackupModeEnum } from "./elasticsearchs3backupmodeenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationDescription } from "./s3destinationdescription";
import { VpcConfigurationDescription } from "./vpcconfigurationdescription";
/**
 * The destination description in Amazon ES.
 */
export declare class ElasticsearchDestinationDescription extends SpeakeasyBase {
    bufferingHints?: ElasticsearchBufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    clusterEndpoint?: string;
    domainARN?: string;
    indexName?: string;
    indexRotationPeriod?: ElasticsearchIndexRotationPeriodEnum;
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: ElasticsearchRetryOptions;
    roleARN?: string;
    s3BackupMode?: ElasticsearchS3BackupModeEnum;
    s3DestinationDescription?: S3DestinationDescription;
    typeName?: string;
    vpcConfigurationDescription?: VpcConfigurationDescription;
}
