# Certificate

## Overview

Certificate api

### Available Operations

* [GetCertificatePdf](#getcertificatepdf) - Download the certificate in pdf format

## GetCertificatePdf

Download the certificate in pdf format

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Certificate.GetCertificatePdf(ctx, shared.CertificateRequest{
        BeneficiaryID: sdk.String("delectus"),
        Mobile: sdk.String("547-854-5398 x030"),
    }, operations.GetCertificatePdfSecurity{
        CertAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
