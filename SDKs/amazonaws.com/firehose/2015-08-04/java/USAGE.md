<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateDeliveryStreamRequest req = new CreateDeliveryStreamRequest() {{
                headers = new CreateDeliveryStreamHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "Firehose_20150804.CreateDeliveryStream";
                }};
                request = new CreateDeliveryStreamInput() {{
                    deliveryStreamEncryptionConfigurationInput = new DeliveryStreamEncryptionConfigurationInput() {{
                        keyARN = "fugit";
                        keyType = "AWS_OWNED_CMK";
                    }};
                    deliveryStreamName = "nihil";
                    deliveryStreamType = "KinesisStreamAsSource";
                    elasticsearchDestinationConfiguration = new ElasticsearchDestinationConfiguration() {{
                        bufferingHints = new ElasticsearchBufferingHints() {{
                            intervalInSeconds = 7837839688282259259;
                            sizeInMBs = 2518412263346885298;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = true;
                            logGroupName = "et";
                            logStreamName = "ut";
                        }};
                        clusterEndpoint = "dolorem";
                        domainARN = "et";
                        indexName = "voluptate";
                        indexRotationPeriod = "NoRotation";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = true;
                            processors = new openapisdk.models.shared.Processor[]() {{
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "debitis";
                                        }}),
                                    }};
                                    type = "RecordDeAggregation";
                                }}),
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "SubRecordType";
                                            parameterValue = "id";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "commodi";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "est";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "odit";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                            }};
                        }};
                        retryOptions = new ElasticsearchRetryOptions() {{
                            durationInSeconds = 167566062957544642;
                        }};
                        roleARN = "omnis";
                        s3BackupMode = "FailedDocumentsOnly";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "illo";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 5558237345453186302;
                                sizeInMBs = 7845762441295307478;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = true;
                                logGroupName = "consectetur";
                                logStreamName = "nobis";
                            }};
                            compressionFormat = "ZIP";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                    awskmsKeyARN = "qui";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "at";
                            prefix = "ipsum";
                            roleARN = "eveniet";
                        }};
                        typeName = "modi";
                        vpcConfiguration = new VpcConfiguration() {{
                            roleARN = "sint";
                            securityGroupIds = new String[]() {{
                                add("ut"),
                            }};
                            subnetIds = new String[]() {{
                                add("aut"),
                                add("reprehenderit"),
                                add("tempore"),
                            }};
                        }};
                    }};
                    extendedS3DestinationConfiguration = new ExtendedS3DestinationConfiguration() {{
                        bucketARN = "maiores";
                        bufferingHints = new BufferingHints() {{
                            intervalInSeconds = 1061380815263676471;
                            sizeInMBs = 7242748068272024738;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "veritatis";
                            logStreamName = "in";
                        }};
                        compressionFormat = "HADOOP_SNAPPY";
                        dataFormatConversionConfiguration = new DataFormatConversionConfiguration() {{
                            enabled = false;
                            inputFormatConfiguration = new InputFormatConfiguration() {{
                                deserializer = new Deserializer() {{
                                    hiveJsonSerDe = new HiveJsonSerDe() {{
                                        timestampFormats = new String[]() {{
                                            add("ex"),
                                        }};
                                    }};
                                    openXJsonSerDe = new OpenXJsonSerDe() {{
                                        caseInsensitive = true;
                                        columnToJsonKeyMappings = new java.util.HashMap<String, String>() {{
                                            put("vel", "rerum");
                                        }};
                                        convertDotsInJsonKeysToUnderscores = true;
                                    }};
                                }};
                            }};
                            outputFormatConfiguration = new OutputFormatConfiguration() {{
                                serializer = new Serializer() {{
                                    orcSerDe = new OrcSerDe() {{
                                        blockSizeBytes = 1938800996802160635;
                                        bloomFilterColumns = new String[]() {{
                                            add("reprehenderit"),
                                        }};
                                        bloomFilterFalsePositiveProbability = 94.099998;
                                        compression = "SNAPPY";
                                        dictionaryKeyThreshold = 31.100000;
                                        enablePadding = true;
                                        formatVersion = "V0_11";
                                        paddingTolerance = 26.100000;
                                        rowIndexStride = 8218430188258725598;
                                        stripeSizeBytes = 4255970180603226314;
                                    }};
                                    parquetSerDe = new ParquetSerDe() {{
                                        blockSizeBytes = 2682844416202521633;
                                        compression = "SNAPPY";
                                        enableDictionaryCompression = true;
                                        maxPaddingBytes = 5902760509050140210;
                                        pageSizeBytes = 9021104375654741729;
                                        writerVersion = "V2";
                                    }};
                                }};
                            }};
                            schemaConfiguration = new SchemaConfiguration() {{
                                catalogId = "cumque";
                                databaseName = "soluta";
                                region = "sunt";
                                roleARN = "voluptates";
                                tableName = "magni";
                                versionId = "et";
                            }};
                        }};
                        dynamicPartitioningConfiguration = new DynamicPartitioningConfiguration() {{
                            enabled = true;
                            retryOptions = new RetryOptions() {{
                                durationInSeconds = 8482125374365136680;
                            }};
                        }};
                        encryptionConfiguration = new EncryptionConfiguration() {{
                            kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                awskmsKeyARN = "earum";
                            }};
                            noEncryptionConfig = "NoEncryption";
                        }};
                        errorOutputPrefix = "omnis";
                        prefix = "ut";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new openapisdk.models.shared.Processor[]() {{
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferIntervalInSeconds";
                                            parameterValue = "reprehenderit";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "nostrum";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "a";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "LambdaArn";
                                            parameterValue = "aut";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "consequuntur";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                            }};
                        }};
                        roleARN = "autem";
                        s3BackupConfiguration = new S3DestinationConfiguration() {{
                            bucketARN = "ipsa";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 1627381309359808899;
                                sizeInMBs = 8204648627352676445;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = true;
                                logGroupName = "atque";
                                logStreamName = "ratione";
                            }};
                            compressionFormat = "ZIP";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                    awskmsKeyARN = "explicabo";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "maxime";
                            prefix = "eum";
                            roleARN = "perferendis";
                        }};
                        s3BackupMode = "Disabled";
                    }};
                    httpEndpointDestinationConfiguration = new HttpEndpointDestinationConfiguration() {{
                        bufferingHints = new HttpEndpointBufferingHints() {{
                            intervalInSeconds = 2037591971392316788;
                            sizeInMBs = 6394356307858046544;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "cumque";
                            logStreamName = "minima";
                        }};
                        endpointConfiguration = new HttpEndpointConfiguration() {{
                            accessKey = "necessitatibus";
                            name = "est";
                            url = "quis";
                        }};
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = true;
                            processors = new openapisdk.models.shared.Processor[]() {{
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "RoleArn";
                                            parameterValue = "ad";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "RoleArn";
                                            parameterValue = "vel";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                            }};
                        }};
                        requestConfiguration = new HttpEndpointRequestConfiguration() {{
                            commonAttributes = new openapisdk.models.shared.HttpEndpointCommonAttribute[]() {{
                                add(new HttpEndpointCommonAttribute() {{
                                    attributeName = "nihil";
                                    attributeValue = "tempora";
                                }}),
                                add(new HttpEndpointCommonAttribute() {{
                                    attributeName = "deserunt";
                                    attributeValue = "eaque";
                                }}),
                            }};
                            contentEncoding = "NONE";
                        }};
                        retryOptions = new HttpEndpointRetryOptions() {{
                            durationInSeconds = 157519078836327761;
                        }};
                        roleARN = "autem";
                        s3BackupMode = "FailedDataOnly";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "vel";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 8835845053628448511;
                                sizeInMBs = 3874550043338258151;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = true;
                                logGroupName = "nisi";
                                logStreamName = "quis";
                            }};
                            compressionFormat = "Snappy";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                    awskmsKeyARN = "porro";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "et";
                            prefix = "accusamus";
                            roleARN = "numquam";
                        }};
                    }};
                    kinesisStreamSourceConfiguration = new KinesisStreamSourceConfiguration() {{
                        kinesisStreamARN = "laborum";
                        roleARN = "rerum";
                    }};
                    redshiftDestinationConfiguration = new RedshiftDestinationConfiguration() {{
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = true;
                            logGroupName = "laborum";
                            logStreamName = "fugit";
                        }};
                        clusterJDBCURL = "quis";
                        copyCommand = new CopyCommand() {{
                            copyOptions = "minus";
                            dataTableColumns = "soluta";
                            dataTableName = "aperiam";
                        }};
                        password = "consequuntur";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = true;
                            processors = new openapisdk.models.shared.Processor[]() {{
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "LambdaArn";
                                            parameterValue = "ipsa";
                                        }}),
                                    }};
                                    type = "RecordDeAggregation";
                                }}),
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "aliquam";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "LambdaArn";
                                            parameterValue = "sed";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                            }};
                        }};
                        retryOptions = new RedshiftRetryOptions() {{
                            durationInSeconds = 6464511094049078446;
                        }};
                        roleARN = "consequuntur";
                        s3BackupConfiguration = new S3DestinationConfiguration() {{
                            bucketARN = "non";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 5366472482114725502;
                                sizeInMBs = 432317278959866118;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = true;
                                logGroupName = "pariatur";
                                logStreamName = "quasi";
                            }};
                            compressionFormat = "Snappy";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                    awskmsKeyARN = "enim";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "sit";
                            prefix = "possimus";
                            roleARN = "modi";
                        }};
                        s3BackupMode = "Disabled";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "consequuntur";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 6729602721413075826;
                                sizeInMBs = 7446022752824825204;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = true;
                                logGroupName = "occaecati";
                                logStreamName = "ex";
                            }};
                            compressionFormat = "ZIP";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                    awskmsKeyARN = "quia";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "velit";
                            prefix = "quae";
                            roleARN = "est";
                        }};
                        username = "ut";
                    }};
                    s3DestinationConfiguration = new CreateDeliveryStreamInputS3DestinationConfiguration() {{
                        bucketARN = "necessitatibus";
                        bufferingHints = new BufferingHints() {{
                            intervalInSeconds = 546268158124317116;
                            sizeInMBs = 7814737740801134387;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "dolorum";
                            logStreamName = "doloribus";
                        }};
                        compressionFormat = "ZIP";
                        encryptionConfiguration = new EncryptionConfiguration() {{
                            kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                awskmsKeyARN = "sunt";
                            }};
                            noEncryptionConfig = "NoEncryption";
                        }};
                        errorOutputPrefix = "et";
                        prefix = "ut";
                        roleARN = "asperiores";
                    }};
                    splunkDestinationConfiguration = new SplunkDestinationConfiguration() {{
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "est";
                            logStreamName = "ipsum";
                        }};
                        hecAcknowledgmentTimeoutInSeconds = 6787227741588449494;
                        hecEndpoint = "voluptas";
                        hecEndpointType = "Raw";
                        hecToken = "dolores";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new openapisdk.models.shared.Processor[]() {{
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "ut";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "illo";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "ducimus";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "NumberOfRetries";
                                            parameterValue = "blanditiis";
                                        }}),
                                    }};
                                    type = "RecordDeAggregation";
                                }}),
                            }};
                        }};
                        retryOptions = new SplunkRetryOptions() {{
                            durationInSeconds = 1638829746864917218;
                        }};
                        s3BackupMode = "FailedEventsOnly";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "dolore";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 7274936573655343394;
                                sizeInMBs = 7796777083842162182;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "modi";
                                logStreamName = "sunt";
                            }};
                            compressionFormat = "UNCOMPRESSED";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                    awskmsKeyARN = "amet";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "a";
                            prefix = "qui";
                            roleARN = "excepturi";
                        }};
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "corporis";
                            value = "dicta";
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