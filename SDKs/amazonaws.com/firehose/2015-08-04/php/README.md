# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeliveryStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDeliveryStreamInput;
use \OpenAPI\OpenAPI\Models\Shared\AmazonOpenSearchServerlessDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AmazonOpenSearchServerlessBufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLoggingOptions;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Processor;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorParameter;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorParameterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AmazonOpenSearchServerlessRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\AmazonOpenSearchServerlessS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\CompressionFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\KMSEncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\NoEncryptionConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AmazonopensearchserviceDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AmazonopensearchserviceBufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\AmazonopensearchserviceIndexRotationPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\AmazonopensearchserviceRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\AmazonopensearchserviceS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryStreamEncryptionConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\KeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryStreamTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchBufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchIndexRotationPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedS3DestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DataFormatConversionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Deserializer;
use \OpenAPI\OpenAPI\Models\Shared\HiveJsonSerDe;
use \OpenAPI\OpenAPI\Models\Shared\OpenXJsonSerDe;
use \OpenAPI\OpenAPI\Models\Shared\OutputFormatConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Serializer;
use \OpenAPI\OpenAPI\Models\Shared\OrcSerDe;
use \OpenAPI\OpenAPI\Models\Shared\OrcCompressionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrcFormatVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParquetSerDe;
use \OpenAPI\OpenAPI\Models\Shared\ParquetCompressionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParquetWriterVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchemaConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DynamicPartitioningConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\S3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointBufferingHints;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointRequestConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointCommonAttribute;
use \OpenAPI\OpenAPI\Models\Shared\ContentEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KinesisStreamSourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CopyCommand;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateDeliveryStreamInputS3DestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SplunkDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HECEndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SplunkRetryOptions;
use \OpenAPI\OpenAPI\Models\Shared\SplunkS3BackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeliveryStreamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeliveryStreamRequest();
    $request->createDeliveryStreamInput = new CreateDeliveryStreamInput();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration = new AmazonOpenSearchServerlessDestinationConfiguration();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->bufferingHints = new AmazonOpenSearchServerlessBufferingHints();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->bufferingHints->intervalInSeconds = 548814;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->bufferingHints->sizeInMBs = 592845;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'distinctio';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'quibusdam';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->collectionEndpoint = 'unde';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->indexName = 'nulla';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->processingConfiguration = new ProcessingConfiguration();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->processingConfiguration->enabled = false;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
        new Processor(),
    ];
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->retryOptions = new AmazonOpenSearchServerlessRetryOptions();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->retryOptions->durationInSeconds = 847252;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->roleARN = 'vel';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3BackupMode = AmazonOpenSearchServerlessS3BackupModeEnum::ALL_DOCUMENTS;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->bucketARN = 'deserunt';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->bufferingHints->intervalInSeconds = 384382;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->bufferingHints->sizeInMBs = 437587;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logGroupName = 'magnam';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logStreamName = 'debitis';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->compressionFormat = CompressionFormatEnum::UNCOMPRESSED;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'delectus';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->errorOutputPrefix = 'tempora';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->prefix = 'suscipit';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->s3Configuration->roleARN = 'molestiae';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->vpcConfiguration = new VpcConfiguration();
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->vpcConfiguration->roleARN = 'minus';
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->vpcConfiguration->securityGroupIds = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->createDeliveryStreamInput->amazonOpenSearchServerlessDestinationConfiguration->vpcConfiguration->subnetIds = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration = new AmazonopensearchserviceDestinationConfiguration();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->bufferingHints = new AmazonopensearchserviceBufferingHints();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->bufferingHints->intervalInSeconds = 648172;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->bufferingHints->sizeInMBs = 20218;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'ipsam';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'repellendus';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->clusterEndpoint = 'sapiente';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->domainARN = 'quo';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->indexName = 'odit';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->indexRotationPeriod = AmazonopensearchserviceIndexRotationPeriodEnum::ONE_MONTH;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->processingConfiguration = new ProcessingConfiguration();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->processingConfiguration->enabled = false;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
        new Processor(),
        new Processor(),
    ];
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->retryOptions = new AmazonopensearchserviceRetryOptions();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->retryOptions->durationInSeconds = 978619;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->roleARN = 'molestiae';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3BackupMode = AmazonopensearchserviceS3BackupModeEnum::ALL_DOCUMENTS;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->bucketARN = 'quod';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->bufferingHints->intervalInSeconds = 461479;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->bufferingHints->sizeInMBs = 520478;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logGroupName = 'porro';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logStreamName = 'dolorum';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->compressionFormat = CompressionFormatEnum::UNCOMPRESSED;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'nam';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->errorOutputPrefix = 'officia';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->prefix = 'occaecati';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->s3Configuration->roleARN = 'fugit';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->typeName = 'deleniti';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->vpcConfiguration = new VpcConfiguration();
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->vpcConfiguration->roleARN = 'hic';
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->vpcConfiguration->securityGroupIds = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->createDeliveryStreamInput->amazonopensearchserviceDestinationConfiguration->vpcConfiguration->subnetIds = [
        'qui',
        'impedit',
    ];
    $request->createDeliveryStreamInput->deliveryStreamEncryptionConfigurationInput = new DeliveryStreamEncryptionConfigurationInput();
    $request->createDeliveryStreamInput->deliveryStreamEncryptionConfigurationInput->keyARN = 'cum';
    $request->createDeliveryStreamInput->deliveryStreamEncryptionConfigurationInput->keyType = KeyTypeEnum::AWS_OWNED_CMK;
    $request->createDeliveryStreamInput->deliveryStreamName = 'ipsum';
    $request->createDeliveryStreamInput->deliveryStreamType = DeliveryStreamTypeEnum::KINESIS_STREAM_AS_SOURCE;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration = new ElasticsearchDestinationConfiguration();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->bufferingHints = new ElasticsearchBufferingHints();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->bufferingHints->intervalInSeconds = 135218;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->bufferingHints->sizeInMBs = 18789;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'ad';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'natus';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->clusterEndpoint = 'sed';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->domainARN = 'iste';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->indexName = 'dolor';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->indexRotationPeriod = ElasticsearchIndexRotationPeriodEnum::ONE_WEEK;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->processingConfiguration = new ProcessingConfiguration();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->processingConfiguration->enabled = false;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
    ];
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->retryOptions = new ElasticsearchRetryOptions();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->retryOptions->durationInSeconds = 943749;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->roleARN = 'saepe';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3BackupMode = ElasticsearchS3BackupModeEnum::ALL_DOCUMENTS;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->bucketARN = 'in';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->bufferingHints->intervalInSeconds = 359508;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->bufferingHints->sizeInMBs = 613064;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logGroupName = 'iure';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logStreamName = 'saepe';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->compressionFormat = CompressionFormatEnum::SNAPPY;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'architecto';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->errorOutputPrefix = 'ipsa';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->prefix = 'reiciendis';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->s3Configuration->roleARN = 'est';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->typeName = 'mollitia';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->vpcConfiguration = new VpcConfiguration();
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->vpcConfiguration->roleARN = 'laborum';
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->vpcConfiguration->securityGroupIds = [
        'dolorem',
    ];
    $request->createDeliveryStreamInput->elasticsearchDestinationConfiguration->vpcConfiguration->subnetIds = [
        'explicabo',
        'nobis',
    ];
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration = new ExtendedS3DestinationConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->bucketARN = 'enim';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->bufferingHints->intervalInSeconds = 607831;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->bufferingHints->sizeInMBs = 363711;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'minima';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'excepturi';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->compressionFormat = CompressionFormatEnum::UNCOMPRESSED;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration = new DataFormatConversionConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->enabled = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration = new InputFormatConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer = new Deserializer();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->hiveJsonSerDe = new HiveJsonSerDe();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->hiveJsonSerDe->timestampFormats = [
        'culpa',
        'doloribus',
    ];
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->openXJsonSerDe = new OpenXJsonSerDe();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->openXJsonSerDe->caseInsensitive = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->openXJsonSerDe->columnToJsonKeyMappings = [
        'architecto' => 'mollitia',
        'dolorem' => 'culpa',
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
    ];
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->inputFormatConfiguration->deserializer->openXJsonSerDe->convertDotsInJsonKeysToUnderscores = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration = new OutputFormatConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer = new Serializer();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe = new OrcSerDe();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->blockSizeBytes = 253291;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->bloomFilterColumns = [
        'quam',
        'molestiae',
    ];
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->bloomFilterFalsePositiveProbability = 2444.25;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->compression = OrcCompressionEnum::ZLIB;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->dictionaryKeyThreshold = 1589.69;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->enablePadding = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->formatVersion = OrcFormatVersionEnum::V011;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->paddingTolerance = 1103.75;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->rowIndexStride = 674752;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->orcSerDe->stripeSizeBytes = 656330;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe = new ParquetSerDe();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->blockSizeBytes = 317202;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->compression = ParquetCompressionEnum::UNCOMPRESSED;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->enableDictionaryCompression = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->maxPaddingBytes = 778346;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->pageSizeBytes = 196582;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->outputFormatConfiguration->serializer->parquetSerDe->writerVersion = ParquetWriterVersionEnum::V2;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->schemaConfiguration = new SchemaConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->schemaConfiguration->catalogId = 'ipsam';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->schemaConfiguration->databaseName = 'id';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->schemaConfiguration->region = 'possimus';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->schemaConfiguration->roleARN = 'aut';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->schemaConfiguration->tableName = 'quasi';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dataFormatConversionConfiguration->schemaConfiguration->versionId = 'error';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dynamicPartitioningConfiguration = new DynamicPartitioningConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dynamicPartitioningConfiguration->enabled = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dynamicPartitioningConfiguration->retryOptions = new RetryOptions();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->dynamicPartitioningConfiguration->retryOptions->durationInSeconds = 837945;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'laborum';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->errorOutputPrefix = 'quasi';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->prefix = 'reiciendis';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->processingConfiguration = new ProcessingConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->processingConfiguration->enabled = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
        new Processor(),
        new Processor(),
    ];
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->roleARN = 'vero';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->bucketARN = 'nihil';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->bufferingHints->intervalInSeconds = 509624;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->bufferingHints->sizeInMBs = 976762;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions->logGroupName = 'ipsa';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions->logStreamName = 'omnis';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->compressionFormat = CompressionFormatEnum::ZIP;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'cum';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->errorOutputPrefix = 'perferendis';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->prefix = 'doloremque';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupConfiguration->roleARN = 'reprehenderit';
    $request->createDeliveryStreamInput->extendedS3DestinationConfiguration->s3BackupMode = S3BackupModeEnum::DISABLED;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration = new HttpEndpointDestinationConfiguration();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->bufferingHints = new HttpEndpointBufferingHints();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->bufferingHints->intervalInSeconds = 979587;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->bufferingHints->sizeInMBs = 120196;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'corporis';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'dolore';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->endpointConfiguration = new HttpEndpointConfiguration();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->endpointConfiguration->accessKey = 'iusto';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->endpointConfiguration->name = 'Maryann Hamill';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->endpointConfiguration->url = 'repudiandae';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->processingConfiguration = new ProcessingConfiguration();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->processingConfiguration->enabled = false;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->processingConfiguration->processors = [
        new Processor(),
    ];
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->requestConfiguration = new HttpEndpointRequestConfiguration();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->requestConfiguration->commonAttributes = [
        new HttpEndpointCommonAttribute(),
    ];
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->requestConfiguration->contentEncoding = ContentEncodingEnum::GZIP;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->retryOptions = new HttpEndpointRetryOptions();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->retryOptions->durationInSeconds = 565189;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->roleARN = 'excepturi';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3BackupMode = HttpEndpointS3BackupModeEnum::ALL_DATA;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->bucketARN = 'modi';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->bufferingHints->intervalInSeconds = 508969;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->bufferingHints->sizeInMBs = 523248;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logGroupName = 'voluptates';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logStreamName = 'quasi';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->compressionFormat = CompressionFormatEnum::HADOOP_SNAPPY;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'sint';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->errorOutputPrefix = 'veritatis';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->prefix = 'itaque';
    $request->createDeliveryStreamInput->httpEndpointDestinationConfiguration->s3Configuration->roleARN = 'incidunt';
    $request->createDeliveryStreamInput->kinesisStreamSourceConfiguration = new KinesisStreamSourceConfiguration();
    $request->createDeliveryStreamInput->kinesisStreamSourceConfiguration->kinesisStreamARN = 'enim';
    $request->createDeliveryStreamInput->kinesisStreamSourceConfiguration->roleARN = 'consequatur';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration = new RedshiftDestinationConfiguration();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'est';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'quibusdam';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->clusterJDBCURL = 'explicabo';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->copyCommand = new CopyCommand();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->copyCommand->copyOptions = 'deserunt';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->copyCommand->dataTableColumns = 'distinctio';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->copyCommand->dataTableName = 'quibusdam';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->password = 'labore';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->processingConfiguration = new ProcessingConfiguration();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->processingConfiguration->enabled = false;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
    ];
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->retryOptions = new RedshiftRetryOptions();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->retryOptions->durationInSeconds = 183191;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->roleARN = 'aliquid';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->bucketARN = 'cupiditate';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->bufferingHints->intervalInSeconds = 552822;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->bufferingHints->sizeInMBs = 20107;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions->logGroupName = 'magni';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->cloudWatchLoggingOptions->logStreamName = 'assumenda';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->compressionFormat = CompressionFormatEnum::GZIP;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'alias';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->errorOutputPrefix = 'fugit';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->prefix = 'dolorum';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupConfiguration->roleARN = 'excepturi';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3BackupMode = RedshiftS3BackupModeEnum::DISABLED;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->bucketARN = 'facilis';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->bufferingHints->intervalInSeconds = 735194;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->bufferingHints->sizeInMBs = 288476;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logGroupName = 'delectus';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logStreamName = 'eum';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->compressionFormat = CompressionFormatEnum::GZIP;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'eligendi';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->errorOutputPrefix = 'sint';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->prefix = 'aliquid';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->s3Configuration->roleARN = 'provident';
    $request->createDeliveryStreamInput->redshiftDestinationConfiguration->username = 'necessitatibus';
    $request->createDeliveryStreamInput->s3DestinationConfiguration = new CreateDeliveryStreamInputS3DestinationConfiguration();
    $request->createDeliveryStreamInput->s3DestinationConfiguration->bucketARN = 'sint';
    $request->createDeliveryStreamInput->s3DestinationConfiguration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->s3DestinationConfiguration->bufferingHints->intervalInSeconds = 638921;
    $request->createDeliveryStreamInput->s3DestinationConfiguration->bufferingHints->sizeInMBs = 223081;
    $request->createDeliveryStreamInput->s3DestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->s3DestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->s3DestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'debitis';
    $request->createDeliveryStreamInput->s3DestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'a';
    $request->createDeliveryStreamInput->s3DestinationConfiguration->compressionFormat = CompressionFormatEnum::SNAPPY;
    $request->createDeliveryStreamInput->s3DestinationConfiguration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->s3DestinationConfiguration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->s3DestinationConfiguration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'in';
    $request->createDeliveryStreamInput->s3DestinationConfiguration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->s3DestinationConfiguration->errorOutputPrefix = 'in';
    $request->createDeliveryStreamInput->s3DestinationConfiguration->prefix = 'illum';
    $request->createDeliveryStreamInput->s3DestinationConfiguration->roleARN = 'maiores';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration = new SplunkDestinationConfiguration();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->cloudWatchLoggingOptions->logGroupName = 'rerum';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->cloudWatchLoggingOptions->logStreamName = 'dicta';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->hecAcknowledgmentTimeoutInSeconds = 297437;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->hecEndpoint = 'cumque';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->hecEndpointType = HECEndpointTypeEnum::EVENT;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->hecToken = 'ea';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->processingConfiguration = new ProcessingConfiguration();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->processingConfiguration->enabled = false;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->processingConfiguration->processors = [
        new Processor(),
        new Processor(),
    ];
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->retryOptions = new SplunkRetryOptions();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->retryOptions->durationInSeconds = 675439;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3BackupMode = SplunkS3BackupModeEnum::ALL_EVENTS;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration = new S3DestinationConfiguration();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->bucketARN = 'non';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->bufferingHints = new BufferingHints();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->bufferingHints->intervalInSeconds = 581273;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->bufferingHints->sizeInMBs = 313218;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions = new CloudWatchLoggingOptions();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->enabled = false;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logGroupName = 'accusamus';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->cloudWatchLoggingOptions->logStreamName = 'delectus';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->compressionFormat = CompressionFormatEnum::SNAPPY;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig = new KMSEncryptionConfig();
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->encryptionConfiguration->kmsEncryptionConfig->awskmsKeyARN = 'provident';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->encryptionConfiguration->noEncryptionConfig = NoEncryptionConfigEnum::NO_ENCRYPTION;
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->errorOutputPrefix = 'nam';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->prefix = 'id';
    $request->createDeliveryStreamInput->splunkDestinationConfiguration->s3Configuration->roleARN = 'blanditiis';
    $request->createDeliveryStreamInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = CreateDeliveryStreamXAmzTargetEnum::FIREHOSE20150804_CREATE_DELIVERY_STREAM;

    $response = $sdk->createDeliveryStream($request);

    if ($response->createDeliveryStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createDeliveryStream](docs/sdk/README.md#createdeliverystream) - <p>Creates a Kinesis Data Firehose delivery stream.</p> <p>By default, you can create up to 50 delivery streams per Amazon Web Services Region.</p> <p>This is an asynchronous operation that immediately returns. The initial status of the delivery stream is <code>CREATING</code>. After the delivery stream is created, its status is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p> <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the <code>DeliveryStreamType</code> parameter to <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code> parameter.</p> <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on SSE for an existing delivery stream that doesn't have SSE enabled.</p> <p>A delivery stream is configured with a single destination: Amazon S3, Amazon ES, Amazon Redshift, or Splunk. You must specify only one of the following destination configuration parameters: <code>ExtendedS3DestinationConfiguration</code>, <code>S3DestinationConfiguration</code>, <code>ElasticsearchDestinationConfiguration</code>, <code>RedshiftDestinationConfiguration</code>, or <code>SplunkDestinationConfiguration</code>.</p> <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3.</p> <p>A few notes about Amazon Redshift as a destination:</p> <ul> <li> <p>An Amazon Redshift destination requires an S3 bucket as intermediate location. Kinesis Data Firehose first delivers data to Amazon S3 and then uses <code>COPY</code> syntax to load data into an Amazon Redshift table. This is specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code> parameter.</p> </li> <li> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p> </li> <li> <p>We strongly recommend that you use the user name and password you provide exclusively with Kinesis Data Firehose, and that the permissions for the account are restricted for Amazon Redshift <code>INSERT</code> permissions.</p> </li> </ul> <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Kinesis Data Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>
* [deleteDeliveryStream](docs/sdk/README.md#deletedeliverystream) - <p>Deletes a delivery stream and its data.</p> <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states: <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the <code>CREATING</code> state. While the deletion request is in process, the delivery stream is in the <code>DELETING</code> state.</p> <p>While the delivery stream is in the <code>DELETING</code> state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a delivery stream.</p>
* [describeDeliveryStream](docs/sdk/README.md#describedeliverystream) - <p>Describes the specified delivery stream and its status. For example, after your delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it. If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>
* [listDeliveryStreams](docs/sdk/README.md#listdeliverystreams) - <p>Lists your delivery streams in alphabetical order of their names.</p> <p>The number of delivery streams might be too large to return using a single call to <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned, using the <code>Limit</code> parameter. To determine whether there are more delivery streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If there are more delivery streams to list, you can request them by calling this operation again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name of the last delivery stream returned in the last call.</p>
* [listTagsForDeliveryStream](docs/sdk/README.md#listtagsfordeliverystream) - Lists the tags for the specified delivery stream. This operation has a limit of five transactions per second per account. 
* [putRecord](docs/sdk/README.md#putrecord) - <p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To write multiple data records into a delivery stream, use <a>PutRecordBatch</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>. </p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation.</p> <p>If the <code>PutRecord</code> operation throws a <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream. </p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
* [putRecordBatch](docs/sdk/README.md#putrecordbatch) - <p>Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a delivery stream, use <a>PutRecord</a>. Applications using these operations are referred to as producers.</p> <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Quota</a>.</p> <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed.</p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <a>PutRecordBatch</a> response includes a count of failed records, <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>. Even if the <a>PutRecordBatch</a> call succeeds, the value of <code>FailedPutCount</code> may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. <code>RequestResponses</code> includes both successfully and unsuccessfully processed records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing of subsequent records. </p> <p>A successfully processed record includes a <code>RecordId</code> value, which is unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error, and is one of the following values: <code>ServiceUnavailableException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the error.</p> <p>If there is an internal server error or a timeout, the write might have completed or it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination.</p> <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream.</p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
* [startDeliveryStreamEncryption](docs/sdk/README.md#startdeliverystreamencryption) - <p>Enables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>ENABLING</code>, and then to <code>ENABLED</code>. The encryption status of a delivery stream is the <code>Status</code> property in <a>DeliveryStreamEncryptionConfiguration</a>. If the operation fails, the encryption status changes to <code>ENABLING_FAILED</code>. You can continue to read and write data to your delivery stream while the encryption status is <code>ENABLING</code>, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to <code>ENABLED</code> before all records written to the delivery stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption status of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>Even if encryption is currently enabled for a delivery stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant.</p> <p>If a delivery stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get <code>ENABLING_FAILED</code>, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK.</p> <p>If the encryption status of your delivery stream is <code>ENABLING_FAILED</code>, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Kinesis Data Firehose to invoke KMS encrypt and decrypt operations.</p> <p>You can enable SSE for a delivery stream only if it's a delivery stream that uses <code>DirectPut</code> as its source. </p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
* [stopDeliveryStreamEncryption](docs/sdk/README.md#stopdeliverystreamencryption) - <p>Disables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then to <code>DISABLED</code>. You can continue to read and write data to your stream while its status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status changes to <code>DISABLED</code> before all records written to the delivery stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption state of a delivery stream, use <a>DescribeDeliveryStream</a>. </p> <p>If SSE is enabled using a customer managed CMK and then you invoke <code>StopDeliveryStreamEncryption</code>, Kinesis Data Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination.</p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
* [tagDeliveryStream](docs/sdk/README.md#tagdeliverystream) - <p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>. </p> <p>Each delivery stream can have up to 50 tags. </p> <p>This operation has a limit of five transactions per second per account. </p>
* [untagDeliveryStream](docs/sdk/README.md#untagdeliverystream) - <p>Removes tags from the specified delivery stream. Removed tags are deleted, and you can't recover them after this operation successfully completes.</p> <p>If you specify a tag that doesn't exist, the operation ignores it.</p> <p>This operation has a limit of five transactions per second per account. </p>
* [updateDestination](docs/sdk/README.md#updatedestination) - <p>Updates the specified destination of the specified delivery stream.</p> <p>Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target delivery stream remains active while the configurations are updated, so data writes to the delivery stream can continue during this process. The updated configurations are usually effective within a few minutes.</p> <p>Switching between Amazon ES and other services is not supported. For an Amazon ES destination, you can only update to another Amazon ES destination.</p> <p>If the destination type is the same, Kinesis Data Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing <code>EncryptionConfiguration</code> is maintained on the destination.</p> <p>If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Kinesis Data Firehose does not merge any parameters. In this case, all parameters must be specified.</p> <p>Kinesis Data Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
