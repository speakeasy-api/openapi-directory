# v1System

## Overview

System overview

### Available Operations

* [healthCheck](#healthcheck) - Returns the health information for the official business registers based on usage.
* [systemCountries](#systemcountries) - Returns a list of countries
* [systemPricelist](#systempricelist) - Returns a list of products with prices

## healthCheck

Returns the health information for the official business registers based on usage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthCheckResponse;
import org.openapis.openapi.models.operations.HealthCheckSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthCheckResponse res = sdk.v1System.healthCheck(new HealthCheckSecurity("quasi") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.healthCheck200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## systemCountries

Retrieve the list of all currently enabled countries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SystemCountriesResponse;
import org.openapis.openapi.models.operations.SystemCountriesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SystemCountriesResponse res = sdk.v1System.systemCountries(new SystemCountriesSecurity("repudiandae") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.systemCountries200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## systemPricelist

Retrieve pricing rules for your subscription plan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SystemPricelistResponse;
import org.openapis.openapi.models.operations.SystemPricelistSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SystemPricelistResponse res = sdk.v1System.systemPricelist(new SystemPricelistSecurity("sint") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.systemPricelist200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
