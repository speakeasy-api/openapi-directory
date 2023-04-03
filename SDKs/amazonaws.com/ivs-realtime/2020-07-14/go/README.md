# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/ivs-realtime/2020-07-14/go
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

    req := operations.CreateParticipantTokenRequest{
        RequestBody: operations.CreateParticipantTokenRequestBody{
            Attributes: map[string]string{
                "provident": "distinctio",
                "quibusdam": "unde",
                "nulla": "corrupti",
            },
            Capabilities: []shared.ParticipantTokenCapabilityEnum{
                "PUBLISH",
                "SUBSCRIBE",
                "SUBSCRIBE",
                "PUBLISH",
            },
            Duration: 437587,
            StageArn: "magnam",
            UserID: "debitis",
        },
        XAmzAlgorithm: "ipsa",
        XAmzContentSha256: "delectus",
        XAmzCredential: "tempora",
        XAmzDate: "suscipit",
        XAmzSecurityToken: "molestiae",
        XAmzSignature: "minus",
        XAmzSignedHeaders: "placeat",
    }

    ctx := context.Background()
    res, err := s.CreateParticipantToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateParticipantTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateParticipantToken` - <p>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created.</p> <p>Encryption keys are owned by Amazon IVS and never used directly by your application.</p>
* `CreateStage` - Creates a new stage (and optionally participant tokens).
* `DeleteStage` - Shuts down and deletes the specified stage (disconnecting all participants).
* `DisconnectParticipant` - Disconnects a specified participant and revokes the participant permanently from a specified stage.
* `GetStage` - Gets information for the specified stage.
* `ListStages` - Gets summary information about all stages in your account, in the AWS region where the API request is processed.
* `ListTagsForResource` - Gets information about AWS tags for the specified ARN.
* `TagResource` - Adds or updates tags for the AWS resource with the specified ARN.
* `UntagResource` - Removes tags from the resource with the specified ARN.
* `UpdateStage` - Updates a stage’s configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
