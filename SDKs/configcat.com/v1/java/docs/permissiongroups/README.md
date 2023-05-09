# permissionGroups

## Overview

With these endpoints you can manage your Permission Groups.

<a href="https://configcat.com/docs/advanced/team-collaboration#permissions--groups" target="_blank" rel="noopener noreferrer">Here</a> you can read more about Permissions.

### Available Operations

* [createPermissionGroup](#createpermissiongroup) - Create Permission Group
* [deletePermissionGroup](#deletepermissiongroup) - Delete Permission Group
* [getPermissionGroup](#getpermissiongroup) - Get Permission Group
* [getPermissionGroups](#getpermissiongroups) - List Permission Groups
* [updatePermissionGroup](#updatepermissiongroup) - Update Permission Group

## createPermissionGroup

This endpoint creates a new Permission Group in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePermissionGroupRequest;
import org.openapis.openapi.models.operations.CreatePermissionGroupResponse;
import org.openapis.openapi.models.shared.AccessTypeEnum;
import org.openapis.openapi.models.shared.CreateOrUpdateEnvironmentAccessModel;
import org.openapis.openapi.models.shared.CreatePermissionGroupRequest;
import org.openapis.openapi.models.shared.EnvironmentAccessTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda", "officiis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            CreatePermissionGroupRequest req = new CreatePermissionGroupRequest(                new CreatePermissionGroupRequest("architecto") {{
                                accessType = AccessTypeEnum.READ_ONLY;
                                canCreateOrUpdateConfig = false;
                                canCreateOrUpdateEnvironment = false;
                                canCreateOrUpdateSegments = false;
                                canCreateOrUpdateSetting = false;
                                canCreateOrUpdateTag = false;
                                canDeleteConfig = false;
                                canDeleteEnvironment = false;
                                canDeleteSegments = false;
                                canDeleteSetting = false;
                                canDeleteTag = false;
                                canManageIntegrations = false;
                                canManageMembers = false;
                                canManageProductPreferences = false;
                                canManageWebhook = false;
                                canRotateSDKKey = false;
                                canTagSetting = false;
                                canUseExportImport = false;
                                canViewProductAuditLog = false;
                                canViewProductStatistics = false;
                                canViewSDKKey = false;
                                environmentAccesses = new org.openapis.openapi.models.shared.CreateOrUpdateEnvironmentAccessModel[]{{
                                    add(new CreateOrUpdateEnvironmentAccessModel() {{
                                        color = "ipsa";
                                        description = "nobis";
                                        environmentAccessType = EnvironmentAccessTypeEnum.NONE;
                                        environmentId = "2169e510-019c-46dc-9e34-762799bfbbe6";
                                        name = "Ray Mertz";
                                        order = 135548;
                                        reasonRequired = false;
                                    }}),
                                    add(new CreateOrUpdateEnvironmentAccessModel() {{
                                        color = "libero";
                                        description = "nam";
                                        environmentAccessType = EnvironmentAccessTypeEnum.FULL;
                                        environmentId = "ecae6c3d-5db3-4ade-bd5d-aea4c506a8aa";
                                        name = "Mr. Leroy Sanford";
                                        order = 301309;
                                        reasonRequired = false;
                                    }}),
                                    add(new CreateOrUpdateEnvironmentAccessModel() {{
                                        color = "quaerat";
                                        description = "eligendi";
                                        environmentAccessType = EnvironmentAccessTypeEnum.NONE;
                                        environmentId = "5e9d9a45-78ad-4c1a-8600-dec001ac802e";
                                        name = "Ms. Kelley Rutherford";
                                        order = 983000;
                                        reasonRequired = false;
                                    }}),
                                }};
                                newEnvironmentAccessType = EnvironmentAccessTypeEnum.READ_ONLY;
                            }};, "f0f816ff-3477-4c13-a902-c14125b0960a");            

            CreatePermissionGroupResponse res = sdk.permissionGroups.createPermissionGroup(req);

            if (res.permissionGroupModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePermissionGroup

This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePermissionGroupRequest;
import org.openapis.openapi.models.operations.DeletePermissionGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam", "ex") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeletePermissionGroupRequest req = new DeletePermissionGroupRequest(555679L);            

            DeletePermissionGroupResponse res = sdk.permissionGroups.deletePermissionGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPermissionGroup

This endpoint returns the metadata of a Permission Group 
identified by the `permissionGroupId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPermissionGroupRequest;
import org.openapis.openapi.models.operations.GetPermissionGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis", "ullam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetPermissionGroupRequest req = new GetPermissionGroupRequest(62688L);            

            GetPermissionGroupResponse res = sdk.permissionGroups.getPermissionGroup(req);

            if (res.permissionGroupModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPermissionGroups

This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPermissionGroupsRequest;
import org.openapis.openapi.models.operations.GetPermissionGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique", "incidunt") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetPermissionGroupsRequest req = new GetPermissionGroupsRequest("72af923c-5949-4f83-b350-cf876ffb901c");            

            GetPermissionGroupsResponse res = sdk.permissionGroups.getPermissionGroups(req);

            if (res.permissionGroupModelHaljsons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePermissionGroup

This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePermissionGroupRequest;
import org.openapis.openapi.models.operations.UpdatePermissionGroupResponse;
import org.openapis.openapi.models.shared.AccessTypeEnum;
import org.openapis.openapi.models.shared.CreateOrUpdateEnvironmentAccessModel;
import org.openapis.openapi.models.shared.EnvironmentAccessTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePermissionGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi", "eveniet") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            UpdatePermissionGroupRequest req = new UpdatePermissionGroupRequest(                new UpdatePermissionGroupRequest() {{
                                accessType = AccessTypeEnum.CUSTOM;
                                canCreateOrUpdateConfig = false;
                                canCreateOrUpdateEnvironment = false;
                                canCreateOrUpdateSegments = false;
                                canCreateOrUpdateSetting = false;
                                canCreateOrUpdateTag = false;
                                canDeleteConfig = false;
                                canDeleteEnvironment = false;
                                canDeleteSegments = false;
                                canDeleteSetting = false;
                                canDeleteTag = false;
                                canManageIntegrations = false;
                                canManageMembers = false;
                                canManageProductPreferences = false;
                                canManageWebhook = false;
                                canRotateSDKKey = false;
                                canTagSetting = false;
                                canUseExportImport = false;
                                canViewProductAuditLog = false;
                                canViewProductStatistics = false;
                                canViewSDKKey = false;
                                environmentAccesses = new org.openapis.openapi.models.shared.CreateOrUpdateEnvironmentAccessModel[]{{
                                    add(new CreateOrUpdateEnvironmentAccessModel() {{
                                        color = "quidem";
                                        description = "modi";
                                        environmentAccessType = EnvironmentAccessTypeEnum.NONE;
                                        environmentId = "243cf789-ffaf-4eda-93e5-ae6e0ac184c2";
                                        name = "Jeremiah Schimmel";
                                        order = 440847;
                                        reasonRequired = false;
                                    }}),
                                    add(new CreateOrUpdateEnvironmentAccessModel() {{
                                        color = "quod";
                                        description = "quos";
                                        environmentAccessType = EnvironmentAccessTypeEnum.READ_ONLY;
                                        environmentId = "373a40e1-942f-432e-9505-5756f5d56d0b";
                                        name = "Joseph Olson";
                                        order = 823572;
                                        reasonRequired = false;
                                    }}),
                                    add(new CreateOrUpdateEnvironmentAccessModel() {{
                                        color = "repellat";
                                        description = "repudiandae";
                                        environmentAccessType = EnvironmentAccessTypeEnum.FULL;
                                        environmentId = "3db4f62c-ba3f-4894-9aeb-c0b80a6924d3";
                                        name = "Aaron Tillman";
                                        order = 792719;
                                        reasonRequired = false;
                                    }}),
                                }};
                                name = "Julian Ziemann";
                                newEnvironmentAccessType = EnvironmentAccessTypeEnum.READ_ONLY;
                            }};, 37129L);            

            UpdatePermissionGroupResponse res = sdk.permissionGroups.updatePermissionGroup(req);

            if (res.permissionGroupModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
