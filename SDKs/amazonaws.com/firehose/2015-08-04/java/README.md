# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createDeliveryStream` - <p>Creates a Kinesis Data Firehose delivery stream.</p> <p>By default, you can create up to 50 delivery streams per Amazon Web Services Region.</p> <p>This is an asynchronous operation that immediately returns. The initial status of the delivery stream is <code>CREATING</code>. After the delivery stream is created, its status is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p> <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the <code>DeliveryStreamType</code> parameter to <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code> parameter.</p> <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on SSE for an existing delivery stream that doesn't have SSE enabled.</p> <p>A delivery stream is configured with a single destination: Amazon S3, Amazon ES, Amazon Redshift, or Splunk. You must specify only one of the following destination configuration parameters: <code>ExtendedS3DestinationConfiguration</code>, <code>S3DestinationConfiguration</code>, <code>ElasticsearchDestinationConfiguration</code>, <code>RedshiftDestinationConfiguration</code>, or <code>SplunkDestinationConfiguration</code>.</p> <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3.</p> <p>A few notes about Amazon Redshift as a destination:</p> <ul> <li> <p>An Amazon Redshift destination requires an S3 bucket as intermediate location. Kinesis Data Firehose first delivers data to Amazon S3 and then uses <code>COPY</code> syntax to load data into an Amazon Redshift table. This is specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code> parameter.</p> </li> <li> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p> </li> <li> <p>We strongly recommend that you use the user name and password you provide exclusively with Kinesis Data Firehose, and that the permissions for the account are restricted for Amazon Redshift <code>INSERT</code> permissions.</p> </li> </ul> <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Kinesis Data Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>
* `deleteDeliveryStream` - <p>Deletes a delivery stream and its data.</p> <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states: <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the <code>CREATING</code> state. While the deletion request is in process, the delivery stream is in the <code>DELETING</code> state.</p> <p>While the delivery stream is in the <code>DELETING</code> state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a delivery stream.</p>
* `describeDeliveryStream` - <p>Describes the specified delivery stream and its status. For example, after your delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it. If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>
* `listDeliveryStreams` - <p>Lists your delivery streams in alphabetical order of their names.</p> <p>The number of delivery streams might be too large to return using a single call to <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned, using the <code>Limit</code> parameter. To determine whether there are more delivery streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If there are more delivery streams to list, you can request them by calling this operation again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name of the last delivery stream returned in the last call.</p>
* `listTagsForDeliveryStream` - Lists the tags for the specified delivery stream. This operation has a limit of five transactions per second per account. 
* `putRecord` - <p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To write multiple data records into a delivery stream, use <a>PutRecordBatch</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>. </p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation.</p> <p>If the <code>PutRecord</code> operation throws a <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream. </p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
* `putRecordBatch` - <p>Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a delivery stream, use <a>PutRecord</a>. Applications using these operations are referred to as producers.</p> <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Quota</a>.</p> <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed.</p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <a>PutRecordBatch</a> response includes a count of failed records, <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>. Even if the <a>PutRecordBatch</a> call succeeds, the value of <code>FailedPutCount</code> may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. <code>RequestResponses</code> includes both successfully and unsuccessfully processed records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing of subsequent records. </p> <p>A successfully processed record includes a <code>RecordId</code> value, which is unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error, and is one of the following values: <code>ServiceUnavailableException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the error.</p> <p>If there is an internal server error or a timeout, the write might have completed or it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination.</p> <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream.</p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
* `startDeliveryStreamEncryption` - <p>Enables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>ENABLING</code>, and then to <code>ENABLED</code>. The encryption status of a delivery stream is the <code>Status</code> property in <a>DeliveryStreamEncryptionConfiguration</a>. If the operation fails, the encryption status changes to <code>ENABLING_FAILED</code>. You can continue to read and write data to your delivery stream while the encryption status is <code>ENABLING</code>, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to <code>ENABLED</code> before all records written to the delivery stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption status of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>Even if encryption is currently enabled for a delivery stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant.</p> <p>If a delivery stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get <code>ENABLING_FAILED</code>, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK.</p> <p>If the encryption status of your delivery stream is <code>ENABLING_FAILED</code>, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Kinesis Data Firehose to invoke KMS encrypt and decrypt operations.</p> <p>You can enable SSE for a delivery stream only if it's a delivery stream that uses <code>DirectPut</code> as its source. </p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
* `stopDeliveryStreamEncryption` - <p>Disables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then to <code>DISABLED</code>. You can continue to read and write data to your stream while its status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status changes to <code>DISABLED</code> before all records written to the delivery stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption state of a delivery stream, use <a>DescribeDeliveryStream</a>. </p> <p>If SSE is enabled using a customer managed CMK and then you invoke <code>StopDeliveryStreamEncryption</code>, Kinesis Data Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination.</p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
* `tagDeliveryStream` - <p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>. </p> <p>Each delivery stream can have up to 50 tags. </p> <p>This operation has a limit of five transactions per second per account. </p>
* `untagDeliveryStream` - <p>Removes tags from the specified delivery stream. Removed tags are deleted, and you can't recover them after this operation successfully completes.</p> <p>If you specify a tag that doesn't exist, the operation ignores it.</p> <p>This operation has a limit of five transactions per second per account. </p>
* `updateDestination` - <p>Updates the specified destination of the specified delivery stream.</p> <p>Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target delivery stream remains active while the configurations are updated, so data writes to the delivery stream can continue during this process. The updated configurations are usually effective within a few minutes.</p> <p>Switching between Amazon ES and other services is not supported. For an Amazon ES destination, you can only update to another Amazon ES destination.</p> <p>If the destination type is the same, Kinesis Data Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing <code>EncryptionConfiguration</code> is maintained on the destination.</p> <p>If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Kinesis Data Firehose does not merge any parameters. In this case, all parameters must be specified.</p> <p>Kinesis Data Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
