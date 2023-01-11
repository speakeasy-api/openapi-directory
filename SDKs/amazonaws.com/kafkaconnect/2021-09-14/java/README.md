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
                    xAmzAlgorithm = "totam";
                    xAmzContentSha256 = "eum";
                    xAmzCredential = "laborum";
                    xAmzDate = "maxime";
                    xAmzSecurityToken = "voluptatem";
                    xAmzSignature = "aut";
                    xAmzSignedHeaders = "qui";
                }};
                request = new CreateConnectorRequestBody() {{
                    capacity = new CreateConnectorRequestBodyCapacity() {{
                        autoScaling = new AutoScaling() {{
                            maxWorkerCount = 3504002613480678211;
                            mcuCount = 2500753354058343789;
                            minWorkerCount = 2787501642645844576;
                            scaleInPolicy = new ScaleInPolicy() {{
                                cpuUtilizationPercentage = 7677299547891902014;
                            }};
                            scaleOutPolicy = new ScaleOutPolicy() {{
                                cpuUtilizationPercentage = 7105999358852640672;
                            }};
                        }};
                        provisionedCapacity = new ProvisionedCapacity() {{
                            mcuCount = 3679840646143242248;
                            workerCount = 3126614124520816277;
                        }};
                    }};
                    connectorConfiguration = new java.util.HashMap<String, String>() {{
                        put("molestiae", "voluptas");
                    }};
                    connectorDescription = "officia";
                    connectorName = "cupiditate";
                    kafkaCluster = new CreateConnectorRequestBodyKafkaCluster() {{
                        apacheKafkaCluster = new ApacheKafkaCluster() {{
                            bootstrapServers = "in";
                            vpc = new Vpc() {{
                                securityGroups = new String[]() {{
                                    add("ipsa"),
                                    add("nemo"),
                                }};
                                subnets = new String[]() {{
                                    add("quae"),
                                    add("odit"),
                                    add("expedita"),
                                }};
                            }};
                        }};
                    }};
                    kafkaClusterClientAuthentication = new CreateConnectorRequestBodyKafkaClusterClientAuthentication() {{
                        authenticationType = "NONE";
                    }};
                    kafkaClusterEncryptionInTransit = new CreateConnectorRequestBodyKafkaClusterEncryptionInTransit() {{
                        encryptionType = "TLS";
                    }};
                    kafkaConnectVersion = "voluptate";
                    logDelivery = new CreateConnectorRequestBodyLogDelivery() {{
                        workerLogDelivery = new WorkerLogDelivery() {{
                            cloudWatchLogs = new CloudWatchLogsLogDelivery() {{
                                enabled = false;
                                logGroup = "harum";
                            }};
                            firehose = new FirehoseLogDelivery() {{
                                deliveryStream = "nulla";
                                enabled = true;
                            }};
                            s3 = new S3LogDelivery() {{
                                bucket = "corrupti";
                                enabled = false;
                                prefix = "consectetur";
                            }};
                        }};
                    }};
                    plugins = new openapisdk.models.shared.Plugin[]() {{
                        add(new Plugin() {{
                            customPlugin = new CustomPlugin() {{
                                customPluginArn = "impedit";
                                revision = 8021751157946261264;
                            }};
                        }}),
                    }};
                    serviceExecutionRoleArn = "doloribus";
                    workerConfiguration = new CreateConnectorRequestBodyWorkerConfiguration() {{
                        revision = 5906068016607125469;
                        workerConfigurationArn = "quis";
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
