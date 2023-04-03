<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateDeliveryStreamXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateDeliveryStreamRequest;
import org.openapis.openapi.models.operations.CreateDeliveryStreamResponse;
import org.openapis.openapi.models.shared.CreateDeliveryStreamInputS3DestinationConfiguration;
import org.openapis.openapi.models.shared.CreateDeliveryStreamInput;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.SplunkDestinationConfiguration;
import org.openapis.openapi.models.shared.S3DestinationConfiguration;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.NoEncryptionConfigEnum;
import org.openapis.openapi.models.shared.KMSEncryptionConfig;
import org.openapis.openapi.models.shared.CompressionFormatEnum;
import org.openapis.openapi.models.shared.CloudWatchLoggingOptions;
import org.openapis.openapi.models.shared.BufferingHints;
import org.openapis.openapi.models.shared.SplunkS3BackupModeEnum;
import org.openapis.openapi.models.shared.SplunkRetryOptions;
import org.openapis.openapi.models.shared.ProcessingConfiguration;
import org.openapis.openapi.models.shared.Processor;
import org.openapis.openapi.models.shared.ProcessorTypeEnum;
import org.openapis.openapi.models.shared.ProcessorParameter;
import org.openapis.openapi.models.shared.ProcessorParameterNameEnum;
import org.openapis.openapi.models.shared.HECEndpointTypeEnum;
import org.openapis.openapi.models.shared.RedshiftDestinationConfiguration;
import org.openapis.openapi.models.shared.RedshiftS3BackupModeEnum;
import org.openapis.openapi.models.shared.RedshiftRetryOptions;
import org.openapis.openapi.models.shared.CopyCommand;
import org.openapis.openapi.models.shared.KinesisStreamSourceConfiguration;
import org.openapis.openapi.models.shared.HttpEndpointDestinationConfiguration;
import org.openapis.openapi.models.shared.HttpEndpointS3BackupModeEnum;
import org.openapis.openapi.models.shared.HttpEndpointRetryOptions;
import org.openapis.openapi.models.shared.HttpEndpointRequestConfiguration;
import org.openapis.openapi.models.shared.ContentEncodingEnum;
import org.openapis.openapi.models.shared.HttpEndpointCommonAttribute;
import org.openapis.openapi.models.shared.HttpEndpointConfiguration;
import org.openapis.openapi.models.shared.HttpEndpointBufferingHints;
import org.openapis.openapi.models.shared.ExtendedS3DestinationConfiguration;
import org.openapis.openapi.models.shared.S3BackupModeEnum;
import org.openapis.openapi.models.shared.DynamicPartitioningConfiguration;
import org.openapis.openapi.models.shared.RetryOptions;
import org.openapis.openapi.models.shared.DataFormatConversionConfiguration;
import org.openapis.openapi.models.shared.SchemaConfiguration;
import org.openapis.openapi.models.shared.OutputFormatConfiguration;
import org.openapis.openapi.models.shared.Serializer;
import org.openapis.openapi.models.shared.ParquetSerDe;
import org.openapis.openapi.models.shared.ParquetWriterVersionEnum;
import org.openapis.openapi.models.shared.ParquetCompressionEnum;
import org.openapis.openapi.models.shared.OrcSerDe;
import org.openapis.openapi.models.shared.OrcFormatVersionEnum;
import org.openapis.openapi.models.shared.OrcCompressionEnum;
import org.openapis.openapi.models.shared.InputFormatConfiguration;
import org.openapis.openapi.models.shared.Deserializer;
import org.openapis.openapi.models.shared.OpenXJsonSerDe;
import org.openapis.openapi.models.shared.HiveJsonSerDe;
import org.openapis.openapi.models.shared.ElasticsearchDestinationConfiguration;
import org.openapis.openapi.models.shared.VpcConfiguration;
import org.openapis.openapi.models.shared.ElasticsearchS3BackupModeEnum;
import org.openapis.openapi.models.shared.ElasticsearchRetryOptions;
import org.openapis.openapi.models.shared.ElasticsearchIndexRotationPeriodEnum;
import org.openapis.openapi.models.shared.ElasticsearchBufferingHints;
import org.openapis.openapi.models.shared.DeliveryStreamTypeEnum;
import org.openapis.openapi.models.shared.DeliveryStreamEncryptionConfigurationInput;
import org.openapis.openapi.models.shared.KeyTypeEnum;
import org.openapis.openapi.models.shared.AmazonopensearchserviceDestinationConfiguration;
import org.openapis.openapi.models.shared.AmazonopensearchserviceS3BackupModeEnum;
import org.openapis.openapi.models.shared.AmazonopensearchserviceRetryOptions;
import org.openapis.openapi.models.shared.AmazonopensearchserviceIndexRotationPeriodEnum;
import org.openapis.openapi.models.shared.AmazonopensearchserviceBufferingHints;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessDestinationConfiguration;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessS3BackupModeEnum;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessRetryOptions;
import org.openapis.openapi.models.shared.AmazonOpenSearchServerlessBufferingHints;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeliveryStreamRequest req = new CreateDeliveryStreamRequest() {{
                createDeliveryStreamInput = new CreateDeliveryStreamInput() {{
                    amazonOpenSearchServerlessDestinationConfiguration = new AmazonOpenSearchServerlessDestinationConfiguration() {{
                        bufferingHints = new AmazonOpenSearchServerlessBufferingHints() {{
                            intervalInSeconds = 548814;
                            sizeInMBs = 592845;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "distinctio";
                            logStreamName = "quibusdam";
                        }};
                        collectionEndpoint = "unde";
                        indexName = "nulla";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new org.openapis.openapi.models.shared.Processor[]{{
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "error";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "suscipit";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "magnam";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "ipsa";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "molestiae";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "SubRecordType";
                                            parameterValue = "placeat";
                                        }}),
                                    }};
                                    type = "MetadataExtraction";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "nisi";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "temporibus";
                                        }}),
                                    }};
                                    type = "RecordDeAggregation";
                                }}),
                            }};
                        }};
                        retryOptions = new AmazonOpenSearchServerlessRetryOptions() {{
                            durationInSeconds = 337396;
                        }};
                        roleARN = "veritatis";
                        s3BackupMode = "AllDocuments";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "perferendis";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 368241;
                                sizeInMBs = 832620;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "sapiente";
                                logStreamName = "quo";
                            }};
                            compressionFormat = "UNCOMPRESSED";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "at";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "at";
                            prefix = "maiores";
                            roleARN = "molestiae";
                        }};
                        vpcConfiguration = new VpcConfiguration() {{
                            roleARN = "quod";
                            securityGroupIds = new String[]{{
                                add("esse"),
                                add("totam"),
                                add("porro"),
                                add("dolorum"),
                            }};
                            subnetIds = new String[]{{
                                add("nam"),
                            }};
                        }};
                    }};
                    amazonopensearchserviceDestinationConfiguration = new AmazonopensearchserviceDestinationConfiguration() {{
                        bufferingHints = new AmazonopensearchserviceBufferingHints() {{
                            intervalInSeconds = 639921;
                            sizeInMBs = 582020;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "fugit";
                            logStreamName = "deleniti";
                        }};
                        clusterEndpoint = "hic";
                        domainARN = "optio";
                        indexName = "totam";
                        indexRotationPeriod = "NoRotation";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new org.openapis.openapi.models.shared.Processor[]{{
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "qui";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferIntervalInSeconds";
                                            parameterValue = "cum";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "aspernatur";
                                        }}),
                                    }};
                                    type = "RecordDeAggregation";
                                }}),
                            }};
                        }};
                        retryOptions = new AmazonopensearchserviceRetryOptions() {{
                            durationInSeconds = 324141;
                        }};
                        roleARN = "natus";
                        s3BackupMode = "FailedDocumentsOnly";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "iste";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 222321;
                                sizeInMBs = 616934;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "laboriosam";
                                logStreamName = "hic";
                            }};
                            compressionFormat = "HADOOP_SNAPPY";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "fuga";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "in";
                            prefix = "corporis";
                            roleARN = "iste";
                        }};
                        typeName = "iure";
                        vpcConfiguration = new VpcConfiguration() {{
                            roleARN = "saepe";
                            securityGroupIds = new String[]{{
                                add("architecto"),
                                add("ipsa"),
                                add("reiciendis"),
                            }};
                            subnetIds = new String[]{{
                                add("mollitia"),
                                add("laborum"),
                                add("dolores"),
                            }};
                        }};
                    }};
                    deliveryStreamEncryptionConfigurationInput = new DeliveryStreamEncryptionConfigurationInput() {{
                        keyARN = "dolorem";
                        keyType = "AWS_OWNED_CMK";
                    }};
                    deliveryStreamName = "explicabo";
                    deliveryStreamType = "KinesisStreamAsSource";
                    elasticsearchDestinationConfiguration = new ElasticsearchDestinationConfiguration() {{
                        bufferingHints = new ElasticsearchBufferingHints() {{
                            intervalInSeconds = 315428;
                            sizeInMBs = 607831;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "nemo";
                            logStreamName = "minima";
                        }};
                        clusterEndpoint = "excepturi";
                        domainARN = "accusantium";
                        indexName = "iure";
                        indexRotationPeriod = "OneWeek";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new org.openapis.openapi.models.shared.Processor[]{{
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "LambdaArn";
                                            parameterValue = "mollitia";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "NumberOfRetries";
                                            parameterValue = "culpa";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "NumberOfRetries";
                                            parameterValue = "repellat";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "occaecati";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "RoleArn";
                                            parameterValue = "molestiae";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "error";
                                        }}),
                                    }};
                                    type = "RecordDeAggregation";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "LambdaArn";
                                            parameterValue = "laborum";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "enim";
                                        }}),
                                    }};
                                    type = "RecordDeAggregation";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "NumberOfRetries";
                                            parameterValue = "tenetur";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "id";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "SubRecordType";
                                            parameterValue = "aut";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "LambdaArn";
                                            parameterValue = "error";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                            }};
                        }};
                        retryOptions = new ElasticsearchRetryOptions() {{
                            durationInSeconds = 673660;
                        }};
                        roleARN = "quasi";
                        s3BackupMode = "AllDocuments";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "voluptatibus";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 878194;
                                sizeInMBs = 468651;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "praesentium";
                                logStreamName = "voluptatibus";
                            }};
                            compressionFormat = "UNCOMPRESSED";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "omnis";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "voluptate";
                            prefix = "cum";
                            roleARN = "perferendis";
                        }};
                        typeName = "doloremque";
                        vpcConfiguration = new VpcConfiguration() {{
                            roleARN = "reprehenderit";
                            securityGroupIds = new String[]{{
                                add("maiores"),
                                add("dicta"),
                            }};
                            subnetIds = new String[]{{
                                add("dolore"),
                                add("iusto"),
                            }};
                        }};
                    }};
                    extendedS3DestinationConfiguration = new ExtendedS3DestinationConfiguration() {{
                        bucketARN = "dicta";
                        bufferingHints = new BufferingHints() {{
                            intervalInSeconds = 688661;
                            sizeInMBs = 317983;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "accusamus";
                            logStreamName = "commodi";
                        }};
                        compressionFormat = "HADOOP_SNAPPY";
                        dataFormatConversionConfiguration = new DataFormatConversionConfiguration() {{
                            enabled = false;
                            inputFormatConfiguration = new InputFormatConfiguration() {{
                                deserializer = new Deserializer() {{
                                    hiveJsonSerDe = new HiveJsonSerDe() {{
                                        timestampFormats = new String[]{{
                                            add("ipsum"),
                                        }};
                                    }};
                                    openXJsonSerDe = new OpenXJsonSerDe() {{
                                        caseInsensitive = false;
                                        columnToJsonKeyMappings = new java.util.HashMap<String, String>() {{
                                            put("molestias", "excepturi");
                                            put("pariatur", "modi");
                                            put("praesentium", "rem");
                                        }};
                                        convertDotsInJsonKeysToUnderscores = false;
                                    }};
                                }};
                            }};
                            outputFormatConfiguration = new OutputFormatConfiguration() {{
                                serializer = new Serializer() {{
                                    orcSerDe = new OrcSerDe() {{
                                        blockSizeBytes = 916723;
                                        bloomFilterColumns = new String[]{{
                                            add("repudiandae"),
                                        }};
                                        bloomFilterFalsePositiveProbability = 5759.47;
                                        compression = "NONE";
                                        dictionaryKeyThreshold = 9292.97;
                                        enablePadding = false;
                                        formatVersion = "V0_11";
                                        paddingTolerance = 3185.69;
                                        rowIndexStride = 9356;
                                        stripeSizeBytes = 667411;
                                    }};
                                    parquetSerDe = new ParquetSerDe() {{
                                        blockSizeBytes = 842342;
                                        compression = "UNCOMPRESSED";
                                        enableDictionaryCompression = false;
                                        maxPaddingBytes = 647174;
                                        pageSizeBytes = 716327;
                                        writerVersion = "V2";
                                    }};
                                }};
                            }};
                            schemaConfiguration = new SchemaConfiguration() {{
                                catalogId = "labore";
                                databaseName = "modi";
                                region = "qui";
                                roleARN = "aliquid";
                                tableName = "cupiditate";
                                versionId = "quos";
                            }};
                        }};
                        dynamicPartitioningConfiguration = new DynamicPartitioningConfiguration() {{
                            enabled = false;
                            retryOptions = new RetryOptions() {{
                                durationInSeconds = 20107;
                            }};
                        }};
                        encryptionConfiguration = new EncryptionConfiguration() {{
                            kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                awskmsKeyARN = "magni";
                            }};
                            noEncryptionConfig = "NoEncryption";
                        }};
                        errorOutputPrefix = "assumenda";
                        prefix = "ipsam";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new org.openapis.openapi.models.shared.Processor[]{{
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferIntervalInSeconds";
                                            parameterValue = "excepturi";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                            }};
                        }};
                        roleARN = "facilis";
                        s3BackupConfiguration = new S3DestinationConfiguration() {{
                            bucketARN = "tempore";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 288476;
                                sizeInMBs = 962189;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "eum";
                                logStreamName = "non";
                            }};
                            compressionFormat = "Snappy";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "sint";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "aliquid";
                            prefix = "provident";
                            roleARN = "necessitatibus";
                        }};
                        s3BackupMode = "Enabled";
                    }};
                    httpEndpointDestinationConfiguration = new HttpEndpointDestinationConfiguration() {{
                        bufferingHints = new HttpEndpointBufferingHints() {{
                            intervalInSeconds = 638921;
                            sizeInMBs = 223081;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "debitis";
                            logStreamName = "a";
                        }};
                        endpointConfiguration = new HttpEndpointConfiguration() {{
                            accessKey = "dolorum";
                            name = "in";
                            url = "in";
                        }};
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new org.openapis.openapi.models.shared.Processor[]{{
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferIntervalInSeconds";
                                            parameterValue = "dicta";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "cumque";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "SubRecordType";
                                            parameterValue = "ea";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "laborum";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "enim";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferIntervalInSeconds";
                                            parameterValue = "provident";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferIntervalInSeconds";
                                            parameterValue = "id";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "RoleArn";
                                            parameterValue = "deleniti";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "amet";
                                        }}),
                                    }};
                                    type = "MetadataExtraction";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "natus";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "molestiae";
                                        }}),
                                    }};
                                    type = "RecordDeAggregation";
                                }}),
                            }};
                        }};
                        requestConfiguration = new HttpEndpointRequestConfiguration() {{
                            commonAttributes = new org.openapis.openapi.models.shared.HttpEndpointCommonAttribute[]{{
                                add(new HttpEndpointCommonAttribute() {{
                                    attributeName = "magnam";
                                    attributeValue = "distinctio";
                                }}),
                                add(new HttpEndpointCommonAttribute() {{
                                    attributeName = "id";
                                    attributeValue = "labore";
                                }}),
                            }};
                            contentEncoding = "NONE";
                        }};
                        retryOptions = new HttpEndpointRetryOptions() {{
                            durationInSeconds = 383462;
                        }};
                        roleARN = "natus";
                        s3BackupMode = "AllData";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "eum";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 878453;
                                sizeInMBs = 135474;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "architecto";
                                logStreamName = "magnam";
                            }};
                            compressionFormat = "UNCOMPRESSED";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "excepturi";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "ullam";
                            prefix = "provident";
                            roleARN = "quos";
                        }};
                    }};
                    kinesisStreamSourceConfiguration = new KinesisStreamSourceConfiguration() {{
                        kinesisStreamARN = "sint";
                        roleARN = "accusantium";
                    }};
                    redshiftDestinationConfiguration = new RedshiftDestinationConfiguration() {{
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "mollitia";
                            logStreamName = "reiciendis";
                        }};
                        clusterJDBCURL = "mollitia";
                        copyCommand = new CopyCommand() {{
                            copyOptions = "ad";
                            dataTableColumns = "eum";
                            dataTableName = "dolor";
                        }};
                        password = "necessitatibus";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new org.openapis.openapi.models.shared.Processor[]{{
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "LambdaArn";
                                            parameterValue = "iure";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "debitis";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                            }};
                        }};
                        retryOptions = new RedshiftRetryOptions() {{
                            durationInSeconds = 806194;
                        }};
                        roleARN = "deleniti";
                        s3BackupConfiguration = new S3DestinationConfiguration() {{
                            bucketARN = "facilis";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 447926;
                                sizeInMBs = 100226;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "architecto";
                                logStreamName = "repudiandae";
                            }};
                            compressionFormat = "GZIP";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "expedita";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "nihil";
                            prefix = "repellat";
                            roleARN = "quibusdam";
                        }};
                        s3BackupMode = "Disabled";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "saepe";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 868126;
                                sizeInMBs = 37559;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "consequuntur";
                                logStreamName = "praesentium";
                            }};
                            compressionFormat = "Snappy";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "magni";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "sunt";
                            prefix = "quo";
                            roleARN = "illum";
                        }};
                        username = "pariatur";
                    }};
                    s3DestinationConfiguration = new CreateDeliveryStreamInputS3DestinationConfiguration() {{
                        bucketARN = "maxime";
                        bufferingHints = new BufferingHints() {{
                            intervalInSeconds = 411397;
                            sizeInMBs = 569101;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "odit";
                            logStreamName = "ea";
                        }};
                        compressionFormat = "UNCOMPRESSED";
                        encryptionConfiguration = new EncryptionConfiguration() {{
                            kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                awskmsKeyARN = "ab";
                            }};
                            noEncryptionConfig = "NoEncryption";
                        }};
                        errorOutputPrefix = "maiores";
                        prefix = "quidem";
                        roleARN = "ipsam";
                    }};
                    splunkDestinationConfiguration = new SplunkDestinationConfiguration() {{
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "voluptate";
                            logStreamName = "autem";
                        }};
                        hecAcknowledgmentTimeoutInSeconds = 722056;
                        hecEndpoint = "eaque";
                        hecEndpointType = "Event";
                        hecToken = "nemo";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new org.openapis.openapi.models.shared.Processor[]{{
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "SubRecordType";
                                            parameterValue = "amet";
                                        }}),
                                    }};
                                    type = "RecordDeAggregation";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "hic";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferIntervalInSeconds";
                                            parameterValue = "nobis";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "NumberOfRetries";
                                            parameterValue = "quis";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "RoleArn";
                                            parameterValue = "dignissimos";
                                        }}),
                                    }};
                                    type = "RecordDeAggregation";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "NumberOfRetries";
                                            parameterValue = "eos";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "LambdaArn";
                                            parameterValue = "dolores";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "vero";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "hic";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                            }};
                        }};
                        retryOptions = new SplunkRetryOptions() {{
                            durationInSeconds = 608253;
                        }};
                        s3BackupMode = "AllEvents";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "perspiciatis";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 31838;
                                sizeInMBs = 783645;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "consequuntur";
                                logStreamName = "blanditiis";
                            }};
                            compressionFormat = "Snappy";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "eaque";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "occaecati";
                            prefix = "rerum";
                            roleARN = "adipisci";
                        }};
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "earum";
                            value = "modi";
                        }}),
                        add(new Tag() {{
                            key = "iste";
                            value = "dolorum";
                        }}),
                        add(new Tag() {{
                            key = "deleniti";
                            value = "pariatur";
                        }}),
                        add(new Tag() {{
                            key = "provident";
                            value = "nobis";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quaerat";
                xAmzDate = "quos";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolorem";
                xAmzTarget = "Firehose_20150804.CreateDeliveryStream";
            }}            

            CreateDeliveryStreamResponse res = sdk.createDeliveryStream(req);

            if (res.createDeliveryStreamOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->