# licenseTypes

## Overview

A classification scheme for licenses.


### Available Operations

* [getClassificationsLicenseTypes](#getclassificationslicensetypes) - Retrieve a list of license types

## getClassificationsLicenseTypes

Retrieve a list of license types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsLicenseTypesRequest;
import org.openapis.openapi.models.operations.GetClassificationsLicenseTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsLicenseTypesRequest req = new GetClassificationsLicenseTypesRequest("quibusdam");            

            GetClassificationsLicenseTypesResponse res = sdk.licenseTypes.getClassificationsLicenseTypes(req);

            if (res.licenseTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
