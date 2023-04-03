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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateConnectorRequest{
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
            ConnectorDescription: "delectus",
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
                AuthenticationType: "IAM",
            },
            KafkaClusterEncryptionInTransit: operations.CreateConnectorRequestBodyKafkaClusterEncryptionInTransit{
                EncryptionType: "TLS",
            },
            KafkaConnectVersion: "ab",
            LogDelivery: &operations.CreateConnectorRequestBodyLogDelivery{
                WorkerLogDelivery: &shared.WorkerLogDelivery{
                    CloudWatchLogs: &shared.CloudWatchLogsLogDelivery{
                        Enabled: false,
                        LogGroup: "quis",
                    },
                    Firehose: &shared.FirehoseLogDelivery{
                        DeliveryStream: "veritatis",
                        Enabled: false,
                    },
                    S3: &shared.S3LogDelivery{
                        Bucket: "deserunt",
                        Enabled: false,
                        Prefix: "perferendis",
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
                Revision: 870088,
                WorkerConfigurationArn: "maiores",
            },
        },
        XAmzAlgorithm: "molestiae",
        XAmzContentSha256: "quod",
        XAmzCredential: "quod",
        XAmzDate: "esse",
        XAmzSecurityToken: "totam",
        XAmzSignature: "porro",
        XAmzSignedHeaders: "dolorum",
    }

    ctx := context.Background()
    res, err := s.CreateConnector(ctx, req)
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

### SDK SDK

* `CreateConnector` - Creates a connector using the specified properties.
* `CreateCustomPlugin` - Creates a custom plugin using the specified properties.
* `CreateWorkerConfiguration` - Creates a worker configuration using the specified properties.
* `DeleteConnector` - Deletes the specified connector.
* `DeleteCustomPlugin` - Deletes a custom plugin.
* `DescribeConnector` - Returns summary information about the connector.
* `DescribeCustomPlugin` - A summary description of the custom plugin.
* `DescribeWorkerConfiguration` - Returns information about a worker configuration.
* `ListConnectors` - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* `ListCustomPlugins` - Returns a list of all of the custom plugins in this account and Region.
* `ListWorkerConfigurations` - Returns a list of all of the worker configurations in this account and Region.
* `UpdateConnector` - Updates the specified connector.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
