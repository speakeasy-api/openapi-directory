# returns

### Available Operations

* [getReturns](#getreturns) - List Returns
* [putReturns](#putreturns) - Inform us of an RMA

## getReturns

Retrieves summary return activity during the queried timespan. Although return knowledge can be learned from `GET /orders/{id}` it can take an unknown amount of time for an order that is refused or undeliverable to return to an FDC facility. Instead we recommend regularly querying this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReturnsRequest;
import org.openapis.openapi.models.operations.GetReturnsResponse;
import org.openapis.openapi.models.operations.GetReturnsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReturnsRequest req = new GetReturnsRequest("molestiae", "velit") {{
                limit = 623510L;
                page = 158969L;
            }};            

            GetReturnsResponse res = sdk.returns.getReturns(req, new GetReturnsSecurity("quis") {{
                fdcAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnsArrayV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putReturns

Inform FDC of an expected return.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutReturnsResponse;
import org.openapis.openapi.models.operations.PutReturnsRmaRequestV2;
import org.openapis.openapi.models.operations.PutReturnsRmaRequestV2Items;
import org.openapis.openapi.models.operations.PutReturnsSecurity;
import org.openapis.openapi.models.shared.OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutReturnsRmaRequestV2 req = new PutReturnsRmaRequestV2(                new org.openapis.openapi.models.operations.PutReturnsRmaRequestV2Items[]{{
                                add(new PutReturnsRmaRequestV2Items(1L, "animi") {{
                                    quantityExpected = 1L;
                                    sku = "laborum";
                                }}),
                            }},                 new OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient("enim", "odit", "quo", "sequi", "tenetur", "ipsam", "id", "possimus") {{
                                address2 = "aut";
                                companyName = "quasi";
                                postalCode = "86099-8459";
                            }};, "ipsa") {{
                merchantOrderId = "omnis";
            }};            

            PutReturnsResponse res = sdk.returns.putReturns(req, new PutReturnsSecurity("voluptate") {{
                fdcAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.rmaResponseV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
