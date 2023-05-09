# Company

### Available Operations

* [CompanySearchRead](#companysearchread) - Return company search result

## CompanySearchRead

Return company search result

### Response Class (Status 200)

* __{company_name}__: Used as a key word to search companies,

For more details on how companies are listed [see here][ref].
[ref]: https://etmdb.com/en/company-list/-updated_date

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
    res, err := s.Company.CompanySearchRead(ctx, operations.CompanySearchReadRequest{
        CompanyName: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
