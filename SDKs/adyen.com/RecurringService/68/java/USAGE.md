<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCreatePermitResponse;
import org.openapis.openapi.models.operations.PostCreatePermitSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.CreatePermitRequest;
import org.openapis.openapi.models.shared.Permit;
import org.openapis.openapi.models.shared.PermitRestriction;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreatePermitRequest req = new CreatePermitRequest("corrupti",                 new org.openapis.openapi.models.shared.Permit[]{{
                                add(new Permit() {{
                                    partnerId = "distinctio";
                                    profileReference = "quibusdam";
                                    restriction = new PermitRestriction() {{
                                        maxAmount = new Amount("corrupti", 847252L) {{
                                            currency = "unde";
                                            value = 857946L;
                                        }};
                                        singleTransactionLimit = new Amount("deserunt", 384382L) {{
                                            currency = "vel";
                                            value = 623564L;
                                        }};
                                        singleUse = false;
                                    }};
                                    resultKey = "iure";
                                    validTillDate = OffsetDateTime.parse("2022-02-09T12:04:06.508Z");
                                }}),
                                add(new Permit() {{
                                    partnerId = "ipsa";
                                    profileReference = "delectus";
                                    restriction = new PermitRestriction() {{
                                        maxAmount = new Amount("molestiae", 791725L) {{
                                            currency = "tempora";
                                            value = 383441L;
                                        }};
                                        singleTransactionLimit = new Amount("iusto", 568045L) {{
                                            currency = "placeat";
                                            value = 528895L;
                                        }};
                                        singleUse = false;
                                    }};
                                    resultKey = "nisi";
                                    validTillDate = OffsetDateTime.parse("2020-06-29T11:50:59.674Z");
                                }}),
                                add(new Permit() {{
                                    partnerId = "ab";
                                    profileReference = "quis";
                                    restriction = new PermitRestriction() {{
                                        maxAmount = new Amount("perferendis", 368241L) {{
                                            currency = "veritatis";
                                            value = 648172L;
                                        }};
                                        singleTransactionLimit = new Amount("quo", 140350L) {{
                                            currency = "repellendus";
                                            value = 957156L;
                                        }};
                                        singleUse = false;
                                    }};
                                    resultKey = "at";
                                    validTillDate = OffsetDateTime.parse("2020-01-25T09:54:35.794Z");
                                }}),
                            }}, "molestiae", "quod");            

            PostCreatePermitResponse res = sdk.general.postCreatePermit(req, new PostCreatePermitSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createPermitResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->