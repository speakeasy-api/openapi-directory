# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/kafkaconnect/2021-09-14/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateConnector(ctx, operations.CreateConnectorRequest{
        RequestBody: operations.CreateConnectorRequestBody{
            Capacity: operations.CreateConnectorRequestBodyCapacity{
                AutoScaling: &shared.AutoScaling{
                    MaxWorkerCount: 548814,
                    McuCount: 592845,
                    MinWorkerCount: 715190,
                    ScaleInPolicy: &shared.ScaleInPolicy{
                        CPUUtilizationPercentage: 844266,
                    },
                    ScaleOutPolicy: &shared.ScaleOutPolicy{
                        CPUUtilizationPercentage: 602763,
                    },
                },
                ProvisionedCapacity: &shared.ProvisionedCapacity{
                    McuCount: 857946,
                    WorkerCount: 544883,
                },
            },
            ConnectorConfiguration: map[string]string{
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            ConnectorDescription: sdk.String("delectus"),
            ConnectorName: "tempora",
            KafkaCluster: operations.CreateConnectorRequestBodyKafkaCluster{
                ApacheKafkaCluster: &shared.ApacheKafkaCluster{
                    BootstrapServers: "suscipit",
                    Vpc: shared.Vpc{
                        SecurityGroups: []string{
                            "minus",
                            "placeat",
                        },
                        Subnets: []string{
                            "iusto",
                            "excepturi",
                            "nisi",
                        },
                    },
                },
            },
            KafkaClusterClientAuthentication: operations.CreateConnectorRequestBodyKafkaClusterClientAuthentication{
                AuthenticationType: shared.KafkaClusterClientAuthenticationTypeEnumIam.ToPointer(),
            },
            KafkaClusterEncryptionInTransit: operations.CreateConnectorRequestBodyKafkaClusterEncryptionInTransit{
                EncryptionType: shared.KafkaClusterEncryptionInTransitTypeEnumTLS.ToPointer(),
            },
            KafkaConnectVersion: "ab",
            LogDelivery: &operations.CreateConnectorRequestBodyLogDelivery{
                WorkerLogDelivery: &shared.WorkerLogDelivery{
                    CloudWatchLogs: &shared.CloudWatchLogsLogDelivery{
                        Enabled: false,
                        LogGroup: sdk.String("quis"),
                    },
                    Firehose: &shared.FirehoseLogDelivery{
                        DeliveryStream: sdk.String("veritatis"),
                        Enabled: false,
                    },
                    S3: &shared.S3LogDelivery{
                        Bucket: sdk.String("deserunt"),
                        Enabled: false,
                        Prefix: sdk.String("perferendis"),
                    },
                },
            },
            Plugins: []shared.Plugin{
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "repellendus",
                        Revision: 957156,
                    },
                },
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "quo",
                        Revision: 140350,
                    },
                },
            },
            ServiceExecutionRoleArn: "at",
            WorkerConfiguration: &operations.CreateConnectorRequestBodyWorkerConfiguration{
                Revision: sdk.Int64(870088),
                WorkerConfigurationArn: sdk.String("maiores"),
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectorResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateConnector](docs/sdk/README.md#createconnector) - Creates a connector using the specified properties.
* [CreateCustomPlugin](docs/sdk/README.md#createcustomplugin) - Creates a custom plugin using the specified properties.
* [CreateWorkerConfiguration](docs/sdk/README.md#createworkerconfiguration) - Creates a worker configuration using the specified properties.
* [DeleteConnector](docs/sdk/README.md#deleteconnector) - Deletes the specified connector.
* [DeleteCustomPlugin](docs/sdk/README.md#deletecustomplugin) - Deletes a custom plugin.
* [DescribeConnector](docs/sdk/README.md#describeconnector) - Returns summary information about the connector.
* [DescribeCustomPlugin](docs/sdk/README.md#describecustomplugin) - A summary description of the custom plugin.
* [DescribeWorkerConfiguration](docs/sdk/README.md#describeworkerconfiguration) - Returns information about a worker configuration.
* [ListConnectors](docs/sdk/README.md#listconnectors) - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* [ListCustomPlugins](docs/sdk/README.md#listcustomplugins) - Returns a list of all of the custom plugins in this account and Region.
* [ListWorkerConfigurations](docs/sdk/README.md#listworkerconfigurations) - Returns a list of all of the worker configurations in this account and Region.
* [UpdateConnector](docs/sdk/README.md#updateconnector) - Updates the specified connector.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
