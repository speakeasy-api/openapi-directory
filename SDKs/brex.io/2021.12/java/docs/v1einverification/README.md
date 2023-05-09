# v1EinVerification

## Overview

US EIN tax number methods

### Available Operations

* [einVerificationBasic](#einverificationbasic) - Verifies an EIN number
* [einVerificationComprehensive](#einverificationcomprehensive) - Verifies EIN number and retrieves company data
* [einVerificationLookup](#einverificationlookup) - Retrieves a list of EIN numbers

## einVerificationBasic

Performs a basic verification check of a given EIN tax number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EinVerificationBasicRequest;
import org.openapis.openapi.models.operations.EinVerificationBasicResponse;
import org.openapis.openapi.models.operations.EinVerificationBasicSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EinVerificationBasicRequest req = new EinVerificationBasicRequest("numquam");            

            EinVerificationBasicResponse res = sdk.v1EinVerification.einVerificationBasic(req, new EinVerificationBasicSecurity("commodi") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.einVerificationBasic200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## einVerificationComprehensive

Comprehensive verification of a given EIN number. Additionally to the basic verification it will lookup company details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EinVerificationComprehensiveRequest;
import org.openapis.openapi.models.operations.EinVerificationComprehensiveResponse;
import org.openapis.openapi.models.operations.EinVerificationComprehensiveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EinVerificationComprehensiveRequest req = new EinVerificationComprehensiveRequest("quam");            

            EinVerificationComprehensiveResponse res = sdk.v1EinVerification.einVerificationComprehensive(req, new EinVerificationComprehensiveSecurity("molestiae") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.einVerificationComprehensive200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## einVerificationLookup

Lookup EIN number for a company by its company name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EinVerificationLookupRequest;
import org.openapis.openapi.models.operations.EinVerificationLookupResponse;
import org.openapis.openapi.models.operations.EinVerificationLookupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EinVerificationLookupRequest req = new EinVerificationLookupRequest("velit") {{
                state = "error";
                tight = false;
                zip = "quia";
            }};            

            EinVerificationLookupResponse res = sdk.v1EinVerification.einVerificationLookup(req, new EinVerificationLookupSecurity("quis") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.einVerificationLookup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
