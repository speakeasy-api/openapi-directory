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

import org.openapis.openapi.models.operations.PostCreateTestCardRangesSecurity;
import org.openapis.openapi.models.operations.PostCreateTestCardRangesResponse;
import org.openapis.openapi.models.shared.CreateTestCardRangesRequest;
import org.openapis.openapi.models.shared.TestCardRangeExpiryMonthEnum;
import org.openapis.openapi.models.shared.TestCardRangeThreeDDirectoryServerResponseEnum;
import org.openapis.openapi.models.shared.TestCardRange;
import org.openapis.openapi.models.shared.AvsAddress;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateTestCardRangesRequest req = new CreateTestCardRangesRequest() {{
                accountCode = "corrupti";
                accountTypeCode = "provident";
                testCardRanges = new org.openapis.openapi.models.shared.TestCardRange[]{{
                    add(new TestCardRange() {{
                        address = new AvsAddress() {{
                            streetAddress = "quibusdam";
                            zip = "unde";
                        }};
                        cardHolderName = "nulla";
                        cvc = "corrupti";
                        expiryMonth = "OCTOBER";
                        expiryYear = 423655;
                        rangeEnd = "error";
                        rangeStart = "deserunt";
                        threeDDirectoryServerResponse = "U";
                        threeDPassword = "iure";
                        threeDUsername = "magnam";
                    }}),
                    add(new TestCardRange() {{
                        address = new AvsAddress() {{
                            streetAddress = "debitis";
                            zip = "ipsa";
                        }};
                        cardHolderName = "delectus";
                        cvc = "tempora";
                        expiryMonth = "JANUARY";
                        expiryYear = 477665;
                        rangeEnd = "minus";
                        rangeStart = "placeat";
                        threeDDirectoryServerResponse = "U";
                        threeDPassword = "iusto";
                        threeDUsername = "excepturi";
                    }}),
                    add(new TestCardRange() {{
                        address = new AvsAddress() {{
                            streetAddress = "nisi";
                            zip = "recusandae";
                        }};
                        cardHolderName = "temporibus";
                        cvc = "ab";
                        expiryMonth = "JANUARY";
                        expiryYear = 87129;
                        rangeEnd = "deserunt";
                        rangeStart = "perferendis";
                        threeDDirectoryServerResponse = "U";
                        threeDPassword = "repellendus";
                        threeDUsername = "sapiente";
                    }}),
                }};
            }}            

            PostCreateTestCardRangesResponse res = sdk.general.postCreateTestCardRanges(req, new PostCreateTestCardRangesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createTestCardRangesResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### general

* `postCreateTestCardRanges` - Creates one or more test card ranges.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
