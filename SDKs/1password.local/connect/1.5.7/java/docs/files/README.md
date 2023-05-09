# files

### Available Operations

* [downloadFileByID](#downloadfilebyid) - Get the content of a File
* [getDetailsOfFileById](#getdetailsoffilebyid) - Get the details of a File
* [getItemFiles](#getitemfiles) - Get all the files inside an Item

## downloadFileByID

Get the content of a File

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadFileByIDRequest;
import org.openapis.openapi.models.operations.DownloadFileByIDResponse;
import org.openapis.openapi.models.operations.DownloadFileByIDSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DownloadFileByIDRequest req = new DownloadFileByIDRequest("distinctio", "d9d8d69a-674e-40f4-a7cc-8796ed151a05", "dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7");            

            DownloadFileByIDResponse res = sdk.files.downloadFileByID(req, new DownloadFileByIDSecurity("ipsum") {{
                connectToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.downloadFileByID200ApplicationOctetStreamBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDetailsOfFileById

Get the details of a File

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDetailsOfFileByIdRequest;
import org.openapis.openapi.models.operations.GetDetailsOfFileByIdResponse;
import org.openapis.openapi.models.operations.GetDetailsOfFileByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDetailsOfFileByIdRequest req = new GetDetailsOfFileByIdRequest("92059293-96fe-4a75-96eb-10faaa2352c5", "955907af-f1a3-4a2f-a946-7739251aa52c", "3f5ad019-da1f-4fe7-8f09-7b0074f15471") {{
                inlineFiles = true;
            }};            

            GetDetailsOfFileByIdResponse res = sdk.files.getDetailsOfFileById(req, new GetDetailsOfFileByIdSecurity("harum") {{
                connectToken = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## getItemFiles

Get all the files inside an Item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemFilesRequest;
import org.openapis.openapi.models.operations.GetItemFilesResponse;
import org.openapis.openapi.models.operations.GetItemFilesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemFilesRequest req = new GetItemFilesRequest("5e6e13b9-9d48-48e1-a91e-450ad2abd442", "69802d50-2a94-4bb4-b63c-969e9a3efa77") {{
                inlineFiles = true;
            }};            

            GetItemFilesResponse res = sdk.files.getItemFiles(req, new GetItemFilesSecurity("illum") {{
                connectToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.files != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
