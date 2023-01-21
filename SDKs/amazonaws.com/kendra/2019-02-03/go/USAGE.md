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
    
    req := operations.BatchDeleteDocumentRequest{
        Headers: operations.BatchDeleteDocumentHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSKendraFrontendService.BatchDeleteDocument",
        },
        Request: shared.BatchDeleteDocumentRequest{
            DataSourceSyncJobMetricTarget: &shared.DataSourceSyncJobMetricTarget{
                DataSourceID: "fugit",
                DataSourceSyncJobID: "et",
            },
            DocumentIDList: []string{
                "rerum",
            },
            IndexID: "dicta",
        },
    }
    
    res, err := s.BatchDeleteDocument(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteDocumentResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->