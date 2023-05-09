# CompanySettings

### Available Operations

* [CompanySettingsGet](#companysettingsget) - Returns a list of company settings. Supports OData querying protocol.
Filtering is forbidden.

## CompanySettingsGet

Returns a list of company settings. Supports OData querying protocol.
Filtering is forbidden.

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
    res, err := s.CompanySettings.CompanySettingsGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultCompanySettingDto != nil {
        // handle response
    }
}
```
