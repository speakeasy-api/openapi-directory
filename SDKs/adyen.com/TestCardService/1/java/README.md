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
import org.openapis.openapi.models.operations.PostCreateTestCardRangesResponse;
import org.openapis.openapi.models.operations.PostCreateTestCardRangesSecurity;
import org.openapis.openapi.models.shared.AvsAddress;
import org.openapis.openapi.models.shared.CreateTestCardRangesRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TestCardRange;
import org.openapis.openapi.models.shared.TestCardRangeExpiryMonthEnum;
import org.openapis.openapi.models.shared.TestCardRangeThreeDDirectoryServerResponseEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateTestCardRangesRequest req = new CreateTestCardRangesRequest("corrupti", "provident",                 new org.openapis.openapi.models.shared.TestCardRange[]{{
                                add(new TestCardRange("ipsa", TestCardRangeExpiryMonthEnum.SEPTEMBER, 272656, "suscipit", "molestiae") {{
                                    address = new AvsAddress("nulla") {{
                                        streetAddress = "quibusdam";
                                        zip = "unde";
                                    }};
                                    cardHolderName = "corrupti";
                                    cvc = "illum";
                                    expiryMonth = TestCardRangeExpiryMonthEnum.JULY;
                                    expiryYear = 623564;
                                    rangeEnd = "deserunt";
                                    rangeStart = "suscipit";
                                    threeDDirectoryServerResponse = TestCardRangeThreeDDirectoryServerResponseEnum.U;
                                    threeDPassword = "magnam";
                                    threeDUsername = "debitis";
                                }}),
                                add(new TestCardRange("perferendis", TestCardRangeExpiryMonthEnum.JANUARY, 832620, "sapiente", "quo") {{
                                    address = new AvsAddress("voluptatum") {{
                                        streetAddress = "minus";
                                        zip = "placeat";
                                    }};
                                    cardHolderName = "iusto";
                                    cvc = "excepturi";
                                    expiryMonth = TestCardRangeExpiryMonthEnum.JANUARY;
                                    expiryYear = 925597;
                                    rangeEnd = "temporibus";
                                    rangeStart = "ab";
                                    threeDDirectoryServerResponse = TestCardRangeThreeDDirectoryServerResponseEnum.U;
                                    threeDPassword = "veritatis";
                                    threeDUsername = "deserunt";
                                }}),
                                add(new TestCardRange("nam", TestCardRangeExpiryMonthEnum.MARCH, 582020, "fugit", "deleniti") {{
                                    address = new AvsAddress("at") {{
                                        streetAddress = "odit";
                                        zip = "at";
                                    }};
                                    cardHolderName = "maiores";
                                    cvc = "molestiae";
                                    expiryMonth = TestCardRangeExpiryMonthEnum.NOVEMBER;
                                    expiryYear = 800911;
                                    rangeEnd = "esse";
                                    rangeStart = "totam";
                                    threeDDirectoryServerResponse = TestCardRangeThreeDDirectoryServerResponseEnum.Y;
                                    threeDPassword = "dolorum";
                                    threeDUsername = "dicta";
                                }}),
                            }});            

            PostCreateTestCardRangesResponse res = sdk.general.postCreateTestCardRanges(req, new PostCreateTestCardRangesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createTestCardRangesResult != null) {
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


### [general](docs/general/README.md)

* [postCreateTestCardRanges](docs/general/README.md#postcreatetestcardranges) - Creates one or more test card ranges.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
