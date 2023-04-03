# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/file-storage/9.1.2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DriveGroupsAddRequest{
        DriveGroupInput: shared.DriveGroupInput{
            Description: "A description",
            DisplayName: "accounting",
            Name: "accounting",
        },
        Raw: false,
        XApideckAppID: "corrupti",
        XApideckConsumerID: "provident",
        XApideckServiceID: "distinctio",
    }

    ctx := context.Background()
    res, err := s.DriveGroups.DriveGroupsAdd(ctx, req, operations.DriveGroupsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDriveGroupResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### DriveGroups

* `DriveGroupsAdd` - Create DriveGroup
* `DriveGroupsAll` - List DriveGroups
* `DriveGroupsDelete` - Delete DriveGroup
* `DriveGroupsOne` - Get DriveGroup
* `DriveGroupsUpdate` - Update DriveGroup

### Drives

* `DrivesAdd` - Create Drive
* `DrivesAll` - List Drives
* `DrivesDelete` - Delete Drive
* `DrivesOne` - Get Drive
* `DrivesUpdate` - Update Drive

### Files

* `FilesAll` - List Files
* `FilesDelete` - Delete File
* `FilesDownload` - Download File
* `FilesOne` - Get File
* `FilesSearch` - Search Files
* `FilesUpdate` - Rename or move File

### Folders

* `FoldersAdd` - Create Folder
* `FoldersCopy` - Copy Folder
* `FoldersDelete` - Delete Folder
* `FoldersOne` - Get Folder
* `FoldersUpdate` - Rename or move Folder

### SharedLinks

* `SharedLinksAdd` - Create Shared Link
* `SharedLinksAll` - List SharedLinks
* `SharedLinksDelete` - Delete Shared Link
* `SharedLinksOne` - Get Shared Link
* `SharedLinksUpdate` - Update Shared Link

### UploadSessions

* `UploadSessionsAdd` - Start Upload Session
* `UploadSessionsDelete` - Abort Upload Session
* `UploadSessionsFinish` - Finish Upload Session
* `UploadSessionsOne` - Get Upload Session
* `UploadSessionsUpload` - Upload part of File to Upload Session
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
