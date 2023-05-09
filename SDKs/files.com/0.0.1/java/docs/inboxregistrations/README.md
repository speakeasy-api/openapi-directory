# inboxRegistrations

## Overview

Operations about inbox_registrations

### Available Operations

* [getInboxRegistrations](#getinboxregistrations) - List Inbox Registrations

## getInboxRegistrations

List Inbox Registrations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInboxRegistrationsRequest;
import org.openapis.openapi.models.operations.GetInboxRegistrationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInboxRegistrationsRequest req = new GetInboxRegistrationsRequest() {{
                cursor = "corporis";
                folderBehaviorId = 968904;
                perPage = 828657;
            }};            

            GetInboxRegistrationsResponse res = sdk.inboxRegistrations.getInboxRegistrations(req);

            if (res.inboxRegistrationEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
