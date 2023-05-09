# airtravelMultileg

### Available Operations

* [airtravelMultileg](#airtravelmultileg) - airtravelMultileg
* [confirmCarbonOffset3](#confirmcarbonoffset3) - confirmCarbonOffset
* [confirmPayment3](#confirmpayment3) - confirmPayment
* [confirmPaymentOfTransaction3](#confirmpaymentoftransaction3) - confirmTransaction
* [confirmsPlanting3](#confirmsplanting3) - confirmPlanting

## airtravelMultileg

airtravelMultileg

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AirtravelMultilegResponse;
import org.openapis.openapi.models.shared.AirtravelMultilegRequest;
import org.openapis.openapi.models.shared.Leg1;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AirtravelMultilegRequest req = new AirtravelMultilegRequest("corrupti", "provident", "distinctio", "quibusdam", "unde",                 new Leg1("nulla", "corrupti", "illum");,                 new Leg1("vel", "error", "deserunt");,                 new Leg1("suscipit", "iure", "magnam");, "debitis", "ipsa", "delectus");            

            AirtravelMultilegResponse res = sdk.airtravelMultileg.airtravelMultileg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmCarbonOffset3

confirmCarbonOffset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmCarbonOffset3RequestBody;
import org.openapis.openapi.models.operations.ConfirmCarbonOffset3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmCarbonOffset3RequestBody req = new ConfirmCarbonOffset3RequestBody("y", "60a75c0e94c8cb95a6d0e02e") {{
                contactEmail = "example@example.com";
                contactFirstName = "abc";
                contactLastName = "xyz";
            }};            

            ConfirmCarbonOffset3Response res = sdk.airtravelMultileg.confirmCarbonOffset3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPayment3

confirmPayment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPayment3RequestBody;
import org.openapis.openapi.models.operations.ConfirmPayment3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmPayment3RequestBody req = new ConfirmPayment3RequestBody("d95fead6-e8a6-4247-9fb9-7835101a4560", "c60f8db5-7904-4227-960d-27400c38b166", "y", 34567878, "60a75c0e94c8cb95a6d0e02e");            

            ConfirmPayment3Response res = sdk.airtravelMultileg.confirmPayment3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPaymentOfTransaction3

confirmTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPaymentOfTransaction3RequestBody;
import org.openapis.openapi.models.operations.ConfirmPaymentOfTransaction3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmPaymentOfTransaction3RequestBody req = new ConfirmPaymentOfTransaction3RequestBody("y", "60a75c0e94c8cb95a6d0e02e");            

            ConfirmPaymentOfTransaction3Response res = sdk.airtravelMultileg.confirmPaymentOfTransaction3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmsPlanting3

confirmPlanting

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmsPlanting3RequestBody;
import org.openapis.openapi.models.operations.ConfirmsPlanting3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmsPlanting3RequestBody req = new ConfirmsPlanting3RequestBody("d95fead6-e8a6-4247-9fb9-7835101a4560", "c60f8db5-7904-4227-960d-27400c38b166", "y", "60a75c0e94c8cb95a6d0e02e");            

            ConfirmsPlanting3Response res = sdk.airtravelMultileg.confirmsPlanting3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
