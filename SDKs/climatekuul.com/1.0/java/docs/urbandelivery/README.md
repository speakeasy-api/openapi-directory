# urbanDelivery

### Available Operations

* [confirmCarbonOffset](#confirmcarbonoffset) - confirmCarbonOffset
* [confirmPayment](#confirmpayment) - confirmPayment
* [confirmPaymentOfTransaction](#confirmpaymentoftransaction) - confirmTransaction
* [confirmsPlanting](#confirmsplanting) - confirmPlanting
* [urbanDelivery](#urbandelivery) - urbanDelivery

## confirmCarbonOffset

confirmCarbonOffset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmCarbonOffsetRequestBody;
import org.openapis.openapi.models.operations.ConfirmCarbonOffsetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmCarbonOffsetRequestBody req = new ConfirmCarbonOffsetRequestBody("y", "60a7875a01d88997746c91ae") {{
                contactEmail = "example@example.com";
                contactFirstName = "abc";
                contactLastName = "xyz";
            }};            

            ConfirmCarbonOffsetResponse res = sdk.urbanDelivery.confirmCarbonOffset(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPayment

confirmPayment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPaymentRequestBody;
import org.openapis.openapi.models.operations.ConfirmPaymentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmPaymentRequestBody req = new ConfirmPaymentRequestBody("d95fead6-e8a6-4247-9fb9-7835101a4560", "c60f8db5-7904-4227-960d-27400c38b166", "y", 34567878, "60a7875a01d88997746c91ae");            

            ConfirmPaymentResponse res = sdk.urbanDelivery.confirmPayment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPaymentOfTransaction

confirmTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPaymentOfTransactionRequestBody;
import org.openapis.openapi.models.operations.ConfirmPaymentOfTransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmPaymentOfTransactionRequestBody req = new ConfirmPaymentOfTransactionRequestBody("y", "60a7875a01d88997746c91ae");            

            ConfirmPaymentOfTransactionResponse res = sdk.urbanDelivery.confirmPaymentOfTransaction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmsPlanting

confirmPlanting

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmsPlantingRequestBody;
import org.openapis.openapi.models.operations.ConfirmsPlantingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmsPlantingRequestBody req = new ConfirmsPlantingRequestBody("d95fead6-e8a6-4247-9fb9-7835101a4560", "c60f8db5-7904-4227-960d-27400c38b166", "y", "60a7875a01d88997746c91ae");            

            ConfirmsPlantingResponse res = sdk.urbanDelivery.confirmsPlanting(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## urbanDelivery

urbanDelivery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UrbanDeliveryRequestBody;
import org.openapis.openapi.models.operations.UrbanDeliveryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UrbanDeliveryRequestBody req = new UrbanDeliveryRequestBody("d95fead6-e8a6-4547-9fb9-7835101a3960", "c60f8db5-7204-4427-960d-27400c38b166", -89.870752, 179.66949, 3, -89.372628, -179.159339, "PRIVATE CAR");            

            UrbanDeliveryResponse res = sdk.urbanDelivery.urbanDelivery(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
