# SDK

## Overview

<p>The AWS Migration Hub home region APIs are available specifically for working with your Migration Hub home region. You can use these APIs to determine a home region, as well as to create and work with controls that describe the home region.</p> <ul> <li> <p>You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a <code>HomeRegionNotSetException</code> error is returned.</p> </li> <li> <p>API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.</p> </li> <li> <p>If you call a write API outside the home region, an <code>InvalidInputException</code> is returned.</p> </li> <li> <p>You can call <code>GetHomeRegion</code> action to obtain the account's Migration Hub home region.</p> </li> </ul> <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region API reference. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/migrationhub-config/>
### Available Operations

* [CreateHomeRegionControl](#createhomeregioncontrol) - This API sets up the home region for the calling account only.
* [DescribeHomeRegionControls](#describehomeregioncontrols) - This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.
* [GetHomeRegion](#gethomeregion) - Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.

## CreateHomeRegionControl

This API sets up the home region for the calling account only.

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
    res, err := s.SDK.CreateHomeRegionControl(ctx, operations.CreateHomeRegionControlRequest{
        CreateHomeRegionControlRequest: shared.CreateHomeRegionControlRequest{
            DryRun: sdk.Bool(false),
            HomeRegion: "at",
            Target: shared.Target{
                ID: sdk.String("f7cc78ca-1ba9-428f-8816-742cb7392059"),
                Type: shared.TargetTypeEnumAccount,
            },
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.CreateHomeRegionControlXAmzTargetEnumAwsMigrationHubMultiAccountServiceCreateHomeRegionControl,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHomeRegionControlResult != nil {
        // handle response
    }
}
```

## DescribeHomeRegionControls

This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.

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
    res, err := s.SDK.DescribeHomeRegionControls(ctx, operations.DescribeHomeRegionControlsRequest{
        DescribeHomeRegionControlsRequest: shared.DescribeHomeRegionControlsRequest{
            ControlID: sdk.String("fuga"),
            HomeRegion: sdk.String("in"),
            MaxResults: sdk.Int64(359508),
            NextToken: sdk.String("iste"),
            Target: &shared.Target{
                ID: sdk.String("6eb10faa-a235-42c5-9559-07aff1a3a2fa"),
                Type: shared.TargetTypeEnumAccount,
            },
        },
        MaxResults: sdk.String("occaecati"),
        NextToken: sdk.String("numquam"),
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.DescribeHomeRegionControlsXAmzTargetEnumAwsMigrationHubMultiAccountServiceDescribeHomeRegionControls,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeHomeRegionControlsResult != nil {
        // handle response
    }
}
```

## GetHomeRegion

Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.

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
    res, err := s.SDK.GetHomeRegion(ctx, operations.GetHomeRegionRequest{
        RequestBody: map[string]interface{}{
            "laborum": "animi",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.GetHomeRegionXAmzTargetEnumAwsMigrationHubMultiAccountServiceGetHomeRegion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHomeRegionResult != nil {
        // handle response
    }
}
```
