# provinces

## Overview

Get province(s) with associated holidays

### Available Operations

* [province](#province) - Get a province or territory by abbreviation
* [provinces](#provinces) - Get all provinces

## province

Returns a Canadian province or territory with its associated holidays. Returns a 404 response for invalid abbreviations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProvinceOptionalEnum;
import org.openapis.openapi.models.operations.ProvinceProvinceIDEnum;
import org.openapis.openapi.models.operations.ProvinceRequest;
import org.openapis.openapi.models.operations.ProvinceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProvinceRequest req = new ProvinceRequest(ProvinceProvinceIDEnum.MB) {{
                optional = ProvinceOptionalEnum.FALSE;
                year = 423655L;
            }};            

            ProvinceResponse res = sdk.provinces.province(req);

            if (res.province200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## provinces

Returns provinces and territories in Canada. Each province or territory lists its associated holidays.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProvincesOptionalEnum;
import org.openapis.openapi.models.operations.ProvincesRequest;
import org.openapis.openapi.models.operations.ProvincesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProvincesRequest req = new ProvincesRequest() {{
                optional = ProvincesOptionalEnum.TRUE;
                year = 645894L;
            }};            

            ProvincesResponse res = sdk.provinces.provinces(req);

            if (res.provinces200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
