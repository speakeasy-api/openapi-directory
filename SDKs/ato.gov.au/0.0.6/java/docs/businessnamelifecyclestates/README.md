# businessNameLifecycleStates

## Overview

A classification scheme for business names.


### Available Operations

* [getClassificationsBusinessNameLifecycleStates](#getclassificationsbusinessnamelifecyclestates) - Retrieve a list of business name lifecycle states

## getClassificationsBusinessNameLifecycleStates

Retrieve a list of business name lifecycle states

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsBusinessNameLifecycleStatesRequest;
import org.openapis.openapi.models.operations.GetClassificationsBusinessNameLifecycleStatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsBusinessNameLifecycleStatesRequest req = new GetClassificationsBusinessNameLifecycleStatesRequest("distinctio");            

            GetClassificationsBusinessNameLifecycleStatesResponse res = sdk.businessNameLifecycleStates.getClassificationsBusinessNameLifecycleStates(req);

            if (res.businessNameLifecycleStates != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
