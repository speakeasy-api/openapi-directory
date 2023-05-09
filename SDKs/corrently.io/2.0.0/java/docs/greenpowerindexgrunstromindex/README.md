# greenPowerIndexGrunstromIndex

## Overview

Green Power Index (GrünstromIndex), an AI based service to forecast energy sources in the grid (regionale Stromherkunft).
Further Details and sample implementation is available at [gruenstromindex.de](https://www.gruenstromindex.de/).


### Available Operations

* [gsiBesthour](#gsibesthour) - Get best hour (with most regional green energy) in a given timeframe.
* [gsiDispatch](#gsidispatch) - Dispatch (Green Energy Distribution Schedule)
* [gsiMarketdata](#gsimarketdata) - Marketdata
* [gsiPrediction](#gsiprediction) - Prediction

## gsiBesthour

Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GsiBesthourRequest;
import org.openapis.openapi.models.operations.GsiBesthourResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GsiBesthourRequest req = new GsiBesthourRequest() {{
                hours = 602763L;
                key = "nulla";
                timeframe = 544883L;
                zip = "illum";
            }};            

            GsiBesthourResponse res = sdk.greenPowerIndexGrunstromIndex.gsiBesthour(req);

            if (res.gsiBesthour200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gsiDispatch

Dispatch of green energy has two aspects to consider:
  - Availability of gerneration facility (depends on weather and installed capacity)
  - Demand of energy
Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GsiDispatchRequest;
import org.openapis.openapi.models.operations.GsiDispatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GsiDispatchRequest req = new GsiDispatchRequest() {{
                key = "vel";
                zip = "error";
            }};            

            GsiDispatchResponse res = sdk.greenPowerIndexGrunstromIndex.gsiDispatch(req);

            if (res.gsiDispatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gsiMarketdata

Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GsiMarketdataRequest;
import org.openapis.openapi.models.operations.GsiMarketdataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GsiMarketdataRequest req = new GsiMarketdataRequest() {{
                zip = "deserunt";
            }};            

            GsiMarketdataResponse res = sdk.greenPowerIndexGrunstromIndex.gsiMarketdata(req);

            if (res.gsiMarketdata200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gsiPrediction

Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GsiPredictionRequest;
import org.openapis.openapi.models.operations.GsiPredictionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GsiPredictionRequest req = new GsiPredictionRequest() {{
                key = "suscipit";
                zip = "iure";
            }};            

            GsiPredictionResponse res = sdk.greenPowerIndexGrunstromIndex.gsiPrediction(req);

            if (res.gsiPrediction200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
