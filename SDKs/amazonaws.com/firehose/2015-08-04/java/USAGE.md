<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateDeliveryStreamXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateDeliveryStreamHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateDeliveryStreamRequest req = new CreateDeliveryStreamRequest() {{
                headers = new CreateDeliveryStreamHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "Firehose_20150804.CreateDeliveryStream";
                }};
                request = new CreateDeliveryStreamInput() {{
                    amazonOpenSearchServerlessDestinationConfiguration = new AmazonOpenSearchServerlessDestinationConfiguration() {{
                        bufferingHints = new AmazonOpenSearchServerlessBufferingHints() {{
                            intervalInSeconds = 847252;
                            sizeInMBs = 423655;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "error";
                            logStreamName = "deserunt";
                        }};
                        collectionEndpoint = "suscipit";
                        indexName = "iure";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new org.openapis.openapi.models.shared.Processor[]{{
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "LambdaArn";
                                            parameterValue = "delectus";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "suscipit";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "RoleArn";
                                            parameterValue = "minus";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "SubRecordType";
                                            parameterValue = "voluptatum";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "recusandae";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "SubRecordType";
                                            parameterValue = "ab";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "veritatis";
                                        }}),
                                    }};
                                    type = "MetadataExtraction";
                                }}),
                            }};
                        }};
                        retryOptions = new AmazonOpenSearchServerlessRetryOptions() {{
                            durationInSeconds = 20218;
                        }};
                        roleARN = "ipsam";
                        s3BackupMode = "AllDocuments";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "sapiente";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 778157;
                                sizeInMBs = 140350;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "at";
                                logStreamName = "at";
                            }};
                            compressionFormat = "HADOOP_SNAPPY";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "molestiae";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "quod";
                            prefix = "quod";
                            roleARN = "esse";
                        }};
                        vpcConfiguration = new VpcConfiguration() {{
                            roleARN = "totam";
                            securityGroupIds = new String[]{{
                                add("dolorum"),
                                add("dicta"),
                                add("nam"),
                                add("officia"),
                            }};
                            subnetIds = new String[]{{
                                add("fugit"),
                                add("deleniti"),
                                add("hic"),
                            }};
                        }};
                    }};
                    amazonopensearchserviceDestinationConfiguration = new AmazonopensearchserviceDestinationConfiguration() {{
                        bufferingHints = new AmazonopensearchserviceBufferingHints() {{
                            intervalInSeconds = 758616;
                            sizeInMBs = 521848;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "beatae";
                            logStreamName = "commodi";
                        }};
                        clusterEndpoint = "molestiae";
                        domainARN = "modi";
                        indexName = "qui";
                        indexRotationPeriod = "OneWeek";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new org.openapis.openapi.models.shared.Processor[]{{
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "NumberOfRetries";
                                            parameterValue = "excepturi";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "NumberOfRetries";
                                            parameterValue = "perferendis";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "NumberOfRetries";
                                            parameterValue = "iste";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "natus";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "hic";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "RoleArn";
                                            parameterValue = "corporis";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "iure";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "quidem";
                                        }}),
                                    }};
                                    type = "RecordDeAggregation";
                                }}),
                            }};
                        }};
                        retryOptions = new AmazonopensearchserviceRetryOptions() {{
                            durationInSeconds = 60225;
                        }};
                        roleARN = "reiciendis";
                        s3BackupMode = "AllDocuments";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "mollitia";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 670638;
                                sizeInMBs = 170909;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "dolorem";
                                logStreamName = "corporis";
                            }};
                            compressionFormat = "UNCOMPRESSED";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "nobis";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "enim";
                            prefix = "omnis";
                            roleARN = "nemo";
                        }};
                        typeName = "minima";
                        vpcConfiguration = new VpcConfiguration() {{
                            roleARN = "excepturi";
                            securityGroupIds = new String[]{{
                                add("iure"),
                            }};
                            subnetIds = new String[]{{
                                add("doloribus"),
                                add("sapiente"),
                                add("architecto"),
                            }};
                        }};
                    }};
                    deliveryStreamEncryptionConfigurationInput = new DeliveryStreamEncryptionConfigurationInput() {{
                        keyARN = "mollitia";
                        keyType = "AWS_OWNED_CMK";
                    }};
                    deliveryStreamName = "culpa";
                    deliveryStreamType = "DirectPut";
                    elasticsearchDestinationConfiguration = new ElasticsearchDestinationConfiguration() {{
                        bufferingHints = new ElasticsearchBufferingHints() {{
                            intervalInSeconds = 995300;
                            sizeInMBs = 653108;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "occaecati";
                            logStreamName = "numquam";
                        }};
                        clusterEndpoint = "commodi";
                        domainARN = "quam";
                        indexName = "molestiae";
                        indexRotationPeriod = "OneHour";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new org.openapis.openapi.models.shared.Processor[]{{
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "vitae";
                                        }}),
                                    }};
                                    type = "MetadataExtraction";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "odit";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "SubRecordType";
                                            parameterValue = "sequi";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "ipsam";
                                        }}),
                                    }};
                                    type = "MetadataExtraction";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "LambdaArn";
                                            parameterValue = "quasi";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "temporibus";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferIntervalInSeconds";
                                            parameterValue = "quasi";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "voluptatibus";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                            }};
                        }};
                        retryOptions = new ElasticsearchRetryOptions() {{
                            durationInSeconds = 468651;
                        }};
                        roleARN = "praesentium";
                        s3BackupMode = "AllDocuments";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "ipsa";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 604846;
                                sizeInMBs = 451159;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "cum";
                                logStreamName = "perferendis";
                            }};
                            compressionFormat = "UNCOMPRESSED";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "reprehenderit";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "ut";
                            prefix = "maiores";
                            roleARN = "dicta";
                        }};
                        typeName = "corporis";
                        vpcConfiguration = new VpcConfiguration() {{
                            roleARN = "dolore";
                            securityGroupIds = new String[]{{
                                add("dicta"),
                                add("harum"),
                            }};
                            subnetIds = new String[]{{
                                add("accusamus"),
                                add("commodi"),
                            }};
                        }};
                    }};
                    extendedS3DestinationConfiguration = new ExtendedS3DestinationConfiguration() {{
                        bucketARN = "repudiandae";
                        bufferingHints = new BufferingHints() {{
                            intervalInSeconds = 64147;
                            sizeInMBs = 216822;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "quidem";
                            logStreamName = "molestias";
                        }};
                        compressionFormat = "ZIP";
                        dataFormatConversionConfiguration = new DataFormatConversionConfiguration() {{
                            enabled = false;
                            inputFormatConfiguration = new InputFormatConfiguration() {{
                                deserializer = new Deserializer() {{
                                    hiveJsonSerDe = new HiveJsonSerDe() {{
                                        timestampFormats = new String[]{{
                                            add("modi"),
                                            add("praesentium"),
                                            add("rem"),
                                            add("voluptates"),
                                        }};
                                    }};
                                    openXJsonSerDe = new OpenXJsonSerDe() {{
                                        caseInsensitive = false;
                                        columnToJsonKeyMappings = new java.util.HashMap<String, String>() {{
                                            put("repudiandae", "sint");
                                        }};
                                        convertDotsInJsonKeysToUnderscores = false;
                                    }};
                                }};
                            }};
                            outputFormatConfiguration = new OutputFormatConfiguration() {{
                                serializer = new Serializer() {{
                                    orcSerDe = new OrcSerDe() {{
                                        blockSizeBytes = 83112;
                                        bloomFilterColumns = new String[]{{
                                            add("incidunt"),
                                            add("enim"),
                                            add("consequatur"),
                                            add("est"),
                                        }};
                                        bloomFilterFalsePositiveProbability = 8423.42;
                                        compression = "NONE";
                                        dictionaryKeyThreshold = 6471.74;
                                        enablePadding = false;
                                        formatVersion = "V0_12";
                                        paddingTolerance = 8413.86;
                                        rowIndexStride = 289406;
                                        stripeSizeBytes = 264730;
                                    }};
                                    parquetSerDe = new ParquetSerDe() {{
                                        blockSizeBytes = 183191;
                                        compression = "GZIP";
                                        enableDictionaryCompression = false;
                                        maxPaddingBytes = 586513;
                                        pageSizeBytes = 552822;
                                        writerVersion = "V1";
                                    }};
                                }};
                            }};
                            schemaConfiguration = new SchemaConfiguration() {{
                                catalogId = "magni";
                                databaseName = "assumenda";
                                region = "ipsam";
                                roleARN = "alias";
                                tableName = "fugit";
                                versionId = "dolorum";
                            }};
                        }};
                        dynamicPartitioningConfiguration = new DynamicPartitioningConfiguration() {{
                            enabled = false;
                            retryOptions = new RetryOptions() {{
                                durationInSeconds = 569618;
                            }};
                        }};
                        encryptionConfiguration = new EncryptionConfiguration() {{
                            kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                awskmsKeyARN = "tempora";
                            }};
                            noEncryptionConfig = "NoEncryption";
                        }};
                        errorOutputPrefix = "facilis";
                        prefix = "tempore";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new org.openapis.openapi.models.shared.Processor[]{{
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "non";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferIntervalInSeconds";
                                            parameterValue = "sint";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "provident";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "sint";
                                        }}),
                                    }};
                                    type = "MetadataExtraction";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "a";
                                        }}),
                                    }};
                                    type = "MetadataExtraction";
                                }}),
                            }};
                        }};
                        roleARN = "in";
                        s3BackupConfiguration = new S3DestinationConfiguration() {{
                            bucketARN = "in";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 846409;
                                sizeInMBs = 978571;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "rerum";
                                logStreamName = "dicta";
                            }};
                            compressionFormat = "GZIP";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "cumque";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "facere";
                            prefix = "ea";
                            roleARN = "aliquid";
                        }};
                        s3BackupMode = "Enabled";
                    }};
                    httpEndpointDestinationConfiguration = new HttpEndpointDestinationConfiguration() {{
                        bufferingHints = new HttpEndpointBufferingHints() {{
                            intervalInSeconds = 881104;
                            sizeInMBs = 249796;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "occaecati";
                            logStreamName = "enim";
                        }};
                        endpointConfiguration = new HttpEndpointConfiguration() {{
                            accessKey = "accusamus";
                            name = "delectus";
                            url = "quidem";
                        }};
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new org.openapis.openapi.models.shared.Processor[]{{
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "blanditiis";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "RoleArn";
                                            parameterValue = "sapiente";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "deserunt";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "omnis";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "RoleArn";
                                            parameterValue = "perferendis";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferIntervalInSeconds";
                                            parameterValue = "id";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "labore";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                            }};
                        }};
                        requestConfiguration = new HttpEndpointRequestConfiguration() {{
                            commonAttributes = new org.openapis.openapi.models.shared.HttpEndpointCommonAttribute[]{{
                                add(new HttpEndpointCommonAttribute() {{
                                    attributeName = "nobis";
                                    attributeValue = "eum";
                                }}),
                                add(new HttpEndpointCommonAttribute() {{
                                    attributeName = "vero";
                                    attributeValue = "aspernatur";
                                }}),
                                add(new HttpEndpointCommonAttribute() {{
                                    attributeName = "architecto";
                                    attributeValue = "magnam";
                                }}),
                            }};
                            contentEncoding = "NONE";
                        }};
                        retryOptions = new HttpEndpointRetryOptions() {{
                            durationInSeconds = 569965;
                        }};
                        roleARN = "ullam";
                        s3BackupMode = "AllData";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "quos";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 574325;
                                sizeInMBs = 33625;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "mollitia";
                                logStreamName = "reiciendis";
                            }};
                            compressionFormat = "Snappy";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "ad";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "eum";
                            prefix = "dolor";
                            roleARN = "necessitatibus";
                        }};
                    }};
                    kinesisStreamSourceConfiguration = new KinesisStreamSourceConfiguration() {{
                        kinesisStreamARN = "odit";
                        roleARN = "nemo";
                    }};
                    redshiftDestinationConfiguration = new RedshiftDestinationConfiguration() {{
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "quasi";
                            logStreamName = "iure";
                        }};
                        clusterJDBCURL = "doloribus";
                        copyCommand = new CopyCommand() {{
                            copyOptions = "debitis";
                            dataTableColumns = "eius";
                            dataTableName = "maxime";
                        }};
                        password = "deleniti";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new org.openapis.openapi.models.shared.Processor[]{{
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "LambdaArn";
                                            parameterValue = "architecto";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "ullam";
                                        }}),
                                    }};
                                    type = "MetadataExtraction";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "quibusdam";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "NumberOfRetries";
                                            parameterValue = "saepe";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "NumberOfRetries";
                                            parameterValue = "praesentium";
                                        }}),
                                    }};
                                    type = "MetadataExtraction";
                                }}),
                            }};
                        }};
                        retryOptions = new RedshiftRetryOptions() {{
                            durationInSeconds = 166847;
                        }};
                        roleARN = "sunt";
                        s3BackupConfiguration = new S3DestinationConfiguration() {{
                            bucketARN = "quo";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 848009;
                                sizeInMBs = 864934;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "maxime";
                                logStreamName = "ea";
                            }};
                            compressionFormat = "ZIP";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "odit";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "ea";
                            prefix = "accusantium";
                            roleARN = "ab";
                        }};
                        s3BackupMode = "Enabled";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "quidem";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 373291;
                                sizeInMBs = 453543;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "autem";
                                logStreamName = "nam";
                            }};
                            compressionFormat = "UNCOMPRESSED";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "pariatur";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "nemo";
                            prefix = "voluptatibus";
                            roleARN = "perferendis";
                        }};
                        username = "fugiat";
                    }};
                    s3DestinationConfiguration = new CreateDeliveryStreamInputS3DestinationConfiguration() {{
                        bucketARN = "amet";
                        bufferingHints = new BufferingHints() {{
                            intervalInSeconds = 11714;
                            sizeInMBs = 764912;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "corporis";
                            logStreamName = "hic";
                        }};
                        compressionFormat = "Snappy";
                        encryptionConfiguration = new EncryptionConfiguration() {{
                            kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                awskmsKeyARN = "nobis";
                            }};
                            noEncryptionConfig = "NoEncryption";
                        }};
                        errorOutputPrefix = "dolores";
                        prefix = "quis";
                        roleARN = "totam";
                    }};
                    splunkDestinationConfiguration = new SplunkDestinationConfiguration() {{
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "dignissimos";
                            logStreamName = "eaque";
                        }};
                        hecAcknowledgmentTimeoutInSeconds = 338985;
                        hecEndpoint = "nesciunt";
                        hecEndpointType = "Raw";
                        hecToken = "perferendis";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new org.openapis.openapi.models.shared.Processor[]{{
                                add(new Processor() {{
                                    parameters = new org.openapis.openapi.models.shared.ProcessorParameter[]{{
                                        add(new ProcessorParameter() {{
                                            parameterName = "RoleArn";
                                            parameterValue = "dolor";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "SubRecordType";
                                            parameterValue = "nostrum";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "recusandae";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "facilis";
                                        }}),
                                    }};
                                    type = "MetadataExtraction";
                                }}),
                            }};
                        }};
                        retryOptions = new SplunkRetryOptions() {{
                            durationInSeconds = 31838;
                        }};
                        s3BackupMode = "AllEvents";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "consequuntur";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 500026;
                                sizeInMBs = 621479;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "eaque";
                                logStreamName = "occaecati";
                            }};
                            compressionFormat = "Snappy";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KMSEncryptionConfig() {{
                                    awskmsKeyARN = "adipisci";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "asperiores";
                            prefix = "earum";
                            roleARN = "modi";
                        }};
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "dolorum";
                            value = "deleniti";
                        }}),
                        add(new Tag() {{
                            key = "pariatur";
                            value = "provident";
                        }}),
                        add(new Tag() {{
                            key = "nobis";
                            value = "libero";
                        }}),
                    }};
                }};
            }};            

            CreateDeliveryStreamResponse res = sdk.createDeliveryStream(req);

            if (res.createDeliveryStreamOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->