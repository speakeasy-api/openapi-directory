# SessionAnalytics

### Available Operations

* [AppSessionsByTime](#appsessionsbytime) - App Sessions by Time

## AppSessionsByTime

This endpoint allows you to retrieve a series of the number of sessions for your app over a designated time period.

### Components Used
- [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
            "sessions" : (int)
        },
        ...
    ]
}
```

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
    res, err := s.SessionAnalytics.AppSessionsByTime(ctx, operations.AppSessionsByTimeRequest{
        AppID: sdk.String("{{app_identifier}}"),
        EndingAt: sdk.String("2018-06-28T23:59:59-5:00"),
        Length: sdk.String("14"),
        SegmentID: sdk.String("{{segment_identifier}}"),
        Unit: sdk.String("day"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
