# Sms

### Available Operations

* [ListUserSSubscriptionGroupSms](#listuserssubscriptiongroupsms) - List User's Subscription Group - SMS
* [ListUserSSubscriptionGroupStatusSms](#listuserssubscriptiongroupstatussms) - List User's  Subscription Group Status - SMS

## ListUserSSubscriptionGroupSms

Use the endpoint below to list and get the subscription groups of a certain user.

> If there are multiple users (multiple external ids) who share the same email address, all users will be returned as a separate user (even if they have the same email address or subscription group).

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
    res, err := s.Sms.ListUserSSubscriptionGroupSms(ctx, operations.ListUserSSubscriptionGroupSmsRequest{
        ExternalID: sdk.String("{{external_id}}"),
        Limit: sdk.String("100"),
        Offset: sdk.String("1"),
        Phone: sdk.String("+11112223333"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListUserSSubscriptionGroupStatusSms

Use the endpoint below to get the subscription state of a user in a subscription group. The response from this endpoint will include the external ID and either subscribed, unsubscribed, or unknown for the specific subscription group requested in the API call. This can be used to update the subscription group state in subsequent API calls or to be displayed on a hosted web page.

> *Either `external_id` or `email` are required.

## Response

All successful responses will return `subscribed`, `unsubscribed`, or `unknown` depending on status and user history with the subscription group.

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
  "status": {
    "1": "Unsubscribed",
    "2": "Subscribed"
  },
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
    res, err := s.Sms.ListUserSSubscriptionGroupStatusSms(ctx, operations.ListUserSSubscriptionGroupStatusSmsRequest{
        ExternalID: sdk.String("{{external_identifier}}"),
        Phone: sdk.String("+11112223333"),
        SubscriptionGroupID: sdk.String("{{subscription_group_id}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
