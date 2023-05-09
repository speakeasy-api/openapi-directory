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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateClip(ctx, operations.CreateClipRequestBody{
        Data: operations.CreateClipRequestBodyData{
            Attributes: operations.CreateClipRequestBodyDataAttributes{
                EndTime: 12.3,
                MediaID: "9b9a2e82-5b47-4f59-831d-4c239824b983",
                Name: "Example New Clip",
                StartTime: 10.1,
            },
        },
    }, operations.CreateClipSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClipResponseObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateClip](docs/sdk/README.md#createclip) - create clip
* [CreateMedia](docs/sdk/README.md#createmedia) - create media
* [CreateWebhookSubscription](docs/sdk/README.md#createwebhooksubscription) - create webhook subscription
* [DeleteClipByID](docs/sdk/README.md#deleteclipbyid) - delete clip
* [DeleteMediaByID](docs/sdk/README.md#deletemediabyid) - delete media
* [DeleteWebhookSubscriptionByID](docs/sdk/README.md#deletewebhooksubscriptionbyid) - delete webhook subscription
* [GetClipByID](docs/sdk/README.md#getclipbyid) - show clip
* [GetClips](docs/sdk/README.md#getclips) - list clips
* [GetMediaByID](docs/sdk/README.md#getmediabyid) - show media
* [GetMedias](docs/sdk/README.md#getmedias) - list medias
* [GetUploadURL](docs/sdk/README.md#getuploadurl) - prepare presigned upload url
* [GetWebhookSubscriptionByID](docs/sdk/README.md#getwebhooksubscriptionbyid) - show webhook subscription
* [GetWebhookSubscriptions](docs/sdk/README.md#getwebhooksubscriptions) - list webhook subscriptions
* [UpdateClipByID](docs/sdk/README.md#updateclipbyid) - update clip
* [UpdateMediaByID](docs/sdk/README.md#updatemediabyid) - update media
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
