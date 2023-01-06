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
            XAmzAlgorithm: "quia",
            XAmzContentSha256: "ut",
            XAmzCredential: "ut",
            XAmzDate: "quas",
            XAmzSecurityToken: "magni",
            XAmzSignature: "fuga",
            XAmzSignedHeaders: "quaerat",
        },
        Request: operations.BatchGetRecordRequestBody{
            Identifiers: []shared.BatchGetRecordIdentifier{
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "voluptas",
                    FeatureNames: []string{
                        "facere",
                        "sed",
                        "accusantium",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "quam",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "quo",
                    FeatureNames: []string{
                        "incidunt",
                        "vel",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "laudantium",
                        "sed",
                        "laborum",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "dolore",
                    FeatureNames: []string{
                        "qui",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "modi",
                        "occaecati",
                        "dolor",
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