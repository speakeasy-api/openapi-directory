import { SpeakeasyBase } from "../../../internal/utils";
import { AmazonOpenSearchServerlessDestinationUpdate } from "./amazonopensearchserverlessdestinationupdate";
import { AmazonopensearchserviceDestinationUpdate } from "./amazonopensearchservicedestinationupdate";
import { BufferingHints } from "./bufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CompressionFormatEnum } from "./compressionformatenum";
import { ElasticsearchDestinationUpdate } from "./elasticsearchdestinationupdate";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ExtendedS3DestinationUpdate } from "./extendeds3destinationupdate";
import { HttpEndpointDestinationUpdate } from "./httpendpointdestinationupdate";
import { RedshiftDestinationUpdate } from "./redshiftdestinationupdate";
import { SplunkDestinationUpdate } from "./splunkdestinationupdate";
/**
 * [Deprecated] Describes an update for a destination in Amazon S3.
 */
export declare class UpdateDestinationInputS3DestinationUpdate extends SpeakeasyBase {
    bucketARN?: string;
    bufferingHints?: BufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    compressionFormat?: CompressionFormatEnum;
    encryptionConfiguration?: EncryptionConfiguration;
    errorOutputPrefix?: string;
    prefix?: string;
    roleARN?: string;
}
export declare class UpdateDestinationInput extends SpeakeasyBase {
    amazonOpenSearchServerlessDestinationUpdate?: AmazonOpenSearchServerlessDestinationUpdate;
    amazonopensearchserviceDestinationUpdate?: AmazonopensearchserviceDestinationUpdate;
    currentDeliveryStreamVersionId: string;
    deliveryStreamName: string;
    destinationId: string;
    elasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate;
    extendedS3DestinationUpdate?: ExtendedS3DestinationUpdate;
    httpEndpointDestinationUpdate?: HttpEndpointDestinationUpdate;
    redshiftDestinationUpdate?: RedshiftDestinationUpdate;
    s3DestinationUpdate?: UpdateDestinationInputS3DestinationUpdate;
    splunkDestinationUpdate?: SplunkDestinationUpdate;
}
