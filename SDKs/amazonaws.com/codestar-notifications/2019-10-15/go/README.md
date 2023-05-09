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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateNotificationRule(ctx, operations.CreateNotificationRuleRequest{
        RequestBody: operations.CreateNotificationRuleRequestBody{
            ClientRequestToken: sdk.String("corrupti"),
            DetailType: operations.CreateNotificationRuleRequestBodyDetailTypeEnumFull,
            EventTypeIds: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
            Name: "corrupti",
            Resource: "illum",
            Status: operations.CreateNotificationRuleRequestBodyStatusEnumEnabled.ToPointer(),
            Tags: map[string]string{
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Targets: []shared.Target{
                shared.Target{
                    TargetAddress: sdk.String("tempora"),
                    TargetType: sdk.String("suscipit"),
                },
                shared.Target{
                    TargetAddress: sdk.String("molestiae"),
                    TargetType: sdk.String("minus"),
                },
                shared.Target{
                    TargetAddress: sdk.String("placeat"),
                    TargetType: sdk.String("voluptatum"),
                },
                shared.Target{
                    TargetAddress: sdk.String("iusto"),
                    TargetType: sdk.String("excepturi"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
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

### [SDK](docs/sdk/README.md)

* [CreateNotificationRule](docs/sdk/README.md#createnotificationrule) - Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.
* [DeleteNotificationRule](docs/sdk/README.md#deletenotificationrule) - Deletes a notification rule for a resource.
* [DeleteTarget](docs/sdk/README.md#deletetarget) - Deletes a specified target for notifications.
* [DescribeNotificationRule](docs/sdk/README.md#describenotificationrule) - Returns information about a specified notification rule.
* [ListEventTypes](docs/sdk/README.md#listeventtypes) - Returns information about the event types available for configuring notifications.
* [ListNotificationRules](docs/sdk/README.md#listnotificationrules) - Returns a list of the notification rules for an Amazon Web Services account.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns a list of the tags associated with a notification rule.
* [ListTargets](docs/sdk/README.md#listtargets) - Returns a list of the notification rule targets for an Amazon Web Services account.
* [Subscribe](docs/sdk/README.md#subscribe) - Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.
* [TagResource](docs/sdk/README.md#tagresource) - Associates a set of provided tags with a notification rule.
* [Unsubscribe](docs/sdk/README.md#unsubscribe) - Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes the association between one or more provided tags and a notification rule.
* [UpdateNotificationRule](docs/sdk/README.md#updatenotificationrule) - <p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
