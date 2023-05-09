# licenseLifecycleStates

## Overview

A classification scheme for licenses.


### Available Operations

* [getClassificationsLicenseLifecycleStates](#getclassificationslicenselifecyclestates) - Retrieve a list of license lifecycle states

## getClassificationsLicenseLifecycleStates

Retrieve a list of license lifecycle states

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsLicenseLifecycleStatesRequest;
import org.openapis.openapi.models.operations.GetClassificationsLicenseLifecycleStatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsLicenseLifecycleStatesRequest req = new GetClassificationsLicenseLifecycleStatesRequest("est");            

            GetClassificationsLicenseLifecycleStatesResponse res = sdk.licenseLifecycleStates.getClassificationsLicenseLifecycleStates(req);

            if (res.licenseLifecycleStates != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
