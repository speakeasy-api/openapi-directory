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
    s := sdk.New()

    req := operations.AddCallBroadcastBatchRequest{
        Security: operations.AddCallBroadcastBatchSecurity{
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.AddCallBroadcastBatchPathParams{
            ID: 548814,
        },
        QueryParams: operations.AddCallBroadcastBatchQueryParams{
            StrictValidation: false,
        },
        Request: &shared.BatchRequest{
            ContactListID: 592845,
            Name: "porro",
            Recipients: []shared.Recipient{
                shared.Recipient{
                    Attributes: map[string]string{
                        "vero": "perspiciatis",
                        "nulla": "nihil",
                        "fuga": "facilis",
                    },
                    ContactID: 384382,
                    FromNumber: "iusto",
                    PhoneNumber: "ullam",
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "inventore": "sapiente",
                        "enim": "eum",
                        "voluptatum": "autem",
                        "vel": "non",
                    },
                    ContactID: 479977,
                    FromNumber: "similique",
                    PhoneNumber: "reprehenderit",
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "quo": "quasi",
                        "laboriosam": "dicta",
                        "est": "voluptatem",
                        "consequatur": "fugiat",
                    },
                    ContactID: 957156,
                    FromNumber: "omnis",
                    PhoneNumber: "eos",
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "accusamus": "reiciendis",
                        "rem": "quibusdam",
                        "et": "praesentium",
                        "occaecati": "dolor",
                    },
                    ContactID: 678880,
                    FromNumber: "sed",
                    PhoneNumber: "quisquam",
                },
            },
            ScrubDuplicates: false,
        },
    }

    ctx := context.Background()
    res, err := s.Calls.AddCallBroadcastBatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceID != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->