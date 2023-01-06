# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateConnectorRequest{
        Headers: operations.CreateConnectorHeaders{
            XAmzAlgorithm: "aut",
            XAmzContentSha256: "itaque",
            XAmzCredential: "corrupti",
            XAmzDate: "voluptatem",
            XAmzSecurityToken: "quasi",
            XAmzSignature: "repellat",
            XAmzSignedHeaders: "rem",
        },
        Request: operations.CreateConnectorRequestBody{
            Capacity: operations.CreateConnectorRequestBodyCapacity{
                AutoScaling: &shared.AutoScaling{
                    MaxWorkerCount: 3889050278199328647,
                    McuCount: 6462944876161564937,
                    MinWorkerCount: 215513929021590008,
                    ScaleInPolicy: &shared.ScaleInPolicy{
                        CPUUtilizationPercentage: 7749074455957565415,
                    },
                    ScaleOutPolicy: &shared.ScaleOutPolicy{
                        CPUUtilizationPercentage: 8985447707781711850,
                    },
                },
                ProvisionedCapacity: &shared.ProvisionedCapacity{
                    McuCount: 4836017905699157242,
                    WorkerCount: 2695647621612843151,
                },
            },
            ConnectorConfiguration: map[string]string{
                "eaque": "ex",
                "cum": "vel",
                "sunt": "dolor",
            },
            ConnectorDescription: "nulla",
            ConnectorName: "ipsa",
            KafkaCluster: operations.CreateConnectorRequestBodyKafkaCluster{
                ApacheKafkaCluster: &shared.ApacheKafkaCluster{
                    BootstrapServers: "ipsum",
                    Vpc: shared.Vpc{
                        SecurityGroups: []string{
                            "dolores",
                        },
                        Subnets: []string{
                            "perferendis",
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
            KafkaConnectVersion: "dicta",
            LogDelivery: &operations.CreateConnectorRequestBodyLogDelivery{
                WorkerLogDelivery: &shared.WorkerLogDelivery{
                    CloudWatchLogs: &shared.CloudWatchLogsLogDelivery{
                        Enabled: false,
                        LogGroup: "pariatur",
                    },
                    Firehose: &shared.FirehoseLogDelivery{
                        DeliveryStream: "nesciunt",
                        Enabled: true,
                    },
                    S3: &shared.S3LogDelivery{
                        Bucket: "dolores",
                        Enabled: false,
                        Prefix: "inventore",
                    },
                },
            },
            Plugins: []shared.Plugin{
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "ab",
                        Revision: 89864496253521873,
                    },
                },
            },
            ServiceExecutionRoleArn: "aliquam",
            WorkerConfiguration: &operations.CreateConnectorRequestBodyWorkerConfiguration{
                Revision: 7575525396911227881,
                WorkerConfigurationArn: "et",
            },
        },
    }
    
    res, err := s.CreateConnector(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectorResponse != nil {
        // handle response
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
* `DescribeConnector` - Returns summary information about the connector.
* `DescribeCustomPlugin` - A summary description of the custom plugin.
* `DescribeWorkerConfiguration` - Returns information about a worker configuration.
* `ListConnectors` - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* `ListCustomPlugins` - Returns a list of all of the custom plugins in this account and Region.
* `ListWorkerConfigurations` - Returns a list of all of the worker configurations in this account and Region.
* `UpdateConnector` - Updates the specified connector.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
