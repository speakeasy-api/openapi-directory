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
            XAmzAlgorithm: "totam",
            XAmzContentSha256: "eum",
            XAmzCredential: "laborum",
            XAmzDate: "maxime",
            XAmzSecurityToken: "voluptatem",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "qui",
        },
        Request: operations.CreateConnectorRequestBody{
            Capacity: operations.CreateConnectorRequestBodyCapacity{
                AutoScaling: &shared.AutoScaling{
                    MaxWorkerCount: 3504002613480678211,
                    McuCount: 2500753354058343789,
                    MinWorkerCount: 2787501642645844576,
                    ScaleInPolicy: &shared.ScaleInPolicy{
                        CPUUtilizationPercentage: 7677299547891902014,
                    },
                    ScaleOutPolicy: &shared.ScaleOutPolicy{
                        CPUUtilizationPercentage: 7105999358852640672,
                    },
                },
                ProvisionedCapacity: &shared.ProvisionedCapacity{
                    McuCount: 3679840646143242248,
                    WorkerCount: 3126614124520816277,
                },
            },
            ConnectorConfiguration: map[string]string{
                "molestiae": "voluptas",
            },
            ConnectorDescription: "officia",
            ConnectorName: "cupiditate",
            KafkaCluster: operations.CreateConnectorRequestBodyKafkaCluster{
                ApacheKafkaCluster: &shared.ApacheKafkaCluster{
                    BootstrapServers: "in",
                    Vpc: shared.Vpc{
                        SecurityGroups: []string{
                            "ipsa",
                            "nemo",
                        },
                        Subnets: []string{
                            "quae",
                            "odit",
                            "expedita",
                        },
                    },
                },
            },
            KafkaClusterClientAuthentication: operations.CreateConnectorRequestBodyKafkaClusterClientAuthentication{
                AuthenticationType: "NONE",
            },
            KafkaClusterEncryptionInTransit: operations.CreateConnectorRequestBodyKafkaClusterEncryptionInTransit{
                EncryptionType: "TLS",
            },
            KafkaConnectVersion: "voluptate",
            LogDelivery: &operations.CreateConnectorRequestBodyLogDelivery{
                WorkerLogDelivery: &shared.WorkerLogDelivery{
                    CloudWatchLogs: &shared.CloudWatchLogsLogDelivery{
                        Enabled: false,
                        LogGroup: "harum",
                    },
                    Firehose: &shared.FirehoseLogDelivery{
                        DeliveryStream: "nulla",
                        Enabled: true,
                    },
                    S3: &shared.S3LogDelivery{
                        Bucket: "corrupti",
                        Enabled: false,
                        Prefix: "consectetur",
                    },
                },
            },
            Plugins: []shared.Plugin{
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "impedit",
                        Revision: 8021751157946261264,
                    },
                },
            },
            ServiceExecutionRoleArn: "doloribus",
            WorkerConfiguration: &operations.CreateConnectorRequestBodyWorkerConfiguration{
                Revision: 5906068016607125469,
                WorkerConfigurationArn: "quis",
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