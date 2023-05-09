# SDK

## Overview

Send an SMS with verification code and a custom message for authentication purpose. It helps merchants to minimize chargebacks and fraud for various kinds of payment method, such as credit card, paypal, cod and so on. Please visit https://www.fraudlabspro.com to learn more.

### Available Operations

* [getV1VerificationResult](#getv1verificationresult) - Verify that an OTP sent by the Send SMS Verification API is valid.
* [postV1VerificationSend](#postv1verificationsend) - Send an SMS with verification code and a custom message for authentication purpose.

## getV1VerificationResult

Verify that an OTP sent by the Send SMS Verification API is valid.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1VerificationResultFormatEnum;
import org.openapis.openapi.models.operations.GetV1VerificationResultRequest;
import org.openapis.openapi.models.operations.GetV1VerificationResultResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1VerificationResultRequest req = new GetV1VerificationResultRequest("unde", "nulla", "corrupti") {{
                format = GetV1VerificationResultFormatEnum.XML;
            }};            

            GetV1VerificationResultResponse res = sdk.sdk.getV1VerificationResult(req);

            if (res.getV1VerificationResult200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV1VerificationSend

Send an SMS with verification code and a custom message for authentication purpose.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV1VerificationSendFormatEnum;
import org.openapis.openapi.models.operations.PostV1VerificationSendRequest;
import org.openapis.openapi.models.operations.PostV1VerificationSendResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV1VerificationSendRequest req = new PostV1VerificationSendRequest("vel", "error") {{
                countryCode = "NC";
                format = PostV1VerificationSendFormatEnum.JSON;
                mesg = "iure";
            }};            

            PostV1VerificationSendResponse res = sdk.sdk.postV1VerificationSend(req);

            if (res.postV1VerificationSend200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
