# SSLCertificates

## Overview

Manage your SSL certificates.

### Available Operations

* [DownloadCertificate](#downloadcertificate) - Download a SSL certificate
* [GetSslCertificate](#getsslcertificate) - Detail of a SSL certificate
* [GetSslCertificates](#getsslcertificates) - Overview of SSL certificates

## DownloadCertificate

Returns the certifcate as binary data with the content-type and the filename information in the response headers.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SSLCertificates.DownloadCertificate(ctx, operations.DownloadCertificateRequest{
        FileFormat: shared.SslCertificateFileFormatEnumPfx,
        Password: "qui",
        Sha1FingerprintPathParameter: "quae",
        Sha1FingerprintQueryParameter: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadCertificate200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetSslCertificate

Detail of a SSL certificate

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
    res, err := s.SSLCertificates.GetSslCertificate(ctx, operations.GetSslCertificateRequest{
        Sha1FingerprintPathParameter: "odio",
        Sha1FingerprintQueryParameter: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SslCertificateDetail != nil {
        // handle response
    }
}
```

## GetSslCertificates

Overview of SSL certificates

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
    res, err := s.SSLCertificates.GetSslCertificates(ctx, operations.GetSslCertificatesRequest{
        Skip: sdk.Int(977496),
        Take: sdk.Int(787542),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SslCertificates != nil {
        // handle response
    }
}
```
