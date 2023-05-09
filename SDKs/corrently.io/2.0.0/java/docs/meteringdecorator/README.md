# meteringDecorator

## Overview

Allows to virtualy act as an Meter Point Operator by decorating meter readings with GreenPowerIndex (GrünstromIndex) handles. In principal this service decorates meter [OBIS Code](https://de.wikipedia.org/wiki/OBIS-Kennzahlen) 1.8.0 values to 1.8.1 and 1.8.2 according to the local and actual GSI value. A signature gets applied to the reading and all three OBIS values get hashed into the Energychain for consensus (e.q. creating balancing groups). CO2 footprint of a meter gets provided (as of first reading pushed).This works in conjunction with German Smart Meter Gateways (as of March 2020).


### Available Operations

* [meteringGet](#meteringget) - Meter Reading
* [meteringPost](#meteringpost) - Meter Reading

## meteringGet

Retrieves a metered reading using account (Stromkonto).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MeteringGetRequest;
import org.openapis.openapi.models.operations.MeteringGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MeteringGetRequest req = new MeteringGetRequest() {{
                account = "magnam";
            }};            

            MeteringGetResponse res = sdk.meteringDecorator.meteringGet(req);

            if (res.meteringGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## meteringPost

Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MeteringPostRequestBody;
import org.openapis.openapi.models.operations.MeteringPostResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MeteringPostRequestBody req = new MeteringPostRequestBody() {{
                one80 = 891773L;
                account = "ipsa";
                energy = 963663L;
                secret = "tempora";
                value = 383441L;
                zip = "molestiae";
            }};            

            MeteringPostResponse res = sdk.meteringDecorator.meteringPost(req);

            if (res.meteringPost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
