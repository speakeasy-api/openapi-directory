<!-- Start SDK Example Usage -->
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

            GetAccountingRequest req = new GetAccountingRequest("corrupti",                 new org.openapis.openapi.models.operations.GetAccountingHydrateEnum[]{{
                                add(GetAccountingHydrateEnum.ITEMS),
                                add(GetAccountingHydrateEnum.ITEMS),
                                add(GetAccountingHydrateEnum.ITEMS),
                            }}, "distinctio") {{
                limit = 844266L;
                orderIds = new Long[]{{
                    add(857946L),
                    add(544883L),
                    add(847252L),
                }};
                page = 423655L;
                warehouseIds = new Long[]{{
                    add(645894L),
                    add(384382L),
                    add(437587L),
                }};
            }};            

            GetAccountingResponse res = sdk.accounting.getAccounting(req, new GetAccountingSecurity("magnam") {{
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
<!-- End SDK Example Usage -->