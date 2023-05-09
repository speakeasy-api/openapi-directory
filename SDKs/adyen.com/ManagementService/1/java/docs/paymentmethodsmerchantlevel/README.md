# paymentMethodsMerchantLevel

### Available Operations

* [getMerchantsMerchantIdPaymentMethodSettings](#getmerchantsmerchantidpaymentmethodsettings) - Get all payment methods
* [getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId](#getmerchantsmerchantidpaymentmethodsettingspaymentmethodid) - Get payment method details
* [getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains](#getmerchantsmerchantidpaymentmethodsettingspaymentmethodidgetapplepaydomains) - Get Apple Pay domains
* [patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId](#patchmerchantsmerchantidpaymentmethodsettingspaymentmethodid) - Update a payment method
* [postMerchantsMerchantIdPaymentMethodSettings](#postmerchantsmerchantidpaymentmethodsettings) - Request a payment method
* [postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains](#postmerchantsmerchantidpaymentmethodsettingspaymentmethodidaddapplepaydomains) - Add an Apple Pay domain

## getMerchantsMerchantIdPaymentMethodSettings

Returns details for all payment methods of the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPaymentMethodSettingsRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPaymentMethodSettingsResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPaymentMethodSettingsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdPaymentMethodSettingsRequest req = new GetMerchantsMerchantIdPaymentMethodSettingsRequest("pariatur") {{
                businessLineId = "nemo";
                pageNumber = 975522;
                pageSize = 16627;
                storeId = "fugiat";
            }};            

            GetMerchantsMerchantIdPaymentMethodSettingsResponse res = sdk.paymentMethodsMerchantLevel.getMerchantsMerchantIdPaymentMethodSettings(req, new GetMerchantsMerchantIdPaymentMethodSettingsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.paymentMethodResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId

Returns details for the merchant account and the payment method identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest req = new GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest("amet", "aut");            

            GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdResponse res = sdk.paymentMethodsMerchantLevel.getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(req, new GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.paymentMethod != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains

Returns all Apple Pay domains that are registered with the merchant account and the payment method identified in the path. For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain).

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRequest req = new GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRequest("cumque", "corporis");            

            GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsResponse res = sdk.paymentMethodsMerchantLevel.getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains(req, new GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.applePayInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId

Updates payment method details for the merchant account and the payment method identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read and write


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdResponse;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.ShopperStatement;
import org.openapis.openapi.models.shared.ShopperStatementTypeEnum;
import org.openapis.openapi.models.shared.UpdatePaymentMethodInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest req = new PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest("hic", "libero") {{
                updatePaymentMethodInfo = new UpdatePaymentMethodInfo() {{
                    countries = new String[]{{
                        add("dolores"),
                        add("quis"),
                        add("totam"),
                    }};
                    currencies = new String[]{{
                        add("eaque"),
                        add("quis"),
                    }};
                    customRoutingFlags = new String[]{{
                        add("eos"),
                    }};
                    enabled = false;
                    shopperStatement = new ShopperStatement() {{
                        doingBusinessAsName = "perferendis";
                        type = ShopperStatementTypeEnum.APPEND;
                    }};;
                    storeIds = new String[]{{
                        add("quam"),
                        add("dolor"),
                        add("vero"),
                        add("nostrum"),
                    }};
                }};;
            }};            

            PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdResponse res = sdk.paymentMethodsMerchantLevel.patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(req, new PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.paymentMethod != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMerchantsMerchantIdPaymentMethodSettings

Sends a request to add a new payment method to the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read and write


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdPaymentMethodSettingsRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdPaymentMethodSettingsResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdPaymentMethodSettingsSecurity;
import org.openapis.openapi.models.shared.ApplePayInfo;
import org.openapis.openapi.models.shared.BcmcInfo;
import org.openapis.openapi.models.shared.CartesBancairesInfo;
import org.openapis.openapi.models.shared.GiroPayInfo;
import org.openapis.openapi.models.shared.GooglePayInfo;
import org.openapis.openapi.models.shared.KlarnaInfo;
import org.openapis.openapi.models.shared.KlarnaInfoRegionEnum;
import org.openapis.openapi.models.shared.MealVoucherFRInfo;
import org.openapis.openapi.models.shared.PayPalInfo;
import org.openapis.openapi.models.shared.PaymentMethodSetupInfo;
import org.openapis.openapi.models.shared.PaymentMethodSetupInfoShopperInteractionEnum;
import org.openapis.openapi.models.shared.PaymentMethodSetupInfoTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.SofortInfo;
import org.openapis.openapi.models.shared.SwishInfo;
import org.openapis.openapi.models.shared.VippsInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdPaymentMethodSettingsRequest req = new PostMerchantsMerchantIdPaymentMethodSettingsRequest("hic") {{
                paymentMethodSetupInfo = new PaymentMethodSetupInfo() {{
                    applePay = new ApplePayInfo() {{
                        domains = new String[]{{
                            add("omnis"),
                            add("facilis"),
                            add("perspiciatis"),
                            add("voluptatem"),
                        }};
                    }};;
                    bcmc = new BcmcInfo() {{
                        enableBcmcMobile = false;
                    }};;
                    businessLineId = "porro";
                    cartesBancaires = new CartesBancairesInfo("consequuntur");;
                    countries = new String[]{{
                        add("error"),
                        add("eaque"),
                        add("occaecati"),
                    }};
                    currencies = new String[]{{
                        add("adipisci"),
                        add("asperiores"),
                        add("earum"),
                    }};
                    customRoutingFlags = new String[]{{
                        add("iste"),
                        add("dolorum"),
                    }};
                    giroPay = new GiroPayInfo("deleniti");;
                    googlePay = new GooglePayInfo("pariatur") {{
                        reuseMerchantId = false;
                    }};;
                    klarna = new KlarnaInfo("provident", "nobis") {{
                        autoCapture = false;
                        region = KlarnaInfoRegionEnum.CH;
                    }};;
                    mealVoucherFR = new MealVoucherFRInfo("delectus", "quaerat",                 new String[]{{
                                        add("aliquid"),
                                        add("dolorem"),
                                        add("dolorem"),
                                    }});;
                    paypal = new PayPalInfo("dolor", "qui") {{
                        directCapture = false;
                    }};;
                    reference = "ipsum";
                    shopperInteraction = PaymentMethodSetupInfoShopperInteractionEnum.CONT_AUTH;
                    sofort = new SofortInfo("excepturi", "cum");;
                    storeId = "voluptate";
                    swish = new SwishInfo() {{
                        swishNumber = "dignissimos";
                    }};;
                    type = PaymentMethodSetupInfoTypeEnum.WECHATPAY;
                    vipps = new VippsInfo("amet") {{
                        subscriptionCancelUrl = "dolorum";
                    }};;
                }};;
            }};            

            PostMerchantsMerchantIdPaymentMethodSettingsResponse res = sdk.paymentMethodsMerchantLevel.postMerchantsMerchantIdPaymentMethodSettings(req, new PostMerchantsMerchantIdPaymentMethodSettingsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.paymentMethod != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains

Adds the new domain to the list of Apple Pay domains that are registered with the merchant account and the payment method identified in the path. For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain).

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read and write


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsSecurity;
import org.openapis.openapi.models.shared.ApplePayInfo;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRequest req = new PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRequest("numquam", "veritatis") {{
                applePayInfo = new ApplePayInfo() {{
                    domains = new String[]{{
                        add("ipsa"),
                    }};
                }};;
            }};            

            PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsResponse res = sdk.paymentMethodsMerchantLevel.postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains(req, new PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
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
