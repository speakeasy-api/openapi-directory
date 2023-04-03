# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### driveGroups

* `driveGroupsAdd` - Create DriveGroup
* `driveGroupsAll` - List DriveGroups
* `driveGroupsDelete` - Delete DriveGroup
* `driveGroupsOne` - Get DriveGroup
* `driveGroupsUpdate` - Update DriveGroup

### drives

* `drivesAdd` - Create Drive
* `drivesAll` - List Drives
* `drivesDelete` - Delete Drive
* `drivesOne` - Get Drive
* `drivesUpdate` - Update Drive

### files

* `filesAll` - List Files
* `filesDelete` - Delete File
* `filesDownload` - Download File
* `filesOne` - Get File
* `filesSearch` - Search Files
* `filesUpdate` - Rename or move File

### folders

* `foldersAdd` - Create Folder
* `foldersCopy` - Copy Folder
* `foldersDelete` - Delete Folder
* `foldersOne` - Get Folder
* `foldersUpdate` - Rename or move Folder

### sharedLinks

* `sharedLinksAdd` - Create Shared Link
* `sharedLinksAll` - List SharedLinks
* `sharedLinksDelete` - Delete Shared Link
* `sharedLinksOne` - Get Shared Link
* `sharedLinksUpdate` - Update Shared Link

### uploadSessions

* `uploadSessionsAdd` - Start Upload Session
* `uploadSessionsDelete` - Abort Upload Session
* `uploadSessionsFinish` - Finish Upload Session
* `uploadSessionsOne` - Get Upload Session
* `uploadSessionsUpload` - Upload part of File to Upload Session
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
