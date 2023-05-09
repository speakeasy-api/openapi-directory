# storage

## Overview

The Storage service allows you to manage your project files.

### Available Operations

* [storageCreateFile](#storagecreatefile) - Create File
* [storageDeleteFile](#storagedeletefile) - Delete File
* [storageGetFile](#storagegetfile) - Get File
* [storageGetFileDownload](#storagegetfiledownload) - Get File for Download
* [storageGetFilePreview](#storagegetfilepreview) - Get File Preview
* [storageGetFileView](#storagegetfileview) - Get File for View
* [storageListFiles](#storagelistfiles) - List Files
* [storageUpdateFile](#storageupdatefile) - Update File

## storageCreateFile

Create a new file. The user who creates the file will automatically be assigned to read and write access unless he has passed custom values for read and write arguments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageCreateFileRequestBody;
import org.openapis.openapi.models.operations.StorageCreateFileResponse;
import org.openapis.openapi.models.operations.StorageCreateFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageCreateFileRequestBody req = new StorageCreateFileRequestBody("eum") {{
                read = new String[]{{
                    add("eligendi"),
                }};
                write = new String[]{{
                    add("aliquid"),
                    add("provident"),
                    add("necessitatibus"),
                }};
            }};            

            StorageCreateFileResponse res = sdk.storage.storageCreateFile(req, new StorageCreateFileSecurity("sint", "officia") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.file != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageDeleteFile

Delete a file by its unique ID. Only users with write permissions have access to delete this resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageDeleteFileRequest;
import org.openapis.openapi.models.operations.StorageDeleteFileResponse;
import org.openapis.openapi.models.operations.StorageDeleteFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageDeleteFileRequest req = new StorageDeleteFileRequest("dolor");            

            StorageDeleteFileResponse res = sdk.storage.storageDeleteFile(req, new StorageDeleteFileSecurity("debitis", "a") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
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

## storageGetFile

Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageGetFileRequest;
import org.openapis.openapi.models.operations.StorageGetFileResponse;
import org.openapis.openapi.models.operations.StorageGetFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageGetFileRequest req = new StorageGetFileRequest("dolorum");            

            StorageGetFileResponse res = sdk.storage.storageGetFile(req, new StorageGetFileSecurity("in", "in") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.file != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageGetFileDownload

Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageGetFileDownloadRequest;
import org.openapis.openapi.models.operations.StorageGetFileDownloadResponse;
import org.openapis.openapi.models.operations.StorageGetFileDownloadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageGetFileDownloadRequest req = new StorageGetFileDownloadRequest("illum");            

            StorageGetFileDownloadResponse res = sdk.storage.storageGetFileDownload(req, new StorageGetFileDownloadSecurity("maiores", "rerum") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
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

## storageGetFilePreview

Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageGetFilePreviewRequest;
import org.openapis.openapi.models.operations.StorageGetFilePreviewResponse;
import org.openapis.openapi.models.operations.StorageGetFilePreviewSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageGetFilePreviewRequest req = new StorageGetFilePreviewRequest("dicta") {{
                background = "magnam";
                borderColor = "cumque";
                borderRadius = 813798;
                borderWidth = 411820;
                gravity = "aliquid";
                height = 675439;
                opacity = 8811.04;
                output = "non";
                quality = 581273;
                rotation = 313218;
                width = 881736;
            }};            

            StorageGetFilePreviewResponse res = sdk.storage.storageGetFilePreview(req, new StorageGetFilePreviewSecurity("delectus", "quidem") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
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

## storageGetFileView

Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageGetFileViewRequest;
import org.openapis.openapi.models.operations.StorageGetFileViewResponse;
import org.openapis.openapi.models.operations.StorageGetFileViewSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageGetFileViewRequest req = new StorageGetFileViewRequest("provident");            

            StorageGetFileViewResponse res = sdk.storage.storageGetFileView(req, new StorageGetFileViewSecurity("nam", "id") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
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

## storageListFiles

Get a list of all the user files. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's files. [Learn more about different API modes](/docs/admin).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageListFilesRequest;
import org.openapis.openapi.models.operations.StorageListFilesResponse;
import org.openapis.openapi.models.operations.StorageListFilesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageListFilesRequest req = new StorageListFilesRequest() {{
                limit = 501324;
                offset = 533206;
                orderType = "sapiente";
                search = "amet";
            }};            

            StorageListFilesResponse res = sdk.storage.storageListFiles(req, new StorageListFilesSecurity("deserunt", "nisi") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.fileList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageUpdateFile

Update a file by its unique ID. Only users with write permissions have access to update this resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageUpdateFileRequest;
import org.openapis.openapi.models.operations.StorageUpdateFileRequestBody;
import org.openapis.openapi.models.operations.StorageUpdateFileResponse;
import org.openapis.openapi.models.operations.StorageUpdateFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageUpdateFileRequest req = new StorageUpdateFileRequest("vel") {{
                requestBody = new StorageUpdateFileRequestBody(                new String[]{{
                                    add("omnis"),
                                    add("molestiae"),
                                    add("perferendis"),
                                }},                 new String[]{{
                                    add("magnam"),
                                    add("distinctio"),
                                }});;
            }};            

            StorageUpdateFileResponse res = sdk.storage.storageUpdateFile(req, new StorageUpdateFileSecurity("id", "labore") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.file != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
