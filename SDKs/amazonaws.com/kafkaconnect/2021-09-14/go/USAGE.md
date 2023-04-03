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