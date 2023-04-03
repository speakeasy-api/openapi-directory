<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAccountingSecurity;
import org.openapis.openapi.models.operations.GetAccountingHydrateEnum;
import org.openapis.openapi.models.operations.GetAccountingRequest;
import org.openapis.openapi.models.operations.GetAccountingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountingRequest req = new GetAccountingRequest() {{
                fromDate = "corrupti";
                hydrate = new org.openapis.openapi.models.operations.GetAccountingHydrateEnum[]{{
                    add("items"),
                    add("items"),
                    add("items"),
                }};
                limit = 715190;
                orderIds = new Long[]{{
                    add(602763),
                    add(857946),
                    add(544883),
                    add(847252),
                }};
                page = 423655;
                toDate = "error";
                warehouseIds = new Long[]{{
                    add(384382),
                    add(437587),
                    add(297534),
                }};
            }}            

            GetAccountingResponse res = sdk.accounting.getAccounting(req, new GetAccountingSecurity() {{
                fdcAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountingArrayV2.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->