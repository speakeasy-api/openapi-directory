# uploadSessions

## Overview

Upload sessions resource represents the sessions used for uploading files to the cloud storage service. It provides methods for managing and accessing the upload sessions, such as creating and resuming upload sessions. An upload session allows for efficient uploading of large files by breaking them into smaller chunks and uploading each chunk individually.

### Available Operations

* [uploadSessionsAdd](#uploadsessionsadd) - Start Upload Session
* [uploadSessionsDelete](#uploadsessionsdelete) - Abort Upload Session
* [uploadSessionsFinish](#uploadsessionsfinish) - Finish Upload Session
* [uploadSessionsOne](#uploadsessionsone) - Get Upload Session
* [uploadSessionsUpload](#uploadsessionsupload) - Upload part of File to Upload Session

## uploadSessionsAdd

Start an Upload Session. Upload sessions are used to upload large files, use the [Upload File](#operation/filesUpload) endpoint to upload smaller files (up to 100MB). Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadSessionsAddRequest;
import org.openapis.openapi.models.operations.UploadSessionsAddResponse;
import org.openapis.openapi.models.operations.UploadSessionsAddSecurity;
import org.openapis.openapi.models.shared.CreateUploadSessionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadSessionsAddRequest req = new UploadSessionsAddRequest(                new CreateUploadSessionRequest("Documents", "1234", 1810673L) {{
                                driveId = "1234";
                            }};, "repudiandae", "quae") {{
                raw = false;
                xApideckServiceId = "ipsum";
            }};            

            UploadSessionsAddResponse res = sdk.uploadSessions.uploadSessionsAdd(req, new UploadSessionsAddSecurity("quidem") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createUploadSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadSessionsDelete

Abort Upload Session. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadSessionsDeleteRequest;
import org.openapis.openapi.models.operations.UploadSessionsDeleteResponse;
import org.openapis.openapi.models.operations.UploadSessionsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadSessionsDeleteRequest req = new UploadSessionsDeleteRequest("molestias", "excepturi", "pariatur") {{
                raw = false;
                xApideckServiceId = "modi";
            }};            

            UploadSessionsDeleteResponse res = sdk.uploadSessions.uploadSessionsDelete(req, new UploadSessionsDeleteSecurity("praesentium") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteUploadSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadSessionsFinish

Finish Upload Session. Only call this endpoint after all File parts have been uploaded to [Upload part of File](#operation/uploadSessionsUpload). Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadSessionsFinishRequest;
import org.openapis.openapi.models.operations.UploadSessionsFinishResponse;
import org.openapis.openapi.models.operations.UploadSessionsFinishSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadSessionsFinishRequest req = new UploadSessionsFinishRequest("rem", "voluptates", "quasi") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sint", "veritatis");
                    put("itaque", "incidunt");
                    put("enim", "consequatur");
                    put("est", "quibusdam");
                }};
                digest = "sha=fpRyg5eVQletdZqEKaFlqwBXJzM=";
                raw = false;
                xApideckServiceId = "explicabo";
            }};            

            UploadSessionsFinishResponse res = sdk.uploadSessions.uploadSessionsFinish(req, new UploadSessionsFinishSecurity("deserunt") {{
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

## uploadSessionsOne

Get Upload Session. Use the `part_size` to split your file into parts. Upload the parts to the [Upload part of File](#operation/uploadSessionsUpload) endpoint. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadSessionsOneRequest;
import org.openapis.openapi.models.operations.UploadSessionsOneResponse;
import org.openapis.openapi.models.operations.UploadSessionsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadSessionsOneRequest req = new UploadSessionsOneRequest("distinctio", "quibusdam", "labore") {{
                fields = "modi";
                raw = false;
                xApideckServiceId = "qui";
            }};            

            UploadSessionsOneResponse res = sdk.uploadSessions.uploadSessionsOne(req, new UploadSessionsOneSecurity("aliquid") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getUploadSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadSessionsUpload

Upload part of File to Upload Session (max 100MB). Get `part_size` from [Get Upload Session](#operation/uploadSessionsOne) first. Every File part (except the last one) uploaded to this endpoint should have Content-Length equal to `part_size`. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadSessionsUploadRequest;
import org.openapis.openapi.models.operations.UploadSessionsUploadResponse;
import org.openapis.openapi.models.operations.UploadSessionsUploadSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadSessionsUploadRequest req = new UploadSessionsUploadRequest("cupiditate".getBytes(), "quos", 201.07, "magni", "assumenda") {{
                digest = "sha=fpRyg5eVQletdZqEKaFlqwBXJzM=";
                raw = false;
                xApideckServiceId = "ipsam";
            }};            

            UploadSessionsUploadResponse res = sdk.uploadSessions.uploadSessionsUpload(req, new UploadSessionsUploadSecurity("alias") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateUploadSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
