# UUIDParsing

## Overview

Parse UUID string and check for its validity and return version details

Find out more
<https://fungenerators.com/api/uuid/>
### Available Operations

* [PostUUID](#postuuid) - Parse a UUID string and return its version and check whether it is valid.

## PostUUID

Parse a UUID string and return its version and check whether it is valid.

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
    res, err := s.UUIDParsing.PostUUID(ctx, operations.PostUUIDRequest{
        Uuidstr: "corrupti",
    }, operations.PostUUIDSecurity{
        XFungeneratorsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
