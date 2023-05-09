# history

## Overview

Operations about histories

### Available Operations

* [historyList](#historylist) - List site full action history.
* [historyListForFile](#historylistforfile) - List history for specific file.
* [historyListForFolder](#historylistforfolder) - List history for specific folder.
* [historyListForUser](#historylistforuser) - List history for specific user.
* [historyListLogins](#historylistlogins) - List site login history.

## historyList

List site full action history.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HistoryListRequest;
import org.openapis.openapi.models.operations.HistoryListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HistoryListRequest req = new HistoryListRequest() {{
                cursor = "soluta";
                display = "accusantium";
                endAt = OffsetDateTime.parse("2022-01-15T23:18:40.855Z");
                filter = new java.util.HashMap<String, Object>() {{
                    put("ullam", "reprehenderit");
                }};
                filterPrefix = new java.util.HashMap<String, Object>() {{
                    put("nisi", "aut");
                    put("voluptatum", "qui");
                }};
                perPage = 845358;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("deleniti", "itaque");
                    put("dolorum", "architecto");
                }};
                startAt = OffsetDateTime.parse("2021-02-09T22:19:01.627Z");
            }};            

            HistoryListResponse res = sdk.history.historyList(req);

            if (res.actionEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## historyListForFile

List history for specific file.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HistoryListForFileRequest;
import org.openapis.openapi.models.operations.HistoryListForFileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HistoryListForFileRequest req = new HistoryListForFileRequest("quasi") {{
                cursor = "at";
                display = "et";
                endAt = OffsetDateTime.parse("2022-12-11T13:44:20.631Z");
                perPage = 326701;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("consectetur", "adipisci");
                }};
                startAt = OffsetDateTime.parse("2021-04-28T03:43:57.732Z");
            }};            

            HistoryListForFileResponse res = sdk.history.historyListForFile(req);

            if (res.actionEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## historyListForFolder

List history for specific folder.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HistoryListForFolderRequest;
import org.openapis.openapi.models.operations.HistoryListForFolderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HistoryListForFolderRequest req = new HistoryListForFolderRequest("accusantium") {{
                cursor = "rem";
                display = "aut";
                endAt = OffsetDateTime.parse("2022-02-21T23:29:55.837Z");
                perPage = 649832;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("corrupti", "non");
                }};
                startAt = OffsetDateTime.parse("2022-10-12T06:37:48.702Z");
            }};            

            HistoryListForFolderResponse res = sdk.history.historyListForFolder(req);

            if (res.actionEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## historyListForUser

List history for specific user.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HistoryListForUserRequest;
import org.openapis.openapi.models.operations.HistoryListForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HistoryListForUserRequest req = new HistoryListForUserRequest(580152) {{
                cursor = "numquam";
                display = "impedit";
                endAt = OffsetDateTime.parse("2022-08-16T16:15:17.905Z");
                perPage = 12036;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("dicta", "maiores");
                    put("natus", "velit");
                }};
                startAt = OffsetDateTime.parse("2021-11-17T02:47:10.534Z");
            }};            

            HistoryListForUserResponse res = sdk.history.historyListForUser(req);

            if (res.actionEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## historyListLogins

List site login history.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HistoryListLoginsRequest;
import org.openapis.openapi.models.operations.HistoryListLoginsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HistoryListLoginsRequest req = new HistoryListLoginsRequest() {{
                cursor = "asperiores";
                display = "aperiam";
                endAt = OffsetDateTime.parse("2022-09-09T19:48:26.093Z");
                perPage = 162954;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("officia", "maxime");
                    put("dignissimos", "officia");
                    put("asperiores", "nemo");
                    put("quae", "quaerat");
                }};
                startAt = OffsetDateTime.parse("2020-08-05T23:44:45.300Z");
            }};            

            HistoryListLoginsResponse res = sdk.history.historyListLogins(req);

            if (res.actionEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
