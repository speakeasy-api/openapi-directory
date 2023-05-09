# licenses

## Overview

If you carry on a business you may need to hold a licence.

  For example, if you provide financial services, you are required to hold an Australian Financial
  Services (AFS) licence.


### Available Operations

* [getLicenses](#getlicenses) - Retrieve a list of licenses

## getLicenses

Retrieve a list of licenses


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLicensesRequest;
import org.openapis.openapi.models.operations.GetLicensesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLicensesRequest req = new GetLicensesRequest("explicabo");            

            GetLicensesResponse res = sdk.licenses.getLicenses(req);

            if (res.licenses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
