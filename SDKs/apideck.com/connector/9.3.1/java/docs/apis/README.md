# apIs

### Available Operations

* [apisAll](#apisall) - List APIs
* [apisOne](#apisone) - Get API

## apisAll

List APIs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApisAllRequest;
import org.openapis.openapi.models.operations.ApisAllResponse;
import org.openapis.openapi.models.operations.ApisAllSecurity;
import org.openapis.openapi.models.shared.ApiStatusEnum;
import org.openapis.openapi.models.shared.ApisFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApisAllRequest req = new ApisAllRequest("iure") {{
                cursor = "magnam";
                filter = new ApisFilter() {{
                    status = ApiStatusEnum.CONSIDERING;
                }};;
                limit = 56713L;
            }};            

            ApisAllResponse res = sdk.apIs.apisAll(req, new ApisAllSecurity("delectus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getApisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apisOne

Get API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApisOneRequest;
import org.openapis.openapi.models.operations.ApisOneResponse;
import org.openapis.openapi.models.operations.ApisOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApisOneRequest req = new ApisOneRequest("tempora", "suscipit");            

            ApisOneResponse res = sdk.apIs.apisOne(req, new ApisOneSecurity("molestiae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getApiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
