# v1TinVerification

## Overview

TIN Verification methods

### Available Operations

* [tinVerificationBasicCheck](#tinverificationbasiccheck) - Verifies a TIN number
* [tinVerificationComprehensiveCheck](#tinverificationcomprehensivecheck) - EIN Name Lookup with TIN number and retrieves company data
* [tinVerificationNameLookup](#tinverificationnamelookup) - EIN Name Lookup with TIN number

## tinVerificationBasicCheck

Performs a basic verification check of a given TIN number and name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TinVerificationBasicCheckRequest;
import org.openapis.openapi.models.operations.TinVerificationBasicCheckResponse;
import org.openapis.openapi.models.operations.TinVerificationBasicCheckSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TinVerificationBasicCheckRequest req = new TinVerificationBasicCheckRequest("veritatis", "itaque");            

            TinVerificationBasicCheckResponse res = sdk.v1TinVerification.tinVerificationBasicCheck(req, new TinVerificationBasicCheckSecurity("incidunt") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.tinVerificationBasicCheck200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tinVerificationComprehensiveCheck

Performs an EIN name match using provided TIN Number. Additionally to the name lookup it will lookup company details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TinVerificationComprehensiveCheckRequest;
import org.openapis.openapi.models.operations.TinVerificationComprehensiveCheckResponse;
import org.openapis.openapi.models.operations.TinVerificationComprehensiveCheckSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TinVerificationComprehensiveCheckRequest req = new TinVerificationComprehensiveCheckRequest("enim", "consequatur") {{
                threshold = 667411L;
            }};            

            TinVerificationComprehensiveCheckResponse res = sdk.v1TinVerification.tinVerificationComprehensiveCheck(req, new TinVerificationComprehensiveCheckSecurity("quibusdam") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.tinVerificationComprehensiveCheck200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tinVerificationNameLookup

Performs an EIN name match using provided TIN Number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TinVerificationNameLookupRequest;
import org.openapis.openapi.models.operations.TinVerificationNameLookupResponse;
import org.openapis.openapi.models.operations.TinVerificationNameLookupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TinVerificationNameLookupRequest req = new TinVerificationNameLookupRequest("explicabo");            

            TinVerificationNameLookupResponse res = sdk.v1TinVerification.tinVerificationNameLookup(req, new TinVerificationNameLookupSecurity("deserunt") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.tinVerificationNameLookup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
