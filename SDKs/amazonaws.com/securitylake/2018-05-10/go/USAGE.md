<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateAwsLogSource(ctx, operations.CreateAwsLogSourceRequest{
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
                shared.DimensionEnumSourceType,
            },
        },
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAwsLogSourceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->