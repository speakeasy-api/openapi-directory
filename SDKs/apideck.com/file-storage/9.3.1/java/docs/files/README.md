# files

## Overview

Files resource represents files stored in the cloud storage services. It provides methods for managing and accessing the files, such as uploading, downloading, and deleting files. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

### Available Operations

* [filesAll](#filesall) - List Files
* [filesDelete](#filesdelete) - Delete File
* [filesDownload](#filesdownload) - Download File
* [filesOne](#filesone) - Get File
* [filesSearch](#filessearch) - Search Files
* [filesUpdate](#filesupdate) - Rename or move File

## filesAll

List Files

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FilesAllRequest;
import org.openapis.openapi.models.operations.FilesAllResponse;
import org.openapis.openapi.models.operations.FilesAllSecurity;
import org.openapis.openapi.models.shared.FilesFilter;
import org.openapis.openapi.models.shared.FilesSort;
import org.openapis.openapi.models.shared.FilesSortByEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FilesAllRequest req = new FilesAllRequest("commodi", "molestiae") {{
                cursor = "modi";
                fields = "qui";
                filter = new FilesFilter() {{
                    driveId = "1234";
                    folderId = "root";
                    shared = false;
                }};;
                limit = 774234L;
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("esse", "ipsum");
                    put("excepturi", "aspernatur");
                    put("perferendis", "ad");
                }};
                raw = false;
                sort = new FilesSort() {{
                    by = FilesSortByEnum.UPDATED_AT;
                    direction = SortDirectionEnum.DESC;
                }};;
                xApideckServiceId = "sed";
            }};            

            FilesAllResponse res = sdk.files.filesAll(req, new FilesAllSecurity("iste") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getFilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## filesDelete

Delete File

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FilesDeleteRequest;
import org.openapis.openapi.models.operations.FilesDeleteResponse;
import org.openapis.openapi.models.operations.FilesDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FilesDeleteRequest req = new FilesDeleteRequest("dolor", "natus", "laboriosam") {{
                raw = false;
                xApideckServiceId = "hic";
            }};            

            FilesDeleteResponse res = sdk.files.filesDelete(req, new FilesDeleteSecurity("saepe") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteFileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## filesDownload

Download File

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FilesDownloadRequest;
import org.openapis.openapi.models.operations.FilesDownloadResponse;
import org.openapis.openapi.models.operations.FilesDownloadSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FilesDownloadRequest req = new FilesDownloadRequest("fuga", "in", "corporis") {{
                fields = "iste";
                xApideckServiceId = "iure";
            }};            

            FilesDownloadResponse res = sdk.files.filesDownload(req, new FilesDownloadSecurity("saepe") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.filesDownload200WildcardBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## filesOne

Get File

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FilesOneRequest;
import org.openapis.openapi.models.operations.FilesOneResponse;
import org.openapis.openapi.models.operations.FilesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FilesOneRequest req = new FilesOneRequest("quidem", "architecto", "ipsa") {{
                fields = "reiciendis";
                raw = false;
                xApideckServiceId = "est";
            }};            

            FilesOneResponse res = sdk.files.filesOne(req, new FilesOneSecurity("mollitia") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getFileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## filesSearch

Search Files

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FilesSearchRequest;
import org.openapis.openapi.models.operations.FilesSearchResponse;
import org.openapis.openapi.models.operations.FilesSearchSecurity;
import org.openapis.openapi.models.shared.FilesSearch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FilesSearchRequest req = new FilesSearchRequest(                new FilesSearch("logo jpg") {{
                                driveId = "1234";
                            }};, "laborum", "dolores") {{
                fields = "dolorem";
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("explicabo", "nobis");
                    put("enim", "omnis");
                }};
                xApideckServiceId = "nemo";
            }};            

            FilesSearchResponse res = sdk.files.filesSearch(req, new FilesSearchSecurity("minima") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getFilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## filesUpdate

Rename or move File

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FilesUpdateRequest;
import org.openapis.openapi.models.operations.FilesUpdateResponse;
import org.openapis.openapi.models.operations.FilesUpdateSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FilesUpdateRequest req = new FilesUpdateRequest(                new UpdateFileRequest() {{
                                description = "Renamed PDF Document";
                                name = "New Name.pdf";
                                parentFolderId = "1234";
                            }};, "excepturi", "accusantium", "iure") {{
                raw = false;
                xApideckServiceId = "culpa";
            }};            

            FilesUpdateResponse res = sdk.files.filesUpdate(req, new FilesUpdateSecurity("doloribus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateFileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
