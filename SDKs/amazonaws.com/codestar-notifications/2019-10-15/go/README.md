# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/codestar-notifications/2019-10-15/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateNotificationRuleRequest{
        RequestBody: operations.CreateNotificationRuleRequestBody{
            ClientRequestToken: "corrupti",
            DetailType: "FULL",
            EventTypeIds: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
            Name: "corrupti",
            Resource: "illum",
            Status: "ENABLED",
            Tags: map[string]string{
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Targets: []shared.Target{
                shared.Target{
                    TargetAddress: "tempora",
                    TargetType: "suscipit",
                },
                shared.Target{
                    TargetAddress: "molestiae",
                    TargetType: "minus",
                },
                shared.Target{
                    TargetAddress: "placeat",
                    TargetType: "voluptatum",
                },
                shared.Target{
                    TargetAddress: "iusto",
                    TargetType: "excepturi",
                },
            },
        },
        XAmzAlgorithm: "nisi",
        XAmzContentSha256: "recusandae",
        XAmzCredential: "temporibus",
        XAmzDate: "ab",
        XAmzSecurityToken: "quis",
        XAmzSignature: "veritatis",
        XAmzSignedHeaders: "deserunt",
    }

    ctx := context.Background()
    res, err := s.CreateNotificationRule(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNotificationRuleResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateNotificationRule` - Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.
* `DeleteNotificationRule` - Deletes a notification rule for a resource.
* `DeleteTarget` - Deletes a specified target for notifications.
* `DescribeNotificationRule` - Returns information about a specified notification rule.
* `ListEventTypes` - Returns information about the event types available for configuring notifications.
* `ListNotificationRules` - Returns a list of the notification rules for an Amazon Web Services account.
* `ListTagsForResource` - Returns a list of the tags associated with a notification rule.
* `ListTargets` - Returns a list of the notification rule targets for an Amazon Web Services account.
* `Subscribe` - Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.
* `TagResource` - Associates a set of provided tags with a notification rule.
* `Unsubscribe` - Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.
* `UntagResource` - Removes the association between one or more provided tags and a notification rule.
* `UpdateNotificationRule` - <p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
