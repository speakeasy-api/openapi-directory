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