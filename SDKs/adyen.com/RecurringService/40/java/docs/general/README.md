# general

### Available Operations

* [postCreatePermit](#postcreatepermit) - Create new permits linked to a recurring contract.
* [postDisable](#postdisable) - Disable stored payment details
* [postListRecurringDetails](#postlistrecurringdetails) - Get stored payment details
* [postNotifyShopper](#postnotifyshopper) - Ask issuer to notify the shopper
* [postScheduleAccountUpdater](#postscheduleaccountupdater) - Schedule running the Account Updater

## postCreatePermit

Create permits for a recurring contract, including support for defining restrictions.

### Example Usage

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

            org.openapis.openapi.models.shared.CreatePermitRequest req = new CreatePermitRequest("quod",                 new org.openapis.openapi.models.shared.Permit[]{{
                                add(new Permit() {{
                                    partnerId = "totam";
                                    profileReference = "porro";
                                    restriction = new PermitRestriction() {{
                                        maxAmount = new Amount("nam", 639921L) {{
                                            currency = "dolorum";
                                            value = 118274L;
                                        }};
                                        singleTransactionLimit = new Amount("deleniti", 944669L) {{
                                            currency = "occaecati";
                                            value = 143353L;
                                        }};
                                        singleUse = false;
                                    }};
                                    resultKey = "optio";
                                    validTillDate = OffsetDateTime.parse("2022-10-15T16:29:54.554Z");
                                }}),
                                add(new Permit() {{
                                    partnerId = "commodi";
                                    profileReference = "molestiae";
                                    restriction = new PermitRestriction() {{
                                        maxAmount = new Amount("impedit", 736918L) {{
                                            currency = "modi";
                                            value = 186332L;
                                        }};
                                        singleTransactionLimit = new Amount("excepturi", 135218L) {{
                                            currency = "esse";
                                            value = 216550L;
                                        }};
                                        singleUse = false;
                                    }};
                                    resultKey = "perferendis";
                                    validTillDate = OffsetDateTime.parse("2022-05-20T13:30:46.463Z");
                                }}),
                            }}, "sed", "iste");            

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

## postDisable

Disables stored payment details to stop charging a shopper with this particular recurring detail ID.

For more information, refer to [Disable stored details](https://docs.adyen.com/classic-integration/recurring-payments/disable-stored-details/).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDisableResponse;
import org.openapis.openapi.models.operations.PostDisableSecurity;
import org.openapis.openapi.models.shared.DisableRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DisableRequest req = new DisableRequest("dolor", "natus") {{
                contract = "laboriosam";
                recurringDetailReference = "hic";
            }};            

            PostDisableResponse res = sdk.general.postDisable(req, new PostDisableSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.disableResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListRecurringDetails

Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.

For more information, refer to [Retrieve stored details](https://docs.adyen.com/classic-integration/recurring-payments/retrieve-stored-details/).

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostListRecurringDetailsResponse;
import org.openapis.openapi.models.operations.PostListRecurringDetailsSecurity;
import org.openapis.openapi.models.shared.Recurring;
import org.openapis.openapi.models.shared.RecurringContractEnum;
import org.openapis.openapi.models.shared.RecurringDetailsRequest;
import org.openapis.openapi.models.shared.RecurringTokenServiceEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RecurringDetailsRequest req = new RecurringDetailsRequest("saepe", "fuga") {{
                recurring = new Recurring() {{
                    contract = RecurringContractEnum.RECURRING;
                    recurringDetailName = "corporis";
                    recurringExpiry = OffsetDateTime.parse("2022-02-15T23:12:00.119Z");
                    recurringFrequency = "saepe";
                    tokenService = RecurringTokenServiceEnum.MCTOKENSERVICE;
                }};;
            }};            

            PostListRecurringDetailsResponse res = sdk.general.postListRecurringDetails(req, new PostListRecurringDetailsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.recurringDetailsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNotifyShopper

Sends a request to the issuer so they can inform the shopper about the upcoming recurring payment. This endpoint is used only for local acquiring in India. For more information, refer to [Recurring card payments in India](https://docs.adyen.com/payment-methods/cards/cards-recurring-india).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNotifyShopperResponse;
import org.openapis.openapi.models.operations.PostNotifyShopperSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.NotifyShopperRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.NotifyShopperRequest req = new NotifyShopperRequest(                new Amount("architecto", 60225L);, "reiciendis", "est", "mollitia") {{
                billingDate = "laborum";
                billingSequenceNumber = "dolores";
                displayedReference = "dolorem";
                recurringDetailReference = "corporis";
                storedPaymentMethodId = "explicabo";
            }};            

            PostNotifyShopperResponse res = sdk.general.postNotifyShopper(req, new PostNotifyShopperSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.notifyShopperResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postScheduleAccountUpdater

When making the API call, you can submit either the credit card information, or the recurring detail reference and the shopper reference:
* If the card information is provided, all the sub-fields for `card` are mandatory.
* If the recurring detail reference is provided, the fields for `shopperReference` and `selectedRecurringDetailReference` are mandatory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostScheduleAccountUpdaterResponse;
import org.openapis.openapi.models.operations.PostScheduleAccountUpdaterSecurity;
import org.openapis.openapi.models.shared.Card;
import org.openapis.openapi.models.shared.ScheduleAccountUpdaterRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ScheduleAccountUpdaterRequest req = new ScheduleAccountUpdaterRequest("nobis", "enim") {{
                additionalData = new java.util.HashMap<String, String>() {{
                    put("nemo", "minima");
                    put("excepturi", "accusantium");
                    put("iure", "culpa");
                }};
                card = new Card() {{
                    cvc = "doloribus";
                    expiryMonth = "sapiente";
                    expiryYear = "architecto";
                    holderName = "mollitia";
                    issueNumber = "dolorem";
                    number = "culpa";
                    startMonth = "consequuntur";
                    startYear = "repellat";
                }};;
                selectedRecurringDetailReference = "mollitia";
                shopperReference = "occaecati";
            }};            

            PostScheduleAccountUpdaterResponse res = sdk.general.postScheduleAccountUpdater(req, new PostScheduleAccountUpdaterSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.scheduleAccountUpdaterResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
