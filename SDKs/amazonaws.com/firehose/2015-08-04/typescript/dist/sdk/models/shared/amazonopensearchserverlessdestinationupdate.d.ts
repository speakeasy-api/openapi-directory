import { SpeakeasyBase } from "../../../internal/utils";
import { AmazonOpenSearchServerlessBufferingHints } from "./amazonopensearchserverlessbufferinghints";
import { AmazonOpenSearchServerlessRetryOptions } from "./amazonopensearchserverlessretryoptions";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationUpdate } from "./s3destinationupdate";
/**
 * Describes an update for a destination in the Serverless offering for Amazon OpenSearch Service.
 */
export declare class AmazonOpenSearchServerlessDestinationUpdate extends SpeakeasyBase {
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
    /**
     * Describes an update for a destination in Amazon S3.
     */
    s3Update?: S3DestinationUpdate;
}
