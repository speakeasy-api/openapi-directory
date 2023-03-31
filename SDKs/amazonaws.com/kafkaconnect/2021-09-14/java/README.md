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
import org.openapis.openapi.models.operations.CreateConnectorHeaders;
import org.openapis.openapi.models.operations.CreateConnectorRequestBodyCapacity;
import org.openapis.openapi.models.operations.CreateConnectorRequestBodyKafkaCluster;
import org.openapis.openapi.models.operations.CreateConnectorRequestBodyKafkaClusterClientAuthentication;
import org.openapis.openapi.models.operations.CreateConnectorRequestBodyKafkaClusterEncryptionInTransit;
import org.openapis.openapi.models.operations.CreateConnectorRequestBodyLogDelivery;
import org.openapis.openapi.models.operations.CreateConnectorRequestBodyWorkerConfiguration;
import org.openapis.openapi.models.operations.CreateConnectorRequestBody;
import org.openapis.openapi.models.operations.CreateConnectorRequest;
import org.openapis.openapi.models.operations.CreateConnectorResponse;
import org.openapis.openapi.models.shared.Plugin;
import org.openapis.openapi.models.shared.CustomPlugin;
import org.openapis.openapi.models.shared.WorkerLogDelivery;
import org.openapis.openapi.models.shared.S3LogDelivery;
import org.openapis.openapi.models.shared.FirehoseLogDelivery;
import org.openapis.openapi.models.shared.CloudWatchLogsLogDelivery;
import org.openapis.openapi.models.shared.KafkaClusterEncryptionInTransitTypeEnum;
import org.openapis.openapi.models.shared.KafkaClusterClientAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.ApacheKafkaCluster;
import org.openapis.openapi.models.shared.Vpc;
import org.openapis.openapi.models.shared.ProvisionedCapacity;
import org.openapis.openapi.models.shared.AutoScaling;
import org.openapis.openapi.models.shared.ScaleOutPolicy;
import org.openapis.openapi.models.shared.ScaleInPolicy;

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

            CreateConnectorRequest req = new CreateConnectorRequest() {{
                headers = new CreateConnectorHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateConnectorRequestBody() {{
                    capacity = new CreateConnectorRequestBodyCapacity() {{
                        autoScaling = new AutoScaling() {{
                            maxWorkerCount = 847252;
                            mcuCount = 423655;
                            minWorkerCount = 623564;
                            scaleInPolicy = new ScaleInPolicy() {{
                                cpuUtilizationPercentage = 645894;
                            }};
                            scaleOutPolicy = new ScaleOutPolicy() {{
                                cpuUtilizationPercentage = 384382;
                            }};
                        }};
                        provisionedCapacity = new ProvisionedCapacity() {{
                            mcuCount = 437587;
                            workerCount = 297534;
                        }};
                    }};
                    connectorConfiguration = new java.util.HashMap<String, String>() {{
                        put("ipsa", "delectus");
                        put("tempora", "suscipit");
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    connectorDescription = "iusto";
                    connectorName = "excepturi";
                    kafkaCluster = new CreateConnectorRequestBodyKafkaCluster() {{
                        apacheKafkaCluster = new ApacheKafkaCluster() {{
                            bootstrapServers = "nisi";
                            vpc = new Vpc() {{
                                securityGroups = new String[]{{
                                    add("temporibus"),
                                    add("ab"),
                                    add("quis"),
                                    add("veritatis"),
                                }};
                                subnets = new String[]{{
                                    add("perferendis"),
                                    add("ipsam"),
                                    add("repellendus"),
                                }};
                            }};
                        }};
                    }};
                    kafkaClusterClientAuthentication = new CreateConnectorRequestBodyKafkaClusterClientAuthentication() {{
                        authenticationType = "IAM";
                    }};
                    kafkaClusterEncryptionInTransit = new CreateConnectorRequestBodyKafkaClusterEncryptionInTransit() {{
                        encryptionType = "TLS";
                    }};
                    kafkaConnectVersion = "odit";
                    logDelivery = new CreateConnectorRequestBodyLogDelivery() {{
                        workerLogDelivery = new WorkerLogDelivery() {{
                            cloudWatchLogs = new CloudWatchLogsLogDelivery() {{
                                enabled = false;
                                logGroup = "at";
                            }};
                            firehose = new FirehoseLogDelivery() {{
                                deliveryStream = "at";
                                enabled = false;
                            }};
                            s3 = new S3LogDelivery() {{
                                bucket = "maiores";
                                enabled = false;
                                prefix = "molestiae";
                            }};
                        }};
                    }};
                    plugins = new org.openapis.openapi.models.shared.Plugin[]{{
                        add(new Plugin() {{
                            customPlugin = new CustomPlugin() {{
                                customPluginArn = "quod";
                                revision = 461479;
                            }};
                        }}),
                        add(new Plugin() {{
                            customPlugin = new CustomPlugin() {{
                                customPluginArn = "totam";
                                revision = 780529;
                            }};
                        }}),
                        add(new Plugin() {{
                            customPlugin = new CustomPlugin() {{
                                customPluginArn = "dolorum";
                                revision = 118274;
                            }};
                        }}),
                        add(new Plugin() {{
                            customPlugin = new CustomPlugin() {{
                                customPluginArn = "nam";
                                revision = 639921;
                            }};
                        }}),
                    }};
                    serviceExecutionRoleArn = "occaecati";
                    workerConfiguration = new CreateConnectorRequestBodyWorkerConfiguration() {{
                        revision = 143353;
                        workerConfigurationArn = "deleniti";
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
* `deleteCustomPlugin` - Deletes a custom plugin.
* `describeConnector` - Returns summary information about the connector.
* `describeCustomPlugin` - A summary description of the custom plugin.
* `describeWorkerConfiguration` - Returns information about a worker configuration.
* `listConnectors` - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* `listCustomPlugins` - Returns a list of all of the custom plugins in this account and Region.
* `listWorkerConfigurations` - Returns a list of all of the worker configurations in this account and Region.
* `updateConnector` - Updates the specified connector.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
