# SDK

## Overview

Abstract IP geolocation API allows developers to retrieve the region, country and city behind any IP worldwide. The API covers the geolocation of IPv4 and IPv6 addresses in 180+ countries worldwide. Extra information can be retrieved like the currency, flag or language associated to an IP.

API Documentation
<https://www.abstractapi.com/ip-geolocation-api#docs>
### Available Operations

* [getV1](#getv1) - Retrieve the location of an IP address

## getV1

Retrieve the location of an IP address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1Request;
import org.openapis.openapi.models.operations.GetV1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1Request req = new GetV1Request("provident") {{
                fields = "country,city,timezone";
                ipAddress = "195.154.25.40";
            }};            

            GetV1Response res = sdk.sdk.getV1(req);

            if (res.inlineResponse200 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
