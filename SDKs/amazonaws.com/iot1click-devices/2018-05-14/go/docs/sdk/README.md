# SDK

## Overview

Describes all of the AWS IoT 1-Click device-related API operations for the service.
 Also provides sample requests, responses, and errors for the supported web services
 protocols.

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot1click/>
### Available Operations

* [ClaimDevicesByClaimCode](#claimdevicesbyclaimcode) - Adds device(s) to your account (i.e., claim one or more devices) if and only if you
 received a claim code with the device(s).
* [DescribeDevice](#describedevice) - Given a device ID, returns a DescribeDeviceResponse object describing the
 details of the device.
* [FinalizeDeviceClaim](#finalizedeviceclaim) - <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>
* [GetDeviceMethods](#getdevicemethods) - Given a device ID, returns the invokable methods associated with the device.
* [InitiateDeviceClaim](#initiatedeviceclaim) - <p>Given a device ID, initiates a claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>
* [InvokeDeviceMethod](#invokedevicemethod) - Given a device ID, issues a request to invoke a named device method (with possible
 parameters). See the "Example POST" code snippet below.
* [ListDeviceEvents](#listdeviceevents) - Using a device ID, returns a DeviceEventsResponse object containing an
 array of events for the device.
* [ListDevices](#listdevices) - Lists the 1-Click compatible devices associated with your AWS account.
* [ListTagsForResource](#listtagsforresource) - Lists the tags associated with the specified resource ARN.
* [TagResource](#tagresource) - Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
 resource.
* [UnclaimDevice](#unclaimdevice) - Disassociates a device from your AWS account using its device ID.
* [UntagResource](#untagresource) - Using tag keys, deletes the tags (key/value pairs) associated with the specified
 resource ARN.
* [UpdateDeviceState](#updatedevicestate) - Using a Boolean value (true or false), this operation
 enables or disables the device given a device ID.

## ClaimDevicesByClaimCode

Adds device(s) to your account (i.e., claim one or more devices) if and only if you
 received a claim code with the device(s).

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
    res, err := s.SDK.ClaimDevicesByClaimCode(ctx, operations.ClaimDevicesByClaimCodeRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
        ClaimCode: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClaimDevicesByClaimCodeResponse != nil {
        // handle response
    }
}
```

## DescribeDevice

Given a device ID, returns a DescribeDeviceResponse object describing the
 details of the device.

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
    res, err := s.SDK.DescribeDevice(ctx, operations.DescribeDeviceRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        DeviceID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDeviceResponse != nil {
        // handle response
    }
}
```

## FinalizeDeviceClaim

<p>Given a device ID, finalizes the claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>

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
    res, err := s.SDK.FinalizeDeviceClaim(ctx, operations.FinalizeDeviceClaimRequest{
        RequestBody: operations.FinalizeDeviceClaimRequestBody{
            Tags: map[string]string{
                "nisi": "recusandae",
                "temporibus": "ab",
                "quis": "veritatis",
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("odit"),
        DeviceID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FinalizeDeviceClaimResponse != nil {
        // handle response
    }
}
```

## GetDeviceMethods

Given a device ID, returns the invokable methods associated with the device.

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
    res, err := s.SDK.GetDeviceMethods(ctx, operations.GetDeviceMethodsRequest{
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("totam"),
        DeviceID: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceMethodsResponse != nil {
        // handle response
    }
}
```

## InitiateDeviceClaim

<p>Given a device ID, initiates a claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>

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
    res, err := s.SDK.InitiateDeviceClaim(ctx, operations.InitiateDeviceClaimRequest{
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        DeviceID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InitiateDeviceClaimResponse != nil {
        // handle response
    }
}
```

## InvokeDeviceMethod

Given a device ID, issues a request to invoke a named device method (with possible
 parameters). See the "Example POST" code snippet below.

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
    res, err := s.SDK.InvokeDeviceMethod(ctx, operations.InvokeDeviceMethodRequest{
        RequestBody: operations.InvokeDeviceMethodRequestBody{
            DeviceMethod: &operations.InvokeDeviceMethodRequestBodyDeviceMethod{
                DeviceType: sdk.String("optio"),
                MethodName: sdk.String("totam"),
            },
            DeviceMethodParameters: sdk.String("beatae"),
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("esse"),
        DeviceID: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvokeDeviceMethodResponse != nil {
        // handle response
    }
}
```

## ListDeviceEvents

Using a device ID, returns a DeviceEventsResponse object containing an
 array of events for the device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDeviceEvents(ctx, operations.ListDeviceEventsRequest{
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("iste"),
        DeviceID: "dolor",
        FromTimeStamp: types.MustTimeFromString("2022-03-24T20:42:46.563Z"),
        MaxResults: sdk.Int64(943749),
        NextToken: sdk.String("saepe"),
        ToTimeStamp: types.MustTimeFromString("2022-02-06T12:52:33.708Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceEventsResponse != nil {
        // handle response
    }
}
```

## ListDevices

Lists the 1-Click compatible devices associated with your AWS account.

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
    res, err := s.SDK.ListDevices(ctx, operations.ListDevicesRequest{
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        DeviceType: sdk.String("reiciendis"),
        MaxResults: sdk.Int64(666767),
        NextToken: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDevicesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags associated with the specified resource ARN.

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
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("enim"),
        ResourceArn: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
 resource.

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
                "minima": "excepturi",
                "accusantium": "iure",
            },
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("culpa"),
        ResourceArn: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnclaimDevice

Disassociates a device from your AWS account using its device ID.

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
    res, err := s.SDK.UnclaimDevice(ctx, operations.UnclaimDeviceRequest{
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        DeviceID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnclaimDeviceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Using tag keys, deletes the tags (key/value pairs) associated with the specified
 resource ARN.

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
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("enim"),
        ResourceArn: "odit",
        TagKeys: []string{
            "sequi",
            "tenetur",
            "ipsam",
            "id",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDeviceState

Using a Boolean value (true or false), this operation
 enables or disables the device given a device ID.

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
    res, err := s.SDK.UpdateDeviceState(ctx, operations.UpdateDeviceStateRequest{
        RequestBody: operations.UpdateDeviceStateRequestBody{
            Enabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("quasi"),
        DeviceID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceStateResponse != nil {
        // handle response
    }
}
```
