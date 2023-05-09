# SDK

## Overview

<p/>

Amazon Web Services documentation
<https://docs.aws.amazon.com/kafkaconnect/>
### Available Operations

* [createConnector](#createconnector) - Creates a connector using the specified properties.
* [createCustomPlugin](#createcustomplugin) - Creates a custom plugin using the specified properties.
* [createWorkerConfiguration](#createworkerconfiguration) - Creates a worker configuration using the specified properties.
* [deleteConnector](#deleteconnector) - Deletes the specified connector.
* [deleteCustomPlugin](#deletecustomplugin) - Deletes a custom plugin.
* [describeConnector](#describeconnector) - Returns summary information about the connector.
* [describeCustomPlugin](#describecustomplugin) - A summary description of the custom plugin.
* [describeWorkerConfiguration](#describeworkerconfiguration) - Returns information about a worker configuration.
* [listConnectors](#listconnectors) - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* [listCustomPlugins](#listcustomplugins) - Returns a list of all of the custom plugins in this account and Region.
* [listWorkerConfigurations](#listworkerconfigurations) - Returns a list of all of the worker configurations in this account and Region.
* [updateConnector](#updateconnector) - Updates the specified connector.

## createConnector

Creates a connector using the specified properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConnectorRequest;
import org.openapis.openapi.models.operations.CreateConnectorRequestBody;
import org.openapis.openapi.models.operations.CreateConnectorRequestBodyCapacity;
import org.openapis.openapi.models.operations.CreateConnectorRequestBodyKafkaCluster;
import org.openapis.openapi.models.operations.CreateConnectorRequestBodyKafkaClusterClientAuthentication;
import org.openapis.openapi.models.operations.CreateConnectorRequestBodyKafkaClusterEncryptionInTransit;
import org.openapis.openapi.models.operations.CreateConnectorRequestBodyLogDelivery;
import org.openapis.openapi.models.operations.CreateConnectorRequestBodyWorkerConfiguration;
import org.openapis.openapi.models.operations.CreateConnectorResponse;
import org.openapis.openapi.models.shared.ApacheKafkaCluster;
import org.openapis.openapi.models.shared.AutoScaling;
import org.openapis.openapi.models.shared.CloudWatchLogsLogDelivery;
import org.openapis.openapi.models.shared.CustomPlugin;
import org.openapis.openapi.models.shared.FirehoseLogDelivery;
import org.openapis.openapi.models.shared.KafkaClusterClientAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.KafkaClusterEncryptionInTransitTypeEnum;
import org.openapis.openapi.models.shared.Plugin;
import org.openapis.openapi.models.shared.ProvisionedCapacity;
import org.openapis.openapi.models.shared.S3LogDelivery;
import org.openapis.openapi.models.shared.ScaleInPolicy;
import org.openapis.openapi.models.shared.ScaleOutPolicy;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Vpc;
import org.openapis.openapi.models.shared.WorkerLogDelivery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectorRequest req = new CreateConnectorRequest(                new CreateConnectorRequestBody(                new CreateConnectorRequestBodyCapacity() {{
                                                autoScaling = new AutoScaling(143353L, 537373L, 944669L) {{
                                                    scaleInPolicy = new ScaleInPolicy(758616L);;
                                                    scaleOutPolicy = new ScaleOutPolicy(521848L);;
                                                }};;
                                                provisionedCapacity = new ProvisionedCapacity(105907L, 414662L);;
                                            }};,                 new java.util.HashMap<String, String>() {{
                                                put("modi", "qui");
                                                put("impedit", "cum");
                                            }}, "esse",                 new CreateConnectorRequestBodyKafkaCluster() {{
                                                apacheKafkaCluster = new ApacheKafkaCluster("ipsum",                 new Vpc(                new String[]{{
                                                                                    add("aspernatur"),
                                                                                    add("perferendis"),
                                                                                    add("ad"),
                                                                                }}) {{
                                                                    securityGroups = new String[]{{
                                                                        add("sed"),
                                                                        add("iste"),
                                                                        add("dolor"),
                                                                    }};
                                                                }};);;
                                            }};,                 new CreateConnectorRequestBodyKafkaClusterClientAuthentication() {{
                                                authenticationType = KafkaClusterClientAuthenticationTypeEnum.IAM;
                                            }};,                 new CreateConnectorRequestBodyKafkaClusterEncryptionInTransit() {{
                                                encryptionType = KafkaClusterEncryptionInTransitTypeEnum.PLAINTEXT;
                                            }};, "hic",                 new org.openapis.openapi.models.shared.Plugin[]{{
                                                add(new Plugin(                new CustomPlugin("iure", 902349L);) {{
                                                    customPlugin = new CustomPlugin("corporis", 613064L) {{
                                                        customPluginArn = "fuga";
                                                        revision = 449950L;
                                                    }};
                                                }}),
                                                add(new Plugin(                new CustomPlugin("est", 653140L);) {{
                                                    customPlugin = new CustomPlugin("ipsa", 969810L) {{
                                                        customPluginArn = "quidem";
                                                        revision = 99280L;
                                                    }};
                                                }}),
                                                add(new Plugin(                new CustomPlugin("explicabo", 750686L);) {{
                                                    customPlugin = new CustomPlugin("dolorem", 358152L) {{
                                                        customPluginArn = "laborum";
                                                        revision = 170909L;
                                                    }};
                                                }}),
                                                add(new Plugin(                new CustomPlugin("excepturi", 38425L);) {{
                                                    customPlugin = new CustomPlugin("nemo", 325047L) {{
                                                        customPluginArn = "enim";
                                                        revision = 607831L;
                                                    }};
                                                }}),
                                            }}, "iure") {{
                                connectorDescription = "culpa";
                                logDelivery = new CreateConnectorRequestBodyLogDelivery() {{
                                    workerLogDelivery = new WorkerLogDelivery() {{
                                        cloudWatchLogs = new CloudWatchLogsLogDelivery(false) {{
                                            logGroup = "doloribus";
                                        }};;
                                        firehose = new FirehoseLogDelivery(false) {{
                                            deliveryStream = "sapiente";
                                        }};;
                                        s3 = new S3LogDelivery(false) {{
                                            bucket = "architecto";
                                            prefix = "mollitia";
                                        }};;
                                    }};;
                                }};;
                                workerConfiguration = new CreateConnectorRequestBodyWorkerConfiguration() {{
                                    revision = 208876L;
                                    workerConfigurationArn = "culpa";
                                }};;
                            }};) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "mollitia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "quam";
            }};            

            CreateConnectorResponse res = sdk.sdk.createConnector(req);

            if (res.createConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCustomPlugin

Creates a custom plugin using the specified properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomPluginRequest;
import org.openapis.openapi.models.operations.CreateCustomPluginRequestBody;
import org.openapis.openapi.models.operations.CreateCustomPluginRequestBodyContentTypeEnum;
import org.openapis.openapi.models.operations.CreateCustomPluginRequestBodyLocation;
import org.openapis.openapi.models.operations.CreateCustomPluginResponse;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCustomPluginRequest req = new CreateCustomPluginRequest(                new CreateCustomPluginRequestBody(CreateCustomPluginRequestBodyContentTypeEnum.JAR,                 new CreateCustomPluginRequestBodyLocation() {{
                                                s3Location = new S3Location("error", "quia") {{
                                                    objectVersion = "quis";
                                                }};;
                                            }};, "vitae") {{
                                description = "laborum";
                            }};) {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "enim";
                xAmzCredential = "odit";
                xAmzDate = "quo";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "ipsam";
            }};            

            CreateCustomPluginResponse res = sdk.sdk.createCustomPlugin(req);

            if (res.createCustomPluginResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkerConfiguration

Creates a worker configuration using the specified properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkerConfigurationRequest;
import org.openapis.openapi.models.operations.CreateWorkerConfigurationRequestBody;
import org.openapis.openapi.models.operations.CreateWorkerConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkerConfigurationRequest req = new CreateWorkerConfigurationRequest(                new CreateWorkerConfigurationRequestBody("possimus", "aut") {{
                                description = "quasi";
                            }};) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "laborum";
                xAmzDate = "quasi";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "vero";
            }};            

            CreateWorkerConfigurationResponse res = sdk.sdk.createWorkerConfiguration(req);

            if (res.createWorkerConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnector

Deletes the specified connector.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectorRequest;
import org.openapis.openapi.models.operations.DeleteConnectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConnectorRequest req = new DeleteConnectorRequest("praesentium") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "omnis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "cum";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "doloremque";
                currentVersion = "reprehenderit";
            }};            

            DeleteConnectorResponse res = sdk.sdk.deleteConnector(req);

            if (res.deleteConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomPlugin

Deletes a custom plugin.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomPluginRequest;
import org.openapis.openapi.models.operations.DeleteCustomPluginResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCustomPluginRequest req = new DeleteCustomPluginRequest("maiores") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "dolore";
                xAmzDate = "iusto";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "enim";
            }};            

            DeleteCustomPluginResponse res = sdk.sdk.deleteCustomPlugin(req);

            if (res.deleteCustomPluginResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConnector

Returns summary information about the connector.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConnectorRequest;
import org.openapis.openapi.models.operations.DescribeConnectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConnectorRequest req = new DescribeConnectorRequest("commodi") {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "quae";
                xAmzCredential = "ipsum";
                xAmzDate = "quidem";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "pariatur";
            }};            

            DescribeConnectorResponse res = sdk.sdk.describeConnector(req);

            if (res.describeConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCustomPlugin

A summary description of the custom plugin.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCustomPluginRequest;
import org.openapis.openapi.models.operations.DescribeCustomPluginResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCustomPluginRequest req = new DescribeCustomPluginRequest("praesentium") {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "quasi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "sint";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "itaque";
            }};            

            DescribeCustomPluginResponse res = sdk.sdk.describeCustomPlugin(req);

            if (res.describeCustomPluginResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkerConfiguration

Returns information about a worker configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkerConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeWorkerConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkerConfigurationRequest req = new DescribeWorkerConfigurationRequest("enim") {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "quibusdam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quibusdam";
            }};            

            DescribeWorkerConfigurationResponse res = sdk.sdk.describeWorkerConfiguration(req);

            if (res.describeWorkerConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConnectors

Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConnectorsRequest;
import org.openapis.openapi.models.operations.ListConnectorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConnectorsRequest req = new ListConnectorsRequest() {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "aliquid";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "quos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "magni";
                connectorNamePrefix = "assumenda";
                maxResults = 369808L;
                nextToken = "alias";
            }};            

            ListConnectorsResponse res = sdk.sdk.listConnectors(req);

            if (res.listConnectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomPlugins

Returns a list of all of the custom plugins in this account and Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomPluginsRequest;
import org.openapis.openapi.models.operations.ListCustomPluginsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCustomPluginsRequest req = new ListCustomPluginsRequest() {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "tempora";
                xAmzDate = "facilis";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "delectus";
                maxResults = 433288L;
                nextToken = "non";
            }};            

            ListCustomPluginsResponse res = sdk.sdk.listCustomPlugins(req);

            if (res.listCustomPluginsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkerConfigurations

Returns a list of all of the worker configurations in this account and Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkerConfigurationsRequest;
import org.openapis.openapi.models.operations.ListWorkerConfigurationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkerConfigurationsRequest req = new ListWorkerConfigurationsRequest() {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "provident";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "sint";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "dolor";
                maxResults = 891555L;
                nextToken = "a";
            }};            

            ListWorkerConfigurationsResponse res = sdk.sdk.listWorkerConfigurations(req);

            if (res.listWorkerConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConnector

Updates the specified connector.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConnectorRequest;
import org.openapis.openapi.models.operations.UpdateConnectorRequestBody;
import org.openapis.openapi.models.operations.UpdateConnectorRequestBodyCapacity;
import org.openapis.openapi.models.operations.UpdateConnectorResponse;
import org.openapis.openapi.models.shared.AutoScalingUpdate;
import org.openapis.openapi.models.shared.ProvisionedCapacityUpdate;
import org.openapis.openapi.models.shared.ScaleInPolicyUpdate;
import org.openapis.openapi.models.shared.ScaleOutPolicyUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConnectorRequest req = new UpdateConnectorRequest(                new UpdateConnectorRequestBody(                new UpdateConnectorRequestBodyCapacity() {{
                                                autoScaling = new AutoScalingUpdate(447125L, 449198L, 846409L,                 new ScaleInPolicyUpdate(978571L);,                 new ScaleOutPolicyUpdate(699479L););;
                                                provisionedCapacity = new ProvisionedCapacityUpdate(116202L, 297437L);;
                                            }};);, "cumque", "facere") {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laborum";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "non";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "enim";
            }};            

            UpdateConnectorResponse res = sdk.sdk.updateConnector(req);

            if (res.updateConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
