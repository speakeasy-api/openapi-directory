# SDK

## Overview

Amazon Web Services IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT devices during device software development. Device Advisor provides pre-built tests that you can use to validate IoT devices for reliable and secure connectivity with Amazon Web Services IoT Core before deploying devices to production. By using Device Advisor, you can confirm that your devices can connect to Amazon Web Services IoT Core, follow security best practices and, if applicable, receive software updates from IoT Device Management. You can also download signed qualification reports to submit to the Amazon Web Services Partner Network to get your device qualified for the Amazon Web Services Partner Device Catalog without the need to send your device in and wait for it to be tested.

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotdeviceadvisor/>
### Available Operations

* [CreateSuiteDefinition](#createsuitedefinition) - <p>Creates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSuiteDefinition</a> action.</p>
* [DeleteSuiteDefinition](#deletesuitedefinition) - <p>Deletes a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSuiteDefinition</a> action.</p>
* [GetEndpoint](#getendpoint) - Gets information about an Device Advisor endpoint.
* [GetSuiteDefinition](#getsuitedefinition) - <p>Gets information about a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteDefinition</a> action.</p>
* [GetSuiteRun](#getsuiterun) - <p>Gets information about a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>
* [GetSuiteRunReport](#getsuiterunreport) - <p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRunReport</a> action.</p>
* [ListSuiteDefinitions](#listsuitedefinitions) - <p>Lists the Device Advisor test suites you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteDefinitions</a> action.</p>
* [ListSuiteRuns](#listsuiteruns) - <p>Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteRuns</a> action.</p>
* [ListTagsForResource](#listtagsforresource) - <p>Lists the tags attached to an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>
* [StartSuiteRun](#startsuiterun) - <p>Starts a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartSuiteRun</a> action.</p>
* [StopSuiteRun](#stopsuiterun) - <p>Stops a Device Advisor test suite run that is currently running.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopSuiteRun</a> action.</p>
* [TagResource](#tagresource) - <p>Adds to and modifies existing tags of an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>
* [UntagResource](#untagresource) - <p>Removes tags from an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>
* [UpdateSuiteDefinition](#updatesuitedefinition) - <p>Updates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSuiteDefinition</a> action.</p>

## CreateSuiteDefinition

<p>Creates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSuiteDefinition</a> action.</p>

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
    res, err := s.SDK.CreateSuiteDefinition(ctx, operations.CreateSuiteDefinitionRequest{
        RequestBody: operations.CreateSuiteDefinitionRequestBody{
            SuiteDefinitionConfiguration: operations.CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration{
                DevicePermissionRoleArn: sdk.String("iusto"),
                Devices: []shared.DeviceUnderTest{
                    shared.DeviceUnderTest{
                        CertificateArn: sdk.String("nisi"),
                        ThingArn: sdk.String("recusandae"),
                    },
                    shared.DeviceUnderTest{
                        CertificateArn: sdk.String("temporibus"),
                        ThingArn: sdk.String("ab"),
                    },
                    shared.DeviceUnderTest{
                        CertificateArn: sdk.String("quis"),
                        ThingArn: sdk.String("veritatis"),
                    },
                },
                IntendedForQualification: sdk.Bool(false),
                IsLongDurationTest: sdk.Bool(false),
                Protocol: shared.ProtocolEnumMqttV5.ToPointer(),
                RootGroup: sdk.String("perferendis"),
                SuiteDefinitionName: sdk.String("ipsam"),
            },
            Tags: map[string]string{
                "sapiente": "quo",
                "odit": "at",
                "at": "maiores",
                "molestiae": "quod",
            },
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSuiteDefinitionResponse != nil {
        // handle response
    }
}
```

## DeleteSuiteDefinition

<p>Deletes a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSuiteDefinition</a> action.</p>

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
    res, err := s.SDK.DeleteSuiteDefinition(ctx, operations.DeleteSuiteDefinitionRequest{
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
        SuiteDefinitionID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSuiteDefinitionResponse != nil {
        // handle response
    }
}
```

## GetEndpoint

Gets information about an Device Advisor endpoint.

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
    res, err := s.SDK.GetEndpoint(ctx, operations.GetEndpointRequest{
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("esse"),
        CertificateArn: sdk.String("ipsum"),
        ThingArn: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEndpointResponse != nil {
        // handle response
    }
}
```

## GetSuiteDefinition

<p>Gets information about a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteDefinition</a> action.</p>

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
    res, err := s.SDK.GetSuiteDefinition(ctx, operations.GetSuiteDefinitionRequest{
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolor"),
        SuiteDefinitionID: "natus",
        SuiteDefinitionVersion: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSuiteDefinitionResponse != nil {
        // handle response
    }
}
```

## GetSuiteRun

<p>Gets information about a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>

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
    res, err := s.SDK.GetSuiteRun(ctx, operations.GetSuiteRunRequest{
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("iure"),
        SuiteDefinitionID: "saepe",
        SuiteRunID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSuiteRunResponse != nil {
        // handle response
    }
}
```

## GetSuiteRunReport

<p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRunReport</a> action.</p>

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
    res, err := s.SDK.GetSuiteRunReport(ctx, operations.GetSuiteRunReportRequest{
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
        SuiteDefinitionID: "dolorem",
        SuiteRunID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSuiteRunReportResponse != nil {
        // handle response
    }
}
```

## ListSuiteDefinitions

<p>Lists the Device Advisor test suites you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteDefinitions</a> action.</p>

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
    res, err := s.SDK.ListSuiteDefinitions(ctx, operations.ListSuiteDefinitionsRequest{
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        MaxResults: sdk.Int64(38425),
        NextToken: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSuiteDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListSuiteRuns

<p>Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteRuns</a> action.</p>

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
    res, err := s.SDK.ListSuiteRuns(ctx, operations.ListSuiteRunsRequest{
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("culpa"),
        MaxResults: sdk.Int64(161309),
        NextToken: sdk.String("repellat"),
        SuiteDefinitionID: sdk.String("mollitia"),
        SuiteDefinitionVersion: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSuiteRunsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>Lists the tags attached to an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("quia"),
        ResourceArn: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## StartSuiteRun

<p>Starts a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartSuiteRun</a> action.</p>

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
    res, err := s.SDK.StartSuiteRun(ctx, operations.StartSuiteRunRequest{
        RequestBody: operations.StartSuiteRunRequestBody{
            SuiteDefinitionVersion: sdk.String("vitae"),
            SuiteRunConfiguration: operations.StartSuiteRunRequestBodySuiteRunConfiguration{
                ParallelRun: sdk.Bool(false),
                PrimaryDevice: &shared.DeviceUnderTest{
                    CertificateArn: sdk.String("laborum"),
                    ThingArn: sdk.String("animi"),
                },
                SelectedTestList: []string{
                    "odit",
                    "quo",
                },
            },
            Tags: map[string]string{
                "tenetur": "ipsam",
            },
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("laborum"),
        SuiteDefinitionID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartSuiteRunResponse != nil {
        // handle response
    }
}
```

## StopSuiteRun

<p>Stops a Device Advisor test suite run that is currently running.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopSuiteRun</a> action.</p>

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
    res, err := s.SDK.StopSuiteRun(ctx, operations.StopSuiteRunRequest{
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        SuiteDefinitionID: "omnis",
        SuiteRunID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopSuiteRunResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Adds to and modifies existing tags of an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "perferendis": "doloremque",
                "reprehenderit": "ut",
                "maiores": "dicta",
            },
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        ResourceArn: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

<p>Removes tags from an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        ResourceArn: "modi",
        TagKeys: []string{
            "rem",
            "voluptates",
            "quasi",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateSuiteDefinition

<p>Updates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSuiteDefinition</a> action.</p>

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
    res, err := s.SDK.UpdateSuiteDefinition(ctx, operations.UpdateSuiteDefinitionRequest{
        RequestBody: operations.UpdateSuiteDefinitionRequestBody{
            SuiteDefinitionConfiguration: operations.UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration{
                DevicePermissionRoleArn: sdk.String("repudiandae"),
                Devices: []shared.DeviceUnderTest{
                    shared.DeviceUnderTest{
                        CertificateArn: sdk.String("veritatis"),
                        ThingArn: sdk.String("itaque"),
                    },
                    shared.DeviceUnderTest{
                        CertificateArn: sdk.String("incidunt"),
                        ThingArn: sdk.String("enim"),
                    },
                    shared.DeviceUnderTest{
                        CertificateArn: sdk.String("consequatur"),
                        ThingArn: sdk.String("est"),
                    },
                },
                IntendedForQualification: sdk.Bool(false),
                IsLongDurationTest: sdk.Bool(false),
                Protocol: shared.ProtocolEnumMqttV5.ToPointer(),
                RootGroup: sdk.String("explicabo"),
                SuiteDefinitionName: sdk.String("deserunt"),
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        SuiteDefinitionID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSuiteDefinitionResponse != nil {
        // handle response
    }
}
```
