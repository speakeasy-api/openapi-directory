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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateAwsLogSourceRequestBody{
            EnableAllDimensions: map[string]map[string][]string{
                "nihil": map[string][]string{
                    "facilis": []string{
                        "iusto",
                        "ullam",
                    },
                    "saepe": []string{
                        "sapiente",
                    },
                    "enim": []string{
                        "voluptatum",
                        "autem",
                    },
                },
                "vel": map[string][]string{
                    "deleniti": []string{
                        "reprehenderit",
                        "molestiae",
                        "quo",
                    },
                    "quasi": []string{
                        "dicta",
                        "est",
                    },
                    "voluptatem": []string{
                        "fugiat",
                        "a",
                    },
                },
                "omnis": map[string][]string{
                    "accusamus": []string{
                        "reiciendis",
                        "rem",
                        "quibusdam",
                        "et",
                    },
                },
                "praesentium": map[string][]string{
                    "dolor": []string{
                        "sed",
                        "quisquam",
                        "rerum",
                    },
                    "culpa": []string{
                        "sed",
                    },
                    "rerum": []string{
                        "occaecati",
                        "odit",
                        "esse",
                        "rem",
                    },
                },
            },
            EnableSingleDimension: []string{
                "amet",
                "est",
            },
            EnableTwoDimensions: map[string][]string{
                "blanditiis": []string{
                    "similique",
                },
                "dolores": []string{
                    "quia",
                },
                "et": []string{
                    "laborum",
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