# SDK

## Overview

Additional methods that allow you to manage payment details stored for recurring payments. For more information, refer to [Recurring payments](https://docs.adyen.com/developers/features/recurring-payments).

### Available Operations

* [postDisable](#postdisable) - Disables stored payment details.
* [postListRecurringDetails](#postlistrecurringdetails) - Retrieves stored payment details for a shopper.

## postDisable

Disables stored payment details to stop charging a shopper with this particular recurring detail ID.

For more information, refer to [Disable stored details](https://docs.adyen.com/developers/features/recurring-payments/disable-stored-details).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDisableResponse;
import org.openapis.openapi.models.shared.DisableRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DisableRequest req = new DisableRequest("unde", "nulla") {{
                contract = "corrupti";
                recurringDetailReference = "illum";
            }};            

            PostDisableResponse res = sdk.sdk.postDisable(req);

            if (res.disableResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListRecurringDetails

Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.

For more information, refer to [Retrieve stored details](https://docs.adyen.com/developers/features/recurring-payments/retrieve-stored-details).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostListRecurringDetailsResponse;
import org.openapis.openapi.models.shared.Recurring;
import org.openapis.openapi.models.shared.RecurringContractEnum;
import org.openapis.openapi.models.shared.RecurringDetailsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RecurringDetailsRequest req = new RecurringDetailsRequest("vel", "error") {{
                recurring = new Recurring() {{
                    contract = RecurringContractEnum.RECURRING;
                    recurringDetailName = "suscipit";
                }};;
            }};            

            PostListRecurringDetailsResponse res = sdk.sdk.postListRecurringDetails(req);

            if (res.recurringDetailsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
