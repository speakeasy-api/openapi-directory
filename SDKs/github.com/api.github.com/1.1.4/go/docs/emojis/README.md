# Emojis

## Overview

List emojis available to use on GitHub.

### Available Operations

* [EmojisGet](#emojisget) - Get emojis

## EmojisGet

Lists all the emojis available to use on GitHub.

API method documentation
<https://docs.github.com/rest/reference/emojis#get-emojis>

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
    res, err := s.Emojis.EmojisGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EmojisGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```
