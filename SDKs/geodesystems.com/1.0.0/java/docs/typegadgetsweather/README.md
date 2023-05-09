# typeGadgetsWeather

## Overview

Search API for 'Weather' entry type

### Available Operations

* [searchGadgetsWeather](#searchgadgetsweather) - Search API for 'Weather' entry type

## searchGadgetsWeather

API to search for entries of type Weather

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGadgetsWeatherRequest;
import org.openapis.openapi.models.operations.SearchGadgetsWeatherResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGadgetsWeatherRequest req = new SearchGadgetsWeatherRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-30T21:28:00.704Z");
                changedateTo = OffsetDateTime.parse("2022-07-19T18:05:42.224Z");
                createdateFrom = OffsetDateTime.parse("2020-03-15T17:32:59.128Z");
                createdateTo = OffsetDateTime.parse("2021-06-22T21:20:56.552Z");
                description = "ex";
                filesuffix = "quaerat";
                fromdate = OffsetDateTime.parse("2022-02-10T15:43:41.658Z");
                group = "placeat";
                max = 697274L;
                maxlatitude = 3481.92;
                maxlongitude = 4633.44;
                minlatitude = 2114.55;
                minlongitude = 2646.19;
                name = "Bobbie Terry";
                skip = 741232L;
                text = "dicta";
                todate = OffsetDateTime.parse("2021-12-30T18:01:47.888Z");
            }};            

            SearchGadgetsWeatherResponse res = sdk.typeGadgetsWeather.searchGadgetsWeather(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
