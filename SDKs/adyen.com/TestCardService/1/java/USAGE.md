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