<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostCreatePermitSecurity;
import org.openapis.openapi.models.operations.PostCreatePermitRequest;
import org.openapis.openapi.models.operations.PostCreatePermitResponse;
import org.openapis.openapi.models.shared.CreatePermitRequest;
import org.openapis.openapi.models.shared.Permit;
import org.openapis.openapi.models.shared.PermitRestriction;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCreatePermitRequest req = new PostCreatePermitRequest() {{
                security = new PostCreatePermitSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new CreatePermitRequest() {{
                    merchantAccount = "corrupti";
                    permits = new org.openapis.openapi.models.shared.Permit[]{{
                        add(new Permit() {{
                            partnerId = "distinctio";
                            profileReference = "quibusdam";
                            restriction = new PermitRestriction() {{
                                maxAmount = new Amount() {{
                                    currency = "unde";
                                    value = 857946;
                                }};
                                singleTransactionLimit = new Amount() {{
                                    currency = "corrupti";
                                    value = 847252;
                                }};
                                singleUse = false;
                            }};
                            resultKey = "vel";
                            validTillDate = "2021-09-16T11:56:06.019Z";
                        }}),
                        add(new Permit() {{
                            partnerId = "suscipit";
                            profileReference = "iure";
                            restriction = new PermitRestriction() {{
                                maxAmount = new Amount() {{
                                    currency = "magnam";
                                    value = 891773;
                                }};
                                singleTransactionLimit = new Amount() {{
                                    currency = "ipsa";
                                    value = 963663;
                                }};
                                singleUse = false;
                            }};
                            resultKey = "tempora";
                            validTillDate = "2022-07-10T15:39:12.517Z";
                        }}),
                        add(new Permit() {{
                            partnerId = "minus";
                            profileReference = "placeat";
                            restriction = new PermitRestriction() {{
                                maxAmount = new Amount() {{
                                    currency = "voluptatum";
                                    value = 479977;
                                }};
                                singleTransactionLimit = new Amount() {{
                                    currency = "excepturi";
                                    value = 392785;
                                }};
                                singleUse = false;
                            }};
                            resultKey = "recusandae";
                            validTillDate = "2022-10-15T05:10:19.629Z";
                        }}),
                    }};
                    recurringDetailReference = "quis";
                    shopperReference = "veritatis";
                }};
            }};            

            PostCreatePermitResponse res = sdk.general.postCreatePermit(req);

            if (res.createPermitResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->