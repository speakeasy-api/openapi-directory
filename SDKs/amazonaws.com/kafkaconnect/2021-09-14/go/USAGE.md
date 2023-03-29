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