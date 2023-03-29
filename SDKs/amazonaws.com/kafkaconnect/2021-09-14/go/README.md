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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateConnectorRequest{
        Headers: operations.CreateConnectorHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateConnectorRequestBody{
            Capacity: operations.CreateConnectorRequestBodyCapacity{
                AutoScaling: &shared.AutoScaling{
                    MaxWorkerCount: 847252,
                    McuCount: 423655,
                    MinWorkerCount: 623564,
                    ScaleInPolicy: &shared.ScaleInPolicy{
                        CPUUtilizationPercentage: 645894,
                    },
                    ScaleOutPolicy: &shared.ScaleOutPolicy{
                        CPUUtilizationPercentage: 384382,
                    },
                },
                ProvisionedCapacity: &shared.ProvisionedCapacity{
                    McuCount: 437587,
                    WorkerCount: 297534,
                },
            },
            ConnectorConfiguration: map[string]string{
                "inventore": "sapiente",
                "enim": "eum",
                "voluptatum": "autem",
                "vel": "non",
            },
            ConnectorDescription: "deleniti",
            ConnectorName: "similique",
            KafkaCluster: operations.CreateConnectorRequestBodyKafkaCluster{
                ApacheKafkaCluster: &shared.ApacheKafkaCluster{
                    BootstrapServers: "reprehenderit",
                    Vpc: shared.Vpc{
                        SecurityGroups: []string{
                            "quo",
                            "quasi",
                            "laboriosam",
                            "dicta",
                        },
                        Subnets: []string{
                            "voluptatem",
                            "consequatur",
                            "fugiat",
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
            KafkaConnectVersion: "eos",
            LogDelivery: &operations.CreateConnectorRequestBodyLogDelivery{
                WorkerLogDelivery: &shared.WorkerLogDelivery{
                    CloudWatchLogs: &shared.CloudWatchLogsLogDelivery{
                        Enabled: false,
                        LogGroup: "accusamus",
                    },
                    Firehose: &shared.FirehoseLogDelivery{
                        DeliveryStream: "accusamus",
                        Enabled: false,
                    },
                    S3: &shared.S3LogDelivery{
                        Bucket: "reiciendis",
                        Enabled: false,
                        Prefix: "rem",
                    },
                },
            },
            Plugins: []shared.Plugin{
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "et",
                        Revision: 461479,
                    },
                },
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "occaecati",
                        Revision: 780529,
                    },
                },
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "soluta",
                        Revision: 118274,
                    },
                },
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "quisquam",
                        Revision: 639921,
                    },
                },
            },
            ServiceExecutionRoleArn: "culpa",
            WorkerConfiguration: &operations.CreateConnectorRequestBodyWorkerConfiguration{
                Revision: 143353,
                WorkerConfigurationArn: "sed",
            },
        },
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
## SDK Available Operations

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
