# Authentication

### Available Operations

* [GetTlskey](#gettlskey) - Retrieve the TLS Certificate
* [PutTlskeyRefresh](#puttlskeyrefresh) - Refresh the TLS Certificate

## GetTlskey

This endpoint returns the TLS (Transport Layer Security) certificate to the user (corresponding IBM Containers command: `cf ic login`). The TLS certificate is a SSL certificate that is used to authenticate the user's CLI with the IBM Containers service and to establish a secure communication between the user's local machine and the container in Bluemix.

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
    res, err := s.Authentication.GetTlskey(ctx, operations.GetTlskeyRequest{
        XAuthProjectID: "unde",
        XAuthToken: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Certificate != nil {
        // handle response
    }
}
```

## PutTlskeyRefresh

This endpoint requests to generate a new TLS (Transport Layer Security) certificate on the server and to update the existing user TLS certificate (corresponding IBM Containers command: `cf ic init`).

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
    res, err := s.Authentication.PutTlskeyRefresh(ctx, operations.PutTlskeyRefreshRequest{
        XAuthProjectID: "corrupti",
        XAuthToken: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateRefresh != nil {
        // handle response
    }
}
```
