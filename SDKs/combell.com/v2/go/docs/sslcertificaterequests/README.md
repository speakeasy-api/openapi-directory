# SSLCertificateRequests

## Overview

Create new SSL certificates. In the provisioning documentation you can find more info on the flow that should be followed.

### Available Operations

* [AddSslCertificateRequest](#addsslcertificaterequest) - Add a SSL certificate request
* [GetSslCertificateRequest](#getsslcertificaterequest) - Detail of a SSL certificate request
* [GetSslCertificateRequests](#getsslcertificaterequests) - Overview of SSL certificate requests
* [VerifySslCertificateRequestDomainValidations](#verifysslcertificaterequestdomainvalidations) - Verify the SSL certificate request domain validations

## AddSslCertificateRequest

Executing this method causes the purchase of a paying product.<br />
Log on to our website to see your current (renewal) prices or contact our Sales department.<br />
Please note that promotional pricing does not apply for purchases made through our API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SSLCertificateRequests.AddSslCertificateRequest(ctx, shared.CreateSslCertificateRequest{
        AdditionalValidationAttributes: []shared.AdditionalValidationAttribute{
            shared.AdditionalValidationAttribute{
                Name: sdk.String("Ms. Joe Berge"),
                Value: sdk.String("consequatur"),
            },
        },
        CertificateType: shared.SslCertificateTypeEnumWildcard.ToPointer(),
        Csr: sdk.String("repellendus"),
        ValidationLevel: shared.SslCertificateValidationLevelEnumExtendedValidated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSslCertificateRequest

Detail of a SSL certificate request

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
    res, err := s.SSLCertificateRequests.GetSslCertificateRequest(ctx, operations.GetSslCertificateRequestRequest{
        ID: 984330,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SslCertificateRequestDetail != nil {
        // handle response
    }
}
```

## GetSslCertificateRequests

Overview of SSL certificate requests

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
    res, err := s.SSLCertificateRequests.GetSslCertificateRequests(ctx, operations.GetSslCertificateRequestsRequest{
        Skip: sdk.Int(281730),
        Take: sdk.Int(703495),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SslCertificateRequests != nil {
        // handle response
    }
}
```

## VerifySslCertificateRequestDomainValidations

Verify the SSL certificate request domain validations

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
    res, err := s.SSLCertificateRequests.VerifySslCertificateRequestDomainValidations(ctx, operations.VerifySslCertificateRequestDomainValidationsRequest{
        ID: 586410,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
