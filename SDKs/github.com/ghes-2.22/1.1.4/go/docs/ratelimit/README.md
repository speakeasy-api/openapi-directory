# RateLimit

## Overview

Check your current rate limit status

### Available Operations

* [RateLimitGet](#ratelimitget) - Get rate limit status for the authenticated user

## RateLimitGet

**Note:** Accessing this endpoint does not count against your REST API rate limit.

**Note:** The `rate` object is deprecated. If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/rate-limit#get-rate-limit-status-for-the-authenticated-user>

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
    res, err := s.RateLimit.RateLimitGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.RateLimitOverview != nil {
        // handle response
    }
}
```
