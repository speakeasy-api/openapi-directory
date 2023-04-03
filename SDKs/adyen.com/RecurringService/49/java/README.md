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

import org.openapis.openapi.models.operations.PostCreatePermitSecurity;
import org.openapis.openapi.models.operations.PostCreatePermitResponse;
import org.openapis.openapi.models.shared.CreatePermitRequest;
import org.openapis.openapi.models.shared.Permit;
import org.openapis.openapi.models.shared.PermitRestriction;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreatePermitRequest req = new CreatePermitRequest() {{
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
            }}            

            PostCreatePermitResponse res = sdk.general.postCreatePermit(req, new PostCreatePermitSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createPermitResult.isPresent()) {
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

* `postCreatePermit` - Create new permits linked to a recurring contract.
* `postDisable` - Disable stored payment details
* `postListRecurringDetails` - Get stored payment details
* `postNotifyShopper` - Ask issuer to notify the shopper
* `postScheduleAccountUpdater` - Schedule running the Account Updater
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
