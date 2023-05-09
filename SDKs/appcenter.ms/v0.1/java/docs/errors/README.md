# errors

### Available Operations

* [errorsAppBuildsList](#errorsappbuildslist) - List of app builds
* [errorsAvailableVersions](#errorsavailableversions) - Get all available versions in the time range.
* [errorsCountsPerDay](#errorscountsperday) - Count of crashes or errors by day in the time range based the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror.
* [errorsDeleteError](#errorsdeleteerror) - Delete a specific error and related attachments and blobs for an app. Searchable data will not be deleted immediately and may take up to 30 days.
* [errorsErrorAttachmentLocation](#errorserrorattachmentlocation) - Error attachment location.
* [errorsErrorAttachmentText](#errorserrorattachmenttext) - Error attachment text.
* [errorsErrorAttachments](#errorserrorattachments) - List error attachments.
* [errorsErrorDownload](#errorserrordownload) - Download details for a specific error.
* [errorsErrorFreeDevicePercentages](#errorserrorfreedevicepercentages) - Percentage of error-free devices by day in the time range based on the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror. API will return -1 if crash devices is greater than active devices
* [errorsErrorGroupsSearch](#errorserrorgroupssearch) - Error groups list based on search parameters
* [errorsErrorLocation](#errorserrorlocation) - Error location.
* [errorsErrorSearch](#errorserrorsearch) - Errors list based on search parameters
* [errorsErrorStackTrace](#errorserrorstacktrace) - Error Stacktrace details.
* [errorsGetErrorDetails](#errorsgeterrordetails) - Error details.
* [errorsGroupCountsPerDay](#errorsgroupcountsperday) - Count of errors by day in the time range of the selected error group with selected version
* [errorsGroupDetails](#errorsgroupdetails) - Error group details
* [errorsGroupErrorFreeDevicePercentages](#errorsgrouperrorfreedevicepercentages) - Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is greater than active devices
* [errorsGroupErrorStackTrace](#errorsgrouperrorstacktrace) - Gets the stack trace for the error group.
* [errorsGroupList](#errorsgrouplist) - List of error groups
* [errorsGroupModelCounts](#errorsgroupmodelcounts) - Top models of the selected error group.
* [errorsGroupOperatingSystemCounts](#errorsgroupoperatingsystemcounts) - Top OSes of the selected error group.
* [errorsLatestErrorDetails](#errorslatesterrordetails) - Latest error details.
* [errorsListForGroup](#errorslistforgroup) - Get all errors for group
* [errorsListSessionLogs](#errorslistsessionlogs) - Get session logs by error ID
* [errorsUpdateState](#errorsupdatestate) - Update error group state
* [errorsGetRetentionSettings](#errorsgetretentionsettings) - gets the retention settings in days

## errorsAppBuildsList

List of app builds

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsAppBuildsListErrorTypeEnum;
import org.openapis.openapi.models.operations.ErrorsAppBuildsListRequest;
import org.openapis.openapi.models.operations.ErrorsAppBuildsListResponse;
import org.openapis.openapi.models.operations.ErrorsAppBuildsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsAppBuildsListRequest req = new ErrorsAppBuildsListRequest("modi", "itaque", OffsetDateTime.parse("2022-03-15T19:59:59.350Z"), "consequuntur") {{
                dollarTop = 828147L;
                end = OffsetDateTime.parse("2020-01-18T07:20:38.221Z");
                errorType = ErrorsAppBuildsListErrorTypeEnum.HANDLED_ERROR;
            }};            

            ErrorsAppBuildsListResponse res = sdk.errors.errorsAppBuildsList(req, new ErrorsAppBuildsListSecurity("porro") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsAppBuildsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsAvailableVersions

Get all available versions in the time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsAvailableVersionsDollarInlinecountEnum;
import org.openapis.openapi.models.operations.ErrorsAvailableVersionsErrorTypeEnum;
import org.openapis.openapi.models.operations.ErrorsAvailableVersionsRequest;
import org.openapis.openapi.models.operations.ErrorsAvailableVersionsResponse;
import org.openapis.openapi.models.operations.ErrorsAvailableVersionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsAvailableVersionsRequest req = new ErrorsAvailableVersionsRequest("accusamus", "totam", OffsetDateTime.parse("2022-10-20T15:34:05.164Z")) {{
                dollarFilter = "sint";
                dollarInlinecount = ErrorsAvailableVersionsDollarInlinecountEnum.ALLPAGES;
                dollarSkip = 458412L;
                dollarTop = 438256L;
                end = OffsetDateTime.parse("2022-10-18T23:30:23.407Z");
                errorType = ErrorsAvailableVersionsErrorTypeEnum.HANDLED_ERROR;
            }};            

            ErrorsAvailableVersionsResponse res = sdk.errors.errorsAvailableVersions(req, new ErrorsAvailableVersionsSecurity("vel") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsAvailableVersions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsCountsPerDay

Count of crashes or errors by day in the time range based the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsCountsPerDayErrorTypeEnum;
import org.openapis.openapi.models.operations.ErrorsCountsPerDayRequest;
import org.openapis.openapi.models.operations.ErrorsCountsPerDayResponse;
import org.openapis.openapi.models.operations.ErrorsCountsPerDaySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsCountsPerDayRequest req = new ErrorsCountsPerDayRequest("neque", "corporis", OffsetDateTime.parse("2022-11-02T06:07:32.455Z")) {{
                appBuild = "officia";
                end = OffsetDateTime.parse("2022-04-14T15:33:14.129Z");
                errorType = ErrorsCountsPerDayErrorTypeEnum.UNHANDLED_ERROR;
                version = "ipsa";
            }};            

            ErrorsCountsPerDayResponse res = sdk.errors.errorsCountsPerDay(req, new ErrorsCountsPerDaySecurity("rem") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsCountsPerDay200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsDeleteError

Delete a specific error and related attachments and blobs for an app. Searchable data will not be deleted immediately and may take up to 30 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsDeleteErrorRequest;
import org.openapis.openapi.models.operations.ErrorsDeleteErrorResponse;
import org.openapis.openapi.models.operations.ErrorsDeleteErrorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsDeleteErrorRequest req = new ErrorsDeleteErrorRequest("maiores", "accusantium", "veniam", "saepe");            

            ErrorsDeleteErrorResponse res = sdk.errors.errorsDeleteError(req, new ErrorsDeleteErrorSecurity("neque") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsDeleteError200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsErrorAttachmentLocation

Error attachment location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsErrorAttachmentLocationRequest;
import org.openapis.openapi.models.operations.ErrorsErrorAttachmentLocationResponse;
import org.openapis.openapi.models.operations.ErrorsErrorAttachmentLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsErrorAttachmentLocationRequest req = new ErrorsErrorAttachmentLocationRequest("facere", "aliquam", "quos", "doloribus");            

            ErrorsErrorAttachmentLocationResponse res = sdk.errors.errorsErrorAttachmentLocation(req, new ErrorsErrorAttachmentLocationSecurity("fugiat") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsErrorAttachmentLocation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsErrorAttachmentText

Error attachment text.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsErrorAttachmentTextRequest;
import org.openapis.openapi.models.operations.ErrorsErrorAttachmentTextResponse;
import org.openapis.openapi.models.operations.ErrorsErrorAttachmentTextSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsErrorAttachmentTextRequest req = new ErrorsErrorAttachmentTextRequest("est", "delectus", "velit", "vitae");            

            ErrorsErrorAttachmentTextResponse res = sdk.errors.errorsErrorAttachmentText(req, new ErrorsErrorAttachmentTextSecurity("nesciunt") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsErrorAttachmentText200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsErrorAttachments

List error attachments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsErrorAttachmentsRequest;
import org.openapis.openapi.models.operations.ErrorsErrorAttachmentsResponse;
import org.openapis.openapi.models.operations.ErrorsErrorAttachmentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsErrorAttachmentsRequest req = new ErrorsErrorAttachmentsRequest("similique", "illo", "repellat");            

            ErrorsErrorAttachmentsResponse res = sdk.errors.errorsErrorAttachments(req, new ErrorsErrorAttachmentsSecurity("nemo") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsErrorAttachments200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsErrorDownload

Download details for a specific error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsErrorDownloadFormatEnum;
import org.openapis.openapi.models.operations.ErrorsErrorDownloadRequest;
import org.openapis.openapi.models.operations.ErrorsErrorDownloadResponse;
import org.openapis.openapi.models.operations.ErrorsErrorDownloadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsErrorDownloadRequest req = new ErrorsErrorDownloadRequest("doloribus", "possimus", "unde", "incidunt") {{
                format = ErrorsErrorDownloadFormatEnum.JSON;
            }};            

            ErrorsErrorDownloadResponse res = sdk.errors.errorsErrorDownload(req, new ErrorsErrorDownloadSecurity("ipsam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsErrorDownload200ApplicationJSONFileObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsErrorFreeDevicePercentages

Percentage of error-free devices by day in the time range based on the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror. API will return -1 if crash devices is greater than active devices

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsErrorFreeDevicePercentagesErrorTypeEnum;
import org.openapis.openapi.models.operations.ErrorsErrorFreeDevicePercentagesRequest;
import org.openapis.openapi.models.operations.ErrorsErrorFreeDevicePercentagesResponse;
import org.openapis.openapi.models.operations.ErrorsErrorFreeDevicePercentagesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsErrorFreeDevicePercentagesRequest req = new ErrorsErrorFreeDevicePercentagesRequest("cupiditate", "optio", OffsetDateTime.parse("2022-04-21T23:30:19.456Z")) {{
                appBuild = "nesciunt";
                end = OffsetDateTime.parse("2022-01-17T00:21:40.005Z");
                errorType = ErrorsErrorFreeDevicePercentagesErrorTypeEnum.UNHANDLED_ERROR;
                versions = new String[]{{
                    add("debitis"),
                    add("officia"),
                }};
            }};            

            ErrorsErrorFreeDevicePercentagesResponse res = sdk.errors.errorsErrorFreeDevicePercentages(req, new ErrorsErrorFreeDevicePercentagesSecurity("sint") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsErrorFreeDevicePercentages200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsErrorGroupsSearch

Error groups list based on search parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsErrorGroupsSearchOrderEnum;
import org.openapis.openapi.models.operations.ErrorsErrorGroupsSearchRequest;
import org.openapis.openapi.models.operations.ErrorsErrorGroupsSearchResponse;
import org.openapis.openapi.models.operations.ErrorsErrorGroupsSearchSecurity;
import org.openapis.openapi.models.operations.ErrorsErrorGroupsSearchSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsErrorGroupsSearchRequest req = new ErrorsErrorGroupsSearchRequest("ut", "numquam") {{
                dollarSkip = 947822L;
                dollarTop = 236790L;
                filter = "libero";
                order = ErrorsErrorGroupsSearchOrderEnum.DESC;
                q = "minima";
                sort = ErrorsErrorGroupsSearchSortEnum.EXCEPTION_MESSAGE;
            }};            

            ErrorsErrorGroupsSearchResponse res = sdk.errors.errorsErrorGroupsSearch(req, new ErrorsErrorGroupsSearchSecurity("minus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsErrorGroupsSearch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsErrorLocation

Error location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsErrorLocationRequest;
import org.openapis.openapi.models.operations.ErrorsErrorLocationResponse;
import org.openapis.openapi.models.operations.ErrorsErrorLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsErrorLocationRequest req = new ErrorsErrorLocationRequest("ab", "beatae", "hic", "nisi");            

            ErrorsErrorLocationResponse res = sdk.errors.errorsErrorLocation(req, new ErrorsErrorLocationSecurity("quisquam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsErrorLocation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsErrorSearch

Errors list based on search parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsErrorSearchOrderEnum;
import org.openapis.openapi.models.operations.ErrorsErrorSearchRequest;
import org.openapis.openapi.models.operations.ErrorsErrorSearchResponse;
import org.openapis.openapi.models.operations.ErrorsErrorSearchSecurity;
import org.openapis.openapi.models.operations.ErrorsErrorSearchSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsErrorSearchRequest req = new ErrorsErrorSearchRequest("dolor", "ducimus") {{
                dollarSkip = 683727L;
                dollarTop = 326903L;
                filter = "architecto";
                order = ErrorsErrorSearchOrderEnum.DESC;
                q = "aliquid";
                sort = ErrorsErrorSearchSortEnum.ERROR_GROUP_ID;
            }};            

            ErrorsErrorSearchResponse res = sdk.errors.errorsErrorSearch(req, new ErrorsErrorSearchSecurity("incidunt") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsErrorSearch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsErrorStackTrace

Error Stacktrace details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsErrorStackTraceRequest;
import org.openapis.openapi.models.operations.ErrorsErrorStackTraceResponse;
import org.openapis.openapi.models.operations.ErrorsErrorStackTraceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsErrorStackTraceRequest req = new ErrorsErrorStackTraceRequest("adipisci", "praesentium", "dolor", "exercitationem");            

            ErrorsErrorStackTraceResponse res = sdk.errors.errorsErrorStackTrace(req, new ErrorsErrorStackTraceSecurity("expedita") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.diagnosticsStackTrace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsGetErrorDetails

Error details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsGetErrorDetailsRequest;
import org.openapis.openapi.models.operations.ErrorsGetErrorDetailsResponse;
import org.openapis.openapi.models.operations.ErrorsGetErrorDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsGetErrorDetailsRequest req = new ErrorsGetErrorDetailsRequest("facilis", "impedit", "sit", "nemo");            

            ErrorsGetErrorDetailsResponse res = sdk.errors.errorsGetErrorDetails(req, new ErrorsGetErrorDetailsSecurity("culpa") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsGetErrorDetails200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsGroupCountsPerDay

Count of errors by day in the time range of the selected error group with selected version

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsGroupCountsPerDayRequest;
import org.openapis.openapi.models.operations.ErrorsGroupCountsPerDayResponse;
import org.openapis.openapi.models.operations.ErrorsGroupCountsPerDaySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsGroupCountsPerDayRequest req = new ErrorsGroupCountsPerDayRequest("consequuntur", "amet", "deserunt", OffsetDateTime.parse("2022-09-01T12:24:01.476Z")) {{
                end = OffsetDateTime.parse("2020-03-16T04:29:27.854Z");
                version = "a";
            }};            

            ErrorsGroupCountsPerDayResponse res = sdk.errors.errorsGroupCountsPerDay(req, new ErrorsGroupCountsPerDaySecurity("quisquam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsGroupCountsPerDay200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsGroupDetails

Error group details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsGroupDetailsRequest;
import org.openapis.openapi.models.operations.ErrorsGroupDetailsResponse;
import org.openapis.openapi.models.operations.ErrorsGroupDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsGroupDetailsRequest req = new ErrorsGroupDetailsRequest("enim", "doloribus", "assumenda");            

            ErrorsGroupDetailsResponse res = sdk.errors.errorsGroupDetails(req, new ErrorsGroupDetailsSecurity("officiis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsGroupDetails200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsGroupErrorFreeDevicePercentages

Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is greater than active devices

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsGroupErrorFreeDevicePercentagesRequest;
import org.openapis.openapi.models.operations.ErrorsGroupErrorFreeDevicePercentagesResponse;
import org.openapis.openapi.models.operations.ErrorsGroupErrorFreeDevicePercentagesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsGroupErrorFreeDevicePercentagesRequest req = new ErrorsGroupErrorFreeDevicePercentagesRequest("architecto", "alias", "culpa", OffsetDateTime.parse("2022-04-01T20:57:25.298Z")) {{
                end = OffsetDateTime.parse("2022-07-14T04:53:58.786Z");
            }};            

            ErrorsGroupErrorFreeDevicePercentagesResponse res = sdk.errors.errorsGroupErrorFreeDevicePercentages(req, new ErrorsGroupErrorFreeDevicePercentagesSecurity("dicta") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsGroupErrorFreeDevicePercentages200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsGroupErrorStackTrace

Gets the stack trace for the error group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsGroupErrorStackTraceRequest;
import org.openapis.openapi.models.operations.ErrorsGroupErrorStackTraceResponse;
import org.openapis.openapi.models.operations.ErrorsGroupErrorStackTraceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsGroupErrorStackTraceRequest req = new ErrorsGroupErrorStackTraceRequest("vel", "perspiciatis", "debitis");            

            ErrorsGroupErrorStackTraceResponse res = sdk.errors.errorsGroupErrorStackTrace(req, new ErrorsGroupErrorStackTraceSecurity("ullam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.diagnosticsStackTrace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsGroupList

List of error groups

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsGroupListErrorTypeEnum;
import org.openapis.openapi.models.operations.ErrorsGroupListRequest;
import org.openapis.openapi.models.operations.ErrorsGroupListResponse;
import org.openapis.openapi.models.operations.ErrorsGroupListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsGroupListRequest req = new ErrorsGroupListRequest("architecto", "accusantium", OffsetDateTime.parse("2022-12-01T18:00:16.221Z")) {{
                dollarOrderby = "provident";
                dollarTop = 765833L;
                appBuild = "iure";
                end = OffsetDateTime.parse("2020-08-09T10:26:47.376Z");
                errorType = ErrorsGroupListErrorTypeEnum.UNHANDLED_ERROR;
                groupState = "recusandae";
                version = "velit";
            }};            

            ErrorsGroupListResponse res = sdk.errors.errorsGroupList(req, new ErrorsGroupListSecurity("magnam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsGroupList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsGroupModelCounts

Top models of the selected error group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsGroupModelCountsRequest;
import org.openapis.openapi.models.operations.ErrorsGroupModelCountsResponse;
import org.openapis.openapi.models.operations.ErrorsGroupModelCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsGroupModelCountsRequest req = new ErrorsGroupModelCountsRequest("dignissimos", "laboriosam", "sed") {{
                dollarTop = 486272L;
            }};            

            ErrorsGroupModelCountsResponse res = sdk.errors.errorsGroupModelCounts(req, new ErrorsGroupModelCountsSecurity("natus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsGroupModelCounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsGroupOperatingSystemCounts

Top OSes of the selected error group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsGroupOperatingSystemCountsRequest;
import org.openapis.openapi.models.operations.ErrorsGroupOperatingSystemCountsResponse;
import org.openapis.openapi.models.operations.ErrorsGroupOperatingSystemCountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsGroupOperatingSystemCountsRequest req = new ErrorsGroupOperatingSystemCountsRequest("provident", "cum", "doloribus") {{
                dollarTop = 703966L;
            }};            

            ErrorsGroupOperatingSystemCountsResponse res = sdk.errors.errorsGroupOperatingSystemCounts(req, new ErrorsGroupOperatingSystemCountsSecurity("quidem") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsGroupOperatingSystemCounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsLatestErrorDetails

Latest error details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsLatestErrorDetailsRequest;
import org.openapis.openapi.models.operations.ErrorsLatestErrorDetailsResponse;
import org.openapis.openapi.models.operations.ErrorsLatestErrorDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsLatestErrorDetailsRequest req = new ErrorsLatestErrorDetailsRequest("itaque", "laboriosam", "unde");            

            ErrorsLatestErrorDetailsResponse res = sdk.errors.errorsLatestErrorDetails(req, new ErrorsLatestErrorDetailsSecurity("modi") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsLatestErrorDetails200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsListForGroup

Get all errors for group

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsListForGroupRequest;
import org.openapis.openapi.models.operations.ErrorsListForGroupResponse;
import org.openapis.openapi.models.operations.ErrorsListForGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsListForGroupRequest req = new ErrorsListForGroupRequest("perspiciatis", "hic", "cum", OffsetDateTime.parse("2022-04-11T02:08:04.628Z")) {{
                dollarTop = 720266L;
                end = OffsetDateTime.parse("2022-01-28T05:32:22.367Z");
                model = "quod";
                os = "id";
            }};            

            ErrorsListForGroupResponse res = sdk.errors.errorsListForGroup(req, new ErrorsListForGroupSecurity("saepe") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsListForGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsListSessionLogs

Get session logs by error ID

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsListSessionLogsRequest;
import org.openapis.openapi.models.operations.ErrorsListSessionLogsResponse;
import org.openapis.openapi.models.operations.ErrorsListSessionLogsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsListSessionLogsRequest req = new ErrorsListSessionLogsRequest("autem", "quo", "nesciunt") {{
                date = OffsetDateTime.parse("2021-11-24T14:44:53.995Z");
            }};            

            ErrorsListSessionLogsResponse res = sdk.errors.errorsListSessionLogs(req, new ErrorsListSessionLogsSecurity("illum") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsListSessionLogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsUpdateState

Update error group state

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsUpdateStateRequest;
import org.openapis.openapi.models.operations.ErrorsUpdateStateRequestBody;
import org.openapis.openapi.models.operations.ErrorsUpdateStateRequestBodyStateEnum;
import org.openapis.openapi.models.operations.ErrorsUpdateStateResponse;
import org.openapis.openapi.models.operations.ErrorsUpdateStateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsUpdateStateRequest req = new ErrorsUpdateStateRequest(                new ErrorsUpdateStateRequestBody(ErrorsUpdateStateRequestBodyStateEnum.IGNORED) {{
                                annotation = "non";
                            }};, "mollitia", "assumenda", "recusandae");            

            ErrorsUpdateStateResponse res = sdk.errors.errorsUpdateState(req, new ErrorsUpdateStateSecurity("distinctio") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsUpdateState200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## errorsGetRetentionSettings

gets the retention settings in days

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErrorsGetRetentionSettingsRequest;
import org.openapis.openapi.models.operations.ErrorsGetRetentionSettingsResponse;
import org.openapis.openapi.models.operations.ErrorsGetRetentionSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErrorsGetRetentionSettingsRequest req = new ErrorsGetRetentionSettingsRequest("pariatur", "ad");            

            ErrorsGetRetentionSettingsResponse res = sdk.errors.errorsGetRetentionSettings(req, new ErrorsGetRetentionSettingsSecurity("facere") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.errorsGetRetentionSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
