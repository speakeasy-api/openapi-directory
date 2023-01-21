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
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BalanceSheetOneRequest{
        Security: operations.BalanceSheetOneSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.BalanceSheetOneQueryParams{
            Filter: &shared.BalanceSheetFilter{
                EndDate: "sit",
                StartDate: "voluptas",
            },
            PassThrough: map[string]interface{}{
                "expedita": "consequuntur",
                "dolor": "expedita",
            },
            Raw: true,
        },
        Headers: operations.BalanceSheetOneHeaders{
            XApideckAppID: "fugit",
            XApideckConsumerID: "et",
            XApideckServiceID: "nihil",
        },
    }
    
    res, err := s.BalanceSheet.BalanceSheetOne(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBalanceSheetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->