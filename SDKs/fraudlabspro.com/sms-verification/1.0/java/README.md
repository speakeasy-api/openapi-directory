# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            GetV1VerificationResultRequest req = new GetV1VerificationResultRequest("corrupti", "provident", "distinctio") {{
                format = GetV1VerificationResultFormatEnum.XML;
            }};            

            GetV1VerificationResultResponse res = sdk.getV1VerificationResult(req);

            if (res.getV1VerificationResult200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [getV1VerificationResult](docs/sdk/README.md#getv1verificationresult) - Verify that an OTP sent by the Send SMS Verification API is valid.
* [postV1VerificationSend](docs/sdk/README.md#postv1verificationsend) - Send an SMS with verification code and a custom message for authentication purpose.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
