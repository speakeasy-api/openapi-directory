# TypeBoulderEmails

## Overview

Search API for 'Boulder Council Emails' entry type

### Available Operations

* [SearchBoulderEmails](#searchboulderemails) - Search API for 'Boulder Council Emails' entry type

## SearchBoulderEmails

API to search for entries of type Boulder Council Emails

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
    res, err := s.TypeBoulderEmails.SearchBoulderEmails(ctx, operations.SearchBoulderEmailsRequest{
        ChangedateFrom: types.MustTimeFromString("2021-12-15T01:59:29.520Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-05T00:59:14.180Z"),
        CreatedateFrom: types.MustTimeFromString("2022-09-14T08:30:37.763Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-09T14:55:41.766Z"),
        Description: sdk.String("asperiores"),
        Filesuffix: sdk.String("facilis"),
        Fromdate: types.MustTimeFromString("2022-04-17T04:31:41.347Z"),
        Group: sdk.String("ab"),
        Max: sdk.Int64(611749),
        Maxlatitude: sdk.Float32(2927.94),
        Maxlongitude: sdk.Float32(6719.07),
        Minlatitude: sdk.Float32(1523.54),
        Minlongitude: sdk.Float32(4475.16),
        Name: sdk.String("Melody Cole"),
        SearchDbBoulderEmailsEmailSubject: sdk.String("architecto"),
        SearchDbBoulderEmailsPlainTextBody: sdk.String("suscipit"),
        SearchDbBoulderEmailsReceivedDate: sdk.String("sapiente"),
        SearchDbBoulderEmailsSentCc: sdk.String("debitis"),
        SearchDbBoulderEmailsSentFrom: sdk.String("illo"),
        SearchDbBoulderEmailsSentTo: sdk.String("reiciendis"),
        Skip: sdk.Int64(19300),
        Text: sdk.String("corrupti"),
        Todate: types.MustTimeFromString("2022-03-06T01:38:10.905Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
