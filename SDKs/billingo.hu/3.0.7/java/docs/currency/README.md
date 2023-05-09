# currency

### Available Operations

* [getConversionRate](#getconversionrate) - Get currencies exchange rate.

## getConversionRate

Return with the exchange value of given currencies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConversionRateRequest;
import org.openapis.openapi.models.operations.GetConversionRateResponse;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConversionRateRequest req = new GetConversionRateRequest(CurrencyEnum.SEK, CurrencyEnum.BRL);            

            GetConversionRateResponse res = sdk.currency.getConversionRate(req);

            if (res.conversationRate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
