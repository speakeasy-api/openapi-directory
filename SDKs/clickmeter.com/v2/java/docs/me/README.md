# me

### Available Operations

* [meGetMe](#megetme) - Retrieve current account data
* [meGetMePlan](#megetmeplan) - Retrieve current account plan

## meGetMe

Retrieve current account data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MeGetMeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            MeGetMeResponse res = sdk.me.meGetMe();

            if (res.apiCoreDtoAccountingUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## meGetMePlan

Retrieve current account plan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MeGetMePlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            MeGetMePlanResponse res = sdk.me.meGetMePlan();

            if (res.apiCoreDtoAccountingPlan != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
