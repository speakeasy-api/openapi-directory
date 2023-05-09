# kpi

### Available Operations

* [dailyActiveUsersByDate](#dailyactiveusersbydate) - Daily Active Users by Date
* [dailyNewUsersByDate](#dailynewusersbydate) - Daily New Users by Date
* [kpIsForDailyAppUninstallsByDate](#kpisfordailyappuninstallsbydate) - KPIs for Daily App Uninstalls by Date
* [monthlyActiveUsersForLast30Days](#monthlyactiveusersforlast30days) - Monthly Active Users for Last 30 Days

## dailyActiveUsersByDate

This endpoint allows you to retrieve a daily series of the total number of unique active users on each date.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "dau" : (int)
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DailyActiveUsersByDateRequest;
import org.openapis.openapi.models.operations.DailyActiveUsersByDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DailyActiveUsersByDateRequest req = new DailyActiveUsersByDateRequest() {{
                appId = "{{app_identifier}}";
                endingAt = "2018-06-28T23:59:59-5:00";
                length = "10";
            }};            

            DailyActiveUsersByDateResponse res = sdk.kpi.dailyActiveUsersByDate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dailyNewUsersByDate

This endpoint allows you to retrieve a daily series of the total number of new users on each date.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "new_users" : (int)
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DailyNewUsersByDateRequest;
import org.openapis.openapi.models.operations.DailyNewUsersByDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DailyNewUsersByDateRequest req = new DailyNewUsersByDateRequest() {{
                appId = "{{app_identifier}}";
                endingAt = "2018-06-28T23:59:59-5:00";
                length = "14";
            }};            

            DailyNewUsersByDateResponse res = sdk.kpi.dailyNewUsersByDate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kpIsForDailyAppUninstallsByDate

This endpoint allows you to retrieve a daily series of the total number of uninstalls on each date.

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "uninstalls" : (int)
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KpIsForDailyAppUninstallsByDateRequest;
import org.openapis.openapi.models.operations.KpIsForDailyAppUninstallsByDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KpIsForDailyAppUninstallsByDateRequest req = new KpIsForDailyAppUninstallsByDateRequest() {{
                appId = "{{app_identifier}}";
                endingAt = "2018-06-28T23:59:59-5:00";
                length = "14";
            }};            

            KpIsForDailyAppUninstallsByDateResponse res = sdk.kpi.kpIsForDailyAppUninstallsByDate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monthlyActiveUsersForLast30Days

This endpoint allows you to retrieve a daily series of the total number of unique active users over a 30-day rolling window.

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "mau" : (int)
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonthlyActiveUsersForLast30DaysRequest;
import org.openapis.openapi.models.operations.MonthlyActiveUsersForLast30DaysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonthlyActiveUsersForLast30DaysRequest req = new MonthlyActiveUsersForLast30DaysRequest() {{
                appId = "{{app_identifier}}";
                endingAt = "2018-06-28T23:59:59-05:00";
                length = "7";
            }};            

            MonthlyActiveUsersForLast30DaysResponse res = sdk.kpi.monthlyActiveUsersForLast30Days(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
