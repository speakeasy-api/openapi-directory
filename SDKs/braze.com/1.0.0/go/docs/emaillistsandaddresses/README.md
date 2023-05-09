# EmailListsAndAddresses

## Overview

Users’ email subscription status can be updated and retrieved via Braze using a RESTful API. You can use the API to set up bi-directional sync between Braze and other email systems or your own database.

### Available Operations

* [QueryHardBouncedEmails](#queryhardbouncedemails) - Query Hard Bounced Emails
* [QueryListOfUnsubscribedEmailAddresses](#querylistofunsubscribedemailaddresses) - Query List of Unsubscribed Email Addresses

## QueryHardBouncedEmails

This endpoint allows you to pull a list of email addresses that have “hard bounced” your email messages within a certain time frame.

> You must provide an `end_date`, as well as either an `email` or a `start_date`.<br><br>If your date range has more than `limit` number of hard bounces, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.

## Response

Entries are listed in descending order.

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
  "emails": [
    {
      "email": "example1@braze.com",
      "hard_bounced_at": "2016-08-25 15:24:32 +0000"
    },
    {
      "email": "example2@braze.com",
      "hard_bounced_at": "2016-08-24 17:41:58 +0000"
    },
    {
      "email": "example3@braze.com",
      "hard_bounced_at": "2016-08-24 12:01:13 +0000"
    }
  ],
  "message": "success"
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
    res, err := s.EmailListsAndAddresses.QueryHardBouncedEmails(ctx, operations.QueryHardBouncedEmailsRequest{
        Email: sdk.String("example@braze.com"),
        EndDate: sdk.String("2019-02-01"),
        Limit: sdk.String("100"),
        Offset: sdk.String("1"),
        StartDate: sdk.String("2019-01-01"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## QueryListOfUnsubscribedEmailAddresses

Use the /email/unsubscribes endpoint to return emails that have unsubscribed during the time period from `start_date` to `end_date`. You can use this endpoint to set up a bi-directional sync between Braze and other email systems or your own database.

> You must provide either an email or a start_date and an end_date. <br><br>If your date range has more than `limit` number of unsubscribes, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.

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
    res, err := s.EmailListsAndAddresses.QueryListOfUnsubscribedEmailAddresses(ctx, operations.QueryListOfUnsubscribedEmailAddressesRequest{
        Email: sdk.String("example@braze.com"),
        EndDate: sdk.String("2020-02-01"),
        Limit: sdk.String("1"),
        Offset: sdk.String("1"),
        SortDirection: sdk.String("desc"),
        StartDate: sdk.String("2020-01-01"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
