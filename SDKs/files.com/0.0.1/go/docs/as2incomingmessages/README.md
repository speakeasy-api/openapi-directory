# As2IncomingMessages

## Overview

Operations about as2_incoming_messages

### Available Operations

* [GetAs2IncomingMessages](#getas2incomingmessages) - List As2 Incoming Messages

## GetAs2IncomingMessages

List As2 Incoming Messages

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
    res, err := s.As2IncomingMessages.GetAs2IncomingMessages(ctx, operations.GetAs2IncomingMessagesRequest{
        As2PartnerID: sdk.Int(222321),
        Cursor: sdk.String("natus"),
        Filter: map[string]interface{}{
            "hic": "saepe",
            "fuga": "in",
        },
        FilterGt: map[string]interface{}{
            "iste": "iure",
            "saepe": "quidem",
        },
        FilterGteq: map[string]interface{}{
            "ipsa": "reiciendis",
        },
        FilterLt: map[string]interface{}{
            "mollitia": "laborum",
            "dolores": "dolorem",
            "corporis": "explicabo",
        },
        FilterLteq: map[string]interface{}{
            "enim": "omnis",
            "nemo": "minima",
            "excepturi": "accusantium",
            "iure": "culpa",
        },
        PerPage: sdk.Int(988374),
        SortBy: map[string]interface{}{
            "architecto": "mollitia",
            "dolorem": "culpa",
            "consequuntur": "repellat",
            "mollitia": "occaecati",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.As2IncomingMessageEntities != nil {
        // handle response
    }
}
```
