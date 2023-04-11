import { SpeakeasyBase } from "../../../internal/utils";
import { AmazonOpenSearchServerlessDestinationConfiguration } from "./amazonopensearchserverlessdestinationconfiguration";
import { AmazonopensearchserviceDestinationConfiguration } from "./amazonopensearchservicedestinationconfiguration";
import { BufferingHints } from "./bufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { CompressionFormatEnum } from "./compressionformatenum";
import { DeliveryStreamEncryptionConfigurationInput } from "./deliverystreamencryptionconfigurationinput";
import { DeliveryStreamTypeEnum } from "./deliverystreamtypeenum";
import { ElasticsearchDestinationConfiguration } from "./elasticsearchdestinationconfiguration";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ExtendedS3DestinationConfiguration } from "./extendeds3destinationconfiguration";
import { HttpEndpointDestinationConfiguration } from "./httpendpointdestinationconfiguration";
import { KinesisStreamSourceConfiguration } from "./kinesisstreamsourceconfiguration";
import { RedshiftDestinationConfiguration } from "./redshiftdestinationconfiguration";
import { SplunkDestinationConfiguration } from "./splunkdestinationconfiguration";
import { Tag } from "./tag";
/**
 * [Deprecated] The destination in Amazon S3. You can specify only one destination.
 */
export declare class CreateDeliveryStreamInputS3DestinationConfiguration extends SpeakeasyBase {
    bucketARN: string;
    bufferingHints?: BufferingHints;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    compressionFormat?: CompressionFormatEnum;
    encryptionConfiguration?: EncryptionConfiguration;
    errorOutputPrefix?: string;
    prefix?: string;
    roleARN: string;
}
export declare class CreateDeliveryStreamInput extends SpeakeasyBase {
    amazonOpenSearchServerlessDestinationConfiguration?: AmazonOpenSearchServerlessDestinationConfiguration;
    amazonopensearchserviceDestinationConfiguration?: AmazonopensearchserviceDestinationConfiguration;
    deliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
    deliveryStreamName: string;
    deliveryStreamType?: DeliveryStreamTypeEnum;
    elasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;
    extendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;
    httpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration;
    kinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;
    redshiftDestinationConfiguration?: RedshiftDestinationConfiguration;
    s3DestinationConfiguration?: CreateDeliveryStreamInputS3DestinationConfiguration;
    splunkDestinationConfiguration?: SplunkDestinationConfiguration;
    tags?: Tag[];
}
