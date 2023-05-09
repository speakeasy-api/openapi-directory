# analytics

## Overview

Analytics Restv 2 Controller

### Available Operations

* [getAnalyticsDataUsingGET](#getanalyticsdatausingget) - Returns the results of executed query defined by the parameters passed in
* [getDataCountUsingGET](#getdatacountusingget) - Returns the count of executed query
* [getRetentionUsingGET](#getretentionusingget) - Returns the percentage of user retention over the last 30 days

## getAnalyticsDataUsingGET

Returns the results of executed query defined by the parameters passed in

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETDataTypeEnum;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETPrecisionEnum;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETRequest;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETResponse;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETStageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAnalyticsDataUsingGETRequest req = new GETAnalyticsDataUsingGETRequest("error", GETAnalyticsDataUsingGETDataTypeEnum.SESSION_ANALYTIC, LocalDate.parse("2022-07-25"), GETAnalyticsDataUsingGETPrecisionEnum.HOURLY, GETAnalyticsDataUsingGETStageEnum.PREVIEW, LocalDate.parse("2022-01-14")) {{
                keys = "tempora";
            }};            

            GETAnalyticsDataUsingGETResponse res = sdk.analytics.getAnalyticsDataUsingGET(req);

            if (res.analyticsDataSwaggerModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataCountUsingGET

Returns the count of executed query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDataCountUsingGETQueryNameEnum;
import org.openapis.openapi.models.operations.GETDataCountUsingGETRequest;
import org.openapis.openapi.models.operations.GETDataCountUsingGETResponse;
import org.openapis.openapi.models.operations.GETDataCountUsingGETStageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETDataCountUsingGETRequest req = new GETDataCountUsingGETRequest("suscipit", GETDataCountUsingGETQueryNameEnum.AVERAGE_DAILY_ACTIVE_USERS, GETDataCountUsingGETStageEnum.PREVIEW);            

            GETDataCountUsingGETResponse res = sdk.analytics.getDataCountUsingGET(req);

            if (res.analyticsDataCountSwaggerModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRetentionUsingGET

Returns the percentage of user retention over the last 30 days

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRetentionUsingGETRequest;
import org.openapis.openapi.models.operations.GETRetentionUsingGETResponse;
import org.openapis.openapi.models.operations.GETRetentionUsingGETStageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETRetentionUsingGETRequest req = new GETRetentionUsingGETRequest("placeat", GETRetentionUsingGETStageEnum.PREVIEW);            

            GETRetentionUsingGETResponse res = sdk.analytics.getRetentionUsingGET(req);

            if (res.analyticsDataCountSwaggerModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
