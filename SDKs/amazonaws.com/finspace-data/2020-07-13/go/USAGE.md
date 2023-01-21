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
    
    req := operations.CreateChangesetRequest{
        PathParams: operations.CreateChangesetPathParams{
            DatasetID: "sit",
        },
        Headers: operations.CreateChangesetHeaders{
            XAmzAlgorithm: "voluptas",
            XAmzContentSha256: "culpa",
            XAmzCredential: "expedita",
            XAmzDate: "consequuntur",
            XAmzSecurityToken: "dolor",
            XAmzSignature: "expedita",
            XAmzSignedHeaders: "voluptas",
        },
        Request: operations.CreateChangesetRequestBody{
            ChangeType: "REPLACE",
            FormatParams: map[string]string{
                "nihil": "rerum",
            },
            FormatType: "XML",
            SourceParams: map[string]string{
                "voluptatum": "et",
            },
            SourceType: "S3",
            Tags: map[string]string{
                "et": "voluptate",
                "iste": "vitae",
                "totam": "dolores",
            },
        },
    }
    
    res, err := s.CreateChangeset(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateChangesetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->