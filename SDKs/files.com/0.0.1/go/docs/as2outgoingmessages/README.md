# As2OutgoingMessages

## Overview

Operations about as2_outgoing_messages

### Available Operations

* [GetAs2OutgoingMessages](#getas2outgoingmessages) - List As2 Outgoing Messages

## GetAs2OutgoingMessages

List As2 Outgoing Messages

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
    res, err := s.As2OutgoingMessages.GetAs2OutgoingMessages(ctx, operations.GetAs2OutgoingMessagesRequest{
        As2PartnerID: sdk.Int(253291),
        Cursor: sdk.String("commodi"),
        Filter: map[string]interface{}{
            "molestiae": "velit",
            "error": "quia",
        },
        FilterGt: map[string]interface{}{
            "vitae": "laborum",
            "animi": "enim",
        },
        FilterGteq: map[string]interface{}{
            "quo": "sequi",
        },
        FilterLt: map[string]interface{}{
            "ipsam": "id",
            "possimus": "aut",
            "quasi": "error",
            "temporibus": "laborum",
        },
        FilterLteq: map[string]interface{}{
            "reiciendis": "voluptatibus",
        },
        PerPage: sdk.Int(878194),
        SortBy: map[string]interface{}{
            "praesentium": "voluptatibus",
            "ipsa": "omnis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.As2OutgoingMessageEntities != nil {
        // handle response
    }
}
```
