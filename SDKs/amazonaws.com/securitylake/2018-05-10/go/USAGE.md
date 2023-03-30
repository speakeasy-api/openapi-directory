<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateAwsLogSourceRequest{
        Headers: operations.CreateAwsLogSourceHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateAwsLogSourceRequestBody{
            EnableAllDimensions: map[string]map[string][]string{
                "vel": map[string][]string{
                    "deserunt": []string{
                        "iure",
                        "magnam",
                    },
                    "debitis": []string{
                        "delectus",
                    },
                    "tempora": []string{
                        "molestiae",
                        "minus",
                    },
                },
                "placeat": map[string][]string{
                    "iusto": []string{
                        "nisi",
                        "recusandae",
                        "temporibus",
                    },
                    "ab": []string{
                        "veritatis",
                        "deserunt",
                    },
                    "perferendis": []string{
                        "repellendus",
                        "sapiente",
                    },
                },
                "quo": map[string][]string{
                    "at": []string{
                        "maiores",
                        "molestiae",
                        "quod",
                        "quod",
                    },
                },
                "esse": map[string][]string{
                    "porro": []string{
                        "dicta",
                        "nam",
                        "officia",
                    },
                    "occaecati": []string{
                        "deleniti",
                    },
                    "hic": []string{
                        "totam",
                        "beatae",
                        "commodi",
                        "molestiae",
                    },
                },
            },
            EnableSingleDimension: []string{
                "qui",
                "impedit",
            },
            EnableTwoDimensions: map[string][]string{
                "esse": []string{
                    "excepturi",
                },
                "aspernatur": []string{
                    "ad",
                },
                "natus": []string{
                    "iste",
                },
            },
            InputOrder: []shared.DimensionEnum{
                "SOURCE_TYPE",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateAwsLogSource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAwsLogSourceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->