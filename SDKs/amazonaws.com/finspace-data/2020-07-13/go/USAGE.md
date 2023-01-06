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
            DatasetID: "quos",
        },
        Headers: operations.CreateChangesetHeaders{
            XAmzAlgorithm: "et",
            XAmzContentSha256: "explicabo",
            XAmzCredential: "necessitatibus",
            XAmzDate: "veniam",
            XAmzSecurityToken: "qui",
            XAmzSignature: "in",
            XAmzSignedHeaders: "odit",
        },
        Request: operations.CreateChangesetRequestBody{
            ChangeType: "MODIFY",
            FormatParams: map[string]string{
                "tenetur": "esse",
            },
            FormatType: "XML",
            SourceParams: map[string]string{
                "id": "laboriosam",
                "quam": "maiores",
            },
            SourceType: "S3",
            Tags: map[string]string{
                "aperiam": "repellendus",
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