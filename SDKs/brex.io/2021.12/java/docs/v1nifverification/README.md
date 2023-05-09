# v1NifVerification

## Overview

NIF Verification methods

### Available Operations

* [nifBasic](#nifbasic) - Verifies a NIF number
* [nifComprehensive](#nifcomprehensive) - Verifies a NIF number and retrieves company data

## nifBasic

Performs a basic verification check of a given NIF tax number against NIF.com. Optional parameters may be added to improve calculation of confidence score.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NifBasicRequest;
import org.openapis.openapi.models.operations.NifBasicRequestBody;
import org.openapis.openapi.models.operations.NifBasicResponse;
import org.openapis.openapi.models.operations.NifBasicSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NifBasicRequest req = new NifBasicRequest(                new NifBasicRequestBody("animi") {{
                                companyAddress = "enim";
                                companyName = "odit";
                            }};, "quo");            

            NifBasicResponse res = sdk.v1NifVerification.nifBasic(req, new NifBasicSecurity("sequi") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.nifBasic200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## nifComprehensive

Comprehensive verification of given portuguese NIF number against NIF.com. Optional parameters may help to build a better confidence score. Additional company data will be provided.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NifComprehensiveRequest;
import org.openapis.openapi.models.operations.NifComprehensiveRequestBody;
import org.openapis.openapi.models.operations.NifComprehensiveResponse;
import org.openapis.openapi.models.operations.NifComprehensiveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NifComprehensiveRequest req = new NifComprehensiveRequest(                new NifComprehensiveRequestBody("tenetur") {{
                                companyAddress = "ipsam";
                                companyName = "id";
                            }};, "possimus");            

            NifComprehensiveResponse res = sdk.v1NifVerification.nifComprehensive(req, new NifComprehensiveSecurity("aut") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.nifComprehensive200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
