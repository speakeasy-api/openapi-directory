# CompanyInfo

### Available Operations

* [CompanyInfoOne](#companyinfoone) - Get company info

## CompanyInfoOne

Get company info

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CompanyInfo.CompanyInfoOne(ctx, operations.CompanyInfoOneRequest{
        Fields: sdk.String("voluptatibus"),
        Raw: sdk.Bool(false),
        XApideckAppID: "vero",
        XApideckConsumerID: "nihil",
        XApideckServiceID: sdk.String("praesentium"),
    }, operations.CompanyInfoOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCompanyInfoResponse != nil {
        // handle response
    }
}
```
