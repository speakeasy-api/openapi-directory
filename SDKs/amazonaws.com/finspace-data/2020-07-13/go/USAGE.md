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
            DatasetID: "voluptatem",
        },
        Headers: operations.CreateChangesetHeaders{
            XAmzAlgorithm: "quidem",
            XAmzContentSha256: "rerum",
            XAmzCredential: "id",
            XAmzDate: "facilis",
            XAmzSecurityToken: "cum",
            XAmzSignature: "occaecati",
            XAmzSignedHeaders: "quia",
        },
        Request: operations.CreateChangesetRequestBody{
            ChangeType: "REPLACE",
            FormatParams: map[string]string{
                "ducimus": "unde",
                "nostrum": "illo",
                "eos": "sit",
            },
            FormatType: "PARQUET",
            SourceParams: map[string]string{
                "ut": "voluptatum",
                "dolor": "sed",
                "odio": "deserunt",
            },
            SourceType: "S3",
            Tags: map[string]string{
                "sequi": "iure",
                "provident": "eum",
                "repellat": "quia",
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