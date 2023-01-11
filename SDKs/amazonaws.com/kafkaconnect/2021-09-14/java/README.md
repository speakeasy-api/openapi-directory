# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createConnector` - Creates a connector using the specified properties.
* `createCustomPlugin` - Creates a custom plugin using the specified properties.
* `createWorkerConfiguration` - Creates a worker configuration using the specified properties.
* `deleteConnector` - Deletes the specified connector.
* `describeConnector` - Returns summary information about the connector.
* `describeCustomPlugin` - A summary description of the custom plugin.
* `describeWorkerConfiguration` - Returns information about a worker configuration.
* `listConnectors` - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* `listCustomPlugins` - Returns a list of all of the custom plugins in this account and Region.
* `listWorkerConfigurations` - Returns a list of all of the worker configurations in this account and Region.
* `updateConnector` - Updates the specified connector.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
