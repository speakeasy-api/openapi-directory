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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [general](docs/general/README.md)

* [postCreatePermit](docs/general/README.md#postcreatepermit) - Create new permits linked to a recurring contract.
* [postDisable](docs/general/README.md#postdisable) - Disable stored payment details
* [postListRecurringDetails](docs/general/README.md#postlistrecurringdetails) - Get stored payment details
* [postNotifyShopper](docs/general/README.md#postnotifyshopper) - Ask issuer to notify the shopper
* [postScheduleAccountUpdater](docs/general/README.md#postscheduleaccountupdater) - Schedule running the Account Updater
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
