# roles

## Overview

A classification scheme for the characteristics of relationships between parties (individuals and organisations).


### Available Operations

* [getClassificationsRoles](#getclassificationsroles) - Retrieve a list of roles

## getClassificationsRoles

Retrieve a list of roles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsRolesRequest;
import org.openapis.openapi.models.operations.GetClassificationsRolesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsRolesRequest req = new GetClassificationsRolesRequest("eaque");            

            GetClassificationsRolesResponse res = sdk.roles.getClassificationsRoles(req);

            if (res.roles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
