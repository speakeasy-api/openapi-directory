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
                    xAmzAlgorithm = "repellendus";
                    xAmzContentSha256 = "cupiditate";
                    xAmzCredential = "natus";
                    xAmzDate = "molestiae";
                    xAmzSecurityToken = "nesciunt";
                    xAmzSignature = "consectetur";
                    xAmzSignedHeaders = "iure";
                    xAmzTarget = "Firehose_20150804.CreateDeliveryStream";
                }};
                request = new CreateDeliveryStreamInput() {{
                    deliveryStreamEncryptionConfigurationInput = new DeliveryStreamEncryptionConfigurationInput() {{
                        keyARN = "sit";
                        keyType = "AWS_OWNED_CMK";
                    }};
                    deliveryStreamName = "est";
                    deliveryStreamType = "KinesisStreamAsSource";
                    elasticsearchDestinationConfiguration = new ElasticsearchDestinationConfiguration() {{
                        bufferingHints = new ElasticsearchBufferingHints() {{
                            intervalInSeconds = 4913775816691860455;
                            sizeInMBs = 6388634623525659448;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "est";
                            logStreamName = "necessitatibus";
                        }};
                        clusterEndpoint = "ut";
                        domainARN = "iusto";
                        indexName = "expedita";
                        indexRotationPeriod = "NoRotation";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new openapisdk.models.shared.Processor[]() {{
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "atque";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "aut";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "LambdaArn";
                                            parameterValue = "ut";
                                        }}),
                                    }};
                                    type = "MetadataExtraction";
                                }}),
                            }};
                        }};
                        retryOptions = new ElasticsearchRetryOptions() {{
                            durationInSeconds = 7832808625612860727;
                        }};
                        roleARN = "ducimus";
                        s3BackupMode = "FailedDocumentsOnly";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "optio";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 3730549494198104687;
                                sizeInMBs = 7173580319038902782;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = true;
                                logGroupName = "autem";
                                logStreamName = "tenetur";
                            }};
                            compressionFormat = "Snappy";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                    awskmsKeyARN = "repellat";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "modi";
                            prefix = "tempore";
                            roleARN = "repellendus";
                        }};
                        typeName = "asperiores";
                        vpcConfiguration = new VpcConfiguration() {{
                            roleARN = "molestiae";
                            securityGroupIds = new String[]() {{
                                add("reprehenderit"),
                                add("non"),
                                add("quis"),
                            }};
                            subnetIds = new String[]() {{
                                add("mollitia"),
                                add("sequi"),
                            }};
                        }};
                    }};
                    extendedS3DestinationConfiguration = new ExtendedS3DestinationConfiguration() {{
                        bucketARN = "maxime";
                        bufferingHints = new BufferingHints() {{
                            intervalInSeconds = 4008341877940571090;
                            sizeInMBs = 1527626489101312024;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = true;
                            logGroupName = "ea";
                            logStreamName = "in";
                        }};
                        compressionFormat = "UNCOMPRESSED";
                        dataFormatConversionConfiguration = new DataFormatConversionConfiguration() {{
                            enabled = false;
                            inputFormatConfiguration = new InputFormatConfiguration() {{
                                deserializer = new Deserializer() {{
                                    hiveJsonSerDe = new HiveJsonSerDe() {{
                                        timestampFormats = new String[]() {{
                                            add("eveniet"),
                                        }};
                                    }};
                                    openXJsonSerDe = new OpenXJsonSerDe() {{
                                        caseInsensitive = true;
                                        columnToJsonKeyMappings = new java.util.HashMap<String, String>() {{
                                            put("repudiandae", "aspernatur");
                                            put("consequuntur", "in");
                                            put("quam", "harum");
                                        }};
                                        convertDotsInJsonKeysToUnderscores = true;
                                    }};
                                }};
                            }};
                            outputFormatConfiguration = new OutputFormatConfiguration() {{
                                serializer = new Serializer() {{
                                    orcSerDe = new OrcSerDe() {{
                                        blockSizeBytes = 6227322861960617195;
                                        bloomFilterColumns = new String[]() {{
                                            add("neque"),
                                            add("quia"),
                                            add("qui"),
                                        }};
                                        bloomFilterFalsePositiveProbability = 11.100000;
                                        compression = "NONE";
                                        dictionaryKeyThreshold = 72.199997;
                                        enablePadding = true;
                                        formatVersion = "V0_11";
                                        paddingTolerance = 27.200001;
                                        rowIndexStride = 4790355136803249341;
                                        stripeSizeBytes = 1509612718786048821;
                                    }};
                                    parquetSerDe = new ParquetSerDe() {{
                                        blockSizeBytes = 1558267707881136306;
                                        compression = "GZIP";
                                        enableDictionaryCompression = false;
                                        maxPaddingBytes = 5155336118319790528;
                                        pageSizeBytes = 8551026195547362653;
                                        writerVersion = "V2";
                                    }};
                                }};
                            }};
                            schemaConfiguration = new SchemaConfiguration() {{
                                catalogId = "quia";
                                databaseName = "corporis";
                                region = "laboriosam";
                                roleARN = "hic";
                                tableName = "porro";
                                versionId = "atque";
                            }};
                        }};
                        dynamicPartitioningConfiguration = new DynamicPartitioningConfiguration() {{
                            enabled = true;
                            retryOptions = new RetryOptions() {{
                                durationInSeconds = 3668410904791842109;
                            }};
                        }};
                        encryptionConfiguration = new EncryptionConfiguration() {{
                            kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                awskmsKeyARN = "beatae";
                            }};
                            noEncryptionConfig = "NoEncryption";
                        }};
                        errorOutputPrefix = "sunt";
                        prefix = "sequi";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new openapisdk.models.shared.Processor[]() {{
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "id";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "quis";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "RoleArn";
                                            parameterValue = "similique";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferIntervalInSeconds";
                                            parameterValue = "deserunt";
                                        }}),
                                    }};
                                    type = "MetadataExtraction";
                                }}),
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "est";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                            }};
                        }};
                        roleARN = "quia";
                        s3BackupConfiguration = new S3DestinationConfiguration() {{
                            bucketARN = "animi";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 4543644223830212662;
                                sizeInMBs = 186512558197545847;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = true;
                                logGroupName = "harum";
                                logStreamName = "ipsa";
                            }};
                            compressionFormat = "UNCOMPRESSED";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                    awskmsKeyARN = "nisi";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "non";
                            prefix = "autem";
                            roleARN = "deleniti";
                        }};
                        s3BackupMode = "Enabled";
                    }};
                    httpEndpointDestinationConfiguration = new HttpEndpointDestinationConfiguration() {{
                        bufferingHints = new HttpEndpointBufferingHints() {{
                            intervalInSeconds = 889179140112191969;
                            sizeInMBs = 8217887369224743077;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "sunt";
                            logStreamName = "non";
                        }};
                        endpointConfiguration = new HttpEndpointConfiguration() {{
                            accessKey = "blanditiis";
                            name = "omnis";
                            url = "impedit";
                        }};
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = false;
                            processors = new openapisdk.models.shared.Processor[]() {{
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "iure";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                            }};
                        }};
                        requestConfiguration = new HttpEndpointRequestConfiguration() {{
                            commonAttributes = new openapisdk.models.shared.HttpEndpointCommonAttribute[]() {{
                                add(new HttpEndpointCommonAttribute() {{
                                    attributeName = "in";
                                    attributeValue = "est";
                                }}),
                            }};
                            contentEncoding = "NONE";
                        }};
                        retryOptions = new HttpEndpointRetryOptions() {{
                            durationInSeconds = 7407954097840616519;
                        }};
                        roleARN = "omnis";
                        s3BackupMode = "FailedDataOnly";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "id";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 2986343076357446094;
                                sizeInMBs = 9138926896528054305;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = true;
                                logGroupName = "sint";
                                logStreamName = "rerum";
                            }};
                            compressionFormat = "Snappy";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                    awskmsKeyARN = "voluptas";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "ut";
                            prefix = "qui";
                            roleARN = "aperiam";
                        }};
                    }};
                    kinesisStreamSourceConfiguration = new KinesisStreamSourceConfiguration() {{
                        kinesisStreamARN = "voluptatem";
                        roleARN = "sit";
                    }};
                    redshiftDestinationConfiguration = new RedshiftDestinationConfiguration() {{
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = false;
                            logGroupName = "ea";
                            logStreamName = "quod";
                        }};
                        clusterJDBCURL = "quia";
                        copyCommand = new CopyCommand() {{
                            copyOptions = "nisi";
                            dataTableColumns = "sunt";
                            dataTableName = "magni";
                        }};
                        password = "voluptates";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = true;
                            processors = new openapisdk.models.shared.Processor[]() {{
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "RoleArn";
                                            parameterValue = "minus";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "eum";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "MetadataExtractionQuery";
                                            parameterValue = "nostrum";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "Delimiter";
                                            parameterValue = "laborum";
                                        }}),
                                    }};
                                    type = "Lambda";
                                }}),
                            }};
                        }};
                        retryOptions = new RedshiftRetryOptions() {{
                            durationInSeconds = 3378553292571641863;
                        }};
                        roleARN = "aut";
                        s3BackupConfiguration = new S3DestinationConfiguration() {{
                            bucketARN = "et";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 5154647024511087326;
                                sizeInMBs = 3283561951860873060;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = true;
                                logGroupName = "impedit";
                                logStreamName = "voluptas";
                            }};
                            compressionFormat = "GZIP";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                    awskmsKeyARN = "rerum";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "qui";
                            prefix = "temporibus";
                            roleARN = "at";
                        }};
                        s3BackupMode = "Enabled";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "qui";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 6255246750626858445;
                                sizeInMBs = 3462742284048348632;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = false;
                                logGroupName = "sit";
                                logStreamName = "porro";
                            }};
                            compressionFormat = "ZIP";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                    awskmsKeyARN = "iusto";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "aut";
                            prefix = "porro";
                            roleARN = "qui";
                        }};
                        username = "hic";
                    }};
                    s3DestinationConfiguration = new CreateDeliveryStreamInputS3DestinationConfiguration() {{
                        bucketARN = "qui";
                        bufferingHints = new BufferingHints() {{
                            intervalInSeconds = 302431697846476833;
                            sizeInMBs = 9215903083251049227;
                        }};
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = true;
                            logGroupName = "recusandae";
                            logStreamName = "corporis";
                        }};
                        compressionFormat = "UNCOMPRESSED";
                        encryptionConfiguration = new EncryptionConfiguration() {{
                            kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                awskmsKeyARN = "qui";
                            }};
                            noEncryptionConfig = "NoEncryption";
                        }};
                        errorOutputPrefix = "eos";
                        prefix = "maiores";
                        roleARN = "rerum";
                    }};
                    splunkDestinationConfiguration = new SplunkDestinationConfiguration() {{
                        cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                            enabled = true;
                            logGroupName = "quia";
                            logStreamName = "ut";
                        }};
                        hecAcknowledgmentTimeoutInSeconds = 3987231774246520401;
                        hecEndpoint = "incidunt";
                        hecEndpointType = "Event";
                        hecToken = "voluptatem";
                        processingConfiguration = new ProcessingConfiguration() {{
                            enabled = true;
                            processors = new openapisdk.models.shared.Processor[]() {{
                                add(new Processor() {{
                                    parameters = new openapisdk.models.shared.ProcessorParameter[]() {{
                                        add(new ProcessorParameter() {{
                                            parameterName = "JsonParsingEngine";
                                            parameterValue = "pariatur";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "cupiditate";
                                        }}),
                                        add(new ProcessorParameter() {{
                                            parameterName = "BufferSizeInMBs";
                                            parameterValue = "reiciendis";
                                        }}),
                                    }};
                                    type = "AppendDelimiterToRecord";
                                }}),
                            }};
                        }};
                        retryOptions = new SplunkRetryOptions() {{
                            durationInSeconds = 6871627712247884748;
                        }};
                        s3BackupMode = "AllEvents";
                        s3Configuration = new S3DestinationConfiguration() {{
                            bucketARN = "error";
                            bufferingHints = new BufferingHints() {{
                                intervalInSeconds = 5200220478374960164;
                                sizeInMBs = 3540212452975936931;
                            }};
                            cloudWatchLoggingOptions = new CloudWatchLoggingOptions() {{
                                enabled = true;
                                logGroupName = "eveniet";
                                logStreamName = "ut";
                            }};
                            compressionFormat = "Snappy";
                            encryptionConfiguration = new EncryptionConfiguration() {{
                                kmsEncryptionConfig = new KmsEncryptionConfig() {{
                                    awskmsKeyARN = "sit";
                                }};
                                noEncryptionConfig = "NoEncryption";
                            }};
                            errorOutputPrefix = "veritatis";
                            prefix = "inventore";
                            roleARN = "quibusdam";
                        }};
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "sed";
                            value = "dolores";
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