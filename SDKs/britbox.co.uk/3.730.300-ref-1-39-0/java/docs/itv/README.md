# itv

### Available Operations

* [activateSaveOffer](#activatesaveoffer) - Activates the discount for a user. Only Stripe platform is currently supported.
* [changeCardDetails](#changecarddetails) - Change payment card details.
* [changeEmail](#changeemail) - Change email address related to account/profile.

The expected token scope is Settings.

* [changeMarketing](#changemarketing) - Change marketing preferences related to account/profile.

The expected token scope is Settings.

* [checkPreviousEntitlements](#checkpreviousentitlements) - Check whether the user has been previously entitled.
* [checkVoucher](#checkvoucher) - Validates the coupon/voucher for specified payment platform.
* [confirmPurchase](#confirmpurchase) - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* [confirmPurchaseStrong](#confirmpurchasestrong) - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* [confirmPurchaseWithOffer](#confirmpurchasewithoffer) - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* [deleteAccount](#deleteaccount) - Delete account in compliance with GDPR.

The expected token scope is Settings.

* [deleteItvPurchasePlatform](#deleteitvpurchaseplatform) - Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.

* [executeTransaction](#executetransaction) - Sends request to execute specified transaction.
* [getAccountTokenWithPin](#getaccounttokenwithpin) - Provides authorization with parental control pin.

Returns an array containing account token with Playback scope.

Requires access token with Catalog scope.

Pin must be a 4-digit string

* [getBillingHistory](#getbillinghistory) - Returns the list of billing records for specified payment platform.
* [getCardDetails](#getcarddetails) - Get payment card details.
* [getCurrentEntitlement](#getcurrententitlement) - Returns current entitlement.
* [getCurrentSubscription](#getcurrentsubscription) - Returns the details of current subscription for specified payment platform.
* [getEntitlementsHistory](#getentitlementshistory) - Returns the state of subscription for any payment platform.
* [getFeatureFlag](#getfeatureflag) - Gets info whether or not a feature is enabled or disabled using a feature flag. Feature flags are set as a custom field within PM. It also supports custom feature flag data if needed. Such data can be return as well.
* [getFullPriceRenewal](#getfullpricerenewal) - Returns full price renewal state and reason for specific user.
* [getItvProfileToken](#getitvprofiletoken) - Returns the ITV profile token.
* [getPublicPreview](#getpublicpreview) - Returns public preview for Samsung based on the page '/samsung-preview' configured in PresentationManager.
There is a hard limit of max 40 items to be returned. It splits evenly items count into the page rows, remaining items are added into the first row.

* [getRecommendedList](#getrecommendedlist) - Get the list of recommended items under the active profile.
* [getSaveOffer](#getsaveoffer) - Checks the provided coupon id for a user. Only Stripe platform is currently supported.
* [getSubscriptionState](#getsubscriptionstate) - Returns the state of subscription for any payment platform.
* [getSubscriptionStatus](#getsubscriptionstatus) - Returns status of latest payment intent.
* [getUpcomingInvoice](#getupcominginvoice) - Returns an upcoming invoice
* [getVoucherById](#getvoucherbyid) - Checks the provided coupon id for a user. Only Stripe platform is currently supported.
* [getItvItemsummaryExternalId](#getitvitemsummaryexternalid) - Redirects to corresponding Axis Item details page.
* [getItvPlansPlatform](#getitvplansplatform) - Returns the plans available for specified payment platform.
* [getItvProfile](#getitvprofile) - Returns the ITV profile object.
* [getItvRokuPlans](#getitvrokuplans) - Gets available Roku plans.
* [googlePaySubscription](#googlepaysubscription) - Get the list of recommended items under the active profile.
* [resubscribe](#resubscribe) - Resubscription for a user.
* [updatePaymentIntentStrong](#updatepaymentintentstrong) - Change payment method details.
* [updatePaymentMethodStrong](#updatepaymentmethodstrong) - Change payment method details.
* [updateProfile](#updateprofile) - Update ITV profile.

The expected token scope is Settings.

* [upgradePlan](#upgradeplan) - Upgrades the plan for the current user.

## activateSaveOffer

Activates the discount for a user. Only Stripe platform is currently supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateSaveOfferRequest;
import org.openapis.openapi.models.operations.ActivateSaveOfferResponse;
import org.openapis.openapi.models.operations.ActivateSaveOfferSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivateSaveOfferRequest req = new ActivateSaveOfferRequest("ipsam") {{
                lang = "ea";
            }};            

            ActivateSaveOfferResponse res = sdk.itv.activateSaveOffer(req, new ActivateSaveOfferSecurity("aspernatur") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeCardDetails

Change payment card details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeCardDetailsRequest;
import org.openapis.openapi.models.operations.ChangeCardDetailsResponse;
import org.openapis.openapi.models.operations.ChangeCardDetailsSecurity;
import org.openapis.openapi.models.shared.ItvChangeCardDetailsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeCardDetailsRequest req = new ChangeCardDetailsRequest(                new ItvChangeCardDetailsRequest("vel", "possimus");, "magnam") {{
                lang = "ratione";
            }};            

            ChangeCardDetailsResponse res = sdk.itv.changeCardDetails(req, new ChangeCardDetailsSecurity("ex") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeEmail

Change email address related to account/profile.

The expected token scope is Settings.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeEmailRequest;
import org.openapis.openapi.models.operations.ChangeEmailResponse;
import org.openapis.openapi.models.operations.ChangeEmailSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ItvChangeEmailRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeEmailRequest req = new ChangeEmailRequest(                new ItvChangeEmailRequest("laudantium", "dicta");) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                }};
                lang = "quasi";
            }};            

            ChangeEmailResponse res = sdk.itv.changeEmail(req, new ChangeEmailSecurity("ex") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeMarketing

Change marketing preferences related to account/profile.

The expected token scope is Settings.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeMarketingRequest;
import org.openapis.openapi.models.operations.ChangeMarketingResponse;
import org.openapis.openapi.models.operations.ChangeMarketingSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ItvChangeMarketingRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeMarketingRequest req = new ChangeMarketingRequest(                new ItvChangeMarketingRequest(false, "nulla");) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.LDP),
                    add(FeatureFlagsEnum.CD),
                }};
                lang = "quisquam";
            }};            

            ChangeMarketingResponse res = sdk.itv.changeMarketing(req, new ChangeMarketingSecurity("saepe") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checkPreviousEntitlements

Check whether the user has been previously entitled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckPreviousEntitlementsRequest;
import org.openapis.openapi.models.operations.CheckPreviousEntitlementsResponse;
import org.openapis.openapi.models.operations.CheckPreviousEntitlementsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CheckPreviousEntitlementsRequest req = new CheckPreviousEntitlementsRequest() {{
                lang = "ea";
            }};            

            CheckPreviousEntitlementsResponse res = sdk.itv.checkPreviousEntitlements(req, new CheckPreviousEntitlementsSecurity("impedit") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvHadEntitlement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checkVoucher

Validates the coupon/voucher for specified payment platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckVoucherRequest;
import org.openapis.openapi.models.operations.CheckVoucherResponse;
import org.openapis.openapi.models.operations.CheckVoucherSecurity;
import org.openapis.openapi.models.shared.ItvVoucherRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CheckVoucherRequest req = new CheckVoucherRequest(                new ItvVoucherRequest("corporis");, "veniam") {{
                lang = "aliquid";
            }};            

            CheckVoucherResponse res = sdk.itv.checkVoucher(req, new CheckVoucherSecurity("inventore") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvVoucher != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPurchase

Confirms purchase and returns the details of purchased subscription for specified payment platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPurchaseRequest;
import org.openapis.openapi.models.operations.ConfirmPurchaseResponse;
import org.openapis.openapi.models.operations.ConfirmPurchaseSecurity;
import org.openapis.openapi.models.shared.ItvPurchaseRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmPurchaseRequest req = new ConfirmPurchaseRequest(                new ItvPurchaseRequest("magnam", "ea", "quo") {{
                                voucher = "consectetur";
                            }};, "recusandae") {{
                lang = "aspernatur";
            }};            

            ConfirmPurchaseResponse res = sdk.itv.confirmPurchase(req, new ConfirmPurchaseSecurity("minima") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvPurchase != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPurchaseStrong

Confirms purchase and returns the details of purchased subscription for specified payment platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPurchaseStrongRequest;
import org.openapis.openapi.models.operations.ConfirmPurchaseStrongResponse;
import org.openapis.openapi.models.operations.ConfirmPurchaseStrongSecurity;
import org.openapis.openapi.models.shared.ItvPurchaseStrongRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmPurchaseStrongRequest req = new ConfirmPurchaseStrongRequest(                new ItvPurchaseStrongRequest("eaque", "a") {{
                                paymentMethodFromToken = "libero";
                                paymentMethodId = "aut";
                                voucher = "aut";
                            }};, "deleniti") {{
                lang = "impedit";
            }};            

            ConfirmPurchaseStrongResponse res = sdk.itv.confirmPurchaseStrong(req, new ConfirmPurchaseStrongSecurity("aliquam") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvPurchaseStrongResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPurchaseWithOffer

Confirms purchase and returns the details of purchased subscription for specified payment platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPurchaseWithOfferRequest;
import org.openapis.openapi.models.operations.ConfirmPurchaseWithOfferResponse;
import org.openapis.openapi.models.operations.ConfirmPurchaseWithOfferSecurity;
import org.openapis.openapi.models.shared.ItvPurchaseWithOfferRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfirmPurchaseWithOfferRequest req = new ConfirmPurchaseWithOfferRequest(                new ItvPurchaseWithOfferRequest("fugit", "accusamus", "inventore") {{
                                paymentMethodFromToken = "non";
                                paymentMethodId = "et";
                            }};, "dolorum") {{
                lang = "laborum";
            }};            

            ConfirmPurchaseWithOfferResponse res = sdk.itv.confirmPurchaseWithOffer(req, new ConfirmPurchaseWithOfferSecurity("placeat") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvPurchaseWithOfferResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccount

Delete account in compliance with GDPR.

The expected token scope is Settings.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccountRequest;
import org.openapis.openapi.models.operations.DeleteAccountResponse;
import org.openapis.openapi.models.operations.DeleteAccountSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ItvDeleteAccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAccountRequest req = new DeleteAccountRequest(                new ItvDeleteAccountRequest("velit");) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.LRL),
                }};
                lang = "quas";
            }};            

            DeleteAccountResponse res = sdk.itv.deleteAccount(req, new DeleteAccountSecurity("assumenda") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteItvPurchasePlatform

Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteItvPurchasePlatformRequest;
import org.openapis.openapi.models.operations.DeleteItvPurchasePlatformResponse;
import org.openapis.openapi.models.operations.DeleteItvPurchasePlatformSecurity;
import org.openapis.openapi.models.shared.ItvCancelSubscriptionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteItvPurchasePlatformRequest req = new DeleteItvPurchasePlatformRequest(                new ItvCancelSubscriptionRequest("nulla");, "voluptas") {{
                lang = "libero";
            }};            

            DeleteItvPurchasePlatformResponse res = sdk.itv.deleteItvPurchasePlatform(req, new DeleteItvPurchasePlatformSecurity("quasi") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## executeTransaction

Sends request to execute specified transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExecuteTransactionRequest;
import org.openapis.openapi.models.operations.ExecuteTransactionResponse;
import org.openapis.openapi.models.shared.ItvRokuTransactionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExecuteTransactionRequest req = new ExecuteTransactionRequest(                new ItvRokuTransactionRequest("tempora");, "numquam") {{
                lang = "explicabo";
            }};            

            ExecuteTransactionResponse res = sdk.itv.executeTransaction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountTokenWithPin

Provides authorization with parental control pin.

Returns an array containing account token with Playback scope.

Requires access token with Catalog scope.

Pin must be a 4-digit string


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountTokenWithPinRequest;
import org.openapis.openapi.models.operations.GetAccountTokenWithPinResponse;
import org.openapis.openapi.models.operations.GetAccountTokenWithPinSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ItvPinAuthRequest;
import org.openapis.openapi.models.shared.ItvPinAuthRequestCookieTypeEnum;
import org.openapis.openapi.models.shared.ItvPinAuthRequestScopesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountTokenWithPinRequest req = new GetAccountTokenWithPinRequest(                new ItvPinAuthRequest("provident") {{
                                cookieType = ItvPinAuthRequestCookieTypeEnum.SESSION;
                                scopes = new org.openapis.openapi.models.shared.ItvPinAuthRequestScopesEnum[]{{
                                    add(ItvPinAuthRequestScopesEnum.COMMERCE),
                                    add(ItvPinAuthRequestScopesEnum.COMMERCE),
                                }};
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.HB),
                }};
                lang = "rem";
            }};            

            GetAccountTokenWithPinResponse res = sdk.itv.getAccountTokenWithPin(req, new GetAccountTokenWithPinSecurity("fuga") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accessTokens != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBillingHistory

Returns the list of billing records for specified payment platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBillingHistoryRequest;
import org.openapis.openapi.models.operations.GetBillingHistoryResponse;
import org.openapis.openapi.models.operations.GetBillingHistorySecurity;
import org.openapis.openapi.models.shared.ItvBillingHistoryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBillingHistoryRequest req = new GetBillingHistoryRequest(                new ItvBillingHistoryRequest("reprehenderit");, "quidem") {{
                lang = "fugiat";
            }};            

            GetBillingHistoryResponse res = sdk.itv.getBillingHistory(req, new GetBillingHistorySecurity("ut") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvBillingHistory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCardDetails

Get payment card details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCardDetailsRequest;
import org.openapis.openapi.models.operations.GetCardDetailsResponse;
import org.openapis.openapi.models.operations.GetCardDetailsSecurity;
import org.openapis.openapi.models.shared.ItvGetCardDetailsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCardDetailsRequest req = new GetCardDetailsRequest(                new ItvGetCardDetailsRequest("eum");, "suscipit") {{
                lang = "assumenda";
            }};            

            GetCardDetailsResponse res = sdk.itv.getCardDetails(req, new GetCardDetailsSecurity("eos") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvCardDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCurrentEntitlement

Returns current entitlement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCurrentEntitlementRequest;
import org.openapis.openapi.models.operations.GetCurrentEntitlementResponse;
import org.openapis.openapi.models.operations.GetCurrentEntitlementSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCurrentEntitlementRequest req = new GetCurrentEntitlementRequest() {{
                lang = "praesentium";
            }};            

            GetCurrentEntitlementResponse res = sdk.itv.getCurrentEntitlement(req, new GetCurrentEntitlementSecurity("quisquam") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvEntitlementCurrent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCurrentSubscription

Returns the details of current subscription for specified payment platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCurrentSubscriptionRequest;
import org.openapis.openapi.models.operations.GetCurrentSubscriptionResponse;
import org.openapis.openapi.models.operations.GetCurrentSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCurrentSubscriptionRequest req = new GetCurrentSubscriptionRequest("veritatis") {{
                lang = "ipsa";
            }};            

            GetCurrentSubscriptionResponse res = sdk.itv.getCurrentSubscription(req, new GetCurrentSubscriptionSecurity("id") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvCurrentSubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEntitlementsHistory

Returns the state of subscription for any payment platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEntitlementsHistoryRequest;
import org.openapis.openapi.models.operations.GetEntitlementsHistoryResponse;
import org.openapis.openapi.models.operations.GetEntitlementsHistorySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEntitlementsHistoryRequest req = new GetEntitlementsHistoryRequest() {{
                lang = "quidem";
            }};            

            GetEntitlementsHistoryResponse res = sdk.itv.getEntitlementsHistory(req, new GetEntitlementsHistorySecurity("neque") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvEntitlementsHistory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFeatureFlag

Gets info whether or not a feature is enabled or disabled using a feature flag. Feature flags are set as a custom field within PM. It also supports custom feature flag data if needed. Such data can be return as well.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeatureFlagRequest;
import org.openapis.openapi.models.operations.GetFeatureFlagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeatureFlagRequest req = new GetFeatureFlagRequest("quo") {{
                lang = "illum";
            }};            

            GetFeatureFlagResponse res = sdk.itv.getFeatureFlag(req);

            if (res.itvFeatureFlag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFullPriceRenewal

Returns full price renewal state and reason for specific user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFullPriceRenewalRequest;
import org.openapis.openapi.models.operations.GetFullPriceRenewalResponse;
import org.openapis.openapi.models.operations.GetFullPriceRenewalSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFullPriceRenewalRequest req = new GetFullPriceRenewalRequest() {{
                lang = "quo";
            }};            

            GetFullPriceRenewalResponse res = sdk.itv.getFullPriceRenewal(req, new GetFullPriceRenewalSecurity("fuga") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvSubscriptionFullPriceRenewal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItvProfileToken

Returns the ITV profile token.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItvProfileTokenRequest;
import org.openapis.openapi.models.operations.GetItvProfileTokenResponse;
import org.openapis.openapi.models.operations.GetItvProfileTokenSecurity;
import org.openapis.openapi.models.shared.ItvProfileTokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItvProfileTokenRequest req = new GetItvProfileTokenRequest(                new ItvProfileTokenRequest("eius");) {{
                lang = "eos";
            }};            

            GetItvProfileTokenResponse res = sdk.itv.getItvProfileToken(req, new GetItvProfileTokenSecurity("voluptas") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvProfileToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicPreview

Returns public preview for Samsung based on the page '/samsung-preview' configured in PresentationManager.
There is a hard limit of max 40 items to be returned. It splits evenly items count into the page rows, remaining items are added into the first row.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicPreviewResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicPreviewResponse res = sdk.itv.getPublicPreview();

            if (res.samsungPreview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecommendedList

Get the list of recommended items under the active profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecommendedListRequest;
import org.openapis.openapi.models.operations.GetRecommendedListResponse;
import org.openapis.openapi.models.operations.GetRecommendedListSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRecommendedListRequest req = new GetRecommendedListRequest() {{
                device = "ab";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.LDP),
                    add(FeatureFlagsEnum.CD),
                }};
                itemTypes = new String[]{{
                    add("aspernatur"),
                    add("sequi"),
                }};
                lang = "quo";
                page = 459856;
                pageSize = 925164;
                segments = new String[]{{
                    add("distinctio"),
                }};
                sub = "quod";
            }};            

            GetRecommendedListResponse res = sdk.itv.getRecommendedList(req, new GetRecommendedListSecurity("dignissimos") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSaveOffer

Checks the provided coupon id for a user. Only Stripe platform is currently supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSaveOfferRequest;
import org.openapis.openapi.models.operations.GetSaveOfferResponse;
import org.openapis.openapi.models.operations.GetSaveOfferSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSaveOfferRequest req = new GetSaveOfferRequest() {{
                lang = "inventore";
            }};            

            GetSaveOfferResponse res = sdk.itv.getSaveOffer(req, new GetSaveOfferSecurity("nihil") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvGetDiscountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscriptionState

Returns the state of subscription for any payment platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionStateRequest;
import org.openapis.openapi.models.operations.GetSubscriptionStateResponse;
import org.openapis.openapi.models.operations.GetSubscriptionStateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubscriptionStateRequest req = new GetSubscriptionStateRequest() {{
                lang = "totam";
            }};            

            GetSubscriptionStateResponse res = sdk.itv.getSubscriptionState(req, new GetSubscriptionStateSecurity("accusamus") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvSubscriptionState != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscriptionStatus

Returns status of latest payment intent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionStatusRequest;
import org.openapis.openapi.models.operations.GetSubscriptionStatusResponse;
import org.openapis.openapi.models.operations.GetSubscriptionStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubscriptionStatusRequest req = new GetSubscriptionStatusRequest("aliquam") {{
                lang = "odio";
            }};            

            GetSubscriptionStatusResponse res = sdk.itv.getSubscriptionStatus(req, new GetSubscriptionStatusSecurity("occaecati") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvSubscriptionStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpcomingInvoice

Returns an upcoming invoice

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUpcomingInvoiceRequest;
import org.openapis.openapi.models.operations.GetUpcomingInvoiceResponse;
import org.openapis.openapi.models.operations.GetUpcomingInvoiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUpcomingInvoiceRequest req = new GetUpcomingInvoiceRequest() {{
                lang = "commodi";
            }};            

            GetUpcomingInvoiceResponse res = sdk.itv.getUpcomingInvoice(req, new GetUpcomingInvoiceSecurity("sapiente") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvGetDiscountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVoucherById

Checks the provided coupon id for a user. Only Stripe platform is currently supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVoucherByIdRequest;
import org.openapis.openapi.models.operations.GetVoucherByIdResponse;
import org.openapis.openapi.models.operations.GetVoucherByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVoucherByIdRequest req = new GetVoucherByIdRequest("dolores", "deserunt") {{
                lang = "molestiae";
            }};            

            GetVoucherByIdResponse res = sdk.itv.getVoucherById(req, new GetVoucherByIdSecurity("accusantium") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvVoucher != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItvItemsummaryExternalId

Redirects to corresponding Axis Item details page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItvItemsummaryExternalIdRequest;
import org.openapis.openapi.models.operations.GetItvItemsummaryExternalIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItvItemsummaryExternalIdRequest req = new GetItvItemsummaryExternalIdRequest("porro");            

            GetItvItemsummaryExternalIdResponse res = sdk.itv.getItvItemsummaryExternalId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItvPlansPlatform

Returns the plans available for specified payment platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItvPlansPlatformRequest;
import org.openapis.openapi.models.operations.GetItvPlansPlatformResponse;
import org.openapis.openapi.models.operations.GetItvPlansPlatformSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItvPlansPlatformRequest req = new GetItvPlansPlatformRequest("eum") {{
                lang = "quas";
            }};            

            GetItvPlansPlatformResponse res = sdk.itv.getItvPlansPlatform(req, new GetItvPlansPlatformSecurity("praesentium") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvPlans != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItvProfile

Returns the ITV profile object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItvProfileRequest;
import org.openapis.openapi.models.operations.GetItvProfileResponse;
import org.openapis.openapi.models.operations.GetItvProfileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItvProfileRequest req = new GetItvProfileRequest() {{
                lang = "consequuntur";
            }};            

            GetItvProfileResponse res = sdk.itv.getItvProfile(req, new GetItvProfileSecurity("deleniti") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getItvProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItvRokuPlans

Gets available Roku plans.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItvRokuPlansRequest;
import org.openapis.openapi.models.operations.GetItvRokuPlansResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItvRokuPlansRequest req = new GetItvRokuPlansRequest() {{
                lang = "fugit";
            }};            

            GetItvRokuPlansResponse res = sdk.itv.getItvRokuPlans(req);

            if (res.rokuPlans != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## googlePaySubscription

Get the list of recommended items under the active profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GooglePaySubscriptionRequest;
import org.openapis.openapi.models.operations.GooglePaySubscriptionResponse;
import org.openapis.openapi.models.operations.GooglePaySubscriptionSecurity;
import org.openapis.openapi.models.shared.ItvGooglePaySubscriptionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GooglePaySubscriptionRequest req = new GooglePaySubscriptionRequest(                new ItvGooglePaySubscriptionRequest("fuga", "mollitia");) {{
                lang = "incidunt";
            }};            

            GooglePaySubscriptionResponse res = sdk.itv.googlePaySubscription(req, new GooglePaySubscriptionSecurity("atque") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resubscribe

Resubscription for a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResubscribeRequest;
import org.openapis.openapi.models.operations.ResubscribeResponse;
import org.openapis.openapi.models.operations.ResubscribeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResubscribeRequest req = new ResubscribeRequest("explicabo", "minima") {{
                lang = "nisi";
            }};            

            ResubscribeResponse res = sdk.itv.resubscribe(req, new ResubscribeSecurity("fugit") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.resubscribe200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePaymentIntentStrong

Change payment method details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePaymentIntentStrongRequest;
import org.openapis.openapi.models.operations.UpdatePaymentIntentStrongResponse;
import org.openapis.openapi.models.operations.UpdatePaymentIntentStrongSecurity;
import org.openapis.openapi.models.shared.ItvUpdateIntentStrongRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePaymentIntentStrongRequest req = new UpdatePaymentIntentStrongRequest(                new ItvUpdateIntentStrongRequest("sapiente") {{
                                paymentMethodFromToken = "consequuntur";
                                paymentMethodId = "ratione";
                            }};, "explicabo") {{
                lang = "saepe";
            }};            

            UpdatePaymentIntentStrongResponse res = sdk.itv.updatePaymentIntentStrong(req, new UpdatePaymentIntentStrongSecurity("occaecati") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itvUpdateIntentStrongResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePaymentMethodStrong

Change payment method details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePaymentMethodStrongRequest;
import org.openapis.openapi.models.operations.UpdatePaymentMethodStrongResponse;
import org.openapis.openapi.models.operations.UpdatePaymentMethodStrongSecurity;
import org.openapis.openapi.models.shared.ItvUpdatePaymentStrongRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePaymentMethodStrongRequest req = new UpdatePaymentMethodStrongRequest(                new ItvUpdatePaymentStrongRequest("atque") {{
                                paymentMethodFromToken = "et";
                                paymentMethodId = "esse";
                            }};, "eveniet") {{
                lang = "accusamus";
            }};            

            UpdatePaymentMethodStrongResponse res = sdk.itv.updatePaymentMethodStrong(req, new UpdatePaymentMethodStrongSecurity("veritatis") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProfile

Update ITV profile.

The expected token scope is Settings.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProfileRequest;
import org.openapis.openapi.models.operations.UpdateProfileResponse;
import org.openapis.openapi.models.operations.UpdateProfileSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ItvUpdateProfileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProfileRequest req = new UpdateProfileRequest(                new ItvUpdateProfileRequest("esse") {{
                                dateOfBirth = "quod";
                                email = "Serena90@hotmail.com";
                                firstName = "Herta";
                                lastName = "Pollich";
                                postcode = "65377";
                                title = "Mr.";
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.IDP),
                    add(FeatureFlagsEnum.LRL),
                }};
                lang = "consequuntur";
            }};            

            UpdateProfileResponse res = sdk.itv.updateProfile(req, new UpdateProfileSecurity("consequatur") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upgradePlan

Upgrades the plan for the current user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpgradePlanRequest;
import org.openapis.openapi.models.operations.UpgradePlanResponse;
import org.openapis.openapi.models.operations.UpgradePlanSecurity;
import org.openapis.openapi.models.shared.ItvUpgradePlanRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpgradePlanRequest req = new UpgradePlanRequest(                new ItvUpgradePlanRequest("minus");, "quaerat") {{
                lang = "sapiente";
            }};            

            UpgradePlanResponse res = sdk.itv.upgradePlan(req, new UpgradePlanSecurity("consectetur") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
