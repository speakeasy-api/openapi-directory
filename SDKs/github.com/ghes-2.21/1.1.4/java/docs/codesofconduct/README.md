# codesOfConduct

## Overview

Insight into codes of conduct for your communities.

### Available Operations

* [codesOfConductGetAllCodesOfConduct](#codesofconductgetallcodesofconduct) - Get all codes of conduct
* [codesOfConductGetConductCode](#codesofconductgetconductcode) - Get a code of conduct

## codesOfConductGetAllCodesOfConduct

Get all codes of conduct

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/codes-of-conduct#get-all-codes-of-conduct>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodesOfConductGetAllCodesOfConductResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodesOfConductGetAllCodesOfConductResponse res = sdk.codesOfConduct.codesOfConductGetAllCodesOfConduct();

            if (res.codeOfConducts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codesOfConductGetConductCode

Get a code of conduct

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/codes-of-conduct#get-a-code-of-conduct>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodesOfConductGetConductCodeRequest;
import org.openapis.openapi.models.operations.CodesOfConductGetConductCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodesOfConductGetConductCodeRequest req = new CodesOfConductGetConductCodeRequest("omnis");            

            CodesOfConductGetConductCodeResponse res = sdk.codesOfConduct.codesOfConductGetConductCode(req);

            if (res.codeOfConduct != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
