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

            org.openapis.openapi.models.shared.PayoutRequest req = new PayoutRequest(                new Amount("modi", 508969L);, "rem", "voluptates") {{
                billingAddress = new Address("quasi", "repudiandae", "sint", "veritatis", "itaque") {{
                    stateOrProvince = "incidunt";
                }};;
                card = new Card() {{
                    cvc = "enim";
                    expiryMonth = "consequatur";
                    expiryYear = "est";
                    holderName = "quibusdam";
                    issueNumber = "explicabo";
                    number = "deserunt";
                    startMonth = "distinctio";
                    startYear = "quibusdam";
                }};;
                fraudOffset = 289406;
                fundSource = new FundSource() {{
                    additionalData = new java.util.HashMap<String, String>() {{
                        put("qui", "aliquid");
                        put("cupiditate", "quos");
                    }};
                    billingAddress = new Address("perferendis", "magni", "assumenda", "ipsam", "alias") {{
                        stateOrProvince = "fugit";
                    }};;
                    card = new Card() {{
                        cvc = "dolorum";
                        expiryMonth = "excepturi";
                        expiryYear = "tempora";
                        holderName = "facilis";
                        issueNumber = "tempore";
                        number = "labore";
                        startMonth = "delectus";
                        startYear = "eum";
                    }};;
                    shopperEmail = "non";
                    shopperName = new Name("eligendi", "sint");;
                    telephoneNumber = "aliquid";
                }};;
                recurring = new Recurring() {{
                    contract = RecurringContractEnum.RECURRING;
                    recurringDetailName = "necessitatibus";
                    recurringExpiry = OffsetDateTime.parse("2021-09-21T14:06:09.271Z");
                    recurringFrequency = "dolor";
                    tokenService = RecurringTokenServiceEnum.MCTOKENSERVICE;
                }};;
                selectedRecurringDetailReference = "a";
                shopperEmail = "dolorum";
                shopperInteraction = PayoutRequestShopperInteractionEnum.CONT_AUTH;
                shopperName = new Name("in", "illum");;
                shopperReference = "maiores";
                telephoneNumber = "rerum";
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
