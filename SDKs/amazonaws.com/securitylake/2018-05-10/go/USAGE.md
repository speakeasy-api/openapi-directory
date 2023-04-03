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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateAwsLogSourceRequest{
        RequestBody: operations.CreateAwsLogSourceRequestBody{
            EnableAllDimensions: map[string]map[string][]string{
                "provident": map[string][]string{
                    "quibusdam": []string{
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                    "vel": []string{
                        "deserunt",
                        "suscipit",
                        "iure",
                    },
                    "magnam": []string{
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    },
                },
                "molestiae": map[string][]string{
                    "placeat": []string{
                        "iusto",
                        "excepturi",
                        "nisi",
                    },
                    "recusandae": []string{
                        "ab",
                        "quis",
                        "veritatis",
                        "deserunt",
                    },
                    "perferendis": []string{
                        "repellendus",
                        "sapiente",
                    },
                    "quo": []string{
                        "at",
                    },
                },
                "at": map[string][]string{
                    "molestiae": []string{
                        "quod",
                        "esse",
                        "totam",
                        "porro",
                    },
                    "dolorum": []string{
                        "nam",
                    },
                    "officia": []string{
                        "fugit",
                        "deleniti",
                        "hic",
                    },
                    "optio": []string{
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
        XAmzAlgorithm: "laboriosam",
        XAmzContentSha256: "hic",
        XAmzCredential: "saepe",
        XAmzDate: "fuga",
        XAmzSecurityToken: "in",
        XAmzSignature: "corporis",
        XAmzSignedHeaders: "iste",
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