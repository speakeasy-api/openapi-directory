# distribute

### Available Operations

* [~~appleMappingTestFlightGroups~~](#applemappingtestflightgroups) - Fetch all apple test flight groups :warning: **Deprecated**
* [appleMappingCreate](#applemappingcreate) - Create a mapping for an existing app in apple store for the specified application.
* [appleMappingDelete](#applemappingdelete) - Delete mapping of apple app to an existing app in apple store.
* [appleMappingGet](#applemappingget) - Get mapping of apple app to an existing app in apple store.
* [devicesDeviceDetails](#devicesdevicedetails) - Returns the device details.
* [devicesGetReleaseUpdateDevicesStatus](#devicesgetreleaseupdatedevicesstatus) - Returns the resign status to the caller
* [devicesList](#deviceslist) - Returns all devices associated with the given distribution group
* [devicesListCsvFormat](#deviceslistcsvformat) - Returns all devices associated with the given distribution group.
* [devicesRegisterUserForDevice](#devicesregisteruserfordevice) - Registers a user for an existing device
* [devicesRemoveUserDevice](#devicesremoveuserdevice) - Removes an existing device from a user
* [devicesUserDevicesList](#devicesuserdeviceslist) - Returns all devices associated with the given user.
* [distibutionReleasesInstallAnalytics](#distibutionreleasesinstallanalytics) - Notify download(s) for the provided distribution release(s).
* [provisioningProfile](#provisioningprofile) - Return information about the provisioning profile. Only available for iOS.
* [releasesAddDistributionGroup](#releasesadddistributiongroup) - Distributes a release to a group
* [releasesAddStore](#releasesaddstore) - Distributes a release to a store
* [releasesAddTesters](#releasesaddtesters) - Distributes a release to a user
* [~~releasesAvailableToTester~~](#releasesavailabletotester) - Return detailed information about releases avaiable to a tester. :warning: **Deprecated**
* [releasesCreateReleaseUpload](#releasescreatereleaseupload) - Initiate a new release upload. This API is part of multi-step upload process.
* [releasesDelete](#releasesdelete) - Deletes a release.
* [releasesDeleteDistributionGroup](#releasesdeletedistributiongroup) - Delete the given distribution group from the release
* [releasesDeleteDistributionStore](#releasesdeletedistributionstore) - Delete the given distribution store from the release
* [releasesDeleteDistributionTester](#releasesdeletedistributiontester) - Delete the given tester from the release
* [releasesDeleteTesterFromDestinations](#releasesdeletetesterfromdestinations) - Delete the given tester from the all releases
* [releasesDeleteWithDistributionGroupId](#releasesdeletewithdistributiongroupid) - Deletes a release with id 'release_id' in a given distribution group.
* [releasesGetIosManifest](#releasesgetiosmanifest) - Returns the manifest.plist in XML format for installing the release on a device. Only available for iOS.
* [releasesGetLatestByDistributionGroup](#releasesgetlatestbydistributiongroup) - Return detailed information about a distributed release in a given distribution group.
* [releasesGetLatestByHash](#releasesgetlatestbyhash) - If 'latest' is not specified then it will return the specified release if it's enabled. If 'latest' is specified, regardless of whether a release hash is provided, the latest enabled release is returned.
* [releasesGetLatestByPublicDistributionGroup](#releasesgetlatestbypublicdistributiongroup) - Get a release with 'latest' for the given public group.
* [releasesGetLatestByUser](#releasesgetlatestbyuser) - Get a release with id `release_id`. If `release_id` is `latest`, return the latest release that was distributed to the current user (from all the distribution groups).
* [releasesGetLatestPrivateRelease](#releasesgetlatestprivaterelease) - Get the latest release distributed to a private group the given user is a member of for the given app.
* [~~releasesGetLatestPublicRelease~~](#releasesgetlatestpublicrelease) - Get the latest public release for the given app. :warning: **Deprecated**
* [releasesGetPublicGroupsForReleaseByHash](#releasesgetpublicgroupsforreleasebyhash) - Get all public distribution groups that a given release has been distributed to
* [releasesGetReleaseUploadStatus](#releasesgetreleaseuploadstatus) - Get the current status of the release upload.
* [releasesGetSparkleFeed](#releasesgetsparklefeed) - Gets the sparkle feed of the releases that are distributed to all the public distribution groups.
* [releasesList](#releaseslist) - Return basic information about releases.
* [releasesListByDistributionGroup](#releaseslistbydistributiongroup) - Return basic information about distributed releases in a given distribution group.
* [releasesListLatest](#releaseslistlatest) - Get the latest release from every distribution group associated with an application.
* [releasesPutDistributionGroup](#releasesputdistributiongroup) - Update details about the specified distribution group associated with the release
* [releasesPutDistributionTester](#releasesputdistributiontester) - Update details about the specified tester associated with the release
* [releasesUpdate](#releasesupdate) - Updates a release.
* [releasesUpdateDetails](#releasesupdatedetails) - Update details of a release.
* [releasesUpdateReleaseUploadStatus](#releasesupdatereleaseuploadstatus) - Update the current status of the release upload.
* [storeNotificationsGetNotificationByAppId](#storenotificationsgetnotificationbyappid) - Application specific store service status
* [storeReleasePublishLogsGet](#storereleasepublishlogsget) - Returns publish logs for a particular release published to a particular store
* [storeReleasesDelete](#storereleasesdelete) - delete the release with release Id
* [storeReleasesGet](#storereleasesget) - Return releases published in a store for releaseId and storeId
* [storeReleasesGetLatest](#storereleasesgetlatest) - Returns the latest release published in a store.
* [storeReleasesGetPublishError](#storereleasesgetpublisherror) - Return the Error Details of release which failed in publishing.
* [storeReleasesGetRealTimeStatusByReleaseId](#storereleasesgetrealtimestatusbyreleaseid) - Return the Real time Status publishing of release from store.
* [storeReleasesList](#storereleaseslist) - Return all releases published  in a store
* [storesCreate](#storescreate) - Create a new external store for the specified application.
* [storesDelete](#storesdelete) - delete the store based on specific store name.
* [storesGet](#storesget) - Return the store details for specified store name.
* [storesList](#storeslist) - Get all the store details from Storage store table for a particular application.
* [storesPatch](#storespatch) - Update the store.

## ~~appleMappingTestFlightGroups~~

Fetch all apple test flight groups

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppleMappingTestFlightGroupsRequest;
import org.openapis.openapi.models.operations.AppleMappingTestFlightGroupsResponse;
import org.openapis.openapi.models.operations.AppleMappingTestFlightGroupsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppleMappingTestFlightGroupsRequest req = new AppleMappingTestFlightGroupsRequest("architecto", "voluptatibus");            

            AppleMappingTestFlightGroupsResponse res = sdk.distribute.appleMappingTestFlightGroups(req, new AppleMappingTestFlightGroupsSecurity("quia") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appleMappingTestFlightGroups200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appleMappingCreate

Create a mapping for an existing app in apple store for the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppleMappingCreateRequest;
import org.openapis.openapi.models.operations.AppleMappingCreateRequestBody;
import org.openapis.openapi.models.operations.AppleMappingCreateResponse;
import org.openapis.openapi.models.operations.AppleMappingCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppleMappingCreateRequest req = new AppleMappingCreateRequest(                new AppleMappingCreateRequestBody("porro", "aliquam") {{
                                appleId = "velit";
                                bundleIdentifier = "illo";
                            }};, "accusantium", "vel");            

            AppleMappingCreateResponse res = sdk.distribute.appleMappingCreate(req, new AppleMappingCreateSecurity("ea") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appleMappingCreate201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appleMappingDelete

Delete mapping of apple app to an existing app in apple store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppleMappingDeleteRequest;
import org.openapis.openapi.models.operations.AppleMappingDeleteResponse;
import org.openapis.openapi.models.operations.AppleMappingDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppleMappingDeleteRequest req = new AppleMappingDeleteRequest("beatae", "vero") {{
                requestBody = "excepturi";
            }};            

            AppleMappingDeleteResponse res = sdk.distribute.appleMappingDelete(req, new AppleMappingDeleteSecurity("eum") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## appleMappingGet

Get mapping of apple app to an existing app in apple store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppleMappingGetRequest;
import org.openapis.openapi.models.operations.AppleMappingGetResponse;
import org.openapis.openapi.models.operations.AppleMappingGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppleMappingGetRequest req = new AppleMappingGetRequest("velit", "ut");            

            AppleMappingGetResponse res = sdk.distribute.appleMappingGet(req, new AppleMappingGetSecurity("perspiciatis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appleMappingGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## devicesDeviceDetails

Returns the device details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesDeviceDetailsRequest;
import org.openapis.openapi.models.operations.DevicesDeviceDetailsResponse;
import org.openapis.openapi.models.operations.DevicesDeviceDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesDeviceDetailsRequest req = new DevicesDeviceDetailsRequest("earum");            

            DevicesDeviceDetailsResponse res = sdk.distribute.devicesDeviceDetails(req, new DevicesDeviceDetailsSecurity("dicta") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.devicesDeviceDetails200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## devicesGetReleaseUpdateDevicesStatus

Returns the resign status to the caller

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesGetReleaseUpdateDevicesStatusRequest;
import org.openapis.openapi.models.operations.DevicesGetReleaseUpdateDevicesStatusResponse;
import org.openapis.openapi.models.operations.DevicesGetReleaseUpdateDevicesStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesGetReleaseUpdateDevicesStatusRequest req = new DevicesGetReleaseUpdateDevicesStatusRequest("impedit", "voluptatibus", "iste", "itaque") {{
                includeProvisioningProfile = false;
            }};            

            DevicesGetReleaseUpdateDevicesStatusResponse res = sdk.distribute.devicesGetReleaseUpdateDevicesStatus(req, new DevicesGetReleaseUpdateDevicesStatusSecurity("alias") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.devicesGetReleaseUpdateDevicesStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## devicesList

Returns all devices associated with the given distribution group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesListRequest;
import org.openapis.openapi.models.operations.DevicesListResponse;
import org.openapis.openapi.models.operations.DevicesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesListRequest req = new DevicesListRequest("nisi", "itaque", "velit") {{
                releaseId = 6738.38;
            }};            

            DevicesListResponse res = sdk.distribute.devicesList(req, new DevicesListSecurity("non") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.devicesList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## devicesListCsvFormat

Returns all devices associated with the given distribution group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesListCsvFormatRequest;
import org.openapis.openapi.models.operations.DevicesListCsvFormatResponse;
import org.openapis.openapi.models.operations.DevicesListCsvFormatSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesListCsvFormatRequest req = new DevicesListCsvFormatRequest("dolor", "iusto", "sit") {{
                udids = new String[]{{
                    add("consequatur"),
                }};
                unprovisionedOnly = false;
            }};            

            DevicesListCsvFormatResponse res = sdk.distribute.devicesListCsvFormat(req, new DevicesListCsvFormatSecurity("officia") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## devicesRegisterUserForDevice

Registers a user for an existing device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesRegisterUserForDeviceRequest;
import org.openapis.openapi.models.operations.DevicesRegisterUserForDeviceRequestBody;
import org.openapis.openapi.models.operations.DevicesRegisterUserForDeviceResponse;
import org.openapis.openapi.models.operations.DevicesRegisterUserForDeviceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesRegisterUserForDeviceRequest req = new DevicesRegisterUserForDeviceRequest(                new DevicesRegisterUserForDeviceRequestBody("recusandae", "ea") {{
                                imei = "quidem";
                                osBuild = "voluptas";
                                osVersion = "facilis";
                                ownerId = "placeat";
                                serial = "perspiciatis";
                            }};, "expedita");            

            DevicesRegisterUserForDeviceResponse res = sdk.distribute.devicesRegisterUserForDevice(req, new DevicesRegisterUserForDeviceSecurity("deleniti") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.devicesRegisterUserForDevice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## devicesRemoveUserDevice

Removes an existing device from a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesRemoveUserDeviceRequest;
import org.openapis.openapi.models.operations.DevicesRemoveUserDeviceResponse;
import org.openapis.openapi.models.operations.DevicesRemoveUserDeviceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesRemoveUserDeviceRequest req = new DevicesRemoveUserDeviceRequest("a");            

            DevicesRemoveUserDeviceResponse res = sdk.distribute.devicesRemoveUserDevice(req, new DevicesRemoveUserDeviceSecurity("voluptate") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## devicesUserDevicesList

Returns all devices associated with the given user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesUserDevicesListResponse;
import org.openapis.openapi.models.operations.DevicesUserDevicesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesUserDevicesListResponse res = sdk.distribute.devicesUserDevicesList(new DevicesUserDevicesListSecurity("ullam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.devicesUserDevicesList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distibutionReleasesInstallAnalytics

Notify download(s) for the provided distribution release(s).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistibutionReleasesInstallAnalyticsRequest;
import org.openapis.openapi.models.operations.DistibutionReleasesInstallAnalyticsRequestBody;
import org.openapis.openapi.models.operations.DistibutionReleasesInstallAnalyticsRequestBodyReleases;
import org.openapis.openapi.models.operations.DistibutionReleasesInstallAnalyticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistibutionReleasesInstallAnalyticsRequest req = new DistibutionReleasesInstallAnalyticsRequest(                new DistibutionReleasesInstallAnalyticsRequestBody() {{
                                releases = new org.openapis.openapi.models.operations.DistibutionReleasesInstallAnalyticsRequestBodyReleases[]{{
                                    add(new DistibutionReleasesInstallAnalyticsRequestBodyReleases("exercitationem", 932394L, "139dbc22-59b1-4abd-a8c0-70e1084cb067") {{
                                        distributionGroupId = "necessitatibus";
                                        releaseId = 654082L;
                                        userId = "c55a9741-d311-4352-965b-b8a720261143";
                                    }}),
                                    add(new DistibutionReleasesInstallAnalyticsRequestBodyReleases("praesentium", 140316L, "259e3ea4-b519-47f9-a443-da7ce52b895c") {{
                                        distributionGroupId = "dolores";
                                        releaseId = 824798L;
                                        userId = "1ad879ee-b966-45b8-9efb-d02bae0be2d7";
                                    }}),
                                    add(new DistibutionReleasesInstallAnalyticsRequestBodyReleases("aperiam", 486410L, "57792917-7dea-4c64-aecb-573409e3eb1e") {{
                                        distributionGroupId = "enim";
                                        releaseId = 204072L;
                                        userId = "7c6454ef-b0b3-4489-ac3c-a5acfbe2fd57";
                                    }}),
                                }};
                            }};, "veniam", "animi");            

            DistibutionReleasesInstallAnalyticsResponse res = sdk.distribute.distibutionReleasesInstallAnalytics(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## provisioningProfile

Return information about the provisioning profile. Only available for iOS.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProvisioningProfileRequest;
import org.openapis.openapi.models.operations.ProvisioningProfileResponse;
import org.openapis.openapi.models.operations.ProvisioningProfileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProvisioningProfileRequest req = new ProvisioningProfileRequest("dolores", "nam", 115898L);            

            ProvisioningProfileResponse res = sdk.distribute.provisioningProfile(req, new ProvisioningProfileSecurity("consequuntur") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.provisioningProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesAddDistributionGroup

Distributes a release to a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesAddDistributionGroupRequest;
import org.openapis.openapi.models.operations.ReleasesAddDistributionGroupRequestBody;
import org.openapis.openapi.models.operations.ReleasesAddDistributionGroupResponse;
import org.openapis.openapi.models.operations.ReleasesAddDistributionGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesAddDistributionGroupRequest req = new ReleasesAddDistributionGroupRequest(                new ReleasesAddDistributionGroupRequestBody("eb07f116-db99-4545-bc95-fa88970e189d") {{
                                mandatoryUpdate = false;
                                notifyTesters = false;
                            }};, "tempore", "libero", 244032L);            

            ReleasesAddDistributionGroupResponse res = sdk.distribute.releasesAddDistributionGroup(req, new ReleasesAddDistributionGroupSecurity("doloremque") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesAddDistributionGroup201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesAddStore

Distributes a release to a store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesAddStoreRequest;
import org.openapis.openapi.models.operations.ReleasesAddStoreRequestBody;
import org.openapis.openapi.models.operations.ReleasesAddStoreResponse;
import org.openapis.openapi.models.operations.ReleasesAddStoreSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesAddStoreRequest req = new ReleasesAddStoreRequest(                new ReleasesAddStoreRequestBody("fcb33ea0-55b1-497c-944e-2f52d82d3513");, "facilis", "tempore", 395233L);            

            ReleasesAddStoreResponse res = sdk.distribute.releasesAddStore(req, new ReleasesAddStoreSecurity("voluptatibus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesAddStore201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesAddTesters

Distributes a release to a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesAddTestersRequest;
import org.openapis.openapi.models.operations.ReleasesAddTestersRequestBody;
import org.openapis.openapi.models.operations.ReleasesAddTestersResponse;
import org.openapis.openapi.models.operations.ReleasesAddTestersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesAddTestersRequest req = new ReleasesAddTestersRequest(                new ReleasesAddTestersRequestBody("quaerat") {{
                                mandatoryUpdate = false;
                                notifyTesters = false;
                            }};, "blanditiis", "distinctio", 392430L);            

            ReleasesAddTestersResponse res = sdk.distribute.releasesAddTesters(req, new ReleasesAddTestersSecurity("quis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesAddTesters201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~releasesAvailableToTester~~

Return detailed information about releases avaiable to a tester.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesAvailableToTesterRequest;
import org.openapis.openapi.models.operations.ReleasesAvailableToTesterResponse;
import org.openapis.openapi.models.operations.ReleasesAvailableToTesterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesAvailableToTesterRequest req = new ReleasesAvailableToTesterRequest("nisi", "libero") {{
                publishedOnly = false;
            }};            

            ReleasesAvailableToTesterResponse res = sdk.distribute.releasesAvailableToTester(req, new ReleasesAvailableToTesterSecurity("minus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesAvailableToTester200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesCreateReleaseUpload

Initiate a new release upload. This API is part of multi-step upload process.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesCreateReleaseUploadRequest;
import org.openapis.openapi.models.operations.ReleasesCreateReleaseUploadRequestBody;
import org.openapis.openapi.models.operations.ReleasesCreateReleaseUploadResponse;
import org.openapis.openapi.models.operations.ReleasesCreateReleaseUploadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesCreateReleaseUploadRequest req = new ReleasesCreateReleaseUploadRequest("facere", "facilis") {{
                requestBody = new ReleasesCreateReleaseUploadRequestBody() {{
                    buildNumber = "ipsum";
                    buildVersion = "ad";
                }};;
            }};            

            ReleasesCreateReleaseUploadResponse res = sdk.distribute.releasesCreateReleaseUpload(req, new ReleasesCreateReleaseUploadSecurity("voluptatibus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesCreateReleaseUpload201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesDelete

Deletes a release.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesDeleteRequest;
import org.openapis.openapi.models.operations.ReleasesDeleteResponse;
import org.openapis.openapi.models.operations.ReleasesDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesDeleteRequest req = new ReleasesDeleteRequest("voluptatibus", "consequuntur", 891581L);            

            ReleasesDeleteResponse res = sdk.distribute.releasesDelete(req, new ReleasesDeleteSecurity("labore") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## releasesDeleteDistributionGroup

Delete the given distribution group from the release

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesDeleteDistributionGroupRequest;
import org.openapis.openapi.models.operations.ReleasesDeleteDistributionGroupResponse;
import org.openapis.openapi.models.operations.ReleasesDeleteDistributionGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesDeleteDistributionGroupRequest req = new ReleasesDeleteDistributionGroupRequest("rerum", "eos", "reprehenderit", 345506L);            

            ReleasesDeleteDistributionGroupResponse res = sdk.distribute.releasesDeleteDistributionGroup(req, new ReleasesDeleteDistributionGroupSecurity("neque") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## releasesDeleteDistributionStore

Delete the given distribution store from the release

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesDeleteDistributionStoreRequest;
import org.openapis.openapi.models.operations.ReleasesDeleteDistributionStoreResponse;
import org.openapis.openapi.models.operations.ReleasesDeleteDistributionStoreSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesDeleteDistributionStoreRequest req = new ReleasesDeleteDistributionStoreRequest("iusto", "est", 522176L, "eligendi");            

            ReleasesDeleteDistributionStoreResponse res = sdk.distribute.releasesDeleteDistributionStore(req, new ReleasesDeleteDistributionStoreSecurity("fugiat") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## releasesDeleteDistributionTester

Delete the given tester from the release

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesDeleteDistributionTesterRequest;
import org.openapis.openapi.models.operations.ReleasesDeleteDistributionTesterResponse;
import org.openapis.openapi.models.operations.ReleasesDeleteDistributionTesterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesDeleteDistributionTesterRequest req = new ReleasesDeleteDistributionTesterRequest("unde", "officiis", 495617L, "dolor");            

            ReleasesDeleteDistributionTesterResponse res = sdk.distribute.releasesDeleteDistributionTester(req, new ReleasesDeleteDistributionTesterSecurity("dicta") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## releasesDeleteTesterFromDestinations

Delete the given tester from the all releases

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesDeleteTesterFromDestinationsRequest;
import org.openapis.openapi.models.operations.ReleasesDeleteTesterFromDestinationsResponse;
import org.openapis.openapi.models.operations.ReleasesDeleteTesterFromDestinationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesDeleteTesterFromDestinationsRequest req = new ReleasesDeleteTesterFromDestinationsRequest("error", "porro", "vitae");            

            ReleasesDeleteTesterFromDestinationsResponse res = sdk.distribute.releasesDeleteTesterFromDestinations(req, new ReleasesDeleteTesterFromDestinationsSecurity("dignissimos") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## releasesDeleteWithDistributionGroupId

Deletes a release with id 'release_id' in a given distribution group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesDeleteWithDistributionGroupIdRequest;
import org.openapis.openapi.models.operations.ReleasesDeleteWithDistributionGroupIdResponse;
import org.openapis.openapi.models.operations.ReleasesDeleteWithDistributionGroupIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesDeleteWithDistributionGroupIdRequest req = new ReleasesDeleteWithDistributionGroupIdRequest("esse", "fugiat", "ad", 134818L);            

            ReleasesDeleteWithDistributionGroupIdResponse res = sdk.distribute.releasesDeleteWithDistributionGroupId(req, new ReleasesDeleteWithDistributionGroupIdSecurity("enim") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## releasesGetIosManifest

Returns the manifest.plist in XML format for installing the release on a device. Only available for iOS.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesGetIosManifestRequest;
import org.openapis.openapi.models.operations.ReleasesGetIosManifestResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesGetIosManifestRequest req = new ReleasesGetIosManifestRequest("delectus", 482584L, "dignissimos");            

            ReleasesGetIosManifestResponse res = sdk.distribute.releasesGetIosManifest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesGetLatestByDistributionGroup

Return detailed information about a distributed release in a given distribution group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesGetLatestByDistributionGroupRequest;
import org.openapis.openapi.models.operations.ReleasesGetLatestByDistributionGroupResponse;
import org.openapis.openapi.models.operations.ReleasesGetLatestByDistributionGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesGetLatestByDistributionGroupRequest req = new ReleasesGetLatestByDistributionGroupRequest("libero", "illo", "ab", "incidunt") {{
                isInstallPage = false;
            }};            

            ReleasesGetLatestByDistributionGroupResponse res = sdk.distribute.releasesGetLatestByDistributionGroup(req, new ReleasesGetLatestByDistributionGroupSecurity("accusamus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesGetLatestByDistributionGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesGetLatestByHash

If 'latest' is not specified then it will return the specified release if it's enabled. If 'latest' is specified, regardless of whether a release hash is provided, the latest enabled release is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesGetLatestByHashRequest;
import org.openapis.openapi.models.operations.ReleasesGetLatestByHashResponse;
import org.openapis.openapi.models.operations.ReleasesGetLatestByHashSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesGetLatestByHashRequest req = new ReleasesGetLatestByHashRequest("saepe", "tempore") {{
                udid = "veniam";
            }};            

            ReleasesGetLatestByHashResponse res = sdk.distribute.releasesGetLatestByHash(req, new ReleasesGetLatestByHashSecurity("eos") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesGetLatestByHash200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesGetLatestByPublicDistributionGroup

Get a release with 'latest' for the given public group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesGetLatestByPublicDistributionGroupRequest;
import org.openapis.openapi.models.operations.ReleasesGetLatestByPublicDistributionGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesGetLatestByPublicDistributionGroupRequest req = new ReleasesGetLatestByPublicDistributionGroupRequest("reiciendis", "earum") {{
                isInstallPage = false;
            }};            

            ReleasesGetLatestByPublicDistributionGroupResponse res = sdk.distribute.releasesGetLatestByPublicDistributionGroup(req);

            if (res.releasesGetLatestByPublicDistributionGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesGetLatestByUser

Get a release with id `release_id`. If `release_id` is `latest`, return the latest release that was distributed to the current user (from all the distribution groups).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesGetLatestByUserRequest;
import org.openapis.openapi.models.operations.ReleasesGetLatestByUserResponse;
import org.openapis.openapi.models.operations.ReleasesGetLatestByUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesGetLatestByUserRequest req = new ReleasesGetLatestByUserRequest("reprehenderit", "praesentium", "nemo") {{
                isInstallPage = false;
                udid = "repellat";
            }};            

            ReleasesGetLatestByUserResponse res = sdk.distribute.releasesGetLatestByUser(req, new ReleasesGetLatestByUserSecurity("quisquam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesGetLatestByUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesGetLatestPrivateRelease

Get the latest release distributed to a private group the given user is a member of for the given app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesGetLatestPrivateReleaseRequest;
import org.openapis.openapi.models.operations.ReleasesGetLatestPrivateReleaseResponse;
import org.openapis.openapi.models.operations.ReleasesGetLatestPrivateReleaseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesGetLatestPrivateReleaseRequest req = new ReleasesGetLatestPrivateReleaseRequest("sequi") {{
                udid = "nihil";
            }};            

            ReleasesGetLatestPrivateReleaseResponse res = sdk.distribute.releasesGetLatestPrivateRelease(req, new ReleasesGetLatestPrivateReleaseSecurity("deleniti") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesGetLatestPrivateRelease200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~releasesGetLatestPublicRelease~~

Get the latest public release for the given app.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesGetLatestPublicReleaseRequest;
import org.openapis.openapi.models.operations.ReleasesGetLatestPublicReleaseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesGetLatestPublicReleaseRequest req = new ReleasesGetLatestPublicReleaseRequest("illo");            

            ReleasesGetLatestPublicReleaseResponse res = sdk.distribute.releasesGetLatestPublicRelease(req);

            if (res.releasesGetLatestPublicRelease200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesGetPublicGroupsForReleaseByHash

Get all public distribution groups that a given release has been distributed to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesGetPublicGroupsForReleaseByHashRequest;
import org.openapis.openapi.models.operations.ReleasesGetPublicGroupsForReleaseByHashResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesGetPublicGroupsForReleaseByHashRequest req = new ReleasesGetPublicGroupsForReleaseByHashRequest("labore", "assumenda");            

            ReleasesGetPublicGroupsForReleaseByHashResponse res = sdk.distribute.releasesGetPublicGroupsForReleaseByHash(req);

            if (res.releasesGetPublicGroupsForReleaseByHash200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesGetReleaseUploadStatus

Get the current status of the release upload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesGetReleaseUploadStatusRequest;
import org.openapis.openapi.models.operations.ReleasesGetReleaseUploadStatusResponse;
import org.openapis.openapi.models.operations.ReleasesGetReleaseUploadStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesGetReleaseUploadStatusRequest req = new ReleasesGetReleaseUploadStatusRequest("aliquam", "quisquam", "98e0c2bb-89eb-475d-ad63-6c600503d8bb");            

            ReleasesGetReleaseUploadStatusResponse res = sdk.distribute.releasesGetReleaseUploadStatus(req, new ReleasesGetReleaseUploadStatusSecurity("amet") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesGetReleaseUploadStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesGetSparkleFeed

Gets the sparkle feed of the releases that are distributed to all the public distribution groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesGetSparkleFeedRequest;
import org.openapis.openapi.models.operations.ReleasesGetSparkleFeedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesGetSparkleFeedRequest req = new ReleasesGetSparkleFeedRequest("quasi");            

            ReleasesGetSparkleFeedResponse res = sdk.distribute.releasesGetSparkleFeed(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesList

Return basic information about releases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesListRequest;
import org.openapis.openapi.models.operations.ReleasesListResponse;
import org.openapis.openapi.models.operations.ReleasesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesListRequest req = new ReleasesListRequest("dicta", "laudantium") {{
                publishedOnly = false;
                releaseId = 407.1;
                scope = "earum";
                top = 4797.07;
            }};            

            ReleasesListResponse res = sdk.distribute.releasesList(req, new ReleasesListSecurity("amet") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesListByDistributionGroup

Return basic information about distributed releases in a given distribution group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesListByDistributionGroupRequest;
import org.openapis.openapi.models.operations.ReleasesListByDistributionGroupResponse;
import org.openapis.openapi.models.operations.ReleasesListByDistributionGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesListByDistributionGroupRequest req = new ReleasesListByDistributionGroupRequest("provident", "dolorum", "necessitatibus");            

            ReleasesListByDistributionGroupResponse res = sdk.distribute.releasesListByDistributionGroup(req, new ReleasesListByDistributionGroupSecurity("provident") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesListByDistributionGroup200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesListLatest

Get the latest release from every distribution group associated with an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesListLatestRequest;
import org.openapis.openapi.models.operations.ReleasesListLatestResponse;
import org.openapis.openapi.models.operations.ReleasesListLatestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesListLatestRequest req = new ReleasesListLatestRequest("repudiandae", "consequatur");            

            ReleasesListLatestResponse res = sdk.distribute.releasesListLatest(req, new ReleasesListLatestSecurity("nemo") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesListLatest200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesPutDistributionGroup

Update details about the specified distribution group associated with the release

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesPutDistributionGroupRequest;
import org.openapis.openapi.models.operations.ReleasesPutDistributionGroupRequestBody;
import org.openapis.openapi.models.operations.ReleasesPutDistributionGroupResponse;
import org.openapis.openapi.models.operations.ReleasesPutDistributionGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesPutDistributionGroupRequest req = new ReleasesPutDistributionGroupRequest("molestiae", "eb809e28-1033-41f3-981d-4c700b607f3c", "provident", 231382L) {{
                requestBody = new ReleasesPutDistributionGroupRequestBody(false);;
            }};            

            ReleasesPutDistributionGroupResponse res = sdk.distribute.releasesPutDistributionGroup(req, new ReleasesPutDistributionGroupSecurity("eligendi") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## releasesPutDistributionTester

Update details about the specified tester associated with the release

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesPutDistributionTesterRequest;
import org.openapis.openapi.models.operations.ReleasesPutDistributionTesterRequestBody;
import org.openapis.openapi.models.operations.ReleasesPutDistributionTesterResponse;
import org.openapis.openapi.models.operations.ReleasesPutDistributionTesterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesPutDistributionTesterRequest req = new ReleasesPutDistributionTesterRequest("dignissimos", "consectetur", 744101L, "9da3f2ce-da7e-423f-a257-411faf4b7544") {{
                requestBody = new ReleasesPutDistributionTesterRequestBody(false);;
            }};            

            ReleasesPutDistributionTesterResponse res = sdk.distribute.releasesPutDistributionTester(req, new ReleasesPutDistributionTesterSecurity("repudiandae") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## releasesUpdate

Updates a release.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesUpdateRequest;
import org.openapis.openapi.models.operations.ReleasesUpdateRequestBody;
import org.openapis.openapi.models.operations.ReleasesUpdateRequestBodyBuild;
import org.openapis.openapi.models.operations.ReleasesUpdateRequestBodyDestinations;
import org.openapis.openapi.models.operations.ReleasesUpdateRequestBodyMetadata;
import org.openapis.openapi.models.operations.ReleasesUpdateResponse;
import org.openapis.openapi.models.operations.ReleasesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesUpdateRequest req = new ReleasesUpdateRequest("modi".getBytes(), "in", "explicabo", 879857L);            

            ReleasesUpdateResponse res = sdk.distribute.releasesUpdate(req, new ReleasesUpdateSecurity("rem") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesUpdate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesUpdateDetails

Update details of a release.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesUpdateDetailsRequest;
import org.openapis.openapi.models.operations.ReleasesUpdateDetailsRequestBody;
import org.openapis.openapi.models.operations.ReleasesUpdateDetailsRequestBodyBuild;
import org.openapis.openapi.models.operations.ReleasesUpdateDetailsResponse;
import org.openapis.openapi.models.operations.ReleasesUpdateDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesUpdateDetailsRequest req = new ReleasesUpdateDetailsRequest(                new ReleasesUpdateDetailsRequestBody() {{
                                build = new ReleasesUpdateDetailsRequestBodyBuild() {{
                                    branchName = "aperiam";
                                    commitHash = "odit";
                                    commitMessage = "deleniti";
                                }};;
                                enabled = false;
                                releaseNotes = "enim";
                            }};, "voluptate", "similique", 326118L);            

            ReleasesUpdateDetailsResponse res = sdk.distribute.releasesUpdateDetails(req, new ReleasesUpdateDetailsSecurity("libero") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesUpdateDetails200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releasesUpdateReleaseUploadStatus

Update the current status of the release upload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleasesUpdateReleaseUploadStatusRequest;
import org.openapis.openapi.models.operations.ReleasesUpdateReleaseUploadStatusRequestBody;
import org.openapis.openapi.models.operations.ReleasesUpdateReleaseUploadStatusRequestBodyUploadStatusEnum;
import org.openapis.openapi.models.operations.ReleasesUpdateReleaseUploadStatusResponse;
import org.openapis.openapi.models.operations.ReleasesUpdateReleaseUploadStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReleasesUpdateReleaseUploadStatusRequest req = new ReleasesUpdateReleaseUploadStatusRequest(                new ReleasesUpdateReleaseUploadStatusRequestBody(ReleasesUpdateReleaseUploadStatusRequestBodyUploadStatusEnum.UPLOAD_FINISHED);, "sit", "modi", "63a7d575-f140-40e7-a4ad-7334ec1b781b") {{
                extract = false;
            }};            

            ReleasesUpdateReleaseUploadStatusResponse res = sdk.distribute.releasesUpdateReleaseUploadStatus(req, new ReleasesUpdateReleaseUploadStatusSecurity("amet") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.releasesUpdateReleaseUploadStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storeNotificationsGetNotificationByAppId

Application specific store service status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreNotificationsGetNotificationByAppIdRequest;
import org.openapis.openapi.models.operations.StoreNotificationsGetNotificationByAppIdResponse;
import org.openapis.openapi.models.operations.StoreNotificationsGetNotificationByAppIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoreNotificationsGetNotificationByAppIdRequest req = new StoreNotificationsGetNotificationByAppIdRequest("autem", "fuga");            

            StoreNotificationsGetNotificationByAppIdResponse res = sdk.distribute.storeNotificationsGetNotificationByAppId(req, new StoreNotificationsGetNotificationByAppIdSecurity("alias") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.storeNotificationsGetNotificationByAppId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storeReleasePublishLogsGet

Returns publish logs for a particular release published to a particular store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreReleasePublishLogsGetRequest;
import org.openapis.openapi.models.operations.StoreReleasePublishLogsGetResponse;
import org.openapis.openapi.models.operations.StoreReleasePublishLogsGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoreReleasePublishLogsGetRequest req = new StoreReleasePublishLogsGetRequest("rem", "aut", "quos", "laudantium");            

            StoreReleasePublishLogsGetResponse res = sdk.distribute.storeReleasePublishLogsGet(req, new StoreReleasePublishLogsGetSecurity("repellendus") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## storeReleasesDelete

delete the release with release Id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreReleasesDeleteRequest;
import org.openapis.openapi.models.operations.StoreReleasesDeleteResponse;
import org.openapis.openapi.models.operations.StoreReleasesDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoreReleasesDeleteRequest req = new StoreReleasesDeleteRequest("veritatis", "quae", "eaque", "saepe") {{
                requestBody = "delectus";
            }};            

            StoreReleasesDeleteResponse res = sdk.distribute.storeReleasesDelete(req, new StoreReleasesDeleteSecurity("mollitia") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## storeReleasesGet

Return releases published in a store for releaseId and storeId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreReleasesGetRequest;
import org.openapis.openapi.models.operations.StoreReleasesGetResponse;
import org.openapis.openapi.models.operations.StoreReleasesGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoreReleasesGetRequest req = new StoreReleasesGetRequest("nulla", "officia", "sed", "voluptatem");            

            StoreReleasesGetResponse res = sdk.distribute.storeReleasesGet(req, new StoreReleasesGetSecurity("alias") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.storeReleasesGet200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storeReleasesGetLatest

Returns the latest release published in a store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreReleasesGetLatestRequest;
import org.openapis.openapi.models.operations.StoreReleasesGetLatestResponse;
import org.openapis.openapi.models.operations.StoreReleasesGetLatestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoreReleasesGetLatestRequest req = new StoreReleasesGetLatestRequest("eveniet", "hic", "voluptatem");            

            StoreReleasesGetLatestResponse res = sdk.distribute.storeReleasesGetLatest(req, new StoreReleasesGetLatestSecurity("incidunt") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.storeReleasesGetLatest200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storeReleasesGetPublishError

Return the Error Details of release which failed in publishing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreReleasesGetPublishErrorRequest;
import org.openapis.openapi.models.operations.StoreReleasesGetPublishErrorResponse;
import org.openapis.openapi.models.operations.StoreReleasesGetPublishErrorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoreReleasesGetPublishErrorRequest req = new StoreReleasesGetPublishErrorRequest("qui", "qui", 8959.12, "harum");            

            StoreReleasesGetPublishErrorResponse res = sdk.distribute.storeReleasesGetPublishError(req, new StoreReleasesGetPublishErrorSecurity("explicabo") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.storeReleasesGetPublishError200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storeReleasesGetRealTimeStatusByReleaseId

Return the Real time Status publishing of release from store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreReleasesGetRealTimeStatusByReleaseIdRequest;
import org.openapis.openapi.models.operations.StoreReleasesGetRealTimeStatusByReleaseIdResponse;
import org.openapis.openapi.models.operations.StoreReleasesGetRealTimeStatusByReleaseIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoreReleasesGetRealTimeStatusByReleaseIdRequest req = new StoreReleasesGetRealTimeStatusByReleaseIdRequest("beatae", "aliquid", 2646.49, "optio");            

            StoreReleasesGetRealTimeStatusByReleaseIdResponse res = sdk.distribute.storeReleasesGetRealTimeStatusByReleaseId(req, new StoreReleasesGetRealTimeStatusByReleaseIdSecurity("voluptatibus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.storeReleasesGetRealTimeStatusByReleaseId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storeReleasesList

Return all releases published  in a store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreReleasesListRequest;
import org.openapis.openapi.models.operations.StoreReleasesListResponse;
import org.openapis.openapi.models.operations.StoreReleasesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoreReleasesListRequest req = new StoreReleasesListRequest("molestias", "officia", "libero");            

            StoreReleasesListResponse res = sdk.distribute.storeReleasesList(req, new StoreReleasesListSecurity("totam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.storeReleasesList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storesCreate

Create a new external store for the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoresCreateRequest;
import org.openapis.openapi.models.operations.StoresCreateRequestBody;
import org.openapis.openapi.models.operations.StoresCreateRequestBodyIntuneDetails;
import org.openapis.openapi.models.operations.StoresCreateRequestBodyIntuneDetailsAppCategory;
import org.openapis.openapi.models.operations.StoresCreateRequestBodyIntuneDetailsSecretJson;
import org.openapis.openapi.models.operations.StoresCreateRequestBodyIntuneDetailsTargetAudience;
import org.openapis.openapi.models.operations.StoresCreateRequestBodyTrackEnum;
import org.openapis.openapi.models.operations.StoresCreateRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.StoresCreateResponse;
import org.openapis.openapi.models.operations.StoresCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoresCreateRequest req = new StoresCreateRequest(                new StoresCreateRequestBody() {{
                                intuneDetails = new StoresCreateRequestBodyIntuneDetails() {{
                                    appCategory = new StoresCreateRequestBodyIntuneDetailsAppCategory() {{
                                        name = "Beth Jenkins";
                                    }};;
                                    secretJson = new StoresCreateRequestBodyIntuneDetailsSecretJson() {{
                                        idToken = "odit";
                                        refreshToken = "velit";
                                        refreshTokenExpiry = "reiciendis";
                                    }};;
                                    targetAudience = new StoresCreateRequestBodyIntuneDetailsTargetAudience() {{
                                        name = "Drew Osinski";
                                    }};;
                                    tenantId = "doloremque";
                                }};;
                                name = "Susie Walsh";
                                serviceConnectionId = "rem";
                                track = StoresCreateRequestBodyTrackEnum.PRODUCTION;
                                type = StoresCreateRequestBodyTypeEnum.APPLE;
                            }};, "quisquam", "dicta");            

            StoresCreateResponse res = sdk.distribute.storesCreate(req, new StoresCreateSecurity("voluptatibus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.storesCreate201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storesDelete

delete the store based on specific store name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoresDeleteRequest;
import org.openapis.openapi.models.operations.StoresDeleteResponse;
import org.openapis.openapi.models.operations.StoresDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoresDeleteRequest req = new StoresDeleteRequest("eligendi", "quae", "officiis") {{
                requestBody = "architecto";
            }};            

            StoresDeleteResponse res = sdk.distribute.storesDelete(req, new StoresDeleteSecurity("architecto") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## storesGet

Return the store details for specified store name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoresGetRequest;
import org.openapis.openapi.models.operations.StoresGetResponse;
import org.openapis.openapi.models.operations.StoresGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoresGetRequest req = new StoresGetRequest("enim", "optio", "rem");            

            StoresGetResponse res = sdk.distribute.storesGet(req, new StoresGetSecurity("perferendis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.storesGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storesList

Get all the store details from Storage store table for a particular application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoresListRequest;
import org.openapis.openapi.models.operations.StoresListResponse;
import org.openapis.openapi.models.operations.StoresListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoresListRequest req = new StoresListRequest("facilis", "reiciendis");            

            StoresListResponse res = sdk.distribute.storesList(req, new StoresListSecurity("a") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.storesList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storesPatch

Update the store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoresPatchRequest;
import org.openapis.openapi.models.operations.StoresPatchRequestBody;
import org.openapis.openapi.models.operations.StoresPatchResponse;
import org.openapis.openapi.models.operations.StoresPatchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoresPatchRequest req = new StoresPatchRequest(                new StoresPatchRequestBody("iste");, "dicta", "quos", "ullam");            

            StoresPatchResponse res = sdk.distribute.storesPatch(req, new StoresPatchSecurity("dolore") {{
                apiToken = "YOUR_API_KEY_HERE";
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
