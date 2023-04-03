# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/contentgroove.com/1.0.0/go
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
    s := sdk.New()

    req := operations.DeleteAPIV1ClipsIDRequest{
        ID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.DeleteAPIV1ClipsID(ctx, req, operations.DeleteAPIV1ClipsIDSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `DeleteAPIV1ClipsID` - delete clip
* `DeleteAPIV1MediasID` - delete media
* `DeleteAPIV1WebhookSubscriptionsID` - delete webhook subscription
* `GetAPIV1Clips` - list clips
* `GetAPIV1ClipsID` - show clip
* `GetAPIV1DirectUploads` - prepare presigned upload url
* `GetAPIV1Medias` - list medias
* `GetAPIV1MediasID` - show media
* `GetAPIV1WebhookSubscriptions` - list webhook subscriptions
* `GetAPIV1WebhookSubscriptionsID` - show webhook subscription
* `PostAPIV1Clips` - create clip
* `PostAPIV1Medias` - create media
* `PostAPIV1WebhookSubscriptions` - create webhook subscription
* `PutAPIV1ClipsID` - update clip
* `PutAPIV1MediasID` - update media
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
