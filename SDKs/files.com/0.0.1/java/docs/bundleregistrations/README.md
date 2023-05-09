# bundleRegistrations

## Overview

Operations about bundle_registrations

### Available Operations

* [getBundleRegistrations](#getbundleregistrations) - List Bundle Registrations

## getBundleRegistrations

List Bundle Registrations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBundleRegistrationsRequest;
import org.openapis.openapi.models.operations.GetBundleRegistrationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBundleRegistrationsRequest req = new GetBundleRegistrationsRequest() {{
                bundleId = 730442;
                cursor = "voluptas";
                perPage = 646265;
                userId = 463575;
            }};            

            GetBundleRegistrationsResponse res = sdk.bundleRegistrations.getBundleRegistrations(req);

            if (res.bundleRegistrationEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
