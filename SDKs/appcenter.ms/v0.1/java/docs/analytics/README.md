# analytics

### Available Operations

* [analyticsAudienceNameExists](#analyticsaudiencenameexists) - Returns whether audience definition exists.
* [~~analyticsCrashCounts~~](#analyticscrashcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~analyticsCrashFreeDevicePercentages~~](#analyticscrashfreedevicepercentages) - Percentage of crash-free device by day in the time range based on the selected versions. Api will return -1 if crash devices is greater than active devices. :warning: **Deprecated**
* [~~analyticsCrashGroupCounts~~](#analyticscrashgroupcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~analyticsCrashGroupModelCounts~~](#analyticscrashgroupmodelcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~analyticsCrashGroupOperatingSystemCounts~~](#analyticscrashgroupoperatingsystemcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~analyticsCrashGroupTotals~~](#analyticscrashgrouptotals) - Available for UWP apps only. :warning: **Deprecated**
* [analyticsCrashGroupsTotals](#analyticscrashgroupstotals) - Overall crashes and affected users count of the selected crash groups with selected versions.
* [analyticsCreateOrUpdateAudience](#analyticscreateorupdateaudience) - Creates or updates audience definition.
* [analyticsDeleteAudience](#analyticsdeleteaudience) - Deletes audience definition.
* [analyticsDeviceCounts](#analyticsdevicecounts) - Count of active devices by interval in the time range.
* [analyticsDistributionReleaseCounts](#analyticsdistributionreleasecounts) - Count of total downloads for the provided distribution releases.
* [analyticsEventCount](#analyticseventcount) - Count of events by interval in the time range.
* [analyticsEventDeviceCount](#analyticseventdevicecount) - Count of devices for an event by interval in the time range.
* [analyticsEventPerDeviceCount](#analyticseventperdevicecount) - Count of events per device by interval in the time range.
* [analyticsEventPerSessionCount](#analyticseventpersessioncount) - Count of events per session by interval in the time range.
* [analyticsEventProperties](#analyticseventproperties) - Event properties.
* [analyticsEventPropertyCounts](#analyticseventpropertycounts) - Event properties value counts during the time range in descending order.
* [analyticsEvents](#analyticsevents) - Count of active events in the time range ordered by event.
* [analyticsEventsDelete](#analyticseventsdelete) - Delete the set of Events with the specified event names.
* [analyticsEventsDeleteLogs](#analyticseventsdeletelogs) - Delete the set of Events with the specified event names.
* [analyticsGenericLogFlow](#analyticsgenericlogflow) - Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
* [analyticsGetAudience](#analyticsgetaudience) - Gets audience definition.
* [analyticsLanguageCounts](#analyticslanguagecounts) - Languages in the time range.
* [analyticsListAudiences](#analyticslistaudiences) - Get list of audiences.
* [analyticsListCustomProperties](#analyticslistcustomproperties) - Get list of custom properties.
* [analyticsListDeviceProperties](#analyticslistdeviceproperties) - Get list of device properties.
* [analyticsListDevicePropertyValues](#analyticslistdevicepropertyvalues) - Get list of device property values.
* [analyticsLogFlow](#analyticslogflow) - Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
* [analyticsModelCounts](#analyticsmodelcounts) - Models in the time range.
* [analyticsOperatingSystemCounts](#analyticsoperatingsystemcounts) - OSes in the time range.
* [analyticsPerDeviceCounts](#analyticsperdevicecounts) - Count of sessions per device in the time range.
* [analyticsPlaceCounts](#analyticsplacecounts) - Places in the time range.
* [analyticsSessionCounts](#analyticssessioncounts) - Count of sessions in the time range.
* [analyticsSessionDurationsDistribution](#analyticssessiondurationsdistribution) - Gets session duration.
* [analyticsTestAudience](#analyticstestaudience) - Tests audience definition.
* [analyticsVersions](#analyticsversions) - Count of active versions in the time range ordered by version.
* [appBlockLogs](#appblocklogs) - **Warning, this operation is not reversible.** 

A successful call to this API will permanently stop ingesting any logs received via SDK by app_id, and cannot be restored. We advise caution when using this API, it is designed to permanently disable an app_id.

* [crashesListSessionLogs](#crasheslistsessionlogs) - Get session logs by crash ID
* [devicesBlockLogs](#devicesblocklogs) - **Warning, this operation is not reversible.**

 A successful call to this API will permanently stop ingesting any logs received via SDK for the given installation ID, and cannot be restored. We advise caution when using this API, it is designed to permanently disable collection from a specific installation of the app on a device, usually following the request from a user.


## analyticsAudienceNameExists

Returns whether audience definition exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsAudienceNameExistsRequest;
import org.openapis.openapi.models.operations.AnalyticsAudienceNameExistsResponse;
import org.openapis.openapi.models.operations.AnalyticsAudienceNameExistsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsAudienceNameExistsRequest req = new AnalyticsAudienceNameExistsRequest("nulla", "fugit", "porro");            

            AnalyticsAudienceNameExistsResponse res = sdk.analytics.analyticsAudienceNameExists(req, new AnalyticsAudienceNameExistsSecurity("maiores") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~analyticsCrashCounts~~

Count of crashes by day in the time range based the selected versions. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsCrashCountsRequest;
import org.openapis.openapi.models.operations.AnalyticsCrashCountsResponse;
import org.openapis.openapi.models.operations.AnalyticsCrashCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsCrashCountsRequest req = new AnalyticsCrashCountsRequest("doloribus", "iusto", OffsetDateTime.parse("2021-07-05T08:33:16.995Z")) {{
                end = OffsetDateTime.parse("2022-05-12T14:13:14.359Z");
                versions = new String[]{{
                    add("ipsam"),
                    add("ea"),
                }};
            }};            

            AnalyticsCrashCountsResponse res = sdk.analytics.analyticsCrashCounts(req, new AnalyticsCrashCountsSecurity("aspernatur") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsCrashCounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~analyticsCrashFreeDevicePercentages~~

Percentage of crash-free device by day in the time range based on the selected versions. Api will return -1 if crash devices is greater than active devices.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsCrashFreeDevicePercentagesRequest;
import org.openapis.openapi.models.operations.AnalyticsCrashFreeDevicePercentagesResponse;
import org.openapis.openapi.models.operations.AnalyticsCrashFreeDevicePercentagesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsCrashFreeDevicePercentagesRequest req = new AnalyticsCrashFreeDevicePercentagesRequest("vel", "possimus", OffsetDateTime.parse("2022-10-23T16:55:55.380Z"), "ex") {{
                end = OffsetDateTime.parse("2022-10-04T22:05:21.038Z");
            }};            

            AnalyticsCrashFreeDevicePercentagesResponse res = sdk.analytics.analyticsCrashFreeDevicePercentages(req, new AnalyticsCrashFreeDevicePercentagesSecurity("dolor") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsCrashFreeDevicePercentages200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~analyticsCrashGroupCounts~~

Count of crashes by day in the time range of the selected crash group with selected version. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupCountsRequest;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupCountsResponse;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsCrashGroupCountsRequest req = new AnalyticsCrashGroupCountsRequest("maiores", "quasi", "ex", OffsetDateTime.parse("2021-04-17T17:08:28.312Z"), "voluptatibus") {{
                end = OffsetDateTime.parse("2022-01-15T07:05:18.296Z");
            }};            

            AnalyticsCrashGroupCountsResponse res = sdk.analytics.analyticsCrashGroupCounts(req, new AnalyticsCrashGroupCountsSecurity("quisquam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsCrashGroupCounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~analyticsCrashGroupModelCounts~~

Top models of the selected crash group with selected version. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupModelCountsRequest;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupModelCountsResponse;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupModelCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsCrashGroupModelCountsRequest req = new AnalyticsCrashGroupModelCountsRequest("saepe", "ea", "impedit", "corporis") {{
                dollarTop = 333145L;
            }};            

            AnalyticsCrashGroupModelCountsResponse res = sdk.analytics.analyticsCrashGroupModelCounts(req, new AnalyticsCrashGroupModelCountsSecurity("aliquid") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsCrashGroupModelCounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~analyticsCrashGroupOperatingSystemCounts~~

Top OSes of the selected crash group with selected version. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupOperatingSystemCountsRequest;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupOperatingSystemCountsResponse;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupOperatingSystemCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsCrashGroupOperatingSystemCountsRequest req = new AnalyticsCrashGroupOperatingSystemCountsRequest("inventore", "magnam", "ea", "quo") {{
                dollarTop = 232234L;
            }};            

            AnalyticsCrashGroupOperatingSystemCountsResponse res = sdk.analytics.analyticsCrashGroupOperatingSystemCounts(req, new AnalyticsCrashGroupOperatingSystemCountsSecurity("recusandae") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsCrashGroupOperatingSystemCounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~analyticsCrashGroupTotals~~

Overall crashes and affected users count of the selected crash group with selected version. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupTotalsRequest;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupTotalsResponse;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupTotalsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsCrashGroupTotalsRequest req = new AnalyticsCrashGroupTotalsRequest("aspernatur", "minima", "eaque", "a");            

            AnalyticsCrashGroupTotalsResponse res = sdk.analytics.analyticsCrashGroupTotals(req, new AnalyticsCrashGroupTotalsSecurity("libero") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsCrashGroupTotals200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsCrashGroupsTotals

Overall crashes and affected users count of the selected crash groups with selected versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupsTotalsRequest;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupsTotalsRequestBody;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupsTotalsRequestBodyCrashGroups;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupsTotalsResponse;
import org.openapis.openapi.models.operations.AnalyticsCrashGroupsTotalsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsCrashGroupsTotalsRequest req = new AnalyticsCrashGroupsTotalsRequest(                new AnalyticsCrashGroupsTotalsRequestBody(                new org.openapis.openapi.models.operations.AnalyticsCrashGroupsTotalsRequestBodyCrashGroups[]{{
                                                add(new AnalyticsCrashGroupsTotalsRequestBodyCrashGroups() {{
                                                    appVersion = "aut";
                                                    crashGroupId = "deleniti";
                                                }}),
                                            }});, "impedit", "aliquam");            

            AnalyticsCrashGroupsTotalsResponse res = sdk.analytics.analyticsCrashGroupsTotals(req, new AnalyticsCrashGroupsTotalsSecurity("fugit") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsCrashGroupsTotals200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsCreateOrUpdateAudience

Creates or updates audience definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsCreateOrUpdateAudienceRequest;
import org.openapis.openapi.models.operations.AnalyticsCreateOrUpdateAudienceRequestBody;
import org.openapis.openapi.models.operations.AnalyticsCreateOrUpdateAudienceRequestBodyCustomPropertiesEnum;
import org.openapis.openapi.models.operations.AnalyticsCreateOrUpdateAudienceResponse;
import org.openapis.openapi.models.operations.AnalyticsCreateOrUpdateAudienceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsCreateOrUpdateAudienceRequest req = new AnalyticsCreateOrUpdateAudienceRequest(                new AnalyticsCreateOrUpdateAudienceRequestBody("accusamus") {{
                                customProperties = new java.util.HashMap<String, org.openapis.openapi.models.operations.AnalyticsCreateOrUpdateAudienceRequestBodyCustomPropertiesEnum>() {{
                                    put("non", AnalyticsCreateOrUpdateAudienceRequestBodyCustomPropertiesEnum.STRING);
                                }};
                                description = "dolorum";
                                enabled = false;
                            }};, "laborum", "placeat", "velit");            

            AnalyticsCreateOrUpdateAudienceResponse res = sdk.analytics.analyticsCreateOrUpdateAudience(req, new AnalyticsCreateOrUpdateAudienceSecurity("eum") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsCreateOrUpdateAudience200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsDeleteAudience

Deletes audience definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsDeleteAudienceRequest;
import org.openapis.openapi.models.operations.AnalyticsDeleteAudienceResponse;
import org.openapis.openapi.models.operations.AnalyticsDeleteAudienceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsDeleteAudienceRequest req = new AnalyticsDeleteAudienceRequest("autem", "nobis", "quas");            

            AnalyticsDeleteAudienceResponse res = sdk.analytics.analyticsDeleteAudience(req, new AnalyticsDeleteAudienceSecurity("assumenda") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsDeviceCounts

Count of active devices by interval in the time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsDeviceCountsRequest;
import org.openapis.openapi.models.operations.AnalyticsDeviceCountsResponse;
import org.openapis.openapi.models.operations.AnalyticsDeviceCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsDeviceCountsRequest req = new AnalyticsDeviceCountsRequest("nulla", "voluptas", OffsetDateTime.parse("2022-10-22T12:27:01.822Z")) {{
                appBuild = "tempora";
                end = OffsetDateTime.parse("2022-11-14T00:12:37.683Z");
                versions = new String[]{{
                    add("ipsa"),
                    add("molestiae"),
                    add("magnam"),
                }};
            }};            

            AnalyticsDeviceCountsResponse res = sdk.analytics.analyticsDeviceCounts(req, new AnalyticsDeviceCountsSecurity("odio") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsDeviceCounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsDistributionReleaseCounts

Count of total downloads for the provided distribution releases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsDistributionReleaseCountsRequest;
import org.openapis.openapi.models.operations.AnalyticsDistributionReleaseCountsRequestBody;
import org.openapis.openapi.models.operations.AnalyticsDistributionReleaseCountsRequestBodyReleases;
import org.openapis.openapi.models.operations.AnalyticsDistributionReleaseCountsResponse;
import org.openapis.openapi.models.operations.AnalyticsDistributionReleaseCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsDistributionReleaseCountsRequest req = new AnalyticsDistributionReleaseCountsRequest(                new AnalyticsDistributionReleaseCountsRequestBody(                new org.openapis.openapi.models.operations.AnalyticsDistributionReleaseCountsRequestBodyReleases[]{{
                                                add(new AnalyticsDistributionReleaseCountsRequestBodyReleases("rem") {{
                                                    distributionGroup = "esse";
                                                    release = "esse";
                                                }}),
                                                add(new AnalyticsDistributionReleaseCountsRequestBodyReleases("quidem") {{
                                                    distributionGroup = "fuga";
                                                    release = "reprehenderit";
                                                }}),
                                            }});, "fugiat", "ut");            

            AnalyticsDistributionReleaseCountsResponse res = sdk.analytics.analyticsDistributionReleaseCounts(req, new AnalyticsDistributionReleaseCountsSecurity("eum") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsDistributionReleaseCounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsEventCount

Count of events by interval in the time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsEventCountRequest;
import org.openapis.openapi.models.operations.AnalyticsEventCountResponse;
import org.openapis.openapi.models.operations.AnalyticsEventCountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsEventCountRequest req = new AnalyticsEventCountRequest("suscipit", "assumenda", "eos", OffsetDateTime.parse("2021-06-04T08:40:57.100Z")) {{
                end = OffsetDateTime.parse("2022-12-11T06:00:38.230Z");
                versions = new String[]{{
                    add("quidem"),
                    add("neque"),
                    add("quo"),
                }};
            }};            

            AnalyticsEventCountResponse res = sdk.analytics.analyticsEventCount(req, new AnalyticsEventCountSecurity("illum") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsEventCount200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsEventDeviceCount

Count of devices for an event by interval in the time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsEventDeviceCountRequest;
import org.openapis.openapi.models.operations.AnalyticsEventDeviceCountResponse;
import org.openapis.openapi.models.operations.AnalyticsEventDeviceCountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsEventDeviceCountRequest req = new AnalyticsEventDeviceCountRequest("quo", "fuga", "eius", OffsetDateTime.parse("2022-08-17T13:23:48.206Z")) {{
                end = OffsetDateTime.parse("2022-05-31T12:37:37.443Z");
                versions = new String[]{{
                    add("tempora"),
                }};
            }};            

            AnalyticsEventDeviceCountResponse res = sdk.analytics.analyticsEventDeviceCount(req, new AnalyticsEventDeviceCountSecurity("debitis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsEventDeviceCount200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsEventPerDeviceCount

Count of events per device by interval in the time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsEventPerDeviceCountRequest;
import org.openapis.openapi.models.operations.AnalyticsEventPerDeviceCountResponse;
import org.openapis.openapi.models.operations.AnalyticsEventPerDeviceCountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsEventPerDeviceCountRequest req = new AnalyticsEventPerDeviceCountRequest("ipsam", "aspernatur", "sequi", OffsetDateTime.parse("2021-08-15T10:59:14.485Z")) {{
                end = OffsetDateTime.parse("2022-11-13T03:35:18.820Z");
                versions = new String[]{{
                    add("quod"),
                    add("dignissimos"),
                    add("inventore"),
                }};
            }};            

            AnalyticsEventPerDeviceCountResponse res = sdk.analytics.analyticsEventPerDeviceCount(req, new AnalyticsEventPerDeviceCountSecurity("nihil") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsEventPerDeviceCount200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsEventPerSessionCount

Count of events per session by interval in the time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsEventPerSessionCountRequest;
import org.openapis.openapi.models.operations.AnalyticsEventPerSessionCountResponse;
import org.openapis.openapi.models.operations.AnalyticsEventPerSessionCountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsEventPerSessionCountRequest req = new AnalyticsEventPerSessionCountRequest("totam", "accusamus", "aliquam", OffsetDateTime.parse("2022-06-04T04:43:25.138Z")) {{
                end = OffsetDateTime.parse("2022-01-15T19:21:50.024Z");
                versions = new String[]{{
                    add("deserunt"),
                }};
            }};            

            AnalyticsEventPerSessionCountResponse res = sdk.analytics.analyticsEventPerSessionCount(req, new AnalyticsEventPerSessionCountSecurity("molestiae") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsEventPerSessionCount200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsEventProperties

Event properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsEventPropertiesRequest;
import org.openapis.openapi.models.operations.AnalyticsEventPropertiesResponse;
import org.openapis.openapi.models.operations.AnalyticsEventPropertiesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsEventPropertiesRequest req = new AnalyticsEventPropertiesRequest("accusantium", "porro", "eum");            

            AnalyticsEventPropertiesResponse res = sdk.analytics.analyticsEventProperties(req, new AnalyticsEventPropertiesSecurity("quas") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsEventProperties200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsEventPropertyCounts

Event properties value counts during the time range in descending order.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsEventPropertyCountsRequest;
import org.openapis.openapi.models.operations.AnalyticsEventPropertyCountsResponse;
import org.openapis.openapi.models.operations.AnalyticsEventPropertyCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsEventPropertyCountsRequest req = new AnalyticsEventPropertyCountsRequest("praesentium", "consequuntur", "deleniti", "fugit", OffsetDateTime.parse("2021-09-13T21:24:27.316Z")) {{
                dollarTop = 277596L;
                end = OffsetDateTime.parse("2022-09-28T22:21:45.403Z");
                versions = new String[]{{
                    add("nisi"),
                    add("fugit"),
                }};
            }};            

            AnalyticsEventPropertyCountsResponse res = sdk.analytics.analyticsEventPropertyCounts(req, new AnalyticsEventPropertyCountsSecurity("sapiente") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsEventPropertyCounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsEvents

Count of active events in the time range ordered by event.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsEventsDollarInlinecountEnum;
import org.openapis.openapi.models.operations.AnalyticsEventsRequest;
import org.openapis.openapi.models.operations.AnalyticsEventsResponse;
import org.openapis.openapi.models.operations.AnalyticsEventsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsEventsRequest req = new AnalyticsEventsRequest("consequuntur", "ratione", OffsetDateTime.parse("2022-02-05T01:06:02.008Z")) {{
                dollarInlinecount = AnalyticsEventsDollarInlinecountEnum.NONE;
                dollarOrderby = "atque";
                dollarSkip = 92260L;
                dollarTop = 456911L;
                end = OffsetDateTime.parse("2020-05-10T03:57:05.694Z");
                eventName = new String[]{{
                    add("esse"),
                }};
                versions = new String[]{{
                    add("nam"),
                    add("vero"),
                    add("aliquid"),
                    add("quasi"),
                }};
            }};            

            AnalyticsEventsResponse res = sdk.analytics.analyticsEvents(req, new AnalyticsEventsSecurity("saepe") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsEventsDelete

Delete the set of Events with the specified event names.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsEventsDeleteRequest;
import org.openapis.openapi.models.operations.AnalyticsEventsDeleteResponse;
import org.openapis.openapi.models.operations.AnalyticsEventsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsEventsDeleteRequest req = new AnalyticsEventsDeleteRequest("vel", "harum", "molestiae");            

            AnalyticsEventsDeleteResponse res = sdk.analytics.analyticsEventsDelete(req, new AnalyticsEventsDeleteSecurity("rerum") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsEventsDeleteLogs

Delete the set of Events with the specified event names.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsEventsDeleteLogsRequest;
import org.openapis.openapi.models.operations.AnalyticsEventsDeleteLogsResponse;
import org.openapis.openapi.models.operations.AnalyticsEventsDeleteLogsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsEventsDeleteLogsRequest req = new AnalyticsEventsDeleteLogsRequest("occaecati", "minima", "distinctio");            

            AnalyticsEventsDeleteLogsResponse res = sdk.analytics.analyticsEventsDeleteLogs(req, new AnalyticsEventsDeleteLogsSecurity("eligendi") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsGenericLogFlow

Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsGenericLogFlowRequest;
import org.openapis.openapi.models.operations.AnalyticsGenericLogFlowResponse;
import org.openapis.openapi.models.operations.AnalyticsGenericLogFlowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsGenericLogFlowRequest req = new AnalyticsGenericLogFlowRequest("sit", "culpa") {{
                start = OffsetDateTime.parse("2022-07-09T18:50:40.536Z");
            }};            

            AnalyticsGenericLogFlowResponse res = sdk.analytics.analyticsGenericLogFlow(req, new AnalyticsGenericLogFlowSecurity("cumque") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsGenericLogFlow200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsGetAudience

Gets audience definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsGetAudienceRequest;
import org.openapis.openapi.models.operations.AnalyticsGetAudienceResponse;
import org.openapis.openapi.models.operations.AnalyticsGetAudienceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsGetAudienceRequest req = new AnalyticsGetAudienceRequest("consequuntur", "consequatur", "minus");            

            AnalyticsGetAudienceResponse res = sdk.analytics.analyticsGetAudience(req, new AnalyticsGetAudienceSecurity("quaerat") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsGetAudience200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsLanguageCounts

Languages in the time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsLanguageCountsRequest;
import org.openapis.openapi.models.operations.AnalyticsLanguageCountsResponse;
import org.openapis.openapi.models.operations.AnalyticsLanguageCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsLanguageCountsRequest req = new AnalyticsLanguageCountsRequest("sapiente", "consectetur", OffsetDateTime.parse("2022-07-01T05:58:32.179Z")) {{
                dollarTop = 590984L;
                end = OffsetDateTime.parse("2020-06-05T19:02:55.998Z");
                versions = new String[]{{
                    add("esse"),
                    add("quasi"),
                    add("a"),
                }};
            }};            

            AnalyticsLanguageCountsResponse res = sdk.analytics.analyticsLanguageCounts(req, new AnalyticsLanguageCountsSecurity("error") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsLanguageCounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsListAudiences

Get list of audiences.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsListAudiencesRequest;
import org.openapis.openapi.models.operations.AnalyticsListAudiencesResponse;
import org.openapis.openapi.models.operations.AnalyticsListAudiencesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsListAudiencesRequest req = new AnalyticsListAudiencesRequest("sint", "pariatur") {{
                includeDisabled = false;
            }};            

            AnalyticsListAudiencesResponse res = sdk.analytics.analyticsListAudiences(req, new AnalyticsListAudiencesSecurity("possimus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsListAudiences200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsListCustomProperties

Get list of custom properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsListCustomPropertiesRequest;
import org.openapis.openapi.models.operations.AnalyticsListCustomPropertiesResponse;
import org.openapis.openapi.models.operations.AnalyticsListCustomPropertiesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsListCustomPropertiesRequest req = new AnalyticsListCustomPropertiesRequest("quia", "eveniet");            

            AnalyticsListCustomPropertiesResponse res = sdk.analytics.analyticsListCustomProperties(req, new AnalyticsListCustomPropertiesSecurity("asperiores") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsListCustomProperties200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsListDeviceProperties

Get list of device properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsListDevicePropertiesRequest;
import org.openapis.openapi.models.operations.AnalyticsListDevicePropertiesResponse;
import org.openapis.openapi.models.operations.AnalyticsListDevicePropertiesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsListDevicePropertiesRequest req = new AnalyticsListDevicePropertiesRequest("facere", "veritatis");            

            AnalyticsListDevicePropertiesResponse res = sdk.analytics.analyticsListDeviceProperties(req, new AnalyticsListDevicePropertiesSecurity("consequuntur") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsListDeviceProperties200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsListDevicePropertyValues

Get list of device property values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsListDevicePropertyValuesRequest;
import org.openapis.openapi.models.operations.AnalyticsListDevicePropertyValuesResponse;
import org.openapis.openapi.models.operations.AnalyticsListDevicePropertyValuesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsListDevicePropertyValuesRequest req = new AnalyticsListDevicePropertyValuesRequest("quasi", "similique", "culpa") {{
                contains = "aliquid";
            }};            

            AnalyticsListDevicePropertyValuesResponse res = sdk.analytics.analyticsListDevicePropertyValues(req, new AnalyticsListDevicePropertyValuesSecurity("tenetur") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsListDevicePropertyValues200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsLogFlow

Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsLogFlowRequest;
import org.openapis.openapi.models.operations.AnalyticsLogFlowResponse;
import org.openapis.openapi.models.operations.AnalyticsLogFlowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsLogFlowRequest req = new AnalyticsLogFlowRequest("quae", "earum") {{
                start = OffsetDateTime.parse("2022-07-21T16:57:57.397Z");
            }};            

            AnalyticsLogFlowResponse res = sdk.analytics.analyticsLogFlow(req, new AnalyticsLogFlowSecurity("eius") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsLogFlow200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsModelCounts

Models in the time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsModelCountsRequest;
import org.openapis.openapi.models.operations.AnalyticsModelCountsResponse;
import org.openapis.openapi.models.operations.AnalyticsModelCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsModelCountsRequest req = new AnalyticsModelCountsRequest("libero", "illum", OffsetDateTime.parse("2022-12-07T16:30:09.640Z")) {{
                dollarTop = 306986L;
                end = OffsetDateTime.parse("2022-08-22T20:24:31.399Z");
                versions = new String[]{{
                    add("reprehenderit"),
                    add("ullam"),
                }};
            }};            

            AnalyticsModelCountsResponse res = sdk.analytics.analyticsModelCounts(req, new AnalyticsModelCountsSecurity("nisi") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsModelCounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsOperatingSystemCounts

OSes in the time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsOperatingSystemCountsRequest;
import org.openapis.openapi.models.operations.AnalyticsOperatingSystemCountsResponse;
import org.openapis.openapi.models.operations.AnalyticsOperatingSystemCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsOperatingSystemCountsRequest req = new AnalyticsOperatingSystemCountsRequest("aut", "voluptatum", OffsetDateTime.parse("2022-02-26T10:39:59.909Z")) {{
                dollarTop = 401259L;
                end = OffsetDateTime.parse("2021-02-21T14:48:51.903Z");
                versions = new String[]{{
                    add("architecto"),
                    add("omnis"),
                    add("tenetur"),
                }};
            }};            

            AnalyticsOperatingSystemCountsResponse res = sdk.analytics.analyticsOperatingSystemCounts(req, new AnalyticsOperatingSystemCountsSecurity("quasi") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsOperatingSystemCounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsPerDeviceCounts

Count of sessions per device in the time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsPerDeviceCountsRequest;
import org.openapis.openapi.models.operations.AnalyticsPerDeviceCountsResponse;
import org.openapis.openapi.models.operations.AnalyticsPerDeviceCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsPerDeviceCountsRequest req = new AnalyticsPerDeviceCountsRequest("at", "et", OffsetDateTime.parse("2022-12-11T13:44:20.631Z")) {{
                end = OffsetDateTime.parse("2022-11-30T09:58:30.487Z");
                versions = new String[]{{
                    add("adipisci"),
                }};
            }};            

            AnalyticsPerDeviceCountsResponse res = sdk.analytics.analyticsPerDeviceCounts(req, new AnalyticsPerDeviceCountsSecurity("iste") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsPerDeviceCounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsPlaceCounts

Places in the time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsPlaceCountsRequest;
import org.openapis.openapi.models.operations.AnalyticsPlaceCountsResponse;
import org.openapis.openapi.models.operations.AnalyticsPlaceCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsPlaceCountsRequest req = new AnalyticsPlaceCountsRequest("temporibus", "accusantium", OffsetDateTime.parse("2022-12-20T14:34:53.149Z")) {{
                dollarTop = 513075L;
                end = OffsetDateTime.parse("2022-05-08T19:28:18.512Z");
                versions = new String[]{{
                    add("corrupti"),
                }};
            }};            

            AnalyticsPlaceCountsResponse res = sdk.analytics.analyticsPlaceCounts(req, new AnalyticsPlaceCountsSecurity("non") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsPlaceCounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsSessionCounts

Count of sessions in the time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsSessionCountsRequest;
import org.openapis.openapi.models.operations.AnalyticsSessionCountsResponse;
import org.openapis.openapi.models.operations.AnalyticsSessionCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsSessionCountsRequest req = new AnalyticsSessionCountsRequest("voluptatem", "dolor", OffsetDateTime.parse("2022-06-30T04:05:24.454Z")) {{
                end = OffsetDateTime.parse("2022-08-10T11:52:05.487Z");
                versions = new String[]{{
                    add("aut"),
                    add("dignissimos"),
                }};
            }};            

            AnalyticsSessionCountsResponse res = sdk.analytics.analyticsSessionCounts(req, new AnalyticsSessionCountsSecurity("dicta") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsSessionCounts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsSessionDurationsDistribution

Gets session duration.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsSessionDurationsDistributionRequest;
import org.openapis.openapi.models.operations.AnalyticsSessionDurationsDistributionResponse;
import org.openapis.openapi.models.operations.AnalyticsSessionDurationsDistributionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsSessionDurationsDistributionRequest req = new AnalyticsSessionDurationsDistributionRequest("maiores", "natus", OffsetDateTime.parse("2022-01-10T09:30:55.914Z")) {{
                end = OffsetDateTime.parse("2022-01-04T12:34:39.877Z");
                versions = new String[]{{
                    add("ea"),
                }};
            }};            

            AnalyticsSessionDurationsDistributionResponse res = sdk.analytics.analyticsSessionDurationsDistribution(req, new AnalyticsSessionDurationsDistributionSecurity("quaerat") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsSessionDurationsDistribution200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsTestAudience

Tests audience definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsTestAudienceRequest;
import org.openapis.openapi.models.operations.AnalyticsTestAudienceRequestBody;
import org.openapis.openapi.models.operations.AnalyticsTestAudienceRequestBodyCustomPropertiesEnum;
import org.openapis.openapi.models.operations.AnalyticsTestAudienceResponse;
import org.openapis.openapi.models.operations.AnalyticsTestAudienceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsTestAudienceRequest req = new AnalyticsTestAudienceRequest(                new AnalyticsTestAudienceRequestBody("consequuntur") {{
                                customProperties = new java.util.HashMap<String, org.openapis.openapi.models.operations.AnalyticsTestAudienceRequestBodyCustomPropertiesEnum>() {{
                                    put("officia", AnalyticsTestAudienceRequestBodyCustomPropertiesEnum.DATE_TIME);
                                    put("dignissimos", AnalyticsTestAudienceRequestBodyCustomPropertiesEnum.BOOLEAN_);
                                    put("asperiores", AnalyticsTestAudienceRequestBodyCustomPropertiesEnum.NUMBER);
                                    put("quae", AnalyticsTestAudienceRequestBodyCustomPropertiesEnum.NUMBER);
                                }};
                                description = "porro";
                                enabled = false;
                            }};, "quod", "labore");            

            AnalyticsTestAudienceResponse res = sdk.analytics.analyticsTestAudience(req, new AnalyticsTestAudienceSecurity("ab") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsTestAudience200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsVersions

Count of active versions in the time range ordered by version.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsVersionsRequest;
import org.openapis.openapi.models.operations.AnalyticsVersionsResponse;
import org.openapis.openapi.models.operations.AnalyticsVersionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsVersionsRequest req = new AnalyticsVersionsRequest("adipisci", "fuga", OffsetDateTime.parse("2022-03-29T01:37:24.454Z")) {{
                dollarTop = 246063L;
                end = OffsetDateTime.parse("2021-09-01T22:08:53.618Z");
                versions = new String[]{{
                    add("totam"),
                    add("fugiat"),
                    add("vel"),
                    add("ducimus"),
                }};
            }};            

            AnalyticsVersionsResponse res = sdk.analytics.analyticsVersions(req, new AnalyticsVersionsSecurity("quos") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.analyticsVersions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appBlockLogs

**Warning, this operation is not reversible.** 

A successful call to this API will permanently stop ingesting any logs received via SDK by app_id, and cannot be restored. We advise caution when using this API, it is designed to permanently disable an app_id.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppBlockLogsRequest;
import org.openapis.openapi.models.operations.AppBlockLogsResponse;
import org.openapis.openapi.models.operations.AppBlockLogsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppBlockLogsRequest req = new AppBlockLogsRequest("vel", "labore");            

            AppBlockLogsResponse res = sdk.analytics.appBlockLogs(req, new AppBlockLogsSecurity("possimus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appBlockLogs200ApplicationJSONStringString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## crashesListSessionLogs

Get session logs by crash ID

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashesListSessionLogsRequest;
import org.openapis.openapi.models.operations.CrashesListSessionLogsResponse;
import org.openapis.openapi.models.operations.CrashesListSessionLogsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashesListSessionLogsRequest req = new CrashesListSessionLogsRequest("facilis", "cum", "commodi") {{
                date = OffsetDateTime.parse("2022-08-22T09:37:14.602Z");
            }};            

            CrashesListSessionLogsResponse res = sdk.analytics.crashesListSessionLogs(req, new CrashesListSessionLogsSecurity("reiciendis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crashesListSessionLogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## devicesBlockLogs

**Warning, this operation is not reversible.**

 A successful call to this API will permanently stop ingesting any logs received via SDK for the given installation ID, and cannot be restored. We advise caution when using this API, it is designed to permanently disable collection from a specific installation of the app on a device, usually following the request from a user.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesBlockLogsRequest;
import org.openapis.openapi.models.operations.DevicesBlockLogsResponse;
import org.openapis.openapi.models.operations.DevicesBlockLogsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesBlockLogsRequest req = new DevicesBlockLogsRequest("assumenda", "nemo", "recusandae");            

            DevicesBlockLogsResponse res = sdk.analytics.devicesBlockLogs(req, new DevicesBlockLogsSecurity("aliquid") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.devicesBlockLogs200ApplicationJSONStringString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
