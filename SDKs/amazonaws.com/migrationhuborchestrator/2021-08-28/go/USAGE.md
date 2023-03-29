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

    req := operations.CreateWorkflowRequest{
        Headers: operations.CreateWorkflowHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateWorkflowRequestBody{
            ApplicationConfigurationID: "nulla",
            Description: "nihil",
            InputParameters: map[string]shared.StepInput{
                "facilis": shared.StepInput{
                    IntegerValue: 384382,
                    ListOfStringsValue: []string{
                        "ullam",
                        "saepe",
                    },
                    MapOfStringValue: map[string]string{
                        "sapiente": "enim",
                    },
                    StringValue: "eum",
                },
                "voluptatum": shared.StepInput{
                    IntegerValue: 791725,
                    ListOfStringsValue: []string{
                        "non",
                        "deleniti",
                        "similique",
                        "reprehenderit",
                    },
                    MapOfStringValue: map[string]string{
                        "quo": "quasi",
                        "laboriosam": "dicta",
                        "est": "voluptatem",
                        "consequatur": "fugiat",
                    },
                    StringValue: "a",
                },
                "omnis": shared.StepInput{
                    IntegerValue: 140350,
                    ListOfStringsValue: []string{
                        "accusamus",
                        "reiciendis",
                        "rem",
                        "quibusdam",
                    },
                    MapOfStringValue: map[string]string{
                        "praesentium": "occaecati",
                        "dolor": "soluta",
                        "sed": "quisquam",
                        "rerum": "culpa",
                    },
                    StringValue: "qui",
                },
            },
            Name: "sed",
            StepTargets: []string{
                "possimus",
                "occaecati",
                "odit",
                "esse",
            },
            Tags: map[string]string{
                "voluptatem": "amet",
                "est": "id",
            },
            TemplateID: "blanditiis",
        },
    }

    ctx := context.Background()
    res, err := s.CreateWorkflow(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMigrationWorkflowResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->