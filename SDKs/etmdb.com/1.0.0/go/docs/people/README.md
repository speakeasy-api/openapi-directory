# People

### Available Operations

* [PeopleSearchRead](#peoplesearchread) - Return cast search result

## PeopleSearchRead

Return cast search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username

For more details on how cast are listed [see here][ref].
[ref]: https://etmdb.com/en/cast-list/-updated_date

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
    res, err := s.People.PeopleSearchRead(ctx, operations.PeopleSearchReadRequest{
        User: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
