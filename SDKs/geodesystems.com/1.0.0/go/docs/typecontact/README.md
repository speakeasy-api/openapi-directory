# TypeContact

## Overview

Search API for 'Contact List' entry type

### Available Operations

* [SearchContact](#searchcontact) - Search API for 'Contact List' entry type

## SearchContact

API to search for entries of type Contact List

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
    res, err := s.TypeContact.SearchContact(ctx, operations.SearchContactRequest{
        ChangedateFrom: types.MustTimeFromString("2022-09-10T19:23:06.016Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-18T21:26:08.081Z"),
        CreatedateFrom: types.MustTimeFromString("2022-09-22T18:43:20.498Z"),
        CreatedateTo: types.MustTimeFromString("2022-12-28T19:52:33.730Z"),
        Description: sdk.String("architecto"),
        Filesuffix: sdk.String("sit"),
        Fromdate: types.MustTimeFromString("2022-11-09T08:03:12.737Z"),
        Group: sdk.String("ab"),
        Max: sdk.Int64(513760),
        Maxlatitude: sdk.Float32(656.04),
        Maxlongitude: sdk.Float32(2226.58),
        Minlatitude: sdk.Float32(8562.77),
        Minlongitude: sdk.Float32(3694.9),
        Name: sdk.String("Cynthia Macejkovic"),
        SearchDbContactEmail: sdk.String("officiis"),
        SearchDbContactInstitution: sdk.String("esse"),
        SearchDbContactName: sdk.String("necessitatibus"),
        Skip: sdk.Int64(153369),
        Text: sdk.String("veniam"),
        Todate: types.MustTimeFromString("2022-04-15T18:45:38.448Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
