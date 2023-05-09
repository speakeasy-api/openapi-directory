# incidents

## Overview

Incidents matching parameters

### Available Operations

* [getVersionIncidentsFormat](#getversionincidentsformat) - Paginated incidents matching parameters
* [getVersionIncidentsIdFormat](#getversionincidentsidformat)

## getVersionIncidentsFormat


<p>If you’d like more detailed information about bike incidents, use this endpoint. For mapping, <code>locations</code> is probably a better bet.</p>

<p><strong>Notes on location searching</strong>: <br />
- <code>proximity</code> accepts an ip address, an address, zipcode, city, or latitude,longitude - i.e. <code>70.210.133.87</code>, <code>210 NW 11th Ave, Portland, OR</code>, <code>60647</code>, <code>Chicago, IL</code>, and <code>45.521728,-122.67326</code> are all acceptable<br />
- <code>proximity_square</code> sets the length of the sides of the square to find matches inside of. The square is centered on the location specified by <code>proximity</code>. It defaults to 100.</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETVersionIncidentsFormatIncidentTypeEnum;
import org.openapis.openapi.models.operations.GETVersionIncidentsFormatRequest;
import org.openapis.openapi.models.operations.GETVersionIncidentsFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETVersionIncidentsFormatRequest req = new GETVersionIncidentsFormatRequest() {{
                incidentType = GETVersionIncidentsFormatIncidentTypeEnum.THEFT;
                occurredAfter = 623564;
                occurredBefore = 645894;
                page = 384382;
                perPage = 437587;
                proximity = "magnam";
                proximitySquare = 891773;
                query = "ipsa";
            }};            

            GETVersionIncidentsFormatResponse res = sdk.incidents.getVersionIncidentsFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVersionIncidentsIdFormat

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETVersionIncidentsIdFormatRequest;
import org.openapis.openapi.models.operations.GETVersionIncidentsIdFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETVersionIncidentsIdFormatRequest req = new GETVersionIncidentsIdFormatRequest(963663);            

            GETVersionIncidentsIdFormatResponse res = sdk.incidents.getVersionIncidentsIdFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
