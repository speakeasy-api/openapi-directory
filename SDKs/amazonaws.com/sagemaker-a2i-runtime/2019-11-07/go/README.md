# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sagemaker-a2i-runtime/2019-11-07/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

    req := operations.DeleteHumanLoopRequest{
        HumanLoopName: "corrupti",
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
    }

    ctx := context.Background()
    res, err := s.DeleteHumanLoop(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteHumanLoopResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `DeleteHumanLoop` - <p>Deletes the specified human loop for a flow definition.</p> <p>If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code>. </p>
* `DescribeHumanLoop` - Returns information about the specified human loop. If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code> error. 
* `ListHumanLoops` - Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.
* `StartHumanLoop` - Starts a human loop, provided that at least one activation condition is met.
* `StopHumanLoop` - Stops the specified human loop.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
