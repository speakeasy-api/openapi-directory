# SDK

## Overview

Convert an OSGB36 easting and northing (British National Grid) to WGS84 latitude and longitude.

Full documentation
<https://www.getthedata.com/bng2latlong>
### Available Operations

* [getBng2latlongEastingNorthing](#getbng2latlongeastingnorthing) - Returns latitude and longitude for the given easting and northing.

## getBng2latlongEastingNorthing

Takes an OSGB36 easting and northing (British National Grid) and returns the geographically equivalent WGS84 latitude and longitude.
#### A successful request returns the following fields:
* status - this will be `ok`
* easting - the easting provided in the request
* northing - the northing provided in the request
* latitude - the latitude of the converted coordinates
* longitude - the longitude of the converted coordinates
#### An unsuccessful request returns the following fields:
* status - this will be `error`
* error - an error message


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBng2latlongEastingNorthingRequest;
import org.openapis.openapi.models.operations.GetBng2latlongEastingNorthingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBng2latlongEastingNorthingRequest req = new GetBng2latlongEastingNorthingRequest(715190L, 844266L);            

            GetBng2latlongEastingNorthingResponse res = sdk.sdk.getBng2latlongEastingNorthing(req);

            if (res.getBng2latlongEastingNorthing200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
