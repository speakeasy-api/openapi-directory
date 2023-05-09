# SDK

## Overview

BigDataCloud's IP Geolocation API returns detailed information about the geographical location, ownership and connectivity of the provided IPv4 IP address.

This API is powered by patent-pending ‘Next Generation IP Geolocation Technology'. As a result, the API has sub-millisecond response time.

You can authenticate the API with the use of API keys provided in your BigDataCloud account.

BigDataCloud provides 10K Free queries per month. You can upgrade your package with $2/month per 10K additional queries.

The API has Unprecedented Update Rate
- Geolocation data re-evaluated every 2 hours or at least once a day
- BGP data updated every 2 hours
- Registry data updated at least once a day
- Country object data usually updates at least once in a month 

You can learn more about the API at [bigdatacloud.com](https://www.bigdatacloud.com/ip-geolocation-apis).

### Available Operations

* [ipGeolocationWithConfidenceAreaAndHazardReportApi](#ipgeolocationwithconfidenceareaandhazardreportapi) - IP Geolocation with Confidence Area and Hazard Report API
* [ipGeolocationWithConfidenceAreaApi](#ipgeolocationwithconfidenceareaapi) - IP Geolocation with Confidence Area API

## ipGeolocationWithConfidenceAreaAndHazardReportApi

This API returns additional security hazard report in addition to confidence area and locality information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IpGeolocationWithConfidenceAreaAndHazardReportApiRequest;
import org.openapis.openapi.models.operations.IpGeolocationWithConfidenceAreaAndHazardReportApiResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IpGeolocationWithConfidenceAreaAndHazardReportApiRequest req = new IpGeolocationWithConfidenceAreaAndHazardReportApiRequest() {{
                ip = "193.114.112.122";
                key = "{{API KEY}}";
                localityLanguage = "en";
            }};            

            IpGeolocationWithConfidenceAreaAndHazardReportApiResponse res = sdk.sdk.ipGeolocationWithConfidenceAreaAndHazardReportApi(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ipGeolocationWithConfidenceAreaApi

Returns list of geocoordinates which represents estimated geolocation confidence area.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IpGeolocationWithConfidenceAreaApiRequest;
import org.openapis.openapi.models.operations.IpGeolocationWithConfidenceAreaApiResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IpGeolocationWithConfidenceAreaApiRequest req = new IpGeolocationWithConfidenceAreaApiRequest() {{
                ip = "193.114.112.122";
                key = "{{API KEY}}";
                localityLanguage = "en";
            }};            

            IpGeolocationWithConfidenceAreaApiResponse res = sdk.sdk.ipGeolocationWithConfidenceAreaApi(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
