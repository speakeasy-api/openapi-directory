# ecommerceDelivery

### Available Operations

* [confirmCarbonOffset1](#confirmcarbonoffset1) - confirmCarbonOffset
* [confirmPayment1](#confirmpayment1) - confirmPayment
* [confirmPaymentOfTransaction1](#confirmpaymentoftransaction1) - confirmTransaction
* [confirmsPlanting2](#confirmsplanting2) - confirmPlanting
* [ecommerceDelivery](#ecommercedelivery) - ecommerceDelivery

## confirmCarbonOffset1

confirmCarbonOffset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmCarbonOffset1RequestBody;
import org.openapis.openapi.models.operations.ConfirmCarbonOffset1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmCarbonOffset1RequestBody req = new ConfirmCarbonOffset1RequestBody("y", "60a766d401d88997746c91a0") {{
                contactEmail = "example@example.com";
                contactFirstName = "abc";
                contactLastName = "xyz";
            }};            

            ConfirmCarbonOffset1Response res = sdk.ecommerceDelivery.confirmCarbonOffset1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPayment1

confirmPayment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPayment1RequestBody;
import org.openapis.openapi.models.operations.ConfirmPayment1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmPayment1RequestBody req = new ConfirmPayment1RequestBody("d95fead6-e8a6-4247-9fb9-7835101a4560", "c60f8db5-7904-4227-960d-27400c38b166", "y", 34567878, "60a766d401d88997746c91a0");            

            ConfirmPayment1Response res = sdk.ecommerceDelivery.confirmPayment1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPaymentOfTransaction1

confirmTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPaymentOfTransaction1RequestBody;
import org.openapis.openapi.models.operations.ConfirmPaymentOfTransaction1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmPaymentOfTransaction1RequestBody req = new ConfirmPaymentOfTransaction1RequestBody("y", "60a766d401d88997746c91a0");            

            ConfirmPaymentOfTransaction1Response res = sdk.ecommerceDelivery.confirmPaymentOfTransaction1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmsPlanting2

confirmPlanting

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmsPlanting2RequestBody;
import org.openapis.openapi.models.operations.ConfirmsPlanting2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmsPlanting2RequestBody req = new ConfirmsPlanting2RequestBody("d95fead6-e8a6-4247-9fb9-7835101a4560", "c60f8db5-7904-4227-960d-27400c38b166", "y", "60a766d401d88997746c91a0");            

            ConfirmsPlanting2Response res = sdk.ecommerceDelivery.confirmsPlanting2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ecommerceDelivery

ecommerceDelivery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EcommerceDeliveryRequest;
import org.openapis.openapi.models.operations.EcommerceDeliveryRequestBody;
import org.openapis.openapi.models.operations.EcommerceDeliveryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EcommerceDeliveryRequest req = new EcommerceDeliveryRequest("application/x-www-form-urlencoded") {{
                requestBody = new EcommerceDeliveryRequestBody("d95fead6-e8a6-4547-9fb9-7835101a3960", "c60f8db5-7204-4427-960d-27400c38b166", 50.870752, 4.66949, 23.372628, 113.159339, 2.7, "road only") {{
                    destinationAirportCode = "BRU";
                    originAirportCode = "KHI";
                }};;
            }};            

            EcommerceDeliveryResponse res = sdk.ecommerceDelivery.ecommerceDelivery(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
