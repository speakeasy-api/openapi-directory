# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/file-storage/9.3.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DriveGroups.DriveGroupsAdd(ctx, operations.DriveGroupsAddRequest{
        DriveGroupInput: shared.DriveGroupInput{
            Description: sdk.String("A description"),
            DisplayName: sdk.String("accounting"),
            Name: "accounting",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "corrupti",
        XApideckConsumerID: "provident",
        XApideckServiceID: sdk.String("distinctio"),
    }, operations.DriveGroupsAddSecurity{
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


### [DriveGroups](docs/drivegroups/README.md)

* [DriveGroupsAdd](docs/drivegroups/README.md#drivegroupsadd) - Create DriveGroup
* [DriveGroupsAll](docs/drivegroups/README.md#drivegroupsall) - List DriveGroups
* [DriveGroupsDelete](docs/drivegroups/README.md#drivegroupsdelete) - Delete DriveGroup
* [DriveGroupsOne](docs/drivegroups/README.md#drivegroupsone) - Get DriveGroup
* [DriveGroupsUpdate](docs/drivegroups/README.md#drivegroupsupdate) - Update DriveGroup

### [Drives](docs/drives/README.md)

* [DrivesAdd](docs/drives/README.md#drivesadd) - Create Drive
* [DrivesAll](docs/drives/README.md#drivesall) - List Drives
* [DrivesDelete](docs/drives/README.md#drivesdelete) - Delete Drive
* [DrivesOne](docs/drives/README.md#drivesone) - Get Drive
* [DrivesUpdate](docs/drives/README.md#drivesupdate) - Update Drive

### [Files](docs/files/README.md)

* [FilesAll](docs/files/README.md#filesall) - List Files
* [FilesDelete](docs/files/README.md#filesdelete) - Delete File
* [FilesDownload](docs/files/README.md#filesdownload) - Download File
* [FilesOne](docs/files/README.md#filesone) - Get File
* [FilesSearch](docs/files/README.md#filessearch) - Search Files
* [FilesUpdate](docs/files/README.md#filesupdate) - Rename or move File

### [Folders](docs/folders/README.md)

* [FoldersAdd](docs/folders/README.md#foldersadd) - Create Folder
* [FoldersCopy](docs/folders/README.md#folderscopy) - Copy Folder
* [FoldersDelete](docs/folders/README.md#foldersdelete) - Delete Folder
* [FoldersOne](docs/folders/README.md#foldersone) - Get Folder
* [FoldersUpdate](docs/folders/README.md#foldersupdate) - Rename or move Folder

### [SharedLinks](docs/sharedlinks/README.md)

* [SharedLinksAdd](docs/sharedlinks/README.md#sharedlinksadd) - Create Shared Link
* [SharedLinksAll](docs/sharedlinks/README.md#sharedlinksall) - List SharedLinks
* [SharedLinksDelete](docs/sharedlinks/README.md#sharedlinksdelete) - Delete Shared Link
* [SharedLinksOne](docs/sharedlinks/README.md#sharedlinksone) - Get Shared Link
* [SharedLinksUpdate](docs/sharedlinks/README.md#sharedlinksupdate) - Update Shared Link

### [UploadSessions](docs/uploadsessions/README.md)

* [UploadSessionsAdd](docs/uploadsessions/README.md#uploadsessionsadd) - Start Upload Session
* [UploadSessionsDelete](docs/uploadsessions/README.md#uploadsessionsdelete) - Abort Upload Session
* [UploadSessionsFinish](docs/uploadsessions/README.md#uploadsessionsfinish) - Finish Upload Session
* [UploadSessionsOne](docs/uploadsessions/README.md#uploadsessionsone) - Get Upload Session
* [UploadSessionsUpload](docs/uploadsessions/README.md#uploadsessionsupload) - Upload part of File to Upload Session
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
