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
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectorRequest req = new CreateConnectorRequest(                new CreateConnectorRequestBody(                new CreateConnectorRequestBodyCapacity() {{
                                                autoScaling = new AutoScaling(592845L, 715190L, 844266L) {{
                                                    scaleInPolicy = new ScaleInPolicy(602763L);;
                                                    scaleOutPolicy = new ScaleOutPolicy(857946L);;
                                                }};;
                                                provisionedCapacity = new ProvisionedCapacity(544883L, 847252L);;
                                            }};,                 new java.util.HashMap<String, String>() {{
                                                put("error", "deserunt");
                                                put("suscipit", "iure");
                                            }}, "magnam",                 new CreateConnectorRequestBodyKafkaCluster() {{
                                                apacheKafkaCluster = new ApacheKafkaCluster("debitis",                 new Vpc(                new String[]{{
                                                                                    add("delectus"),
                                                                                }}) {{
                                                                    securityGroups = new String[]{{
                                                                        add("suscipit"),
                                                                        add("molestiae"),
                                                                    }};
                                                                }};);;
                                            }};,                 new CreateConnectorRequestBodyKafkaClusterClientAuthentication() {{
                                                authenticationType = KafkaClusterClientAuthenticationTypeEnum.IAM;
                                            }};,                 new CreateConnectorRequestBodyKafkaClusterEncryptionInTransit() {{
                                                encryptionType = KafkaClusterEncryptionInTransitTypeEnum.TLS;
                                            }};, "voluptatum",                 new org.openapis.openapi.models.shared.Plugin[]{{
                                                add(new Plugin(                new CustomPlugin("ab", 337396L);) {{
                                                    customPlugin = new CustomPlugin("recusandae", 836079L) {{
                                                        customPluginArn = "excepturi";
                                                        revision = 392785L;
                                                    }};
                                                }}),
                                                add(new Plugin(                new CustomPlugin("repellendus", 957156L);) {{
                                                    customPlugin = new CustomPlugin("perferendis", 368241L) {{
                                                        customPluginArn = "veritatis";
                                                        revision = 648172L;
                                                    }};
                                                }}),
                                            }}, "quo") {{
                                connectorDescription = "odit";
                                logDelivery = new CreateConnectorRequestBodyLogDelivery() {{
                                    workerLogDelivery = new WorkerLogDelivery() {{
                                        cloudWatchLogs = new CloudWatchLogsLogDelivery(false) {{
                                            logGroup = "at";
                                        }};;
                                        firehose = new FirehoseLogDelivery(false) {{
                                            deliveryStream = "at";
                                        }};;
                                        s3 = new S3LogDelivery(false) {{
                                            bucket = "maiores";
                                            prefix = "molestiae";
                                        }};;
                                    }};;
                                }};;
                                workerConfiguration = new CreateConnectorRequestBodyWorkerConfiguration() {{
                                    revision = 799159L;
                                    workerConfigurationArn = "quod";
                                }};;
                            }};) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "totam";
                xAmzCredential = "porro";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "officia";
            }};            

            CreateConnectorResponse res = sdk.createConnector(req);

            if (res.createConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createConnector](docs/sdk/README.md#createconnector) - Creates a connector using the specified properties.
* [createCustomPlugin](docs/sdk/README.md#createcustomplugin) - Creates a custom plugin using the specified properties.
* [createWorkerConfiguration](docs/sdk/README.md#createworkerconfiguration) - Creates a worker configuration using the specified properties.
* [deleteConnector](docs/sdk/README.md#deleteconnector) - Deletes the specified connector.
* [deleteCustomPlugin](docs/sdk/README.md#deletecustomplugin) - Deletes a custom plugin.
* [describeConnector](docs/sdk/README.md#describeconnector) - Returns summary information about the connector.
* [describeCustomPlugin](docs/sdk/README.md#describecustomplugin) - A summary description of the custom plugin.
* [describeWorkerConfiguration](docs/sdk/README.md#describeworkerconfiguration) - Returns information about a worker configuration.
* [listConnectors](docs/sdk/README.md#listconnectors) - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* [listCustomPlugins](docs/sdk/README.md#listcustomplugins) - Returns a list of all of the custom plugins in this account and Region.
* [listWorkerConfigurations](docs/sdk/README.md#listworkerconfigurations) - Returns a list of all of the worker configurations in this account and Region.
* [updateConnector](docs/sdk/README.md#updateconnector) - Updates the specified connector.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
