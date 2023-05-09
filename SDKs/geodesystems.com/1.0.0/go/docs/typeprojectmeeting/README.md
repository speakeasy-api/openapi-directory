# TypeProjectMeeting

## Overview

Search API for 'Meeting' entry type

### Available Operations

* [SearchProjectMeeting](#searchprojectmeeting) - Search API for 'Meeting' entry type

## SearchProjectMeeting

API to search for entries of type Meeting

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
    res, err := s.TypeProjectMeeting.SearchProjectMeeting(ctx, operations.SearchProjectMeetingRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-03T21:11:03.072Z"),
        ChangedateTo: types.MustTimeFromString("2022-08-30T05:31:52.329Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-24T02:42:20.227Z"),
        CreatedateTo: types.MustTimeFromString("2021-05-24T19:52:17.085Z"),
        Description: sdk.String("recusandae"),
        Filesuffix: sdk.String("cumque"),
        Fromdate: types.MustTimeFromString("2022-06-26T08:32:32.784Z"),
        Group: sdk.String("iure"),
        Max: sdk.Int64(982927),
        Maxlatitude: sdk.Float32(6676.46),
        Maxlongitude: sdk.Float32(1440.58),
        Minlatitude: sdk.Float32(842.07),
        Minlongitude: sdk.Float32(8996.52),
        Name: sdk.String("Keith Hills"),
        SearchProjectMeetingLocation: sdk.String("quidem"),
        SearchProjectMeetingParticipants: sdk.String("non"),
        SearchProjectMeetingTopic: sdk.String("beatae"),
        Skip: sdk.Int64(123495),
        Text: sdk.String("molestias"),
        Todate: types.MustTimeFromString("2022-07-31T14:45:14.723Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
