# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/codestar-notifications/2019-10-15/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateNotificationRuleRequest(
    request_body=operations.CreateNotificationRuleRequestBody(
        client_request_token="corrupti",
        detail_type="FULL",
        event_type_ids=[
            "quibusdam",
            "unde",
            "nulla",
        ],
        name="corrupti",
        resource="illum",
        status="ENABLED",
        tags={
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
        },
        targets=[
            shared.Target(
                target_address="tempora",
                target_type="suscipit",
            ),
            shared.Target(
                target_address="molestiae",
                target_type="minus",
            ),
            shared.Target(
                target_address="placeat",
                target_type="voluptatum",
            ),
            shared.Target(
                target_address="iusto",
                target_type="excepturi",
            ),
        ],
    ),
    x_amz_algorithm="nisi",
    x_amz_content_sha256="recusandae",
    x_amz_credential="temporibus",
    x_amz_date="ab",
    x_amz_security_token="quis",
    x_amz_signature="veritatis",
    x_amz_signed_headers="deserunt",
)
    
res = s.create_notification_rule(req)

if res.create_notification_rule_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_notification_rule` - Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.
* `delete_notification_rule` - Deletes a notification rule for a resource.
* `delete_target` - Deletes a specified target for notifications.
* `describe_notification_rule` - Returns information about a specified notification rule.
* `list_event_types` - Returns information about the event types available for configuring notifications.
* `list_notification_rules` - Returns a list of the notification rules for an Amazon Web Services account.
* `list_tags_for_resource` - Returns a list of the tags associated with a notification rule.
* `list_targets` - Returns a list of the notification rule targets for an Amazon Web Services account.
* `subscribe` - Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.
* `tag_resource` - Associates a set of provided tags with a notification rule.
* `unsubscribe` - Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.
* `untag_resource` - Removes the association between one or more provided tags and a notification rule.
* `update_notification_rule` - <p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
