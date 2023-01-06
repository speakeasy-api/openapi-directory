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