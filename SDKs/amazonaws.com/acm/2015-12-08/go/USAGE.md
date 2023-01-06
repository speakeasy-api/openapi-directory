<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AddTagsToCertificateRequest{
        Headers: operations.AddTagsToCertificateHeaders{
            XAmzAlgorithm: "mollitia",
            XAmzContentSha256: "inventore",
            XAmzCredential: "delectus",
            XAmzDate: "ipsa",
            XAmzSecurityToken: "animi",
            XAmzSignature: "animi",
            XAmzSignedHeaders: "ut",
            XAmzTarget: "CertificateManager.AddTagsToCertificate",
        },
        Request: shared.AddTagsToCertificateRequest{
            CertificateArn: "fuga",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sed",
                    Value: "et",
                },
                shared.Tag{
                    Key: "consequuntur",
                    Value: "non",
                },
                shared.Tag{
                    Key: "cupiditate",
                    Value: "provident",
                },
            },
        },
    }
    
    res, err := s.AddTagsToCertificate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->