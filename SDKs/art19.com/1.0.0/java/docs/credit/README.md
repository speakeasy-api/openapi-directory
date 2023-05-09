# credit

### Available Operations

* [getCredits](#getcredits) - Get a list of credits
* [getCreditsId](#getcreditsid) - Get a specific credit

## getCredits

Get a list of credits

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCreditsCreditableTypeEnum;
import org.openapis.openapi.models.operations.GetCreditsRequest;
import org.openapis.openapi.models.operations.GetCreditsResponse;
import org.openapis.openapi.models.operations.GetCreditsSecurity;
import org.openapis.openapi.models.operations.GetCreditsSortEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCreditsRequest req = new GetCreditsRequest() {{
                creditableId = "d9cbf486-3332-43f9-b77f-3a4100674ebf";
                creditableType = GetCreditsCreditableTypeEnum.SEASON;
                ids = new String[]{{
                    add("280d1ba7-7a89-4ebf-b37a-e4203ce5e6a9"),
                    add("5d8a0d44-6ce2-4af7-a73c-f3be453f870b"),
                    add("326b5a73-429c-4db1-a842-2bb679d23227"),
                }};
                pageNumber = 124833L;
                pageSize = 355613L;
                sort = new org.openapis.openapi.models.operations.GetCreditsSortEnum[]{{
                    add(GetCreditsSortEnum.UPDATED_AT),
                    add(GetCreditsSortEnum.CREATED_AT),
                    add(GetCreditsSortEnum.UPDATED_AT),
                }};
            }};            

            GetCreditsResponse res = sdk.credit.getCredits(req, new GetCreditsSecurity("soluta") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCredits200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreditsId

Get a specific credit

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCreditsIdRequest;
import org.openapis.openapi.models.operations.GetCreditsIdResponse;
import org.openapis.openapi.models.operations.GetCreditsIdSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCreditsIdRequest req = new GetCreditsIdRequest("b1e31b8b-90f3-4443-a110-8e0adcf4b921");            

            GetCreditsIdResponse res = sdk.credit.getCreditsId(req, new GetCreditsIdSecurity("laudantium") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCreditsId200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
