# Distribute

### Available Operations

* [~~AppleMappingTestFlightGroups~~](#applemappingtestflightgroups) - Fetch all apple test flight groups :warning: **Deprecated**
* [AppleMappingCreate](#applemappingcreate) - Create a mapping for an existing app in apple store for the specified application.
* [AppleMappingDelete](#applemappingdelete) - Delete mapping of apple app to an existing app in apple store.
* [AppleMappingGet](#applemappingget) - Get mapping of apple app to an existing app in apple store.
* [DevicesDeviceDetails](#devicesdevicedetails) - Returns the device details.
* [DevicesGetReleaseUpdateDevicesStatus](#devicesgetreleaseupdatedevicesstatus) - Returns the resign status to the caller
* [DevicesList](#deviceslist) - Returns all devices associated with the given distribution group
* [DevicesListCsvFormat](#deviceslistcsvformat) - Returns all devices associated with the given distribution group.
* [DevicesRegisterUserForDevice](#devicesregisteruserfordevice) - Registers a user for an existing device
* [DevicesRemoveUserDevice](#devicesremoveuserdevice) - Removes an existing device from a user
* [DevicesUserDevicesList](#devicesuserdeviceslist) - Returns all devices associated with the given user.
* [DistibutionReleasesInstallAnalytics](#distibutionreleasesinstallanalytics) - Notify download(s) for the provided distribution release(s).
* [ProvisioningProfile](#provisioningprofile) - Return information about the provisioning profile. Only available for iOS.
* [ReleasesAddDistributionGroup](#releasesadddistributiongroup) - Distributes a release to a group
* [ReleasesAddStore](#releasesaddstore) - Distributes a release to a store
* [ReleasesAddTesters](#releasesaddtesters) - Distributes a release to a user
* [~~ReleasesAvailableToTester~~](#releasesavailabletotester) - Return detailed information about releases avaiable to a tester. :warning: **Deprecated**
* [ReleasesCreateReleaseUpload](#releasescreatereleaseupload) - Initiate a new release upload. This API is part of multi-step upload process.
* [ReleasesDelete](#releasesdelete) - Deletes a release.
* [ReleasesDeleteDistributionGroup](#releasesdeletedistributiongroup) - Delete the given distribution group from the release
* [ReleasesDeleteDistributionStore](#releasesdeletedistributionstore) - Delete the given distribution store from the release
* [ReleasesDeleteDistributionTester](#releasesdeletedistributiontester) - Delete the given tester from the release
* [ReleasesDeleteTesterFromDestinations](#releasesdeletetesterfromdestinations) - Delete the given tester from the all releases
* [ReleasesDeleteWithDistributionGroupID](#releasesdeletewithdistributiongroupid) - Deletes a release with id 'release_id' in a given distribution group.
* [ReleasesGetIosManifest](#releasesgetiosmanifest) - Returns the manifest.plist in XML format for installing the release on a device. Only available for iOS.
* [ReleasesGetLatestByDistributionGroup](#releasesgetlatestbydistributiongroup) - Return detailed information about a distributed release in a given distribution group.
* [ReleasesGetLatestByHash](#releasesgetlatestbyhash) - If 'latest' is not specified then it will return the specified release if it's enabled. If 'latest' is specified, regardless of whether a release hash is provided, the latest enabled release is returned.
* [ReleasesGetLatestByPublicDistributionGroup](#releasesgetlatestbypublicdistributiongroup) - Get a release with 'latest' for the given public group.
* [ReleasesGetLatestByUser](#releasesgetlatestbyuser) - Get a release with id `release_id`. If `release_id` is `latest`, return the latest release that was distributed to the current user (from all the distribution groups).
* [ReleasesGetLatestPrivateRelease](#releasesgetlatestprivaterelease) - Get the latest release distributed to a private group the given user is a member of for the given app.
* [~~ReleasesGetLatestPublicRelease~~](#releasesgetlatestpublicrelease) - Get the latest public release for the given app. :warning: **Deprecated**
* [ReleasesGetPublicGroupsForReleaseByHash](#releasesgetpublicgroupsforreleasebyhash) - Get all public distribution groups that a given release has been distributed to
* [ReleasesGetReleaseUploadStatus](#releasesgetreleaseuploadstatus) - Get the current status of the release upload.
* [ReleasesGetSparkleFeed](#releasesgetsparklefeed) - Gets the sparkle feed of the releases that are distributed to all the public distribution groups.
* [ReleasesList](#releaseslist) - Return basic information about releases.
* [ReleasesListByDistributionGroup](#releaseslistbydistributiongroup) - Return basic information about distributed releases in a given distribution group.
* [ReleasesListLatest](#releaseslistlatest) - Get the latest release from every distribution group associated with an application.
* [ReleasesPutDistributionGroup](#releasesputdistributiongroup) - Update details about the specified distribution group associated with the release
* [ReleasesPutDistributionTester](#releasesputdistributiontester) - Update details about the specified tester associated with the release
* [ReleasesUpdate](#releasesupdate) - Updates a release.
* [ReleasesUpdateDetails](#releasesupdatedetails) - Update details of a release.
* [ReleasesUpdateReleaseUploadStatus](#releasesupdatereleaseuploadstatus) - Update the current status of the release upload.
* [StoreNotificationsGetNotificationByAppID](#storenotificationsgetnotificationbyappid) - Application specific store service status
* [StoreReleasePublishLogsGet](#storereleasepublishlogsget) - Returns publish logs for a particular release published to a particular store
* [StoreReleasesDelete](#storereleasesdelete) - delete the release with release Id
* [StoreReleasesGet](#storereleasesget) - Return releases published in a store for releaseId and storeId
* [StoreReleasesGetLatest](#storereleasesgetlatest) - Returns the latest release published in a store.
* [StoreReleasesGetPublishError](#storereleasesgetpublisherror) - Return the Error Details of release which failed in publishing.
* [StoreReleasesGetRealTimeStatusByReleaseID](#storereleasesgetrealtimestatusbyreleaseid) - Return the Real time Status publishing of release from store.
* [StoreReleasesList](#storereleaseslist) - Return all releases published  in a store
* [StoresCreate](#storescreate) - Create a new external store for the specified application.
* [StoresDelete](#storesdelete) - delete the store based on specific store name.
* [StoresGet](#storesget) - Return the store details for specified store name.
* [StoresList](#storeslist) - Get all the store details from Storage store table for a particular application.
* [StoresPatch](#storespatch) - Update the store.

## ~~AppleMappingTestFlightGroups~~

Fetch all apple test flight groups

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.AppleMappingTestFlightGroups(ctx, operations.AppleMappingTestFlightGroupsRequest{
        AppName: "sapiente",
        OwnerName: "rem",
    }, operations.AppleMappingTestFlightGroupsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppleMappingTestFlightGroups200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## AppleMappingCreate

Create a mapping for an existing app in apple store for the specified application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.AppleMappingCreate(ctx, operations.AppleMappingCreateRequest{
        RequestBody: operations.AppleMappingCreateRequestBody{
            AppleID: sdk.String("minus"),
            BundleIdentifier: sdk.String("nemo"),
            ServiceConnectionID: "asperiores",
            TeamIdentifier: "ratione",
        },
        AppName: "ullam",
        OwnerName: "perferendis",
    }, operations.AppleMappingCreateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppleMappingCreate201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppleMappingDelete

Delete mapping of apple app to an existing app in apple store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.AppleMappingDelete(ctx, operations.AppleMappingDeleteRequest{
        RequestBody: sdk.String("illum"),
        AppName: "totam",
        OwnerName: "impedit",
    }, operations.AppleMappingDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppleMappingGet

Get mapping of apple app to an existing app in apple store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.AppleMappingGet(ctx, operations.AppleMappingGetRequest{
        AppName: "quibusdam",
        OwnerName: "nam",
    }, operations.AppleMappingGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppleMappingGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DevicesDeviceDetails

Returns the device details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.DevicesDeviceDetails(ctx, operations.DevicesDeviceDetailsRequest{
        DeviceUdid: "ipsam",
    }, operations.DevicesDeviceDetailsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DevicesDeviceDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DevicesGetReleaseUpdateDevicesStatus

Returns the resign status to the caller

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.DevicesGetReleaseUpdateDevicesStatus(ctx, operations.DevicesGetReleaseUpdateDevicesStatusRequest{
        AppName: "culpa",
        IncludeProvisioningProfile: sdk.Bool(false),
        OwnerName: "dolor",
        ReleaseID: "aliquam",
        ResignID: "inventore",
    }, operations.DevicesGetReleaseUpdateDevicesStatusSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DevicesGetReleaseUpdateDevicesStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DevicesList

Returns all devices associated with the given distribution group

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.DevicesList(ctx, operations.DevicesListRequest{
        AppName: "deleniti",
        DistributionGroupName: "veritatis",
        OwnerName: "tempora",
        ReleaseID: sdk.Float64(2213.96),
    }, operations.DevicesListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DevicesList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## DevicesListCsvFormat

Returns all devices associated with the given distribution group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.DevicesListCsvFormat(ctx, operations.DevicesListCsvFormatRequest{
        AppName: "consequatur",
        DistributionGroupName: "architecto",
        OwnerName: "sit",
        Udids: []string{
            "fugit",
            "ab",
        },
        UnprovisionedOnly: sdk.Bool(false),
    }, operations.DevicesListCsvFormatSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DevicesRegisterUserForDevice

Registers a user for an existing device

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.DevicesRegisterUserForDevice(ctx, operations.DevicesRegisterUserForDeviceRequest{
        RequestBody: operations.DevicesRegisterUserForDeviceRequestBody{
            Imei: sdk.String("laudantium"),
            Model: "quae",
            OsBuild: sdk.String("dolor"),
            OsVersion: sdk.String("fugiat"),
            OwnerID: sdk.String("ipsam"),
            Serial: sdk.String("consequuntur"),
            Udid: "ipsa",
        },
        UserID: "quas",
    }, operations.DevicesRegisterUserForDeviceSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DevicesRegisterUserForDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DevicesRemoveUserDevice

Removes an existing device from a user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.DevicesRemoveUserDevice(ctx, operations.DevicesRemoveUserDeviceRequest{
        DeviceUdid: "eveniet",
    }, operations.DevicesRemoveUserDeviceSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DevicesUserDevicesList

Returns all devices associated with the given user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.DevicesUserDevicesList(ctx, operations.DevicesUserDevicesListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DevicesUserDevicesList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## DistibutionReleasesInstallAnalytics

Notify download(s) for the provided distribution release(s).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.DistibutionReleasesInstallAnalytics(ctx, operations.DistibutionReleasesInstallAnalyticsRequest{
        RequestBody: operations.DistibutionReleasesInstallAnalyticsRequestBody{
            Releases: []DistibutionReleasesInstallAnalyticsRequestBodyReleases{
                operations.DistibutionReleasesInstallAnalyticsRequestBodyReleases{
                    DistributionGroupID: "officiis",
                    ReleaseID: 456410,
                    UserID: "e253b668-451c-46c6-a205-e16deab3fec9",
                },
                operations.DistibutionReleasesInstallAnalyticsRequestBodyReleases{
                    DistributionGroupID: "nemo",
                    ReleaseID: 455898,
                    UserID: "8a645842-73a8-4418-9162-309fb0929921",
                },
                operations.DistibutionReleasesInstallAnalyticsRequestBodyReleases{
                    DistributionGroupID: "fuga",
                    ReleaseID: 881897,
                    UserID: "fb9f58c4-d86e-468e-8be0-56013f59da75",
                },
                operations.DistibutionReleasesInstallAnalyticsRequestBodyReleases{
                    DistributionGroupID: "reprehenderit",
                    ReleaseID: 667715,
                    UserID: "59ecfef6-6ef1-4caa-b383-c2beb477373c",
                },
            },
        },
        AppName: "deleniti",
        OwnerName: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProvisioningProfile

Return information about the provisioning profile. Only available for iOS.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ProvisioningProfile(ctx, operations.ProvisioningProfileRequest{
        AppName: "iure",
        OwnerName: "odit",
        ReleaseID: 974990,
    }, operations.ProvisioningProfileSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProvisioningProfileResponse != nil {
        // handle response
    }
}
```

## ReleasesAddDistributionGroup

Distributes a release to a group

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesAddDistributionGroup(ctx, operations.ReleasesAddDistributionGroupRequest{
        RequestBody: operations.ReleasesAddDistributionGroupRequestBody{
            ID: "64d1db1f-2c43-4106-a1e9-6349e1cf9e06",
            MandatoryUpdate: sdk.Bool(false),
            NotifyTesters: sdk.Bool(false),
        },
        AppName: "itaque",
        OwnerName: "velit",
        ReleaseID: 673838,
    }, operations.ReleasesAddDistributionGroupSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesAddDistributionGroup201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReleasesAddStore

Distributes a release to a store

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesAddStore(ctx, operations.ReleasesAddStoreRequest{
        RequestBody: operations.ReleasesAddStoreRequestBody{
            ID: "437000ae-6b6b-4c9b-8f75-9eac55a9741d",
        },
        AppName: "consectetur",
        OwnerName: "vitae",
        ReleaseID: 81371,
    }, operations.ReleasesAddStoreSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesAddStore201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReleasesAddTesters

Distributes a release to a user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesAddTesters(ctx, operations.ReleasesAddTestersRequest{
        RequestBody: operations.ReleasesAddTestersRequestBody{
            Email: "Emory.Deckow@gmail.com",
            MandatoryUpdate: sdk.Bool(false),
            NotifyTesters: sdk.Bool(false),
        },
        AppName: "nemo",
        OwnerName: "soluta",
        ReleaseID: 726227,
    }, operations.ReleasesAddTestersSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesAddTesters201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~ReleasesAvailableToTester~~

Return detailed information about releases avaiable to a tester.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesAvailableToTester(ctx, operations.ReleasesAvailableToTesterRequest{
        AppName: "rem",
        OwnerName: "dolorum",
        PublishedOnly: sdk.Bool(false),
    }, operations.ReleasesAvailableToTesterSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesAvailableToTester200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ReleasesCreateReleaseUpload

Initiate a new release upload. This API is part of multi-step upload process.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesCreateReleaseUpload(ctx, operations.ReleasesCreateReleaseUploadRequest{
        RequestBody: &operations.ReleasesCreateReleaseUploadRequestBody{
            BuildNumber: sdk.String("odio"),
            BuildVersion: sdk.String("fugit"),
        },
        AppName: "alias",
        OwnerName: "magni",
    }, operations.ReleasesCreateReleaseUploadSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesCreateReleaseUpload201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReleasesDelete

Deletes a release.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesDelete(ctx, operations.ReleasesDeleteRequest{
        AppName: "vel",
        OwnerName: "quae",
        ReleaseID: 63553,
    }, operations.ReleasesDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReleasesDeleteDistributionGroup

Delete the given distribution group from the release

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesDeleteDistributionGroup(ctx, operations.ReleasesDeleteDistributionGroupRequest{
        AppName: "modi",
        GroupID: "neque",
        OwnerName: "exercitationem",
        ReleaseID: 932394,
    }, operations.ReleasesDeleteDistributionGroupSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReleasesDeleteDistributionStore

Delete the given distribution store from the release

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesDeleteDistributionStore(ctx, operations.ReleasesDeleteDistributionStoreRequest{
        AppName: "et",
        OwnerName: "ipsum",
        ReleaseID: 602229,
        StoreID: "nulla",
    }, operations.ReleasesDeleteDistributionStoreSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReleasesDeleteDistributionTester

Delete the given tester from the release

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesDeleteDistributionTester(ctx, operations.ReleasesDeleteDistributionTesterRequest{
        AppName: "distinctio",
        OwnerName: "maxime",
        ReleaseID: 157222,
        TesterID: "quia",
    }, operations.ReleasesDeleteDistributionTesterSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReleasesDeleteTesterFromDestinations

Delete the given tester from the all releases

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesDeleteTesterFromDestinations(ctx, operations.ReleasesDeleteTesterFromDestinationsRequest{
        AppName: "nostrum",
        OwnerName: "omnis",
        TesterID: "libero",
    }, operations.ReleasesDeleteTesterFromDestinationsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReleasesDeleteWithDistributionGroupID

Deletes a release with id 'release_id' in a given distribution group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesDeleteWithDistributionGroupID(ctx, operations.ReleasesDeleteWithDistributionGroupIDRequest{
        AppName: "dicta",
        DistributionGroupName: "id",
        OwnerName: "libero",
        ReleaseID: 854460,
    }, operations.ReleasesDeleteWithDistributionGroupIDSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReleasesGetIosManifest

Returns the manifest.plist in XML format for installing the release on a device. Only available for iOS.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesGetIosManifest(ctx, operations.ReleasesGetIosManifestRequest{
        AppID: "officia",
        ReleaseID: 554603,
        Token: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReleasesGetLatestByDistributionGroup

Return detailed information about a distributed release in a given distribution group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesGetLatestByDistributionGroup(ctx, operations.ReleasesGetLatestByDistributionGroupRequest{
        AppName: "sit",
        DistributionGroupName: "iusto",
        IsInstallPage: sdk.Bool(false),
        OwnerName: "ipsa",
        ReleaseID: "voluptates",
    }, operations.ReleasesGetLatestByDistributionGroupSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesGetLatestByDistributionGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReleasesGetLatestByHash

If 'latest' is not specified then it will return the specified release if it's enabled. If 'latest' is specified, regardless of whether a release hash is provided, the latest enabled release is returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesGetLatestByHash(ctx, operations.ReleasesGetLatestByHashRequest{
        AppSecret: "inventore",
        ReleaseHash: "aperiam",
        Udid: sdk.String("totam"),
    }, operations.ReleasesGetLatestByHashSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesGetLatestByHash200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReleasesGetLatestByPublicDistributionGroup

Get a release with 'latest' for the given public group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesGetLatestByPublicDistributionGroup(ctx, operations.ReleasesGetLatestByPublicDistributionGroupRequest{
        AppSecret: "dolore",
        DistributionGroupID: "eligendi",
        IsInstallPage: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesGetLatestByPublicDistributionGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReleasesGetLatestByUser

Get a release with id `release_id`. If `release_id` is `latest`, return the latest release that was distributed to the current user (from all the distribution groups).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesGetLatestByUser(ctx, operations.ReleasesGetLatestByUserRequest{
        AppName: "distinctio",
        IsInstallPage: sdk.Bool(false),
        OwnerName: "voluptatem",
        ReleaseID: "autem",
        Udid: sdk.String("esse"),
    }, operations.ReleasesGetLatestByUserSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesGetLatestByUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReleasesGetLatestPrivateRelease

Get the latest release distributed to a private group the given user is a member of for the given app.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesGetLatestPrivateRelease(ctx, operations.ReleasesGetLatestPrivateReleaseRequest{
        AppSecret: "dolores",
        Udid: sdk.String("assumenda"),
    }, operations.ReleasesGetLatestPrivateReleaseSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesGetLatestPrivateRelease200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~ReleasesGetLatestPublicRelease~~

Get the latest public release for the given app.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesGetLatestPublicRelease(ctx, operations.ReleasesGetLatestPublicReleaseRequest{
        AppSecret: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesGetLatestPublicRelease200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReleasesGetPublicGroupsForReleaseByHash

Get all public distribution groups that a given release has been distributed to

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesGetPublicGroupsForReleaseByHash(ctx, operations.ReleasesGetPublicGroupsForReleaseByHashRequest{
        AppSecret: "est",
        ReleaseHash: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesGetPublicGroupsForReleaseByHash200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ReleasesGetReleaseUploadStatus

Get the current status of the release upload.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesGetReleaseUploadStatus(ctx, operations.ReleasesGetReleaseUploadStatusRequest{
        AppName: "corrupti",
        OwnerName: "molestiae",
        UploadID: "9eeb9665-b85e-4fbd-82ba-e0be2d782259",
    }, operations.ReleasesGetReleaseUploadStatusSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesGetReleaseUploadStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReleasesGetSparkleFeed

Gets the sparkle feed of the releases that are distributed to all the public distribution groups.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesGetSparkleFeed(ctx, operations.ReleasesGetSparkleFeedRequest{
        AppSecret: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReleasesList

Return basic information about releases.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesList(ctx, operations.ReleasesListRequest{
        AppName: "adipisci",
        OwnerName: "recusandae",
        PublishedOnly: sdk.Bool(false),
        ReleaseID: sdk.Float64(6308.71),
        Scope: sdk.String("ut"),
        Top: sdk.Float64(6937.46),
    }, operations.ReleasesListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ReleasesListByDistributionGroup

Return basic information about distributed releases in a given distribution group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesListByDistributionGroup(ctx, operations.ReleasesListByDistributionGroupRequest{
        AppName: "quis",
        DistributionGroupName: "beatae",
        OwnerName: "unde",
    }, operations.ReleasesListByDistributionGroupSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesListByDistributionGroup200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ReleasesListLatest

Get the latest release from every distribution group associated with an application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesListLatest(ctx, operations.ReleasesListLatestRequest{
        AppName: "molestiae",
        OwnerName: "delectus",
    }, operations.ReleasesListLatestSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesListLatest200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ReleasesPutDistributionGroup

Update details about the specified distribution group associated with the release

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesPutDistributionGroup(ctx, operations.ReleasesPutDistributionGroupRequest{
        RequestBody: &operations.ReleasesPutDistributionGroupRequestBody{
            MandatoryUpdate: false,
        },
        AppName: "cupiditate",
        GroupID: "2443da7c-e52b-4895-8537-c6454efb0b34",
        OwnerName: "totam",
        ReleaseID: 577709,
    }, operations.ReleasesPutDistributionGroupSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReleasesPutDistributionTester

Update details about the specified tester associated with the release

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesPutDistributionTester(ctx, operations.ReleasesPutDistributionTesterRequest{
        RequestBody: &operations.ReleasesPutDistributionTesterRequestBody{
            MandatoryUpdate: false,
        },
        AppName: "voluptas",
        OwnerName: "quo",
        ReleaseID: 242099,
        TesterID: "ca5acfbe-2fd5-4707-9779-29177deac646",
    }, operations.ReleasesPutDistributionTesterSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReleasesUpdate

Updates a release.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesUpdate(ctx, operations.ReleasesUpdateRequest{
        RequestBody: []byte("officiis"),
        AppName: "placeat",
        OwnerName: "quidem",
        ReleaseID: 348192,
    }, operations.ReleasesUpdateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReleasesUpdateDetails

Update details of a release.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesUpdateDetails(ctx, operations.ReleasesUpdateDetailsRequest{
        RequestBody: operations.ReleasesUpdateDetailsRequestBody{
            Build: &operations.ReleasesUpdateDetailsRequestBodyBuild{
                BranchName: sdk.String("quam"),
                CommitHash: sdk.String("dolorem"),
                CommitMessage: sdk.String("modi"),
            },
            Enabled: sdk.Bool(false),
            ReleaseNotes: sdk.String("ipsa"),
        },
        AppName: "sint",
        OwnerName: "vero",
        ReleaseID: 194901,
    }, operations.ReleasesUpdateDetailsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesUpdateDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReleasesUpdateReleaseUploadStatus

Update the current status of the release upload.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.ReleasesUpdateReleaseUploadStatus(ctx, operations.ReleasesUpdateReleaseUploadStatusRequest{
        RequestBody: operations.ReleasesUpdateReleaseUploadStatusRequestBody{
            UploadStatus: operations.ReleasesUpdateReleaseUploadStatusRequestBodyUploadStatusEnumUploadCanceled,
        },
        AppName: "cum",
        Extract: sdk.Bool(false),
        OwnerName: "dicta",
        UploadID: "e5a2b12e-b07f-4116-9b99-545fc95fa889",
    }, operations.ReleasesUpdateReleaseUploadStatusSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleasesUpdateReleaseUploadStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## StoreNotificationsGetNotificationByAppID

Application specific store service status

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.StoreNotificationsGetNotificationByAppID(ctx, operations.StoreNotificationsGetNotificationByAppIDRequest{
        AppName: "odio",
        OwnerName: "eaque",
    }, operations.StoreNotificationsGetNotificationByAppIDSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreNotificationsGetNotificationByAppID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## StoreReleasePublishLogsGet

Returns publish logs for a particular release published to a particular store

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.StoreReleasePublishLogsGet(ctx, operations.StoreReleasePublishLogsGetRequest{
        AppName: "saepe",
        OwnerName: "architecto",
        ReleaseID: "quos",
        StoreName: "iste",
    }, operations.StoreReleasePublishLogsGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StoreReleasesDelete

delete the release with release Id

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.StoreReleasesDelete(ctx, operations.StoreReleasesDeleteRequest{
        RequestBody: sdk.String("assumenda"),
        AppName: "tempore",
        OwnerName: "libero",
        ReleaseID: "velit",
        StoreName: "doloremque",
    }, operations.StoreReleasesDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StoreReleasesGet

Return releases published in a store for releaseId and storeId

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.StoreReleasesGet(ctx, operations.StoreReleasesGetRequest{
        AppName: "delectus",
        OwnerName: "impedit",
        ReleaseID: "cum",
        StoreName: "ipsum",
    }, operations.StoreReleasesGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreReleasesGet200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## StoreReleasesGetLatest

Returns the latest release published in a store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.StoreReleasesGetLatest(ctx, operations.StoreReleasesGetLatestRequest{
        AppName: "adipisci",
        OwnerName: "saepe",
        StoreName: "deserunt",
    }, operations.StoreReleasesGetLatestSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreReleasesGetLatest200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## StoreReleasesGetPublishError

Return the Error Details of release which failed in publishing.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.StoreReleasesGetPublishError(ctx, operations.StoreReleasesGetPublishErrorRequest{
        AppName: "doloremque",
        OwnerName: "quis",
        ReleaseID: 3330.72,
        StoreName: "libero",
    }, operations.StoreReleasesGetPublishErrorSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreReleasesGetPublishError200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## StoreReleasesGetRealTimeStatusByReleaseID

Return the Real time Status publishing of release from store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.StoreReleasesGetRealTimeStatusByReleaseID(ctx, operations.StoreReleasesGetRealTimeStatusByReleaseIDRequest{
        AppName: "architecto",
        OwnerName: "cupiditate",
        ReleaseID: 4755.89,
        StoreName: "eligendi",
    }, operations.StoreReleasesGetRealTimeStatusByReleaseIDSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreReleasesGetRealTimeStatusByReleaseID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## StoreReleasesList

Return all releases published  in a store

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.StoreReleasesList(ctx, operations.StoreReleasesListRequest{
        AppName: "possimus",
        OwnerName: "non",
        StoreName: "magnam",
    }, operations.StoreReleasesListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreReleasesList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## StoresCreate

Create a new external store for the specified application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.StoresCreate(ctx, operations.StoresCreateRequest{
        RequestBody: operations.StoresCreateRequestBody{
            IntuneDetails: &operations.StoresCreateRequestBodyIntuneDetails{
                AppCategory: &operations.StoresCreateRequestBodyIntuneDetailsAppCategory{
                    Name: sdk.String("Jeremy Zemlak"),
                },
                SecretJSON: &operations.StoresCreateRequestBodyIntuneDetailsSecretJSON{
                    IDToken: sdk.String("facere"),
                    RefreshToken: sdk.String("laudantium"),
                    RefreshTokenExpiry: sdk.String("odit"),
                },
                TargetAudience: &operations.StoresCreateRequestBodyIntuneDetailsTargetAudience{
                    Name: sdk.String("Mrs. Allen Heidenreich"),
                },
                TenantID: sdk.String("tempore"),
            },
            Name: sdk.String("Tami Hahn"),
            ServiceConnectionID: sdk.String("nisi"),
            Track: operations.StoresCreateRequestBodyTrackEnumAlpha.ToPointer(),
            Type: operations.StoresCreateRequestBodyTypeEnumApple.ToPointer(),
        },
        AppName: "libero",
        OwnerName: "minus",
    }, operations.StoresCreateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoresCreate201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## StoresDelete

delete the store based on specific store name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.StoresDelete(ctx, operations.StoresDeleteRequest{
        RequestBody: sdk.String("facere"),
        AppName: "facilis",
        OwnerName: "ipsum",
        StoreName: "ad",
    }, operations.StoresDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StoresGet

Return the store details for specified store name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.StoresGet(ctx, operations.StoresGetRequest{
        AppName: "voluptatibus",
        OwnerName: "voluptatibus",
        StoreName: "consequuntur",
    }, operations.StoresGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoresGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## StoresList

Get all the store details from Storage store table for a particular application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.StoresList(ctx, operations.StoresListRequest{
        AppName: "debitis",
        OwnerName: "labore",
    }, operations.StoresListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoresList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## StoresPatch

Update the store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Distribute.StoresPatch(ctx, operations.StoresPatchRequest{
        RequestBody: operations.StoresPatchRequestBody{
            ServiceConnectionID: "rerum",
        },
        AppName: "eos",
        OwnerName: "reprehenderit",
        StoreName: "nostrum",
    }, operations.StoresPatchSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
