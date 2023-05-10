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