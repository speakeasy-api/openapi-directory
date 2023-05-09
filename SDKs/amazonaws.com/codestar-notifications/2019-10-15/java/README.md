# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequest;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequestBody;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequestBodyDetailTypeEnum;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.CreateNotificationRuleResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNotificationRuleRequest req = new CreateNotificationRuleRequest(                new CreateNotificationRuleRequestBody(CreateNotificationRuleRequestBodyDetailTypeEnum.FULL,                 new String[]{{
                                                add("quibusdam"),
                                                add("unde"),
                                                add("nulla"),
                                            }}, "corrupti", "illum",                 new org.openapis.openapi.models.shared.Target[]{{
                                                add(new Target() {{
                                                    targetAddress = "error";
                                                    targetType = "deserunt";
                                                }}),
                                                add(new Target() {{
                                                    targetAddress = "suscipit";
                                                    targetType = "iure";
                                                }}),
                                            }}) {{
                                clientRequestToken = "magnam";
                                status = CreateNotificationRuleRequestBodyStatusEnum.DISABLED;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("delectus", "tempora");
                                }};
                            }};) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "minus";
                xAmzDate = "placeat";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateNotificationRuleResponse res = sdk.createNotificationRule(req);

            if (res.createNotificationRuleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createNotificationRule](docs/sdk/README.md#createnotificationrule) - Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.
* [deleteNotificationRule](docs/sdk/README.md#deletenotificationrule) - Deletes a notification rule for a resource.
* [deleteTarget](docs/sdk/README.md#deletetarget) - Deletes a specified target for notifications.
* [describeNotificationRule](docs/sdk/README.md#describenotificationrule) - Returns information about a specified notification rule.
* [listEventTypes](docs/sdk/README.md#listeventtypes) - Returns information about the event types available for configuring notifications.
* [listNotificationRules](docs/sdk/README.md#listnotificationrules) - Returns a list of the notification rules for an Amazon Web Services account.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns a list of the tags associated with a notification rule.
* [listTargets](docs/sdk/README.md#listtargets) - Returns a list of the notification rule targets for an Amazon Web Services account.
* [subscribe](docs/sdk/README.md#subscribe) - Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.
* [tagResource](docs/sdk/README.md#tagresource) - Associates a set of provided tags with a notification rule.
* [unsubscribe](docs/sdk/README.md#unsubscribe) - Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.
* [untagResource](docs/sdk/README.md#untagresource) - Removes the association between one or more provided tags and a notification rule.
* [updateNotificationRule](docs/sdk/README.md#updatenotificationrule) - <p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
