# SDK

## Overview

GeoDataSource™ Web Service is a REST API enable user to lookup for a city by using latitude and longitude coordinate. It will return the result in either JSON or XML containing the information of country, region, city, latitude and longitude. Visit https://www.geodatasource.com/web-service for further information.

### Available Operations

* [getCity](#getcity) - Get City name by using latitude and longitude

## getCity

Get City name by using latitude and longitude

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCityFormatEnum;
import org.openapis.openapi.models.operations.GetCityRequest;
import org.openapis.openapi.models.operations.GetCityResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCityRequest req = new GetCityRequest("unde", 8579.46, 5448.83) {{
                format = GetCityFormatEnum.XML;
            }};            

            GetCityResponse res = sdk.sdk.getCity(req);

            if (res.getCity200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
