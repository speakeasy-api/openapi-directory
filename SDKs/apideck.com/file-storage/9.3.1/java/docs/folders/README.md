# folders

## Overview

Folders resource represents the folders within a drive in the cloud storage service. It provides methods for managing and accessing the folders, such as creating, deleting, and listing files & folders in a given folder.

### Available Operations

* [foldersAdd](#foldersadd) - Create Folder
* [foldersCopy](#folderscopy) - Copy Folder
* [foldersDelete](#foldersdelete) - Delete Folder
* [foldersOne](#foldersone) - Get Folder
* [foldersUpdate](#foldersupdate) - Rename or move Folder

## foldersAdd

Create Folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FoldersAddRequest;
import org.openapis.openapi.models.operations.FoldersAddResponse;
import org.openapis.openapi.models.operations.FoldersAddSecurity;
import org.openapis.openapi.models.shared.CreateFolderRequestInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FoldersAddRequest req = new FoldersAddRequest(                new CreateFolderRequestInput("Documents", "1234") {{
                                description = "My Personal Documents";
                                driveId = "1234";
                            }};, "sapiente", "architecto") {{
                fields = "mollitia";
                raw = false;
                xApideckServiceId = "dolorem";
            }};            

            FoldersAddResponse res = sdk.folders.foldersAdd(req, new FoldersAddSecurity("culpa") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createFolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## foldersCopy

Copy Folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FoldersCopyRequest;
import org.openapis.openapi.models.operations.FoldersCopyResponse;
import org.openapis.openapi.models.operations.FoldersCopySecurity;
import org.openapis.openapi.models.shared.CopyFolderRequestInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FoldersCopyRequest req = new FoldersCopyRequest(                new CopyFolderRequestInput("1234") {{
                                name = "Documents";
                            }};, "consequuntur", "repellat", "mollitia") {{
                fields = "occaecati";
                raw = false;
                xApideckServiceId = "numquam";
            }};            

            FoldersCopyResponse res = sdk.folders.foldersCopy(req, new FoldersCopySecurity("commodi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateFolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## foldersDelete

Delete Folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FoldersDeleteRequest;
import org.openapis.openapi.models.operations.FoldersDeleteResponse;
import org.openapis.openapi.models.operations.FoldersDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FoldersDeleteRequest req = new FoldersDeleteRequest("quam", "molestiae", "velit") {{
                raw = false;
                xApideckServiceId = "error";
            }};            

            FoldersDeleteResponse res = sdk.folders.foldersDelete(req, new FoldersDeleteSecurity("quia") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteFolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## foldersOne

Get Folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FoldersOneRequest;
import org.openapis.openapi.models.operations.FoldersOneResponse;
import org.openapis.openapi.models.operations.FoldersOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FoldersOneRequest req = new FoldersOneRequest("quis", "vitae", "laborum") {{
                fields = "animi";
                raw = false;
                xApideckServiceId = "enim";
            }};            

            FoldersOneResponse res = sdk.folders.foldersOne(req, new FoldersOneSecurity("odit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getFolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## foldersUpdate

Rename or move Folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FoldersUpdateRequest;
import org.openapis.openapi.models.operations.FoldersUpdateResponse;
import org.openapis.openapi.models.operations.FoldersUpdateSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFolderRequestInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FoldersUpdateRequest req = new FoldersUpdateRequest(                new UpdateFolderRequestInput() {{
                                description = "My Personal Documents";
                                name = "Documents";
                                parentFolderId = "1234";
                            }};, "quo", "sequi", "tenetur") {{
                raw = false;
                xApideckServiceId = "ipsam";
            }};            

            FoldersUpdateResponse res = sdk.folders.foldersUpdate(req, new FoldersUpdateSecurity("id") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateFolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
