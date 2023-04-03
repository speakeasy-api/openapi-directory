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
        BatchRequest: &shared.BatchRequest{
            ContactListID: 548814,
            Name: "provident",
            Recipients: []shared.Recipient{
                shared.Recipient{
                    Attributes: map[string]string{
                        "unde": "nulla",
                        "corrupti": "illum",
                        "vel": "error",
                        "deserunt": "suscipit",
                    },
                    ContactID: 437587,
                    FromNumber: "magnam",
                    PhoneNumber: "debitis",
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "delectus": "tempora",
                    },
                    ContactID: 383441,
                    FromNumber: "molestiae",
                    PhoneNumber: "minus",
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "voluptatum": "iusto",
                        "excepturi": "nisi",
                        "recusandae": "temporibus",
                        "ab": "quis",
                    },
                    ContactID: 87129,
                    FromNumber: "deserunt",
                    PhoneNumber: "perferendis",
                },
            },
            ScrubDuplicates: false,
        },
        ID: 368241,
        StrictValidation: false,
    }

    ctx := context.Background()
    res, err := s.Calls.AddCallBroadcastBatch(ctx, req, operations.AddCallBroadcastBatchSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceID != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->