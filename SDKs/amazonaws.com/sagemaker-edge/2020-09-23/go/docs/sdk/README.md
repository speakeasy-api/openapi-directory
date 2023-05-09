# SDK

## Overview

SageMaker Edge Manager dataplane service for communicating with active agents.

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker/>
### Available Operations

* [GetDeployments](#getdeployments) - Use to get the active deployments from a device.
* [GetDeviceRegistration](#getdeviceregistration) - Use to check if a device is registered with SageMaker Edge Manager.
* [SendHeartbeat](#sendheartbeat) - Use to get the current status of devices registered on SageMaker Edge Manager.

## GetDeployments

Use to get the active deployments from a device.

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
    res, err := s.SDK.GetDeployments(ctx, operations.GetDeploymentsRequest{
        RequestBody: operations.GetDeploymentsRequestBody{
            DeviceFleetName: "error",
            DeviceName: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeploymentsResult != nil {
        // handle response
    }
}
```

## GetDeviceRegistration

Use to check if a device is registered with SageMaker Edge Manager.

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
    res, err := s.SDK.GetDeviceRegistration(ctx, operations.GetDeviceRegistrationRequest{
        RequestBody: operations.GetDeviceRegistrationRequestBody{
            DeviceFleetName: "suscipit",
            DeviceName: "molestiae",
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceRegistrationResult != nil {
        // handle response
    }
}
```

## SendHeartbeat

Use to get the current status of devices registered on SageMaker Edge Manager.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SendHeartbeat(ctx, operations.SendHeartbeatRequest{
        RequestBody: operations.SendHeartbeatRequestBody{
            AgentMetrics: []shared.EdgeMetric{
                shared.EdgeMetric{
                    Dimension: sdk.String("ab"),
                    MetricName: sdk.String("quis"),
                    Timestamp: types.MustTimeFromString("2022-05-09T10:00:51.349Z"),
                    Value: sdk.Float64(202.18),
                },
                shared.EdgeMetric{
                    Dimension: sdk.String("ipsam"),
                    MetricName: sdk.String("repellendus"),
                    Timestamp: types.MustTimeFromString("2020-08-31T22:02:25.322Z"),
                    Value: sdk.Float64(1403.5),
                },
                shared.EdgeMetric{
                    Dimension: sdk.String("at"),
                    MetricName: sdk.String("at"),
                    Timestamp: types.MustTimeFromString("2021-07-31T09:34:50.024Z"),
                    Value: sdk.Float64(7991.59),
                },
                shared.EdgeMetric{
                    Dimension: sdk.String("quod"),
                    MetricName: sdk.String("esse"),
                    Timestamp: types.MustTimeFromString("2021-06-10T05:07:43.614Z"),
                    Value: sdk.Float64(6788.8),
                },
            },
            AgentVersion: "dicta",
            DeploymentResult: &operations.SendHeartbeatRequestBodyDeploymentResult{
                DeploymentEndTime: types.MustTimeFromString("2021-09-20T20:35:01.256Z"),
                DeploymentModels: []shared.DeploymentModel{
                    shared.DeploymentModel{
                        DesiredState: shared.ModelStateEnumDeploy.ToPointer(),
                        ModelHandle: sdk.String("deleniti"),
                        ModelName: sdk.String("hic"),
                        ModelVersion: sdk.String("optio"),
                        RollbackFailureReason: sdk.String("totam"),
                        State: shared.ModelStateEnumDeploy.ToPointer(),
                        Status: shared.DeploymentStatusEnumSuccess.ToPointer(),
                        StatusReason: sdk.String("molestiae"),
                    },
                    shared.DeploymentModel{
                        DesiredState: shared.ModelStateEnumDeploy.ToPointer(),
                        ModelHandle: sdk.String("qui"),
                        ModelName: sdk.String("impedit"),
                        ModelVersion: sdk.String("cum"),
                        RollbackFailureReason: sdk.String("esse"),
                        State: shared.ModelStateEnumDeploy.ToPointer(),
                        Status: shared.DeploymentStatusEnumFail.ToPointer(),
                        StatusReason: sdk.String("aspernatur"),
                    },
                    shared.DeploymentModel{
                        DesiredState: shared.ModelStateEnumDeploy.ToPointer(),
                        ModelHandle: sdk.String("ad"),
                        ModelName: sdk.String("natus"),
                        ModelVersion: sdk.String("sed"),
                        RollbackFailureReason: sdk.String("iste"),
                        State: shared.ModelStateEnumDeploy.ToPointer(),
                        Status: shared.DeploymentStatusEnumFail.ToPointer(),
                        StatusReason: sdk.String("laboriosam"),
                    },
                },
                DeploymentName: sdk.String("hic"),
                DeploymentStartTime: types.MustTimeFromString("2020-12-15T09:45:44.943Z"),
                DeploymentStatus: sdk.String("in"),
                DeploymentStatusMessage: sdk.String("corporis"),
            },
            DeviceFleetName: "iste",
            DeviceName: "iure",
            Models: []shared.Model{
                shared.Model{
                    LatestInference: types.MustTimeFromString("2022-10-20T12:36:28.767Z"),
                    LatestSampleTime: types.MustTimeFromString("2022-01-12T00:28:21.182Z"),
                    ModelMetrics: []shared.EdgeMetric{
                        shared.EdgeMetric{
                            Dimension: sdk.String("mollitia"),
                            MetricName: sdk.String("laborum"),
                            Timestamp: types.MustTimeFromString("2022-10-16T05:02:54.746Z"),
                            Value: sdk.Float64(3581.52),
                        },
                        shared.EdgeMetric{
                            Dimension: sdk.String("explicabo"),
                            MetricName: sdk.String("nobis"),
                            Timestamp: types.MustTimeFromString("2022-05-24T03:24:11.703Z"),
                            Value: sdk.Float64(3637.11),
                        },
                        shared.EdgeMetric{
                            Dimension: sdk.String("minima"),
                            MetricName: sdk.String("excepturi"),
                            Timestamp: types.MustTimeFromString("2022-07-24T21:51:02.112Z"),
                            Value: sdk.Float64(6342.74),
                        },
                    },
                    ModelName: sdk.String("doloribus"),
                    ModelVersion: sdk.String("sapiente"),
                },
                shared.Model{
                    LatestInference: types.MustTimeFromString("2022-05-07T17:33:24.154Z"),
                    LatestSampleTime: types.MustTimeFromString("2022-05-14T04:53:02.888Z"),
                    ModelMetrics: []shared.EdgeMetric{
                        shared.EdgeMetric{
                            Dimension: sdk.String("repellat"),
                            MetricName: sdk.String("mollitia"),
                            Timestamp: types.MustTimeFromString("2022-06-30T02:19:51.375Z"),
                            Value: sdk.Float64(4143.69),
                        },
                    },
                    ModelName: sdk.String("quam"),
                    ModelVersion: sdk.String("molestiae"),
                },
                shared.Model{
                    LatestInference: types.MustTimeFromString("2022-05-18T10:03:04.921Z"),
                    LatestSampleTime: types.MustTimeFromString("2022-08-30T15:03:11.112Z"),
                    ModelMetrics: []shared.EdgeMetric{
                        shared.EdgeMetric{
                            Dimension: sdk.String("laborum"),
                            MetricName: sdk.String("animi"),
                            Timestamp: types.MustTimeFromString("2022-11-11T13:31:01.643Z"),
                            Value: sdk.Float64(7783.46),
                        },
                    },
                    ModelName: sdk.String("sequi"),
                    ModelVersion: sdk.String("tenetur"),
                },
                shared.Model{
                    LatestInference: types.MustTimeFromString("2022-05-04T04:15:52.352Z"),
                    LatestSampleTime: types.MustTimeFromString("2022-12-17T03:20:13.120Z"),
                    ModelMetrics: []shared.EdgeMetric{
                        shared.EdgeMetric{
                            Dimension: sdk.String("error"),
                            MetricName: sdk.String("temporibus"),
                            Timestamp: types.MustTimeFromString("2022-10-22T20:21:20.741Z"),
                            Value: sdk.Float64(9719.45),
                        },
                    },
                    ModelName: sdk.String("voluptatibus"),
                    ModelVersion: sdk.String("vero"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
