# media

### Available Operations

* [createMedia](#createmedia) - Create media
* [findMedia](#findmedia) - Find media
* [getMedia](#getmedia) - Get a specific media
* [getMediaData](#getmediadata) - Download media by extension
* [getMediaDataBinary](#getmediadatabinary) - Download a MP3 media
* [getMediaDataByKey](#getmediadatabykey) - Download media by extension

## createMedia

Uploads media file to account, acceptable media formats: bmp, gif, jpg, m4a, mp3, mp4, png, wav

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMediaRequestBody;
import org.openapis.openapi.models.operations.CreateMediaRequestBodyFile;
import org.openapis.openapi.models.operations.CreateMediaResponse;
import org.openapis.openapi.models.operations.CreateMediaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMediaRequestBody req = new CreateMediaRequestBody(                new CreateMediaRequestBodyFile("eius".getBytes(), "necessitatibus");) {{
                name = "Rosemary McClure";
            }};            

            CreateMediaResponse res = sdk.media.createMedia(req, new CreateMediaSecurity("tempora", "tempora") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.resourceId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findMedia

Find media files created by user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindMediaRequest;
import org.openapis.openapi.models.operations.FindMediaResponse;
import org.openapis.openapi.models.operations.FindMediaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindMediaRequest req = new FindMediaRequest() {{
                fields = "voluptate";
                filter = "reiciendis";
                limit = 401713;
                offset = 25497;
            }};            

            FindMediaResponse res = sdk.media.findMedia(req, new FindMediaSecurity("non", "officiis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.mediaPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMedia

Get media resource by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMediaRequest;
import org.openapis.openapi.models.operations.GetMediaResponse;
import org.openapis.openapi.models.operations.GetMediaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMediaRequest req = new GetMediaRequest(505866L) {{
                fields = "facilis";
            }};            

            GetMediaResponse res = sdk.media.getMedia(req, new GetMediaSecurity("quaerat", "incidunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.media != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMediaData

Download a media file. Available types of files: bmp, gif, jpg, m4a, mp3, mp4, png, wav. Content type in response depends on 'extension' parameter, e.g. image/jpeg, image/png, audio/mp3, etc

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMediaDataRequest;
import org.openapis.openapi.models.operations.GetMediaDataResponse;
import org.openapis.openapi.models.operations.GetMediaDataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMediaDataRequest req = new GetMediaDataRequest("ipsam", 894864L);            

            GetMediaDataResponse res = sdk.media.getMediaData(req, new GetMediaDataSecurity("rem", "sit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMediaDataBinary

Download a MP3 media, endpoint returns application/binary content-type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMediaDataBinaryRequest;
import org.openapis.openapi.models.operations.GetMediaDataBinaryResponse;
import org.openapis.openapi.models.operations.GetMediaDataBinarySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMediaDataBinaryRequest req = new GetMediaDataBinaryRequest(750595L);            

            GetMediaDataBinaryResponse res = sdk.media.getMediaDataBinary(req, new GetMediaDataBinarySecurity("error", "veniam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMediaDataByKey

Download a media file. Available types of files: bmp, gif, jpg, m4a, mp3, mp4, png, wav. Content type in response depends on 'extension' parameter, e.g. image/jpeg, image/png, audio/mp3, etc

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMediaDataByKeyRequest;
import org.openapis.openapi.models.operations.GetMediaDataByKeyResponse;
import org.openapis.openapi.models.operations.GetMediaDataByKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMediaDataByKeyRequest req = new GetMediaDataByKeyRequest("minima", "recusandae");            

            GetMediaDataByKeyResponse res = sdk.media.getMediaDataByKey(req, new GetMediaDataByKeySecurity("reiciendis", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
