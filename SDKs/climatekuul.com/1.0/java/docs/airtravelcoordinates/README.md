# airtravelCoordinates

### Available Operations

* [airtravelCoordinates](#airtravelcoordinates) - airtravelCoordinates
* [confirmCarbonOffset4](#confirmcarbonoffset4) - confirmCarbonOffset
* [confirmPayment4](#confirmpayment4) - confirmPayment
* [confirmPaymentOfTransaction4](#confirmpaymentoftransaction4) - confirmTransaction
* [confirmsPlanting4](#confirmsplanting4) - confirmPlanting

## airtravelCoordinates

airtravelCoordinates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AirtravelCoordinatesRequest;
import org.openapis.openapi.models.operations.AirtravelCoordinatesRequestBody;
import org.openapis.openapi.models.operations.AirtravelCoordinatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AirtravelCoordinatesRequest req = new AirtravelCoordinatesRequest("application/x-www-form-urlencoded") {{
                requestBody = new AirtravelCoordinatesRequestBody("d95fead6-e8a6-4547-9fb9-7835101a3960", "c60f8db5-7204-4427-960d-27400c38b166", 24.9056, 67.1569, 2, 31.5208, 74.4028, "Economy", "round trip");;
            }};            

            AirtravelCoordinatesResponse res = sdk.airtravelCoordinates.airtravelCoordinates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmCarbonOffset4

confirmCarbonOffset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmCarbonOffset4RequestBody;
import org.openapis.openapi.models.operations.ConfirmCarbonOffset4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmCarbonOffset4RequestBody req = new ConfirmCarbonOffset4RequestBody("y", "60a78ed201d88997746c91b5") {{
                contactEmail = "example@example.com";
                contactFirstName = "abc";
                contactLastName = "xyz";
            }};            

            ConfirmCarbonOffset4Response res = sdk.airtravelCoordinates.confirmCarbonOffset4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPayment4

confirmPayment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPayment4RequestBody;
import org.openapis.openapi.models.operations.ConfirmPayment4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmPayment4RequestBody req = new ConfirmPayment4RequestBody("d95fead6-e8a6-4247-9fb9-7835101a4560", "c60f8db5-7904-4227-960d-27400c38b166", "y", 34567878, "60a78ed201d88997746c91b5");            

            ConfirmPayment4Response res = sdk.airtravelCoordinates.confirmPayment4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPaymentOfTransaction4

confirmTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPaymentOfTransaction4RequestBody;
import org.openapis.openapi.models.operations.ConfirmPaymentOfTransaction4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmPaymentOfTransaction4RequestBody req = new ConfirmPaymentOfTransaction4RequestBody("y", "60a78ed201d88997746c91b5");            

            ConfirmPaymentOfTransaction4Response res = sdk.airtravelCoordinates.confirmPaymentOfTransaction4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmsPlanting4

confirmPlanting

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmsPlanting4RequestBody;
import org.openapis.openapi.models.operations.ConfirmsPlanting4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmsPlanting4RequestBody req = new ConfirmsPlanting4RequestBody("d95fead6-e8a6-4247-9fb9-7835101a4560", "c60f8db5-7904-4227-960d-27400c38b166", "y", "60a78ed201d88997746c91b5");            

            ConfirmsPlanting4Response res = sdk.airtravelCoordinates.confirmsPlanting4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
