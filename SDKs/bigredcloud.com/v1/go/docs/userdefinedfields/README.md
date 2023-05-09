# UserDefinedFields

### Available Operations

* [UserDefinedFieldsGet](#userdefinedfieldsget) - Returns a list of company's User Defined Fields. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.

## UserDefinedFieldsGet

Returns a list of company's User Defined Fields. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.

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
    res, err := s.UserDefinedFields.UserDefinedFieldsGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultUserDefinedFieldDto != nil {
        // handle response
    }
}
```
