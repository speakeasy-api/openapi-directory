# crash

### Available Operations

* [~~crashGroupsGet~~](#crashgroupsget) - Gets a specific group. :warning: **Deprecated**
* [~~crashGroupsGetStacktrace~~](#crashgroupsgetstacktrace) - Gets a stacktrace for a specific crash. :warning: **Deprecated**
* [~~crashGroupsList~~](#crashgroupslist) - Gets a list of crash groups and whether the list contains all available groups. :warning: **Deprecated**
* [~~crashGroupsUpdate~~](#crashgroupsupdate) - Updates a group. :warning: **Deprecated**
* [~~crashesDelete~~](#crashesdelete) - Delete a specific crash and related attachments and blobs for an app. :warning: **Deprecated**
* [~~crashesGet~~](#crashesget) - Gets a specific crash for an app. :warning: **Deprecated**
* [~~crashesGetAppCrashesInfo~~](#crashesgetappcrashesinfo) - Gets whether the application has any crashes. :warning: **Deprecated**
* [~~crashesGetAppVersions~~](#crashesgetappversions) - Gets a list of application versions. :warning: **Deprecated**
* [~~crashesGetCrashAttachmentLocation~~](#crashesgetcrashattachmentlocation) - Gets the URI location to download crash attachment. :warning: **Deprecated**
* [~~crashesGetCrashTextAttachmentContent~~](#crashesgetcrashtextattachmentcontent) - Gets content of the text attachment. :warning: **Deprecated**
* [~~crashesGetNativeCrash~~](#crashesgetnativecrash) - Gets the native log of a specific crash. :warning: **Deprecated**
* [~~crashesGetNativeCrashDownload~~](#crashesgetnativecrashdownload) - Gets the native log of a specific crash as a text attachment. :warning: **Deprecated**
* [~~crashesGetRawCrashLocation~~](#crashesgetrawcrashlocation) - Gets the URI location to download json of a specific crash. :warning: **Deprecated**
* [~~crashesGetStacktrace~~](#crashesgetstacktrace) - Gets a stacktrace for a specific crash. :warning: **Deprecated**
* [~~crashesList~~](#crasheslist) - Gets all crashes of a group. :warning: **Deprecated**
* [~~crashesListAttachments~~](#crasheslistattachments) - Gets all attachments for a specific crash. :warning: **Deprecated**
* [missingSymbolGroupsGet](#missingsymbolgroupsget) - Gets missing symbol crash group by its id
* [missingSymbolGroupsInfo](#missingsymbolgroupsinfo) - Gets application level statistics for all missing symbol groups
* [missingSymbolGroupsList](#missingsymbolgroupslist) - Gets top N (ordered by crash count) of crash groups by missing symbol
* [symbolUploadsComplete](#symboluploadscomplete) - Commits or aborts the symbol upload process for a new set of symbols for the specified application
* [symbolUploadsCreate](#symboluploadscreate) - Begins the symbol upload process for a new set of symbols for the specified application
* [symbolUploadsDelete](#symboluploadsdelete) - Deletes a symbol upload by id for the specified application
* [symbolUploadsGet](#symboluploadsget) - Gets a symbol upload by id for the specified application
* [symbolUploadsGetLocation](#symboluploadsgetlocation) - Gets the URL to download the symbol upload
* [symbolUploadsList](#symboluploadslist) - Gets a list of all uploads for the specified application
* [symbolsGet](#symbolsget) - Returns a particular symbol by id (uuid) for the provided application
* [symbolsGetLocation](#symbolsgetlocation) - Gets the URL to download the symbol
* [symbolsGetStatus](#symbolsgetstatus) - Returns a particular symbol by id (uuid) for the provided application
* [symbolsIgnore](#symbolsignore) - Marks a symbol by id (uuid) as ignored
* [symbolsList](#symbolslist) - Returns the list of all symbols for the provided application

## ~~crashGroupsGet~~

Gets a specific group.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashGroupsGetRequest;
import org.openapis.openapi.models.operations.CrashGroupsGetResponse;
import org.openapis.openapi.models.operations.CrashGroupsGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashGroupsGetRequest req = new CrashGroupsGetRequest("consequuntur", "ipsa", "quas");            

            CrashGroupsGetResponse res = sdk.crash.crashGroupsGet(req, new CrashGroupsGetSecurity("eveniet") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crashGroupsGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashGroupsGetStacktrace~~

Gets a stacktrace for a specific crash.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashGroupsGetStacktraceRequest;
import org.openapis.openapi.models.operations.CrashGroupsGetStacktraceResponse;
import org.openapis.openapi.models.operations.CrashGroupsGetStacktraceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashGroupsGetStacktraceRequest req = new CrashGroupsGetStacktraceRequest("impedit", "officiis", "esse") {{
                groupingOnly = false;
            }};            

            CrashGroupsGetStacktraceResponse res = sdk.crash.crashGroupsGetStacktrace(req, new CrashGroupsGetStacktraceSecurity("necessitatibus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.stacktrace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashGroupsList~~

Gets a list of crash groups and whether the list contains all available groups.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashGroupsListDollarOrderbyEnum;
import org.openapis.openapi.models.operations.CrashGroupsListGroupStatusEnum;
import org.openapis.openapi.models.operations.CrashGroupsListGroupTypeEnum;
import org.openapis.openapi.models.operations.CrashGroupsListRequest;
import org.openapis.openapi.models.operations.CrashGroupsListResponse;
import org.openapis.openapi.models.operations.CrashGroupsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashGroupsListRequest req = new CrashGroupsListRequest("sed", "veniam") {{
                dollarOrderby = CrashGroupsListDollarOrderbyEnum.LAST_OCCURRENCE_DESC;
                appVersion = "expedita";
                continuationToken = "eum";
                groupStatus = CrashGroupsListGroupStatusEnum.CLOSED;
                groupTextSearch = "voluptatum";
                groupType = CrashGroupsListGroupTypeEnum.GROUP_TYPE1;
                lastOccurrenceFrom = OffsetDateTime.parse("2022-12-06T07:12:03.115Z");
                lastOccurrenceTo = OffsetDateTime.parse("2021-09-26T01:55:33.743Z");
            }};            

            CrashGroupsListResponse res = sdk.crash.crashGroupsList(req, new CrashGroupsListSecurity("nobis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crashGroupsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashGroupsUpdate~~

Updates a group.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashGroupsUpdateRequest;
import org.openapis.openapi.models.operations.CrashGroupsUpdateRequestBody;
import org.openapis.openapi.models.operations.CrashGroupsUpdateRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.CrashGroupsUpdateResponse;
import org.openapis.openapi.models.operations.CrashGroupsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashGroupsUpdateRequest req = new CrashGroupsUpdateRequest(                new CrashGroupsUpdateRequestBody() {{
                                annotation = "laboriosam";
                                status = CrashGroupsUpdateRequestBodyStatusEnum.IGNORED;
                            }};, "consequuntur", "voluptatem", "exercitationem");            

            CrashGroupsUpdateResponse res = sdk.crash.crashGroupsUpdate(req, new CrashGroupsUpdateSecurity("necessitatibus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crashGroupsUpdate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashesDelete~~

Delete a specific crash and related attachments and blobs for an app.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashesDeleteRequest;
import org.openapis.openapi.models.operations.CrashesDeleteResponse;
import org.openapis.openapi.models.operations.CrashesDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashesDeleteRequest req = new CrashesDeleteRequest("quasi", "nisi", "at", "vero") {{
                retentionDelete = false;
            }};            

            CrashesDeleteResponse res = sdk.crash.crashesDelete(req, new CrashesDeleteSecurity("est") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crashesDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashesGet~~

Gets a specific crash for an app.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashesGetRequest;
import org.openapis.openapi.models.operations.CrashesGetResponse;
import org.openapis.openapi.models.operations.CrashesGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashesGetRequest req = new CrashesGetRequest("harum", "sequi", "doloribus", "repudiandae") {{
                groupingOnly = false;
                includeDetails = false;
                includeLog = false;
                includeReport = false;
                includeStacktrace = false;
            }};            

            CrashesGetResponse res = sdk.crash.crashesGet(req, new CrashesGetSecurity("optio") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crash != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashesGetAppCrashesInfo~~

Gets whether the application has any crashes.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashesGetAppCrashesInfoRequest;
import org.openapis.openapi.models.operations.CrashesGetAppCrashesInfoResponse;
import org.openapis.openapi.models.operations.CrashesGetAppCrashesInfoSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashesGetAppCrashesInfoRequest req = new CrashesGetAppCrashesInfoRequest("occaecati", "nemo");            

            CrashesGetAppCrashesInfoResponse res = sdk.crash.crashesGetAppCrashesInfo(req, new CrashesGetAppCrashesInfoSecurity("voluptate") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crashesGetAppCrashesInfo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashesGetAppVersions~~

Gets a list of application versions.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashesGetAppVersionsRequest;
import org.openapis.openapi.models.operations.CrashesGetAppVersionsResponse;
import org.openapis.openapi.models.operations.CrashesGetAppVersionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashesGetAppVersionsRequest req = new CrashesGetAppVersionsRequest("blanditiis", "officia");            

            CrashesGetAppVersionsResponse res = sdk.crash.crashesGetAppVersions(req, new CrashesGetAppVersionsSecurity("voluptas") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crashesGetAppVersions200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashesGetCrashAttachmentLocation~~

Gets the URI location to download crash attachment.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashesGetCrashAttachmentLocationRequest;
import org.openapis.openapi.models.operations.CrashesGetCrashAttachmentLocationResponse;
import org.openapis.openapi.models.operations.CrashesGetCrashAttachmentLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashesGetCrashAttachmentLocationRequest req = new CrashesGetCrashAttachmentLocationRequest("numquam", "nemo", "quos", "eius");            

            CrashesGetCrashAttachmentLocationResponse res = sdk.crash.crashesGetCrashAttachmentLocation(req, new CrashesGetCrashAttachmentLocationSecurity("aspernatur") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crashesGetCrashAttachmentLocation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashesGetCrashTextAttachmentContent~~

Gets content of the text attachment.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashesGetCrashTextAttachmentContentRequest;
import org.openapis.openapi.models.operations.CrashesGetCrashTextAttachmentContentResponse;
import org.openapis.openapi.models.operations.CrashesGetCrashTextAttachmentContentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashesGetCrashTextAttachmentContentRequest req = new CrashesGetCrashTextAttachmentContentRequest("ducimus", "nesciunt", "fuga", "laudantium");            

            CrashesGetCrashTextAttachmentContentResponse res = sdk.crash.crashesGetCrashTextAttachmentContent(req, new CrashesGetCrashTextAttachmentContentSecurity("incidunt") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crashesGetCrashTextAttachmentContent200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashesGetNativeCrash~~

Gets the native log of a specific crash.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashesGetNativeCrashRequest;
import org.openapis.openapi.models.operations.CrashesGetNativeCrashResponse;
import org.openapis.openapi.models.operations.CrashesGetNativeCrashSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashesGetNativeCrashRequest req = new CrashesGetNativeCrashRequest("quasi", "rem", "fugiat", "dicta");            

            CrashesGetNativeCrashResponse res = sdk.crash.crashesGetNativeCrash(req, new CrashesGetNativeCrashSecurity("nisi") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crashesGetNativeCrash200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashesGetNativeCrashDownload~~

Gets the native log of a specific crash as a text attachment.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashesGetNativeCrashDownloadRequest;
import org.openapis.openapi.models.operations.CrashesGetNativeCrashDownloadResponse;
import org.openapis.openapi.models.operations.CrashesGetNativeCrashDownloadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashesGetNativeCrashDownloadRequest req = new CrashesGetNativeCrashDownloadRequest("consequuntur", "consectetur", "aperiam", "cupiditate");            

            CrashesGetNativeCrashDownloadResponse res = sdk.crash.crashesGetNativeCrashDownload(req, new CrashesGetNativeCrashDownloadSecurity("reiciendis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crashesGetNativeCrashDownload200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashesGetRawCrashLocation~~

Gets the URI location to download json of a specific crash.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashesGetRawCrashLocationRequest;
import org.openapis.openapi.models.operations.CrashesGetRawCrashLocationResponse;
import org.openapis.openapi.models.operations.CrashesGetRawCrashLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashesGetRawCrashLocationRequest req = new CrashesGetRawCrashLocationRequest("soluta", "alias", "omnis", "eos");            

            CrashesGetRawCrashLocationResponse res = sdk.crash.crashesGetRawCrashLocation(req, new CrashesGetRawCrashLocationSecurity("occaecati") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crashesGetRawCrashLocation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashesGetStacktrace~~

Gets a stacktrace for a specific crash.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashesGetStacktraceRequest;
import org.openapis.openapi.models.operations.CrashesGetStacktraceResponse;
import org.openapis.openapi.models.operations.CrashesGetStacktraceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashesGetStacktraceRequest req = new CrashesGetStacktraceRequest("iste", "magni", "inventore", "fuga") {{
                groupingOnly = false;
            }};            

            CrashesGetStacktraceResponse res = sdk.crash.crashesGetStacktrace(req, new CrashesGetStacktraceSecurity("accusamus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.stacktrace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashesList~~

Gets all crashes of a group.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashesListErrorTypeEnum;
import org.openapis.openapi.models.operations.CrashesListRequest;
import org.openapis.openapi.models.operations.CrashesListResponse;
import org.openapis.openapi.models.operations.CrashesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashesListRequest req = new CrashesListRequest("voluptatibus", "distinctio", "omnis") {{
                appVersion = "delectus";
                dateFrom = OffsetDateTime.parse("2022-06-29T17:06:44.946Z");
                dateTo = OffsetDateTime.parse("2022-02-06T01:23:27.992Z");
                errorType = CrashesListErrorTypeEnum.HANDLED_ERRORS;
                includeLog = false;
                includeReport = false;
            }};            

            CrashesListResponse res = sdk.crash.crashesList(req, new CrashesListSecurity("quos") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crashes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~crashesListAttachments~~

Gets all attachments for a specific crash.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CrashesListAttachmentsRequest;
import org.openapis.openapi.models.operations.CrashesListAttachmentsResponse;
import org.openapis.openapi.models.operations.CrashesListAttachmentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CrashesListAttachmentsRequest req = new CrashesListAttachmentsRequest("commodi", "itaque", "commodi");            

            CrashesListAttachmentsResponse res = sdk.crash.crashesListAttachments(req, new CrashesListAttachmentsSecurity("totam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.crashesListAttachments200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## missingSymbolGroupsGet

Gets missing symbol crash group by its id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MissingSymbolGroupsGetRequest;
import org.openapis.openapi.models.operations.MissingSymbolGroupsGetResponse;
import org.openapis.openapi.models.operations.MissingSymbolGroupsGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MissingSymbolGroupsGetRequest req = new MissingSymbolGroupsGetRequest("earum", "modi", "nam");            

            MissingSymbolGroupsGetResponse res = sdk.crash.missingSymbolGroupsGet(req, new MissingSymbolGroupsGetSecurity("vero") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.missingSymbolGroupsGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## missingSymbolGroupsInfo

Gets application level statistics for all missing symbol groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MissingSymbolGroupsInfoRequest;
import org.openapis.openapi.models.operations.MissingSymbolGroupsInfoResponse;
import org.openapis.openapi.models.operations.MissingSymbolGroupsInfoSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MissingSymbolGroupsInfoRequest req = new MissingSymbolGroupsInfoRequest("voluptatem", "ipsam");            

            MissingSymbolGroupsInfoResponse res = sdk.crash.missingSymbolGroupsInfo(req, new MissingSymbolGroupsInfoSecurity("vel") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.missingSymbolGroupsInfo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## missingSymbolGroupsList

Gets top N (ordered by crash count) of crash groups by missing symbol

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MissingSymbolGroupsListRequest;
import org.openapis.openapi.models.operations.MissingSymbolGroupsListResponse;
import org.openapis.openapi.models.operations.MissingSymbolGroupsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MissingSymbolGroupsListRequest req = new MissingSymbolGroupsListRequest("alias", "quasi", 247685L);            

            MissingSymbolGroupsListResponse res = sdk.crash.missingSymbolGroupsList(req, new MissingSymbolGroupsListSecurity("maiores") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.missingSymbolGroupsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## symbolUploadsComplete

Commits or aborts the symbol upload process for a new set of symbols for the specified application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SymbolUploadsCompleteRequest;
import org.openapis.openapi.models.operations.SymbolUploadsCompleteRequestBody;
import org.openapis.openapi.models.operations.SymbolUploadsCompleteRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.SymbolUploadsCompleteResponse;
import org.openapis.openapi.models.operations.SymbolUploadsCompleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SymbolUploadsCompleteRequest req = new SymbolUploadsCompleteRequest(                new SymbolUploadsCompleteRequestBody(SymbolUploadsCompleteRequestBodyStatusEnum.COMMITTED);, "sint", "nulla", "deserunt");            

            SymbolUploadsCompleteResponse res = sdk.crash.symbolUploadsComplete(req, new SymbolUploadsCompleteSecurity("esse") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.symbolUploadsComplete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## symbolUploadsCreate

Begins the symbol upload process for a new set of symbols for the specified application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SymbolUploadsCreateRequest;
import org.openapis.openapi.models.operations.SymbolUploadsCreateRequestBody;
import org.openapis.openapi.models.operations.SymbolUploadsCreateRequestBodySymbolTypeEnum;
import org.openapis.openapi.models.operations.SymbolUploadsCreateResponse;
import org.openapis.openapi.models.operations.SymbolUploadsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SymbolUploadsCreateRequest req = new SymbolUploadsCreateRequest(                new SymbolUploadsCreateRequestBody(SymbolUploadsCreateRequestBodySymbolTypeEnum.JAVA_SCRIPT) {{
                                build = "reprehenderit";
                                clientCallback = "est";
                                fileName = "quis";
                                version = "sint";
                            }};, "accusamus", "impedit");            

            SymbolUploadsCreateResponse res = sdk.crash.symbolUploadsCreate(req, new SymbolUploadsCreateSecurity("hic") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.symbolUploadsCreate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## symbolUploadsDelete

Deletes a symbol upload by id for the specified application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SymbolUploadsDeleteRequest;
import org.openapis.openapi.models.operations.SymbolUploadsDeleteResponse;
import org.openapis.openapi.models.operations.SymbolUploadsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SymbolUploadsDeleteRequest req = new SymbolUploadsDeleteRequest("necessitatibus", "asperiores", "ex");            

            SymbolUploadsDeleteResponse res = sdk.crash.symbolUploadsDelete(req, new SymbolUploadsDeleteSecurity("voluptas") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.symbolUploadsDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## symbolUploadsGet

Gets a symbol upload by id for the specified application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SymbolUploadsGetRequest;
import org.openapis.openapi.models.operations.SymbolUploadsGetResponse;
import org.openapis.openapi.models.operations.SymbolUploadsGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SymbolUploadsGetRequest req = new SymbolUploadsGetRequest("debitis", "delectus", "quae");            

            SymbolUploadsGetResponse res = sdk.crash.symbolUploadsGet(req, new SymbolUploadsGetSecurity("minus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.symbolUploadsGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## symbolUploadsGetLocation

Gets the URL to download the symbol upload

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SymbolUploadsGetLocationRequest;
import org.openapis.openapi.models.operations.SymbolUploadsGetLocationResponse;
import org.openapis.openapi.models.operations.SymbolUploadsGetLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SymbolUploadsGetLocationRequest req = new SymbolUploadsGetLocationRequest("fuga", "laborum", "consectetur");            

            SymbolUploadsGetLocationResponse res = sdk.crash.symbolUploadsGetLocation(req, new SymbolUploadsGetLocationSecurity("velit") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.symbolUploadsGetLocation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## symbolUploadsList

Gets a list of all uploads for the specified application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SymbolUploadsListRequest;
import org.openapis.openapi.models.operations.SymbolUploadsListResponse;
import org.openapis.openapi.models.operations.SymbolUploadsListSecurity;
import org.openapis.openapi.models.operations.SymbolUploadsListStatusEnum;
import org.openapis.openapi.models.operations.SymbolUploadsListSymbolTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SymbolUploadsListRequest req = new SymbolUploadsListRequest("atque", "ipsum") {{
                status = SymbolUploadsListStatusEnum.PROCESSED;
                symbolType = SymbolUploadsListSymbolTypeEnum.ANDROID_PROGUARD;
                top = 746585L;
            }};            

            SymbolUploadsListResponse res = sdk.crash.symbolUploadsList(req, new SymbolUploadsListSecurity("repudiandae") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.symbolUploadsList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## symbolsGet

Returns a particular symbol by id (uuid) for the provided application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SymbolsGetRequest;
import org.openapis.openapi.models.operations.SymbolsGetResponse;
import org.openapis.openapi.models.operations.SymbolsGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SymbolsGetRequest req = new SymbolsGetRequest("nam", "dolore", "iusto");            

            SymbolsGetResponse res = sdk.crash.symbolsGet(req, new SymbolsGetSecurity("voluptate") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.symbolsGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## symbolsGetLocation

Gets the URL to download the symbol

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SymbolsGetLocationRequest;
import org.openapis.openapi.models.operations.SymbolsGetLocationResponse;
import org.openapis.openapi.models.operations.SymbolsGetLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SymbolsGetLocationRequest req = new SymbolsGetLocationRequest("sequi", "dignissimos", "neque");            

            SymbolsGetLocationResponse res = sdk.crash.symbolsGetLocation(req, new SymbolsGetLocationSecurity("quo") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.symbolsGetLocation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## symbolsGetStatus

Returns a particular symbol by id (uuid) for the provided application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SymbolsGetStatusRequest;
import org.openapis.openapi.models.operations.SymbolsGetStatusResponse;
import org.openapis.openapi.models.operations.SymbolsGetStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SymbolsGetStatusRequest req = new SymbolsGetStatusRequest("deleniti", "quibusdam", "iure");            

            SymbolsGetStatusResponse res = sdk.crash.symbolsGetStatus(req, new SymbolsGetStatusSecurity("odit") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.symbolsGetStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## symbolsIgnore

Marks a symbol by id (uuid) as ignored

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SymbolsIgnoreRequest;
import org.openapis.openapi.models.operations.SymbolsIgnoreResponse;
import org.openapis.openapi.models.operations.SymbolsIgnoreSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SymbolsIgnoreRequest req = new SymbolsIgnoreRequest("voluptatibus", "vel", "magnam");            

            SymbolsIgnoreResponse res = sdk.crash.symbolsIgnore(req, new SymbolsIgnoreSecurity("quibusdam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.symbolsIgnore200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## symbolsList

Returns the list of all symbols for the provided application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SymbolsListRequest;
import org.openapis.openapi.models.operations.SymbolsListResponse;
import org.openapis.openapi.models.operations.SymbolsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SymbolsListRequest req = new SymbolsListRequest("inventore", "facere");            

            SymbolsListResponse res = sdk.crash.symbolsList(req, new SymbolsListSecurity("libero") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.symbolsList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
