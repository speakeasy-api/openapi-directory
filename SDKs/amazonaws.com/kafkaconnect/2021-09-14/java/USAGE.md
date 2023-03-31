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