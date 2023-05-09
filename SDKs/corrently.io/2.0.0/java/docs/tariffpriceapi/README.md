# tariffPriceAPI

## Overview

Tariff information for the German market region. Provides base price and energy price information for private households (Standardlastprofil H0, SLP H0 Tarifinformation).

### Available Operations

* [tariffSlph0](#tariffslph0) - Energy Tariff information
* [tariffcomponents](#tariffcomponents) - Energy Tariff price components

## tariffSlph0

Provides pricing data for private households with standard load profiles (Standardlastprofil H0).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TariffSlph0Request;
import org.openapis.openapi.models.operations.TariffSlph0Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TariffSlph0Request req = new TariffSlph0Request() {{
                zipcode = "36162";
            }};            

            TariffSlph0Response res = sdk.tariffPriceAPI.tariffSlph0(req);

            if (res.tariffh0s != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tariffcomponents

Provides insides into the different cost components of energy for a private household.
Sample Request: https://api.corrently.io/v2.0/tariff/components?email=demo%40corrently.io&zip=69168&kwha=3300


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TariffcomponentsRequest;
import org.openapis.openapi.models.operations.TariffcomponentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TariffcomponentsRequest req = new TariffcomponentsRequest() {{
                email = "Gertrude_Welch44@yahoo.com";
                kwha = 359508L;
                milliseconds = 613064L;
                wh = 437032L;
                zipcode = "60096-6612";
            }};            

            TariffcomponentsResponse res = sdk.tariffPriceAPI.tariffcomponents(req);

            if (res.componentsh0 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
