# sms

### Available Operations

* [listUserSSubscriptionGroupSms](#listuserssubscriptiongroupsms) - List User's Subscription Group - SMS
* [listUserSSubscriptionGroupStatusSms](#listuserssubscriptiongroupstatussms) - List User's  Subscription Group Status - SMS

## listUserSSubscriptionGroupSms

Use the endpoint below to list and get the subscription groups of a certain user.

> If there are multiple users (multiple external ids) who share the same email address, all users will be returned as a separate user (even if they have the same email address or subscription group).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUserSSubscriptionGroupSmsRequest;
import org.openapis.openapi.models.operations.ListUserSSubscriptionGroupSmsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUserSSubscriptionGroupSmsRequest req = new ListUserSSubscriptionGroupSmsRequest() {{
                externalId = "{{external_id}}";
                limit = "100";
                offset = "1";
                phone = "+11112223333";
            }};            

            ListUserSSubscriptionGroupSmsResponse res = sdk.sms.listUserSSubscriptionGroupSms(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUserSSubscriptionGroupStatusSms

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUserSSubscriptionGroupStatusSmsRequest;
import org.openapis.openapi.models.operations.ListUserSSubscriptionGroupStatusSmsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUserSSubscriptionGroupStatusSmsRequest req = new ListUserSSubscriptionGroupStatusSmsRequest() {{
                externalId = "{{external_identifier}}";
                phone = "+11112223333";
                subscriptionGroupId = "{{subscription_group_id}}";
            }};            

            ListUserSSubscriptionGroupStatusSmsResponse res = sdk.sms.listUserSSubscriptionGroupStatusSms(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
