# v1VatVerification

## Overview

VAT Verification methods

### Available Operations

* [vatBasic](#vatbasic) - Returns a verification result
* [vatComprehensive](#vatcomprehensive) - Returns a verification result and company data
* [vatLevelTwo](#vatleveltwo) - Returns a level two verification result
* [vatLookup](#vatlookup) - Returns a list of vat numbers with additional data

## vatBasic

Basic verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VatBasicRequest;
import org.openapis.openapi.models.operations.VatBasicRequestBody;
import org.openapis.openapi.models.operations.VatBasicResponse;
import org.openapis.openapi.models.operations.VatBasicSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VatBasicRequest req = new VatBasicRequest(                new VatBasicRequestBody("distinctio") {{
                                companyAddress = "quibusdam";
                                companyName = "labore";
                                companyNumber = "modi";
                            }};, "qui");            

            VatBasicResponse res = sdk.v1VatVerification.vatBasic(req, new VatBasicSecurity("aliquid") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.vatBasic200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vatComprehensive

Extended verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VatComprehensiveRequest;
import org.openapis.openapi.models.operations.VatComprehensiveRequestBody;
import org.openapis.openapi.models.operations.VatComprehensiveResponse;
import org.openapis.openapi.models.operations.VatComprehensiveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VatComprehensiveRequest req = new VatComprehensiveRequest(                new VatComprehensiveRequestBody("cupiditate") {{
                                companyAddress = "quos";
                                companyName = "perferendis";
                                companyNumber = "magni";
                            }};, "assumenda");            

            VatComprehensiveResponse res = sdk.v1VatVerification.vatComprehensive(req, new VatComprehensiveSecurity("ipsam") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.vatComprehensive200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vatLevelTwo

Second Level Verification of VAT number against BMF Austria. Optional confirmation parameter can be provided to order a Confirmation Report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VatLevelTwoRequest;
import org.openapis.openapi.models.operations.VatLevelTwoRequestBody;
import org.openapis.openapi.models.operations.VatLevelTwoResponse;
import org.openapis.openapi.models.operations.VatLevelTwoSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VatLevelTwoRequest req = new VatLevelTwoRequest(                new VatLevelTwoRequestBody("alias") {{
                                confirmation = false;
                            }};, "fugit");            

            VatLevelTwoResponse res = sdk.v1VatVerification.vatLevelTwo(req, new VatLevelTwoSecurity("dolorum") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.vatLevelTwo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vatLookup

Reverse VAT Lookup: Search for companies and their VAT numbers by company name. Search is forwarded to a provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VatLookupRequest;
import org.openapis.openapi.models.operations.VatLookupRequestBody;
import org.openapis.openapi.models.operations.VatLookupResponse;
import org.openapis.openapi.models.operations.VatLookupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VatLookupRequest req = new VatLookupRequest(                new VatLookupRequestBody("null") {{
                                address = "null";
                            }};, "excepturi");            

            VatLookupResponse res = sdk.v1VatVerification.vatLookup(req, new VatLookupSecurity("tempora") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.vatLookup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
