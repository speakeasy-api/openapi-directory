# general

### Available Operations

* [postCreateTestCardRanges](#postcreatetestcardranges) - Creates one or more test card ranges.

## postCreateTestCardRanges

Creates one or more test card ranges.

### Example Usage

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

            org.openapis.openapi.models.shared.CreateTestCardRangesRequest req = new CreateTestCardRangesRequest("hic", "optio",                 new org.openapis.openapi.models.shared.TestCardRange[]{{
                                add(new TestCardRange("ad", TestCardRangeExpiryMonthEnum.MARCH, 149675, "iste", "dolor") {{
                                    address = new AvsAddress("molestiae") {{
                                        streetAddress = "beatae";
                                        zip = "commodi";
                                    }};
                                    cardHolderName = "modi";
                                    cvc = "qui";
                                    expiryMonth = TestCardRangeExpiryMonthEnum.NOVEMBER;
                                    expiryYear = 736918;
                                    rangeEnd = "esse";
                                    rangeStart = "ipsum";
                                    threeDDirectoryServerResponse = TestCardRangeThreeDDirectoryServerResponseEnum.U;
                                    threeDPassword = "aspernatur";
                                    threeDUsername = "perferendis";
                                }}),
                                add(new TestCardRange("ipsa", TestCardRangeExpiryMonthEnum.SEPTEMBER, 666767, "mollitia", "laborum") {{
                                    address = new AvsAddress("hic") {{
                                        streetAddress = "natus";
                                        zip = "laboriosam";
                                    }};
                                    cardHolderName = "saepe";
                                    cvc = "fuga";
                                    expiryMonth = TestCardRangeExpiryMonthEnum.JULY;
                                    expiryYear = 359508;
                                    rangeEnd = "iste";
                                    rangeStart = "iure";
                                    threeDDirectoryServerResponse = TestCardRangeThreeDDirectoryServerResponseEnum.Y;
                                    threeDPassword = "quidem";
                                    threeDUsername = "architecto";
                                }}),
                                add(new TestCardRange("culpa", TestCardRangeExpiryMonthEnum.SEPTEMBER, 958950, "architecto", "mollitia") {{
                                    address = new AvsAddress("corporis") {{
                                        streetAddress = "dolores";
                                        zip = "dolorem";
                                    }};
                                    cardHolderName = "explicabo";
                                    cvc = "nobis";
                                    expiryMonth = TestCardRangeExpiryMonthEnum.FEBRUARY;
                                    expiryYear = 607831;
                                    rangeEnd = "nemo";
                                    rangeStart = "minima";
                                    threeDDirectoryServerResponse = TestCardRangeThreeDDirectoryServerResponseEnum.U;
                                    threeDPassword = "accusantium";
                                    threeDUsername = "iure";
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
