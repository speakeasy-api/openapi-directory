# Accounts

### Available Operations

* [AccountsGet](#accountsget) - Returns a list of company's Accounts. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.

## AccountsGet

Returns a list of company's Accounts. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.AccountsGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultAccountDto != nil {
        // handle response
    }
}
```
