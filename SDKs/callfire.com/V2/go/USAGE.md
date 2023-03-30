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
            Name: "distinctio",
            Recipients: []shared.Recipient{
                shared.Recipient{
                    Attributes: map[string]string{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                    ContactID: 384382,
                    FromNumber: "iure",
                    PhoneNumber: "magnam",
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "ipsa": "delectus",
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                    ContactID: 479977,
                    FromNumber: "excepturi",
                    PhoneNumber: "nisi",
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "temporibus": "ab",
                        "quis": "veritatis",
                        "deserunt": "perferendis",
                        "ipsam": "repellendus",
                    },
                    ContactID: 957156,
                    FromNumber: "quo",
                    PhoneNumber: "odit",
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "at": "maiores",
                        "molestiae": "quod",
                        "quod": "esse",
                        "totam": "porro",
                    },
                    ContactID: 678880,
                    FromNumber: "dicta",
                    PhoneNumber: "nam",
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