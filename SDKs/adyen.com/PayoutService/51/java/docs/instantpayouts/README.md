# instantPayouts

### Available Operations

* [postPayout](#postpayout) - Make an instant card payout

## postPayout

With this call, you can pay out to your customers, and funds will be made available within 30 minutes on the cardholder's bank account (this is dependent on whether the issuer supports this functionality). Instant card payouts are only supported for Visa and Mastercard cards.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPayoutResponse;
import org.openapis.openapi.models.operations.PostPayoutSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.Card;
import org.openapis.openapi.models.shared.FundSource;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.PayoutRequest;
import org.openapis.openapi.models.shared.PayoutRequestShopperInteractionEnum;
import org.openapis.openapi.models.shared.Recurring;
import org.openapis.openapi.models.shared.RecurringContractEnum;
import org.openapis.openapi.models.shared.RecurringTokenServiceEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PayoutRequest req = new PayoutRequest(                new Amount("praesentium", 523248L);, "voluptates", "quasi") {{
                billingAddress = new Address("repudiandae", "sint", "veritatis", "itaque", "incidunt") {{
                    stateOrProvince = "enim";
                }};;
                card = new Card() {{
                    cvc = "consequatur";
                    expiryMonth = "est";
                    expiryYear = "quibusdam";
                    holderName = "explicabo";
                    issueNumber = "deserunt";
                    number = "distinctio";
                    startMonth = "quibusdam";
                    startYear = "labore";
                }};;
                fraudOffset = 264730;
                fundSource = new FundSource() {{
                    additionalData = new java.util.HashMap<String, String>() {{
                        put("aliquid", "cupiditate");
                    }};
                    billingAddress = new Address("quos", "perferendis", "magni", "assumenda", "ipsam") {{
                        stateOrProvince = "alias";
                    }};;
                    card = new Card() {{
                        cvc = "fugit";
                        expiryMonth = "dolorum";
                        expiryYear = "excepturi";
                        holderName = "tempora";
                        issueNumber = "facilis";
                        number = "tempore";
                        startMonth = "labore";
                        startYear = "delectus";
                    }};;
                    shopperEmail = "eum";
                    shopperName = new Name("non", "eligendi");;
                    telephoneNumber = "sint";
                }};;
                recurring = new Recurring() {{
                    contract = RecurringContractEnum.RECURRING;
                    recurringDetailName = "provident";
                    recurringExpiry = OffsetDateTime.parse("2021-04-14T09:13:11.675Z");
                    recurringFrequency = "officia";
                    tokenService = RecurringTokenServiceEnum.VISATOKENSERVICE;
                }};;
                selectedRecurringDetailReference = "debitis";
                shopperEmail = "a";
                shopperInteraction = PayoutRequestShopperInteractionEnum.MOTO;
                shopperName = new Name("in", "in");;
                shopperReference = "illum";
                telephoneNumber = "maiores";
            }};            

            PostPayoutResponse res = sdk.instantPayouts.postPayout(req, new PostPayoutSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.payoutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
