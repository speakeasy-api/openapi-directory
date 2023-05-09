# v1IbanVerification

## Overview

IBAN Verification methods

### Available Operations

* [ibanBasic](#ibanbasic) - Checks validity of an IBAN number
* [ibanComprehensive](#ibancomprehensive) - Checks validity of an IBAN number

## ibanBasic

Basic verification of an IBAN number validating its structure

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IbanBasicRequestBody;
import org.openapis.openapi.models.operations.IbanBasicResponse;
import org.openapis.openapi.models.operations.IbanBasicSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IbanBasicRequestBody req = new IbanBasicRequestBody("AT483200000012345864");            

            IbanBasicResponse res = sdk.v1IbanVerification.ibanBasic(req, new IbanBasicSecurity("vitae") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.ibanBasic200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ibanComprehensive

Comprehensive verification of IBAN number using a service provider for verification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IbanComprehensiveRequestBody;
import org.openapis.openapi.models.operations.IbanComprehensiveResponse;
import org.openapis.openapi.models.operations.IbanComprehensiveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IbanComprehensiveRequestBody req = new IbanComprehensiveRequestBody("AT483200000012345864");            

            IbanComprehensiveResponse res = sdk.v1IbanVerification.ibanComprehensive(req, new IbanComprehensiveSecurity("laborum") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.oneapi1v11ibanVerification1checkIbanPostResponses200ContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
