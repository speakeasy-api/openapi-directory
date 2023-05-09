# roadDistance

### Available Operations

* [confirmCarbonOffset5](#confirmcarbonoffset5) - confirmCarbonOffset
* [confirmPayment5](#confirmpayment5) - confirmPayment
* [confirmPaymentOfTransaction5](#confirmpaymentoftransaction5) - confirmTransaction
* [confirmsPlanting5](#confirmsplanting5) - confirmPlanting
* [roadDistance](#roaddistance) - RoadDistance

## confirmCarbonOffset5

confirmCarbonOffset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmCarbonOffset5RequestBody;
import org.openapis.openapi.models.operations.ConfirmCarbonOffset5Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmCarbonOffset5RequestBody req = new ConfirmCarbonOffset5RequestBody("y", "60a7823401d88997746c91a7") {{
                contactEmail = "example@example.com";
                contactFirstName = "abc";
                contactLastName = "xyz";
            }};            

            ConfirmCarbonOffset5Response res = sdk.roadDistance.confirmCarbonOffset5(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPayment5

confirmPayment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPayment5RequestBody;
import org.openapis.openapi.models.operations.ConfirmPayment5Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmPayment5RequestBody req = new ConfirmPayment5RequestBody("d95fead6-e8a6-4247-9fb9-7835101a4560", "c60f8db5-7904-4227-960d-27400c38b166", "y", 34567878, "60a7823401d88997746c91a7");            

            ConfirmPayment5Response res = sdk.roadDistance.confirmPayment5(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPaymentOfTransaction5

confirmTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPaymentOfTransaction5RequestBody;
import org.openapis.openapi.models.operations.ConfirmPaymentOfTransaction5Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmPaymentOfTransaction5RequestBody req = new ConfirmPaymentOfTransaction5RequestBody("y", "60a7823401d88997746c91a7");            

            ConfirmPaymentOfTransaction5Response res = sdk.roadDistance.confirmPaymentOfTransaction5(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmsPlanting5

confirmPlanting

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmsPlanting5RequestBody;
import org.openapis.openapi.models.operations.ConfirmsPlanting5Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmsPlanting5RequestBody req = new ConfirmsPlanting5RequestBody("d95fead6-e8a6-4247-9fb9-7835101a4560", "c60f8db5-7904-4227-960d-27400c38b166", "y", "60a7823401d88997746c91a7");            

            ConfirmsPlanting5Response res = sdk.roadDistance.confirmsPlanting5(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## roadDistance

RoadDistance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RoadDistanceRequestBody;
import org.openapis.openapi.models.operations.RoadDistanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RoadDistanceRequestBody req = new RoadDistanceRequestBody("d95fead6-e8a6-4547-9fb9-7835101a3960", "c60f8db5-7204-4427-960d-27400c38b166", 2450, 18, 16, "personal car") {{
                vehicleMake = "Honda";
                vehicleYear = 2010;
            }};            

            RoadDistanceResponse res = sdk.roadDistance.roadDistance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
