<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeliveryStreamRequest;
import org.openapis.openapi.models.operations.CreateDeliveryStreamResponse;
import org.openapis.openapi.models.operations.CreateDeliveryStreamXAmzTargetEnum;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessBufferingHints;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessDestinationConfiguration;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessRetryOptions;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessS3BackupModeEnum;
import org.openapis.openapi.models.shared.AmazonopensearchserviceBufferingHints;
import org.openapis.openapi.models.shared.AmazonopensearchserviceDestinationConfiguration;
import org.openapis.openapi.models.shared.AmazonopensearchserviceIndexRotationPeriodEnum;
import org.openapis.openapi.models.shared.AmazonopensearchserviceRetryOptions;
import org.openapis.openapi.models.shared.AmazonopensearchserviceS3BackupModeEnum;
import org.openapis.openapi.models.shared.BufferingHints;
import org.openapis.openapi.models.shared.CloudWatchLoggingOptions;
import org.openapis.openapi.models.shared.CompressionFormatEnum;
import org.openapis.openapi.models.shared.ContentEncodingEnum;
import org.openapis.openapi.models.shared.CopyCommand;
import org.openapis.openapi.models.shared.CreateDeliveryStreamInput;
import org.openapis.openapi.models.shared.CreateDeliveryStreamInputS3DestinationConfiguration;
import org.openapis.openapi.models.shared.DataFormatConversionConfiguration;
import org.openapis.openapi.models.shared.DeliveryStreamEncryptionConfigurationInput;
import org.openapis.openapi.models.shared.DeliveryStreamTypeEnum;
import org.openapis.openapi.models.shared.Deserializer;
import org.openapis.openapi.models.shared.DynamicPartitioningConfiguration;
import org.openapis.openapi.models.shared.ElasticsearchBufferingHints;
import org.openapis.openapi.models.shared.ElasticsearchDestinationConfiguration;
import org.openapis.openapi.models.shared.ElasticsearchIndexRotationPeriodEnum;
import org.openapis.openapi.models.shared.ElasticsearchRetryOptions;
import org.openapis.openapi.models.shared.ElasticsearchS3BackupModeEnum;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.ExtendedS3DestinationConfiguration;
import org.openapis.openapi.models.shared.HECEndpointTypeEnum;
import org.openapis.openapi.models.shared.HiveJsonSerDe;
import org.openapis.openapi.models.shared.HttpEndpointBufferingHints;
import org.openapis.openapi.models.shared.HttpEndpointCommonAttribute;
import org.openapis.openapi.models.shared.HttpEndpointConfiguration;
import org.openapis.openapi.models.shared.HttpEndpointDestinationConfiguration;
import org.openapis.openapi.models.shared.HttpEndpointRequestConfiguration;
import org.openapis.openapi.models.shared.HttpEndpointRetryOptions;
import org.openapis.openapi.models.shared.HttpEndpointS3BackupModeEnum;
import org.openapis.openapi.models.shared.InputFormatConfiguration;
import org.openapis.openapi.models.shared.KMSEncryptionConfig;
import org.openapis.openapi.models.shared.KeyTypeEnum;
import org.openapis.openapi.models.shared.KinesisStreamSourceConfiguration;
import org.openapis.openapi.models.shared.NoEncryptionConfigEnum;
import org.openapis.openapi.models.shared.OpenXJsonSerDe;
import org.openapis.openapi.models.shared.OrcCompressionEnum;
import org.openapis.openapi.models.shared.OrcFormatVersionEnum;
import org.openapis.openapi.models.shared.OrcSerDe;
import org.openapis.openapi.models.shared.OutputFormatConfiguration;
import org.openapis.openapi.models.shared.ParquetCompressionEnum;
import org.openapis.openapi.models.shared.ParquetSerDe;
import org.openapis.openapi.models.shared.ParquetWriterVersionEnum;
import org.openapis.openapi.models.shared.ProcessingConfiguration;
import org.openapis.openapi.models.shared.Processor;
import org.openapis.openapi.models.shared.ProcessorParameter;
import org.openapis.openapi.models.shared.ProcessorParameterNameEnum;
import org.openapis.openapi.models.shared.ProcessorTypeEnum;
import org.openapis.openapi.models.shared.RedshiftDestinationConfiguration;
import org.openapis.openapi.models.shared.RedshiftRetryOptions;
import org.openapis.openapi.models.shared.RedshiftS3BackupModeEnum;
import org.openapis.openapi.models.shared.RetryOptions;
import org.openapis.openapi.models.shared.S3BackupModeEnum;
import org.openapis.openapi.models.shared.S3DestinationConfiguration;
import org.openapis.openapi.models.shared.SchemaConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Serializer;
import org.openapis.openapi.models.shared.SplunkDestinationConfiguration;
import org.openapis.openapi.models.shared.SplunkRetryOptions;
import org.openapis.openapi.models.shared.SplunkS3BackupModeEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VpcConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeliveryStreamRequest req = new CreateDeliveryStreamRequest(                new CreateDeliveryStreamInput("provident") {{
                                amazonOpenSearchServerlessDestinationConfiguration = new AmazonOpenSearchServerlessDestinationConfiguration("distinctio", "quibusdam",                 new S3DestinationConfiguration("unde", "nulla") {{
                                                    bufferingHints = new BufferingHints() {{
                                                        intervalInSeconds = 544883L;
                                                        sizeInMBs = 847252L;
                                                    }};;
                                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                                        enabled = false;
                                                        logGroupName = "vel";
                                                        logStreamName = "error";
                                                    }};;
                                                    compressionFormat = CompressionFormatEnum.SNAPPY;
                                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                                        kmsEncryptionConfig = new KMSEncryptionConfig("suscipit");;
                                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                                    }};;
                                                    errorOutputPrefix = "iure";
                                                    prefix = "magnam";
                                                }};) {{
                                    bufferingHints = new AmazonOpenSearchServerlessBufferingHints() {{
                                        intervalInSeconds = 891773L;
                                        sizeInMBs = 56713L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "delectus";
                                        logStreamName = "tempora";
                                    }};;
                                    collectionEndpoint = "suscipit";
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "excepturi") {{
                                                        parameterName = ProcessorParameterNameEnum.SUB_RECORD_TYPE;
                                                        parameterValue = "voluptatum";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "ab") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "recusandae";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "perferendis") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "veritatis";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "quo") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "repellendus";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.RECORD_DE_AGGREGATION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "quod") {{
                                                        parameterName = ProcessorParameterNameEnum.DELIMITER;
                                                        parameterValue = "molestiae";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "dolorum") {{
                                                        parameterName = ProcessorParameterNameEnum.ROLE_ARN;
                                                        parameterValue = "totam";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "occaecati") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "nam";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "optio") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "deleniti";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.METADATA_EXTRACTION;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new AmazonOpenSearchServerlessRetryOptions() {{
                                        durationInSeconds = 414662L;
                                    }};;
                                    s3BackupMode = AmazonOpenSearchServerlessS3BackupModeEnum.FAILED_DOCUMENTS_ONLY;
                                    vpcConfiguration = new VpcConfiguration("modi",                 new String[]{{
                                                        add("impedit"),
                                                    }},                 new String[]{{
                                                        add("esse"),
                                                        add("ipsum"),
                                                        add("excepturi"),
                                                    }});;
                                }};;
                                amazonopensearchserviceDestinationConfiguration = new AmazonopensearchserviceDestinationConfiguration("aspernatur", "perferendis",                 new S3DestinationConfiguration("ad", "natus") {{
                                                    bufferingHints = new BufferingHints() {{
                                                        intervalInSeconds = 149675L;
                                                        sizeInMBs = 612096L;
                                                    }};;
                                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                                        enabled = false;
                                                        logGroupName = "dolor";
                                                        logStreamName = "natus";
                                                    }};;
                                                    compressionFormat = CompressionFormatEnum.GZIP;
                                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                                        kmsEncryptionConfig = new KMSEncryptionConfig("hic");;
                                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                                    }};;
                                                    errorOutputPrefix = "saepe";
                                                    prefix = "fuga";
                                                }};) {{
                                    bufferingHints = new AmazonopensearchserviceBufferingHints() {{
                                        intervalInSeconds = 449950L;
                                        sizeInMBs = 359508L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "iste";
                                        logStreamName = "iure";
                                    }};;
                                    clusterEndpoint = "saepe";
                                    domainARN = "quidem";
                                    indexRotationPeriod = AmazonopensearchserviceIndexRotationPeriodEnum.NO_ROTATION;
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS, "dolores") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS;
                                                        parameterValue = "mollitia";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.NUMBER_OF_RETRIES, "nobis") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "corporis";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.JSON_PARSING_ENGINE, "minima") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "omnis";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.JSON_PARSING_ENGINE, "culpa") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS;
                                                        parameterValue = "accusantium";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new AmazonopensearchserviceRetryOptions() {{
                                        durationInSeconds = 102044L;
                                    }};;
                                    s3BackupMode = AmazonopensearchserviceS3BackupModeEnum.ALL_DOCUMENTS;
                                    typeName = "dolorem";
                                    vpcConfiguration = new VpcConfiguration("culpa",                 new String[]{{
                                                        add("repellat"),
                                                    }},                 new String[]{{
                                                        add("occaecati"),
                                                        add("numquam"),
                                                        add("commodi"),
                                                    }});;
                                }};;
                                deliveryStreamEncryptionConfigurationInput = new DeliveryStreamEncryptionConfigurationInput(KeyTypeEnum.AWS_OWNED_CMK) {{
                                    keyARN = "molestiae";
                                }};;
                                deliveryStreamType = DeliveryStreamTypeEnum.DIRECT_PUT;
                                elasticsearchDestinationConfiguration = new ElasticsearchDestinationConfiguration("error", "quia",                 new S3DestinationConfiguration("quis", "vitae") {{
                                                    bufferingHints = new BufferingHints() {{
                                                        intervalInSeconds = 674752L;
                                                        sizeInMBs = 656330L;
                                                    }};;
                                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                                        enabled = false;
                                                        logGroupName = "enim";
                                                        logStreamName = "odit";
                                                    }};;
                                                    compressionFormat = CompressionFormatEnum.SNAPPY;
                                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                                        kmsEncryptionConfig = new KMSEncryptionConfig("sequi");;
                                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                                    }};;
                                                    errorOutputPrefix = "tenetur";
                                                    prefix = "ipsam";
                                                }};) {{
                                    bufferingHints = new ElasticsearchBufferingHints() {{
                                        intervalInSeconds = 662527L;
                                        sizeInMBs = 820994L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "aut";
                                        logStreamName = "quasi";
                                    }};;
                                    clusterEndpoint = "error";
                                    domainARN = "temporibus";
                                    indexRotationPeriod = ElasticsearchIndexRotationPeriodEnum.ONE_WEEK;
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.LAMBDA) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "praesentium") {{
                                                        parameterName = ProcessorParameterNameEnum.DELIMITER;
                                                        parameterValue = "vero";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "voluptate") {{
                                                        parameterName = ProcessorParameterNameEnum.DELIMITER;
                                                        parameterValue = "ipsa";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.LAMBDA_ARN, "reprehenderit") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS;
                                                        parameterValue = "perferendis";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.NUMBER_OF_RETRIES, "corporis") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "maiores";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.LAMBDA;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new ElasticsearchRetryOptions() {{
                                        durationInSeconds = 118727L;
                                    }};;
                                    s3BackupMode = ElasticsearchS3BackupModeEnum.ALL_DOCUMENTS;
                                    typeName = "enim";
                                    vpcConfiguration = new VpcConfiguration("accusamus",                 new String[]{{
                                                        add("repudiandae"),
                                                        add("quae"),
                                                    }},                 new String[]{{
                                                        add("quidem"),
                                                    }});;
                                }};;
                                extendedS3DestinationConfiguration = new ExtendedS3DestinationConfiguration("molestias", "excepturi") {{
                                    bufferingHints = new BufferingHints() {{
                                        intervalInSeconds = 865103L;
                                        sizeInMBs = 265389L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "praesentium";
                                        logStreamName = "rem";
                                    }};;
                                    compressionFormat = CompressionFormatEnum.HADOOP_SNAPPY;
                                    dataFormatConversionConfiguration = new DataFormatConversionConfiguration() {{
                                        enabled = false;
                                        inputFormatConfiguration = new InputFormatConfiguration() {{
                                            deserializer = new Deserializer() {{
                                                hiveJsonSerDe = new HiveJsonSerDe() {{
                                                    timestampFormats = new String[]{{
                                                        add("repudiandae"),
                                                    }};
                                                }};;
                                                openXJsonSerDe = new OpenXJsonSerDe() {{
                                                    caseInsensitive = false;
                                                    columnToJsonKeyMappings = new java.util.HashMap<String, String>() {{
                                                        put("veritatis", "itaque");
                                                        put("incidunt", "enim");
                                                        put("consequatur", "est");
                                                    }};
                                                    convertDotsInJsonKeysToUnderscores = false;
                                                }};;
                                            }};;
                                        }};;
                                        outputFormatConfiguration = new OutputFormatConfiguration() {{
                                            serializer = new Serializer() {{
                                                orcSerDe = new OrcSerDe() {{
                                                    blockSizeBytes = 842342L;
                                                    bloomFilterColumns = new String[]{{
                                                        add("deserunt"),
                                                    }};
                                                    bloomFilterFalsePositiveProbability = 7163.27;
                                                    compression = OrcCompressionEnum.SNAPPY;
                                                    dictionaryKeyThreshold = 2894.06;
                                                    enablePadding = false;
                                                    formatVersion = OrcFormatVersionEnum.V011;
                                                    paddingTolerance = 1831.91;
                                                    rowIndexStride = 397821L;
                                                    stripeSizeBytes = 586513L;
                                                }};;
                                                parquetSerDe = new ParquetSerDe() {{
                                                    blockSizeBytes = 552822L;
                                                    compression = ParquetCompressionEnum.UNCOMPRESSED;
                                                    enableDictionaryCompression = false;
                                                    maxPaddingBytes = 164940L;
                                                    pageSizeBytes = 828940L;
                                                    writerVersion = ParquetWriterVersionEnum.V1;
                                                }};;
                                            }};;
                                        }};;
                                        schemaConfiguration = new SchemaConfiguration() {{
                                            catalogId = "alias";
                                            databaseName = "fugit";
                                            region = "dolorum";
                                            roleARN = "excepturi";
                                            tableName = "tempora";
                                            versionId = "facilis";
                                        }};;
                                    }};;
                                    dynamicPartitioningConfiguration = new DynamicPartitioningConfiguration() {{
                                        enabled = false;
                                        retryOptions = new RetryOptions() {{
                                            durationInSeconds = 735194L;
                                        }};;
                                    }};;
                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                        kmsEncryptionConfig = new KMSEncryptionConfig("labore");;
                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                    }};;
                                    errorOutputPrefix = "delectus";
                                    prefix = "eum";
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "necessitatibus") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS;
                                                        parameterValue = "aliquid";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY, "debitis") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS;
                                                        parameterValue = "officia";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "in") {{
                                                        parameterName = ProcessorParameterNameEnum.DELIMITER;
                                                        parameterValue = "dolorum";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS, "dicta") {{
                                                        parameterName = ProcessorParameterNameEnum.SUB_RECORD_TYPE;
                                                        parameterValue = "maiores";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.LAMBDA;
                                            }}),
                                        }};
                                    }};;
                                    s3BackupConfiguration = new S3DestinationConfiguration("facere", "ea") {{
                                        bufferingHints = new BufferingHints() {{
                                            intervalInSeconds = 396506L;
                                            sizeInMBs = 675439L;
                                        }};;
                                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                            enabled = false;
                                            logGroupName = "accusamus";
                                            logStreamName = "non";
                                        }};;
                                        compressionFormat = CompressionFormatEnum.ZIP;
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            kmsEncryptionConfig = new KMSEncryptionConfig("enim");;
                                            noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                        }};;
                                        errorOutputPrefix = "accusamus";
                                        prefix = "delectus";
                                    }};;
                                    s3BackupMode = S3BackupModeEnum.ENABLED;
                                }};;
                                httpEndpointDestinationConfiguration = new HttpEndpointDestinationConfiguration(                new HttpEndpointConfiguration("provident") {{
                                                    accessKey = "nam";
                                                    name = "Nelson Lesch";
                                                }};,                 new S3DestinationConfiguration("deserunt", "nisi") {{
                                                    bufferingHints = new BufferingHints() {{
                                                        intervalInSeconds = 423855L;
                                                        sizeInMBs = 618809L;
                                                    }};;
                                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                                        enabled = false;
                                                        logGroupName = "omnis";
                                                        logStreamName = "molestiae";
                                                    }};;
                                                    compressionFormat = CompressionFormatEnum.UNCOMPRESSED;
                                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                                        kmsEncryptionConfig = new KMSEncryptionConfig("nihil");;
                                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                                    }};;
                                                    errorOutputPrefix = "magnam";
                                                    prefix = "distinctio";
                                                }};) {{
                                    bufferingHints = new HttpEndpointBufferingHints() {{
                                        intervalInSeconds = 660174L;
                                        sizeInMBs = 287991L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "labore";
                                        logStreamName = "suscipit";
                                    }};;
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.NUMBER_OF_RETRIES, "architecto") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "vero";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "ullam") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "et";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS, "accusantium") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_SIZE_IN_M_BS;
                                                        parameterValue = "quos";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.METADATA_EXTRACTION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.METADATA_EXTRACTION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.NUMBER_OF_RETRIES, "necessitatibus") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "eum";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.LAMBDA_ARN, "iure") {{
                                                        parameterName = ProcessorParameterNameEnum.NUMBER_OF_RETRIES;
                                                        parameterValue = "nemo";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY, "maxime") {{
                                                        parameterName = ProcessorParameterNameEnum.DELIMITER;
                                                        parameterValue = "debitis";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.METADATA_EXTRACTION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "ullam") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "architecto";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.DELIMITER, "quibusdam") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS;
                                                        parameterValue = "nihil";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                        }};
                                    }};;
                                    requestConfiguration = new HttpEndpointRequestConfiguration() {{
                                        commonAttributes = new org.openapis.openapi.models.shared.HttpEndpointCommonAttribute[]{{
                                            add(new HttpEndpointCommonAttribute("praesentium", "natus") {{
                                                attributeName = "accusantium";
                                                attributeValue = "consequuntur";
                                            }}),
                                            add(new HttpEndpointCommonAttribute("quo", "illum") {{
                                                attributeName = "magni";
                                                attributeValue = "sunt";
                                            }}),
                                            add(new HttpEndpointCommonAttribute("ea", "excepturi") {{
                                                attributeName = "pariatur";
                                                attributeValue = "maxime";
                                            }}),
                                            add(new HttpEndpointCommonAttribute("accusantium", "ab") {{
                                                attributeName = "odit";
                                                attributeValue = "ea";
                                            }}),
                                        }};
                                        contentEncoding = ContentEncodingEnum.GZIP;
                                    }};;
                                    retryOptions = new HttpEndpointRetryOptions() {{
                                        durationInSeconds = 697429L;
                                    }};;
                                    roleARN = "ipsam";
                                    s3BackupMode = HttpEndpointS3BackupModeEnum.FAILED_DATA_ONLY;
                                }};;
                                kinesisStreamSourceConfiguration = new KinesisStreamSourceConfiguration("autem", "nam");;
                                redshiftDestinationConfiguration = new RedshiftDestinationConfiguration("eaque",                 new CopyCommand("pariatur") {{
                                                    copyOptions = "nemo";
                                                    dataTableColumns = "voluptatibus";
                                                }};, "perferendis", "fugiat",                 new S3DestinationConfiguration("amet", "aut") {{
                                                    bufferingHints = new BufferingHints() {{
                                                        intervalInSeconds = 764912L;
                                                        sizeInMBs = 359978L;
                                                    }};;
                                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                                        enabled = false;
                                                        logGroupName = "hic";
                                                        logStreamName = "libero";
                                                    }};;
                                                    compressionFormat = CompressionFormatEnum.SNAPPY;
                                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                                        kmsEncryptionConfig = new KMSEncryptionConfig("dolores");;
                                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                                    }};;
                                                    errorOutputPrefix = "quis";
                                                    prefix = "totam";
                                                }};, "dignissimos") {{
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "eaque";
                                        logStreamName = "quis";
                                    }};;
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.SUB_RECORD_TYPE, "quam") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "dolores";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new RedshiftRetryOptions() {{
                                        durationInSeconds = 345352L;
                                    }};;
                                    s3BackupConfiguration = new S3DestinationConfiguration("hic", "recusandae") {{
                                        bufferingHints = new BufferingHints() {{
                                            intervalInSeconds = 608253L;
                                            sizeInMBs = 704415L;
                                        }};;
                                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                            enabled = false;
                                            logGroupName = "perspiciatis";
                                            logStreamName = "voluptatem";
                                        }};;
                                        compressionFormat = CompressionFormatEnum.SNAPPY;
                                        encryptionConfiguration = new EncryptionConfiguration() {{
                                            kmsEncryptionConfig = new KMSEncryptionConfig("consequuntur");;
                                            noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                        }};;
                                        errorOutputPrefix = "blanditiis";
                                        prefix = "error";
                                    }};;
                                    s3BackupMode = RedshiftS3BackupModeEnum.DISABLED;
                                }};;
                                s3DestinationConfiguration = new CreateDeliveryStreamInputS3DestinationConfiguration("occaecati", "rerum") {{
                                    bufferingHints = new BufferingHints() {{
                                        intervalInSeconds = 237893L;
                                        sizeInMBs = 992397L;
                                    }};;
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "earum";
                                        logStreamName = "modi";
                                    }};;
                                    compressionFormat = CompressionFormatEnum.SNAPPY;
                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                        kmsEncryptionConfig = new KMSEncryptionConfig("dolorum");;
                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                    }};;
                                    errorOutputPrefix = "deleniti";
                                    prefix = "pariatur";
                                }};;
                                splunkDestinationConfiguration = new SplunkDestinationConfiguration("provident", HECEndpointTypeEnum.EVENT, "libero",                 new S3DestinationConfiguration("delectus", "quaerat") {{
                                                    bufferingHints = new BufferingHints() {{
                                                        intervalInSeconds = 554242L;
                                                        sizeInMBs = 398221L;
                                                    }};;
                                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                                        enabled = false;
                                                        logGroupName = "dolorem";
                                                        logStreamName = "dolorem";
                                                    }};;
                                                    compressionFormat = CompressionFormatEnum.GZIP;
                                                    encryptionConfiguration = new EncryptionConfiguration() {{
                                                        kmsEncryptionConfig = new KMSEncryptionConfig("qui");;
                                                        noEncryptionConfig = NoEncryptionConfigEnum.NO_ENCRYPTION;
                                                    }};;
                                                    errorOutputPrefix = "ipsum";
                                                    prefix = "hic";
                                                }};) {{
                                    cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                        enabled = false;
                                        logGroupName = "excepturi";
                                        logStreamName = "cum";
                                    }};;
                                    hecAcknowledgmentTimeoutInSeconds = 452109L;
                                    processingConfiguration = new ProcessingConfiguration() {{
                                        enabled = false;
                                        processors = new org.openapis.openapi.models.shared.Processor[]{{
                                            add(new Processor(ProcessorTypeEnum.APPEND_DELIMITER_TO_RECORD) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY, "veritatis") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "dolorum";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.JSON_PARSING_ENGINE, "odio") {{
                                                        parameterName = ProcessorParameterNameEnum.LAMBDA_ARN;
                                                        parameterValue = "ipsa";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS, "voluptatibus") {{
                                                        parameterName = ProcessorParameterNameEnum.METADATA_EXTRACTION_QUERY;
                                                        parameterValue = "accusamus";
                                                    }}),
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.NUMBER_OF_RETRIES, "atque") {{
                                                        parameterName = ProcessorParameterNameEnum.JSON_PARSING_ENGINE;
                                                        parameterValue = "natus";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.RECORD_DE_AGGREGATION;
                                            }}),
                                            add(new Processor(ProcessorTypeEnum.METADATA_EXTRACTION) {{
                                                parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                                    add(new ProcessorParameter(ProcessorParameterNameEnum.ROLE_ARN, "voluptate") {{
                                                        parameterName = ProcessorParameterNameEnum.BUFFER_INTERVAL_IN_SECONDS;
                                                        parameterValue = "dolorum";
                                                    }}),
                                                }};
                                                type = ProcessorTypeEnum.METADATA_EXTRACTION;
                                            }}),
                                        }};
                                    }};;
                                    retryOptions = new SplunkRetryOptions() {{
                                        durationInSeconds = 607045L;
                                    }};;
                                    s3BackupMode = SplunkS3BackupModeEnum.ALL_EVENTS;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("ipsum") {{
                                        key = "asperiores";
                                        value = "nihil";
                                    }}),
                                    add(new Tag("saepe") {{
                                        key = "voluptate";
                                        value = "id";
                                    }}),
                                    add(new Tag("perferendis") {{
                                        key = "eius";
                                        value = "aspernatur";
                                    }}),
                                }};
                            }};, CreateDeliveryStreamXAmzTargetEnum.FIREHOSE20150804_CREATE_DELIVERY_STREAM) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "optio";
                xAmzCredential = "accusamus";
                xAmzDate = "ad";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "deserunt";
            }};            

            CreateDeliveryStreamResponse res = sdk.createDeliveryStream(req);

            if (res.createDeliveryStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->