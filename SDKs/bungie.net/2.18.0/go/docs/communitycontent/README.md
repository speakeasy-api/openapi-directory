# CommunityContent

## Overview

communitycontent

### Available Operations

* [CommunityContentGetCommunityContent](#communitycontentgetcommunitycontent) - Returns community content.

## CommunityContentGetCommunityContent

Returns community content.

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
    res, err := s.CommunityContent.CommunityContentGetCommunityContent(ctx, operations.CommunityContentGetCommunityContentRequest{
        MediaFilter: 857946,
        Page: 544883,
        Sort: 847252,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
