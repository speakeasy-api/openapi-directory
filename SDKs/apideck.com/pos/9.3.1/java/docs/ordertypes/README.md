# orderTypes

### Available Operations

* [orderTypesAdd](#ordertypesadd) - Create Order Type
* [orderTypesAll](#ordertypesall) - List Order Types
* [orderTypesDelete](#ordertypesdelete) - Delete Order Type
* [orderTypesOne](#ordertypesone) - Get Order Type
* [orderTypesUpdate](#ordertypesupdate) - Update Order Type

## orderTypesAdd

Create Order Type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderTypesAddRequest;
import org.openapis.openapi.models.operations.OrderTypesAddResponse;
import org.openapis.openapi.models.operations.OrderTypesAddSecurity;
import org.openapis.openapi.models.shared.OrderTypeInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderTypesAddRequest req = new OrderTypesAddRequest(                new OrderTypeInput() {{
                                default_ = true;
                                name = "Default order type";
                            }};, "magnam", "cumque") {{
                raw = false;
                xApideckServiceId = "facere";
            }};            

            OrderTypesAddResponse res = sdk.orderTypes.orderTypesAdd(req, new OrderTypesAddSecurity("ea") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createOrderTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderTypesAll

List Order Types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderTypesAllRequest;
import org.openapis.openapi.models.operations.OrderTypesAllResponse;
import org.openapis.openapi.models.operations.OrderTypesAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderTypesAllRequest req = new OrderTypesAllRequest("aliquid", "laborum") {{
                cursor = "accusamus";
                fields = "non";
                limit = 581273L;
                raw = false;
                xApideckServiceId = "enim";
            }};            

            OrderTypesAllResponse res = sdk.orderTypes.orderTypesAll(req, new OrderTypesAllSecurity("accusamus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getOrderTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderTypesDelete

Delete Order Type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderTypesDeleteRequest;
import org.openapis.openapi.models.operations.OrderTypesDeleteResponse;
import org.openapis.openapi.models.operations.OrderTypesDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderTypesDeleteRequest req = new OrderTypesDeleteRequest("delectus", "quidem", "provident") {{
                raw = false;
                xApideckServiceId = "nam";
            }};            

            OrderTypesDeleteResponse res = sdk.orderTypes.orderTypesDelete(req, new OrderTypesDeleteSecurity("id") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteOrderTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderTypesOne

Get Order Type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderTypesOneRequest;
import org.openapis.openapi.models.operations.OrderTypesOneResponse;
import org.openapis.openapi.models.operations.OrderTypesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderTypesOneRequest req = new OrderTypesOneRequest("blanditiis", "deleniti", "sapiente") {{
                fields = "amet";
                raw = false;
                xApideckServiceId = "deserunt";
            }};            

            OrderTypesOneResponse res = sdk.orderTypes.orderTypesOne(req, new OrderTypesOneSecurity("nisi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getOrderTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderTypesUpdate

Update Order Type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderTypesUpdateRequest;
import org.openapis.openapi.models.operations.OrderTypesUpdateResponse;
import org.openapis.openapi.models.operations.OrderTypesUpdateSecurity;
import org.openapis.openapi.models.shared.OrderTypeInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderTypesUpdateRequest req = new OrderTypesUpdateRequest(                new OrderTypeInput() {{
                                default_ = true;
                                name = "Default order type";
                            }};, "vel", "natus", "omnis") {{
                raw = false;
                xApideckServiceId = "molestiae";
            }};            

            OrderTypesUpdateResponse res = sdk.orderTypes.orderTypesUpdate(req, new OrderTypesUpdateSecurity("perferendis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateOrderTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
