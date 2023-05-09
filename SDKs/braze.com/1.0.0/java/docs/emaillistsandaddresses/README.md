# emailListsAndAddresses

## Overview

Users’ email subscription status can be updated and retrieved via Braze using a RESTful API. You can use the API to set up bi-directional sync between Braze and other email systems or your own database.

### Available Operations

* [queryHardBouncedEmails](#queryhardbouncedemails) - Query Hard Bounced Emails
* [queryListOfUnsubscribedEmailAddresses](#querylistofunsubscribedemailaddresses) - Query List of Unsubscribed Email Addresses

## queryHardBouncedEmails

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryHardBouncedEmailsRequest;
import org.openapis.openapi.models.operations.QueryHardBouncedEmailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QueryHardBouncedEmailsRequest req = new QueryHardBouncedEmailsRequest() {{
                email = "example@braze.com";
                endDate = "2019-02-01";
                limit = "100";
                offset = "1";
                startDate = "2019-01-01";
            }};            

            QueryHardBouncedEmailsResponse res = sdk.emailListsAndAddresses.queryHardBouncedEmails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryListOfUnsubscribedEmailAddresses

Use the /email/unsubscribes endpoint to return emails that have unsubscribed during the time period from `start_date` to `end_date`. You can use this endpoint to set up a bi-directional sync between Braze and other email systems or your own database.

> You must provide either an email or a start_date and an end_date. <br><br>If your date range has more than `limit` number of unsubscribes, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryListOfUnsubscribedEmailAddressesRequest;
import org.openapis.openapi.models.operations.QueryListOfUnsubscribedEmailAddressesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QueryListOfUnsubscribedEmailAddressesRequest req = new QueryListOfUnsubscribedEmailAddressesRequest() {{
                email = "example@braze.com";
                endDate = "2020-02-01";
                limit = "1";
                offset = "1";
                sortDirection = "desc";
                startDate = "2020-01-01";
            }};            

            QueryListOfUnsubscribedEmailAddressesResponse res = sdk.emailListsAndAddresses.queryListOfUnsubscribedEmailAddresses(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
