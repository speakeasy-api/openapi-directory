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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateConnectorRequestBody{
            Capacity: operations.CreateConnectorRequestBodyCapacity{
                AutoScaling: &shared.AutoScaling{
                    MaxWorkerCount: 6044372234677422456,
                    McuCount: 8274930044578894929,
                    MinWorkerCount: 1543572285742637646,
                    ScaleInPolicy: &shared.ScaleInPolicy{
                        CPUUtilizationPercentage: 2661732831099943416,
                    },
                    ScaleOutPolicy: &shared.ScaleOutPolicy{
                        CPUUtilizationPercentage: 8325060299420976708,
                    },
                },
                ProvisionedCapacity: &shared.ProvisionedCapacity{
                    McuCount: 7837839688282259259,
                    WorkerCount: 2518412263346885298,
                },
            },
            ConnectorConfiguration: map[string]string{
                "et": "ut",
            },
            ConnectorDescription: "dolorem",
            ConnectorName: "et",
            KafkaCluster: operations.CreateConnectorRequestBodyKafkaCluster{
                ApacheKafkaCluster: &shared.ApacheKafkaCluster{
                    BootstrapServers: "voluptate",
                    Vpc: shared.Vpc{
                        SecurityGroups: []string{
                            "vitae",
                            "totam",
                            "dolores",
                        },
                        Subnets: []string{
                            "debitis",
                            "vel",
                            "odio",
                        },
                    },
                },
            },
            KafkaClusterClientAuthentication: operations.CreateConnectorRequestBodyKafkaClusterClientAuthentication{
                AuthenticationType: "IAM",
            },
            KafkaClusterEncryptionInTransit: operations.CreateConnectorRequestBodyKafkaClusterEncryptionInTransit{
                EncryptionType: "PLAINTEXT",
            },
            KafkaConnectVersion: "aspernatur",
            LogDelivery: &operations.CreateConnectorRequestBodyLogDelivery{
                WorkerLogDelivery: &shared.WorkerLogDelivery{
                    CloudWatchLogs: &shared.CloudWatchLogsLogDelivery{
                        Enabled: true,
                        LogGroup: "totam",
                    },
                    Firehose: &shared.FirehoseLogDelivery{
                        DeliveryStream: "commodi",
                        Enabled: true,
                    },
                    S3: &shared.S3LogDelivery{
                        Bucket: "est",
                        Enabled: true,
                        Prefix: "odit",
                    },
                },
            },
            Plugins: []shared.Plugin{
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "voluptas",
                        Revision: 4778690082005258714,
                    },
                },
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "aut",
                        Revision: 6972732843819909978,
                    },
                },
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "sed",
                        Revision: 7845762441295307478,
                    },
                },
            },
            ServiceExecutionRoleArn: "autem",
            WorkerConfiguration: &operations.CreateConnectorRequestBodyWorkerConfiguration{
                Revision: 8514850266767180993,
                WorkerConfigurationArn: "nobis",
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
