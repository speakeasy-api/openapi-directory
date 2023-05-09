# info

## Overview

TLD Statistics

### Available Operations

* [getInfoTld](#getinfotld) - Returns overall Tld info
* [getInfoTldZone](#getinfotldzone) - Returns statistics for specific zone
* [getApiInfoItem](#getapiinfoitem)
* [getStatisticsCollection](#getstatisticscollection) - Returns overall stagtistics
* [getStatisticsItem](#getstatisticsitem) - Returns statistics for specific zone

## getInfoTld

Returns overall Tld info

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInfoTldResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInfoTldResponse res = sdk.info.getInfoTld();

            if (res.zoneInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInfoTldZone

Returns statistics for specific zone

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInfoTldZoneRequest;
import org.openapis.openapi.models.operations.GetInfoTldZoneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInfoTldZoneRequest req = new GetInfoTldZoneRequest("optio") {{
                limit = 521848L;
                page = "beatae";
            }};            

            GetInfoTldZoneResponse res = sdk.info.getInfoTldZone(req);

            if (res.zoneInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiInfoItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiInfoItemRequest;
import org.openapis.openapi.models.operations.GetApiInfoItemResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiInfoItemRequest req = new GetApiInfoItemRequest() {{
                apiKey = "commodi";
            }};            

            GetApiInfoItemResponse res = sdk.info.getApiInfoItem(req);

            if (res.apiKeyInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatisticsCollection

Returns overall stagtistics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatisticsCollectionRequest;
import org.openapis.openapi.models.operations.GetStatisticsCollectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStatisticsCollectionRequest req = new GetStatisticsCollectionRequest() {{
                limit = 473600L;
                page = "modi";
            }};            

            GetStatisticsCollectionResponse res = sdk.info.getStatisticsCollection(req);

            if (res.zoneStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatisticsItem

Returns statistics for specific zone

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatisticsItemRequest;
import org.openapis.openapi.models.operations.GetStatisticsItemResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStatisticsItemRequest req = new GetStatisticsItemRequest("qui") {{
                limit = 774234L;
                page = "cum";
            }};            

            GetStatisticsItemResponse res = sdk.info.getStatisticsItem(req);

            if (res.zoneStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
