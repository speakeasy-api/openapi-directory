# companyInfo

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [getCompanyInfo](#getcompanyinfo) - Get company info

## getCompanyInfo

Retrieve information about the company, as seen in the commerce platform.

This may include information like addresses, tax registration details and social media or website information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompanyInfoRequest;
import org.openapis.openapi.models.operations.GetCompanyInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCompanyInfoRequest req = new GetCompanyInfoRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171");            

            GetCompanyInfoResponse res = sdk.companyInfo.getCompanyInfo(req);

            if (res.companyInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
