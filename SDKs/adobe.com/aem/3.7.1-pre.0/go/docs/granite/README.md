# Granite

### Available Operations

* [SslSetup](#sslsetup)

## SslSetup

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Granite.SslSetup(ctx, operations.SslSetupRequest{
        RequestBody: &operations.SslSetupRequestBody{
            CertificateFile: &operations.SslSetupRequestBodyCertificateFile{
                CertificateFile: "natus",
                Content: []byte("laboriosam"),
            },
            PrivatekeyFile: &operations.SslSetupRequestBodyPrivatekeyFile{
                Content: []byte("hic"),
                PrivatekeyFile: "saepe",
            },
        },
        HTTPSHostname: "fuga",
        HTTPSPort: "in",
        KeystorePassword: "corporis",
        KeystorePasswordConfirm: "iste",
        TruststorePassword: "iure",
        TruststorePasswordConfirm: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
