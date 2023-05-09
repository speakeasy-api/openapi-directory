# orders

### Available Operations

* [findOrders](#findorders) - Find orders
* [getOrder](#getorder) - Find a specific order
* [orderKeywords](#orderkeywords) - Purchase keywords
* [orderNumbers](#ordernumbers) - Purchase numbers

## findOrders

Searches for account orders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindOrdersRequest;
import org.openapis.openapi.models.operations.FindOrdersResponse;
import org.openapis.openapi.models.operations.FindOrdersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindOrdersRequest req = new FindOrdersRequest() {{
                fields = "consequuntur";
                intervalBegin = 145870L;
                intervalEnd = 661118L;
                limit = 335631;
                offset = 440264;
                status = new String[]{{
                    add("illo"),
                    add("corporis"),
                    add("quidem"),
                }};
            }};            

            FindOrdersResponse res = sdk.orders.findOrders(req, new FindOrdersSecurity("eveniet", "non") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.pageNumberOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrder

Returns a single NumberOrder instance for a given order id. Order contains information about purchased keywords, local, toll-free numbers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderRequest;
import org.openapis.openapi.models.operations.GetOrderResponse;
import org.openapis.openapi.models.operations.GetOrderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderRequest req = new GetOrderRequest(878493L) {{
                fields = "doloremque";
            }};            

            GetOrderResponse res = sdk.orders.getOrder(req, new GetOrderSecurity("iure", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numberOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderKeywords

Purchase keywords. Send a list of available keywords into this API to purchase them using CallFire credits. Make sure the account has enough credits before trying to purchase the keywords. Keyword should only consist of uppercase and lowercase letters and numbers. Number of characters must be greater than 2, but less than 65.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderKeywordsRequest;
import org.openapis.openapi.models.operations.OrderKeywordsResponse;
import org.openapis.openapi.models.operations.OrderKeywordsSecurity;
import org.openapis.openapi.models.shared.KeywordPurchaseRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderKeywordsRequest req = new OrderKeywordsRequest() {{
                keywordPurchaseRequest = new KeywordPurchaseRequest() {{
                    keywords = new String[]{{
                        add("quae"),
                        add("molestiae"),
                        add("eveniet"),
                    }};
                }};;
                fields = "qui";
            }};            

            OrderKeywordsResponse res = sdk.orders.orderKeywords(req, new OrderKeywordsSecurity("cum", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.resourceId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderNumbers

Purchase numbers. There are many ways to purchase a number. Set either 'tollFreeCount' or 'localCount' along with some querying fields to purchase numbers by bulk query. Set the list of numbers to purchase by list. Available numbers will be purchased using CallFire credits owned by the user. Make sure the account has enough credits before trying to purchase

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderNumbersRequest;
import org.openapis.openapi.models.operations.OrderNumbersResponse;
import org.openapis.openapi.models.operations.OrderNumbersSecurity;
import org.openapis.openapi.models.shared.NumberPurchaseRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderNumbersRequest req = new OrderNumbersRequest() {{
                numberPurchaseRequest = new NumberPurchaseRequest() {{
                    city = "Cleveland Heights";
                    localCount = 672582;
                    numbers = new String[]{{
                        add("voluptatum"),
                        add("rem"),
                        add("aliquam"),
                    }};
                    prefix = "ad";
                    promo = "repellat";
                    state = "alias";
                    tollFreeCount = 362189;
                    zipcode = "46309-9163";
                }};;
                fields = "dolore";
            }};            

            OrderNumbersResponse res = sdk.orders.orderNumbers(req, new OrderNumbersSecurity("dolorum", "nesciunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.resourceId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
