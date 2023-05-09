# App

## Overview

application

### Available Operations

* [AppGetApplicationAPIUsage](#appgetapplicationapiusage) - Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.
* [AppGetBungieApplications](#appgetbungieapplications) - Get list of applications created by Bungie.

## AppGetApplicationAPIUsage

Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.App.AppGetApplicationAPIUsage(ctx, operations.AppGetApplicationAPIUsageRequest{
        ApplicationID: 548814,
        End: types.MustTimeFromString("2021-07-27T21:52:56.087Z"),
        Start: types.MustTimeFromString("2021-03-11T23:22:42.658Z"),
    }, operations.AppGetApplicationAPIUsageSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AppGetBungieApplications

Get list of applications created by Bungie.

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
    res, err := s.App.AppGetBungieApplications(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
