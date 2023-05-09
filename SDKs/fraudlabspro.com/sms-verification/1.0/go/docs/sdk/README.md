# SDK

## Overview

Send an SMS with verification code and a custom message for authentication purpose. It helps merchants to minimize chargebacks and fraud for various kinds of payment method, such as credit card, paypal, cod and so on. Please visit https://www.fraudlabspro.com to learn more.

### Available Operations

* [GetV1VerificationResult](#getv1verificationresult) - Verify that an OTP sent by the Send SMS Verification API is valid.
* [PostV1VerificationSend](#postv1verificationsend) - Send an SMS with verification code and a custom message for authentication purpose.

## GetV1VerificationResult

Verify that an OTP sent by the Send SMS Verification API is valid.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetV1VerificationResult(ctx, operations.GetV1VerificationResultRequest{
        Format: operations.GetV1VerificationResultFormatEnumXML.ToPointer(),
        Key: "nulla",
        Otp: "corrupti",
        TranID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV1VerificationResult200ApplicationJSONString != nil {
        // handle response
    }
}
```

## PostV1VerificationSend

Send an SMS with verification code and a custom message for authentication purpose.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostV1VerificationSend(ctx, operations.PostV1VerificationSendRequest{
        CountryCode: sdk.String("IO"),
        Format: operations.PostV1VerificationSendFormatEnumXML.ToPointer(),
        Key: "deserunt",
        Mesg: sdk.String("suscipit"),
        Tel: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostV1VerificationSend200ApplicationJSONString != nil {
        // handle response
    }
}
```
