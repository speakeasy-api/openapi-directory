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

            CreateConnectorRequest req = new CreateConnectorRequest() {{
                headers = new CreateConnectorHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateConnectorRequestBody() {{
                    capacity = new CreateConnectorRequestBodyCapacity() {{
                        autoScaling = new AutoScaling() {{
                            maxWorkerCount = 6044372234677422456;
                            mcuCount = 8274930044578894929;
                            minWorkerCount = 1543572285742637646;
                            scaleInPolicy = new ScaleInPolicy() {{
                                cpuUtilizationPercentage = 2661732831099943416;
                            }};
                            scaleOutPolicy = new ScaleOutPolicy() {{
                                cpuUtilizationPercentage = 8325060299420976708;
                            }};
                        }};
                        provisionedCapacity = new ProvisionedCapacity() {{
                            mcuCount = 7837839688282259259;
                            workerCount = 2518412263346885298;
                        }};
                    }};
                    connectorConfiguration = new java.util.HashMap<String, String>() {{
                        put("et", "ut");
                    }};
                    connectorDescription = "dolorem";
                    connectorName = "et";
                    kafkaCluster = new CreateConnectorRequestBodyKafkaCluster() {{
                        apacheKafkaCluster = new ApacheKafkaCluster() {{
                            bootstrapServers = "voluptate";
                            vpc = new Vpc() {{
                                securityGroups = new String[]() {{
                                    add("vitae"),
                                    add("totam"),
                                    add("dolores"),
                                }};
                                subnets = new String[]() {{
                                    add("debitis"),
                                    add("vel"),
                                    add("odio"),
                                }};
                            }};
                        }};
                    }};
                    kafkaClusterClientAuthentication = new CreateConnectorRequestBodyKafkaClusterClientAuthentication() {{
                        authenticationType = "IAM";
                    }};
                    kafkaClusterEncryptionInTransit = new CreateConnectorRequestBodyKafkaClusterEncryptionInTransit() {{
                        encryptionType = "PLAINTEXT";
                    }};
                    kafkaConnectVersion = "aspernatur";
                    logDelivery = new CreateConnectorRequestBodyLogDelivery() {{
                        workerLogDelivery = new WorkerLogDelivery() {{
                            cloudWatchLogs = new CloudWatchLogsLogDelivery() {{
                                enabled = true;
                                logGroup = "totam";
                            }};
                            firehose = new FirehoseLogDelivery() {{
                                deliveryStream = "commodi";
                                enabled = true;
                            }};
                            s3 = new S3LogDelivery() {{
                                bucket = "est";
                                enabled = true;
                                prefix = "odit";
                            }};
                        }};
                    }};
                    plugins = new openapisdk.models.shared.Plugin[]() {{
                        add(new Plugin() {{
                            customPlugin = new CustomPlugin() {{
                                customPluginArn = "voluptas";
                                revision = 4778690082005258714;
                            }};
                        }}),
                        add(new Plugin() {{
                            customPlugin = new CustomPlugin() {{
                                customPluginArn = "aut";
                                revision = 6972732843819909978;
                            }};
                        }}),
                        add(new Plugin() {{
                            customPlugin = new CustomPlugin() {{
                                customPluginArn = "sed";
                                revision = 7845762441295307478;
                            }};
                        }}),
                    }};
                    serviceExecutionRoleArn = "autem";
                    workerConfiguration = new CreateConnectorRequestBodyWorkerConfiguration() {{
                        revision = 8514850266767180993;
                        workerConfigurationArn = "nobis";
                    }};
                }};
            }};

            CreateConnectorResponse res = sdk.createConnector(req);

            if (res.createConnectorResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->