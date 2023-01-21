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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.BatchGetRecordRequestBody{
            Identifiers: []shared.BatchGetRecordIdentifier{
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "fugit",
                    FeatureNames: []string{
                        "nihil",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "dicta",
                        "debitis",
                        "voluptatum",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "et",
                    FeatureNames: []string{
                        "dolorem",
                        "et",
                        "voluptate",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "vitae",
                        "totam",
                        "dolores",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "illum",
                    FeatureNames: []string{
                        "vel",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "dolore",
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