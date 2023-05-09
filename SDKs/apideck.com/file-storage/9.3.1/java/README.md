# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveGroupsAddRequest;
import org.openapis.openapi.models.operations.DriveGroupsAddResponse;
import org.openapis.openapi.models.operations.DriveGroupsAddSecurity;
import org.openapis.openapi.models.shared.DriveGroupInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveGroupsAddRequest req = new DriveGroupsAddRequest(                new DriveGroupInput("accounting") {{
                                description = "A description";
                                displayName = "accounting";
                            }};, "corrupti", "provident") {{
                raw = false;
                xApideckServiceId = "distinctio";
            }};            

            DriveGroupsAddResponse res = sdk.driveGroups.driveGroupsAdd(req, new DriveGroupsAddSecurity("quibusdam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createDriveGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [driveGroups](docs/drivegroups/README.md)

* [driveGroupsAdd](docs/drivegroups/README.md#drivegroupsadd) - Create DriveGroup
* [driveGroupsAll](docs/drivegroups/README.md#drivegroupsall) - List DriveGroups
* [driveGroupsDelete](docs/drivegroups/README.md#drivegroupsdelete) - Delete DriveGroup
* [driveGroupsOne](docs/drivegroups/README.md#drivegroupsone) - Get DriveGroup
* [driveGroupsUpdate](docs/drivegroups/README.md#drivegroupsupdate) - Update DriveGroup

### [drives](docs/drives/README.md)

* [drivesAdd](docs/drives/README.md#drivesadd) - Create Drive
* [drivesAll](docs/drives/README.md#drivesall) - List Drives
* [drivesDelete](docs/drives/README.md#drivesdelete) - Delete Drive
* [drivesOne](docs/drives/README.md#drivesone) - Get Drive
* [drivesUpdate](docs/drives/README.md#drivesupdate) - Update Drive

### [files](docs/files/README.md)

* [filesAll](docs/files/README.md#filesall) - List Files
* [filesDelete](docs/files/README.md#filesdelete) - Delete File
* [filesDownload](docs/files/README.md#filesdownload) - Download File
* [filesOne](docs/files/README.md#filesone) - Get File
* [filesSearch](docs/files/README.md#filessearch) - Search Files
* [filesUpdate](docs/files/README.md#filesupdate) - Rename or move File

### [folders](docs/folders/README.md)

* [foldersAdd](docs/folders/README.md#foldersadd) - Create Folder
* [foldersCopy](docs/folders/README.md#folderscopy) - Copy Folder
* [foldersDelete](docs/folders/README.md#foldersdelete) - Delete Folder
* [foldersOne](docs/folders/README.md#foldersone) - Get Folder
* [foldersUpdate](docs/folders/README.md#foldersupdate) - Rename or move Folder

### [sharedLinks](docs/sharedlinks/README.md)

* [sharedLinksAdd](docs/sharedlinks/README.md#sharedlinksadd) - Create Shared Link
* [sharedLinksAll](docs/sharedlinks/README.md#sharedlinksall) - List SharedLinks
* [sharedLinksDelete](docs/sharedlinks/README.md#sharedlinksdelete) - Delete Shared Link
* [sharedLinksOne](docs/sharedlinks/README.md#sharedlinksone) - Get Shared Link
* [sharedLinksUpdate](docs/sharedlinks/README.md#sharedlinksupdate) - Update Shared Link

### [uploadSessions](docs/uploadsessions/README.md)

* [uploadSessionsAdd](docs/uploadsessions/README.md#uploadsessionsadd) - Start Upload Session
* [uploadSessionsDelete](docs/uploadsessions/README.md#uploadsessionsdelete) - Abort Upload Session
* [uploadSessionsFinish](docs/uploadsessions/README.md#uploadsessionsfinish) - Finish Upload Session
* [uploadSessionsOne](docs/uploadsessions/README.md#uploadsessionsone) - Get Upload Session
* [uploadSessionsUpload](docs/uploadsessions/README.md#uploadsessionsupload) - Upload part of File to Upload Session
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
