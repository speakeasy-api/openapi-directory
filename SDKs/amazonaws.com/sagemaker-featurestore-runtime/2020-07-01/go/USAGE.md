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
    
    req := operations.BatchGetRecordRequest{
        Headers: operations.BatchGetRecordHeaders{
            XAmzAlgorithm: "alias",
            XAmzContentSha256: "reprehenderit",
            XAmzCredential: "non",
            XAmzDate: "quia",
            XAmzSecurityToken: "sed",
            XAmzSignature: "consequatur",
            XAmzSignedHeaders: "fuga",
        },
        Request: operations.BatchGetRecordRequestBody{
            Identifiers: []shared.BatchGetRecordIdentifier{
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "aliquid",
                    FeatureNames: []string{
                        "unde",
                        "ducimus",
                        "ut",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "quidem",
                        "nulla",
                    },
                },
            },
        },
    }
    
    res, err := s.BatchGetRecord(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetRecordResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->