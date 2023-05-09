# accounting

### Available Operations

* [getAccounting](#getaccounting) - List Order Accounting

## getAccounting

Retrieves accounting activity during the queried timespan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountingHydrateEnum;
import org.openapis.openapi.models.operations.GetAccountingRequest;
import org.openapis.openapi.models.operations.GetAccountingResponse;
import org.openapis.openapi.models.operations.GetAccountingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountingRequest req = new GetAccountingRequest("debitis",                 new org.openapis.openapi.models.operations.GetAccountingHydrateEnum[]{{
                                add(GetAccountingHydrateEnum.ITEMS),
                            }}, "delectus") {{
                limit = 272656L;
                orderIds = new Long[]{{
                    add(477665L),
                    add(791725L),
                }};
                page = 812169L;
                warehouseIds = new Long[]{{
                    add(479977L),
                    add(568045L),
                    add(392785L),
                }};
            }};            

            GetAccountingResponse res = sdk.accounting.getAccounting(req, new GetAccountingSecurity("recusandae") {{
                fdcAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountingArrayV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
