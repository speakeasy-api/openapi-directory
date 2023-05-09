# organizations

## Overview

With these endpoints you can get useful information about your Organizations.
This also can be used to manage your [Products](#tag/Products).

<a href="https://configcat.com/docs/organization/" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the Organizations.

### Available Operations

* [getOrganizations](#getorganizations) - List Organizations

## getOrganizations

This endpoint returns the list of the Organizations that belongs to the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim", "doloribus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetOrganizationsResponse res = sdk.organizations.getOrganizations();

            if (res.organizationModelHaljsons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
