# SDK

## Overview

Online payment fraud detection service. It helps merchants to minimize chargebacks and therefore maximize the revenue. It can be used to detect fraud for various kinds of payment method, such as credit card, paypal, cod and so on. Please visit https://www.fraudlabspro.com to learn more.

### Available Operations

* [postV1OrderFeedback](#postv1orderfeedback) - Feedback the status of an order transaction.
* [postV1OrderScreen](#postv1orderscreen) - Screen order for payment fraud.

## postV1OrderFeedback

Feedback the status of an order transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV1OrderFeedbackActionEnum;
import org.openapis.openapi.models.operations.PostV1OrderFeedbackFormatEnum;
import org.openapis.openapi.models.operations.PostV1OrderFeedbackRequest;
import org.openapis.openapi.models.operations.PostV1OrderFeedbackResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV1OrderFeedbackRequest req = new PostV1OrderFeedbackRequest(PostV1OrderFeedbackActionEnum.REJECT_BLACKLIST, "corrupti", "illum") {{
                format = PostV1OrderFeedbackFormatEnum.JSON;
                notes = "error";
            }};            

            PostV1OrderFeedbackResponse res = sdk.sdk.postV1OrderFeedback(req);

            if (res.postV1OrderFeedback200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV1OrderScreen

Screen order for payment fraud.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV1OrderScreenFormatEnum;
import org.openapis.openapi.models.operations.PostV1OrderScreenRequest;
import org.openapis.openapi.models.operations.PostV1OrderScreenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV1OrderScreenRequest req = new PostV1OrderScreenRequest("deserunt", "suscipit") {{
                amount = 4375.87;
                avsResult = "magnam";
                billAddr = "debitis";
                billCity = "ipsa";
                billCountry = "delectus";
                billState = "tempora";
                billZipCode = "suscipit";
                binNo = "molestiae";
                cardHash = "minus";
                currency = "placeat";
                cvvResult = "voluptatum";
                department = "iusto";
                email = "Glen.Walsh33@yahoo.com";
                emailDomain = "veritatis";
                emailHash = "deserunt";
                firstName = "Aiyana";
                flpChecksum = "ipsam";
                format = PostV1OrderScreenFormatEnum.XML;
                lastName = "Will";
                passwordHash = "quo";
                paymentMode = "odit";
                quantity = 870013L;
                shipAddr = "at";
                shipCity = "maiores";
                shipCountry = "molestiae";
                shipState = "quod";
                shipZipCode = "quod";
                userOrderId = "esse";
                userOrderMemo = "totam";
                userPhone = "porro";
                usernameHash = "dolorum";
            }};            

            PostV1OrderScreenResponse res = sdk.sdk.postV1OrderScreen(req);

            if (res.postV1OrderScreen200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
