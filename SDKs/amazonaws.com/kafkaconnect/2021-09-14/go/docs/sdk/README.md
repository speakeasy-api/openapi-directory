# SDK

## Overview

<p/>

Amazon Web Services documentation
<https://docs.aws.amazon.com/kafkaconnect/>
### Available Operations

* [CreateConnector](#createconnector) - Creates a connector using the specified properties.
* [CreateCustomPlugin](#createcustomplugin) - Creates a custom plugin using the specified properties.
* [CreateWorkerConfiguration](#createworkerconfiguration) - Creates a worker configuration using the specified properties.
* [DeleteConnector](#deleteconnector) - Deletes the specified connector.
* [DeleteCustomPlugin](#deletecustomplugin) - Deletes a custom plugin.
* [DescribeConnector](#describeconnector) - Returns summary information about the connector.
* [DescribeCustomPlugin](#describecustomplugin) - A summary description of the custom plugin.
* [DescribeWorkerConfiguration](#describeworkerconfiguration) - Returns information about a worker configuration.
* [ListConnectors](#listconnectors) - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* [ListCustomPlugins](#listcustomplugins) - Returns a list of all of the custom plugins in this account and Region.
* [ListWorkerConfigurations](#listworkerconfigurations) - Returns a list of all of the worker configurations in this account and Region.
* [UpdateConnector](#updateconnector) - Updates the specified connector.

## CreateConnector

Creates a connector using the specified properties.

### Example Usage

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
    res, err := s.SDK.CreateConnector(ctx, operations.CreateConnectorRequest{
        RequestBody: operations.CreateConnectorRequestBody{
            Capacity: operations.CreateConnectorRequestBodyCapacity{
                AutoScaling: &shared.AutoScaling{
                    MaxWorkerCount: 118274,
                    McuCount: 720633,
                    MinWorkerCount: 639921,
                    ScaleInPolicy: &shared.ScaleInPolicy{
                        CPUUtilizationPercentage: 582020,
                    },
                    ScaleOutPolicy: &shared.ScaleOutPolicy{
                        CPUUtilizationPercentage: 143353,
                    },
                },
                ProvisionedCapacity: &shared.ProvisionedCapacity{
                    McuCount: 537373,
                    WorkerCount: 944669,
                },
            },
            ConnectorConfiguration: map[string]string{
                "totam": "beatae",
                "commodi": "molestiae",
                "modi": "qui",
                "impedit": "cum",
            },
            ConnectorDescription: sdk.String("esse"),
            ConnectorName: "ipsum",
            KafkaCluster: operations.CreateConnectorRequestBodyKafkaCluster{
                ApacheKafkaCluster: &shared.ApacheKafkaCluster{
                    BootstrapServers: "excepturi",
                    Vpc: shared.Vpc{
                        SecurityGroups: []string{
                            "perferendis",
                        },
                        Subnets: []string{
                            "natus",
                            "sed",
                        },
                    },
                },
            },
            KafkaClusterClientAuthentication: operations.CreateConnectorRequestBodyKafkaClusterClientAuthentication{
                AuthenticationType: shared.KafkaClusterClientAuthenticationTypeEnumIam.ToPointer(),
            },
            KafkaClusterEncryptionInTransit: operations.CreateConnectorRequestBodyKafkaClusterEncryptionInTransit{
                EncryptionType: shared.KafkaClusterEncryptionInTransitTypeEnumPlaintext.ToPointer(),
            },
            KafkaConnectVersion: "natus",
            LogDelivery: &operations.CreateConnectorRequestBodyLogDelivery{
                WorkerLogDelivery: &shared.WorkerLogDelivery{
                    CloudWatchLogs: &shared.CloudWatchLogsLogDelivery{
                        Enabled: false,
                        LogGroup: sdk.String("laboriosam"),
                    },
                    Firehose: &shared.FirehoseLogDelivery{
                        DeliveryStream: sdk.String("hic"),
                        Enabled: false,
                    },
                    S3: &shared.S3LogDelivery{
                        Bucket: sdk.String("saepe"),
                        Enabled: false,
                        Prefix: sdk.String("fuga"),
                    },
                },
            },
            Plugins: []shared.Plugin{
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "corporis",
                        Revision: 613064,
                    },
                },
                shared.Plugin{
                    CustomPlugin: shared.CustomPlugin{
                        CustomPluginArn: "iure",
                        Revision: 902349,
                    },
                },
            },
            ServiceExecutionRoleArn: "quidem",
            WorkerConfiguration: &operations.CreateConnectorRequestBodyWorkerConfiguration{
                Revision: sdk.Int64(99280),
                WorkerConfigurationArn: sdk.String("ipsa"),
            },
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectorResponse != nil {
        // handle response
    }
}
```

## CreateCustomPlugin

Creates a custom plugin using the specified properties.

### Example Usage

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
    res, err := s.SDK.CreateCustomPlugin(ctx, operations.CreateCustomPluginRequest{
        RequestBody: operations.CreateCustomPluginRequestBody{
            ContentType: operations.CreateCustomPluginRequestBodyContentTypeEnumJar,
            Description: sdk.String("nobis"),
            Location: operations.CreateCustomPluginRequestBodyLocation{
                S3Location: &shared.S3Location{
                    BucketArn: "enim",
                    FileKey: "omnis",
                    ObjectVersion: sdk.String("nemo"),
                },
            },
            Name: "Velma Batz",
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomPluginResponse != nil {
        // handle response
    }
}
```

## CreateWorkerConfiguration

Creates a worker configuration using the specified properties.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateWorkerConfiguration(ctx, operations.CreateWorkerConfigurationRequest{
        RequestBody: operations.CreateWorkerConfigurationRequestBody{
            Description: sdk.String("repellat"),
            Name: "Tracy Fritsch",
            PropertiesFileContent: "molestiae",
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("animi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkerConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteConnector

Deletes the specified connector.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteConnector(ctx, operations.DeleteConnectorRequest{
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("id"),
        ConnectorArn: "possimus",
        CurrentVersion: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConnectorResponse != nil {
        // handle response
    }
}
```

## DeleteCustomPlugin

Deletes a custom plugin.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCustomPlugin(ctx, operations.DeleteCustomPluginRequest{
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        CustomPluginArn: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomPluginResponse != nil {
        // handle response
    }
}
```

## DescribeConnector

Returns summary information about the connector.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConnector(ctx, operations.DescribeConnectorRequest{
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
        ConnectorArn: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConnectorResponse != nil {
        // handle response
    }
}
```

## DescribeCustomPlugin

A summary description of the custom plugin.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCustomPlugin(ctx, operations.DescribeCustomPluginRequest{
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
        CustomPluginArn: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCustomPluginResponse != nil {
        // handle response
    }
}
```

## DescribeWorkerConfiguration

Returns information about a worker configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeWorkerConfiguration(ctx, operations.DescribeWorkerConfigurationRequest{
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quae"),
        WorkerConfigurationArn: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkerConfigurationResponse != nil {
        // handle response
    }
}
```

## ListConnectors

Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListConnectors(ctx, operations.ListConnectorsRequest{
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("rem"),
        ConnectorNamePrefix: sdk.String("voluptates"),
        MaxResults: sdk.Int64(93940),
        NextToken: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectorsResponse != nil {
        // handle response
    }
}
```

## ListCustomPlugins

Returns a list of all of the custom plugins in this account and Region.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCustomPlugins(ctx, operations.ListCustomPluginsRequest{
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("est"),
        MaxResults: sdk.Int64(842342),
        NextToken: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomPluginsResponse != nil {
        // handle response
    }
}
```

## ListWorkerConfigurations

Returns a list of all of the worker configurations in this account and Region.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListWorkerConfigurations(ctx, operations.ListWorkerConfigurationsRequest{
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        MaxResults: sdk.Int64(586513),
        NextToken: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkerConfigurationsResponse != nil {
        // handle response
    }
}
```

## UpdateConnector

Updates the specified connector.

### Example Usage

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
    res, err := s.SDK.UpdateConnector(ctx, operations.UpdateConnectorRequest{
        RequestBody: operations.UpdateConnectorRequestBody{
            Capacity: operations.UpdateConnectorRequestBodyCapacity{
                AutoScaling: &shared.AutoScalingUpdate{
                    MaxWorkerCount: 20107,
                    McuCount: 164940,
                    MinWorkerCount: 828940,
                    ScaleInPolicy: shared.ScaleInPolicyUpdate{
                        CPUUtilizationPercentage: 369808,
                    },
                    ScaleOutPolicy: shared.ScaleOutPolicyUpdate{
                        CPUUtilizationPercentage: 4695,
                    },
                },
                ProvisionedCapacity: &shared.ProvisionedCapacityUpdate{
                    McuCount: 146441,
                    WorkerCount: 677817,
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("eum"),
        ConnectorArn: "non",
        CurrentVersion: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConnectorResponse != nil {
        // handle response
    }
}
```
