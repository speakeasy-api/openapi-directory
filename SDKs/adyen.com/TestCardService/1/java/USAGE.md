<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostCreateTestCardRangesSecurity;
import org.openapis.openapi.models.operations.PostCreateTestCardRangesRequest;
import org.openapis.openapi.models.operations.PostCreateTestCardRangesResponse;
import org.openapis.openapi.models.shared.CreateTestCardRangesRequest;
import org.openapis.openapi.models.shared.TestCardRangeExpiryMonthEnum;
import org.openapis.openapi.models.shared.TestCardRangeThreeDDirectoryServerResponseEnum;
import org.openapis.openapi.models.shared.TestCardRange;
import org.openapis.openapi.models.shared.AvsAddress;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCreateTestCardRangesRequest req = new PostCreateTestCardRangesRequest() {{
                security = new PostCreateTestCardRangesSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new CreateTestCardRangesRequest() {{
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
                }};
            }};            

            PostCreateTestCardRangesResponse res = sdk.general.postCreateTestCardRanges(req);

            if (res.createTestCardRangesResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->