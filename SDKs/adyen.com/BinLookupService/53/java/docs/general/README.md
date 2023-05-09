# general

### Available Operations

* [postGet3dsAvailability](#postget3dsavailability) - Check if 3D Secure is available
* [postGetCostEstimate](#postgetcostestimate) - Get a fees cost estimate

## postGet3dsAvailability

Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2, this endpoint also returns device fingerprinting keys.

For more information, refer to [3D Secure 2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGet3dsAvailabilityResponse;
import org.openapis.openapi.models.operations.PostGet3dsAvailabilitySecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.ThreeDSAvailabilityRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ThreeDSAvailabilityRequest req = new ThreeDSAvailabilityRequest("debitis") {{
                additionalData = new java.util.HashMap<String, String>() {{
                    put("delectus", "tempora");
                }};
                brands = new String[]{{
                    add("molestiae"),
                    add("minus"),
                }};
                cardNumber = "placeat";
                recurringDetailReference = "voluptatum";
                shopperReference = "iusto";
            }};            

            PostGet3dsAvailabilityResponse res = sdk.general.postGet3dsAvailability(req, new PostGet3dsAvailabilitySecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.threeDSAvailabilityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetCostEstimate

>This API is available only for merchants operating in Australia, the EU, and the UK.

Use the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing these costs prior actual payment authorisation gives you an opportunity to charge those costs to the cardholder, if necessary.

To retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to this call contains the amount of the interchange and scheme fees charged by the network for this transaction, and also which surcharging policy is possible (based on current regulations).

> Since not all information is known in advance (for example, if the cardholder will successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3 data), the returned amounts are based on a set of assumption criteria you define in the `assumptions` parameter.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetCostEstimateResponse;
import org.openapis.openapi.models.operations.PostGetCostEstimateSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.CostEstimateAssumptions;
import org.openapis.openapi.models.shared.CostEstimateRequest;
import org.openapis.openapi.models.shared.CostEstimateRequestShopperInteractionEnum;
import org.openapis.openapi.models.shared.MerchantDetails;
import org.openapis.openapi.models.shared.Recurring;
import org.openapis.openapi.models.shared.RecurringContractEnum;
import org.openapis.openapi.models.shared.RecurringTokenServiceEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CostEstimateRequest req = new CostEstimateRequest(                new Amount("excepturi", 392785L);, "recusandae") {{
                assumptions = new CostEstimateAssumptions() {{
                    assume3DSecureAuthenticated = false;
                    assumeLevel3Data = false;
                    installments = 836079;
                }};;
                cardNumber = "ab";
                encryptedCardNumber = "quis";
                merchantDetails = new MerchantDetails() {{
                    countryCode = "BG";
                    enrolledIn3DSecure = false;
                    mcc = "deserunt";
                }};;
                recurring = new Recurring() {{
                    contract = RecurringContractEnum.ONECLICK;
                    recurringDetailName = "ipsam";
                    recurringExpiry = OffsetDateTime.parse("2020-02-17T21:57:45.117Z");
                    recurringFrequency = "quo";
                    tokenService = RecurringTokenServiceEnum.VISATOKENSERVICE;
                }};;
                selectedRecurringDetailReference = "at";
                shopperInteraction = CostEstimateRequestShopperInteractionEnum.POS;
                shopperReference = "maiores";
            }};            

            PostGetCostEstimateResponse res = sdk.general.postGetCostEstimate(req, new PostGetCostEstimateSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.costEstimateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
