# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/fraudlabspro.com/sms-verification/1.0/go
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

    req := operations.GetV1VerificationResultRequest{
        Format: "xml",
        Key: "provident",
        Otp: "distinctio",
        TranID: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.GetV1VerificationResult(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV1VerificationResult200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `GetV1VerificationResult` - Verify that an OTP sent by the Send SMS Verification API is valid.
* `PostV1VerificationSend` - Send an SMS with verification code and a custom message for authentication purpose.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
