# auditLogs

## Overview

Access audit log entries.

### Available Operations

* [getAuditlogs](#getauditlogs) - List Audit log items for Product
* [getDeletedSettings](#getdeletedsettings) - List Deleted Settings
* [getOrganizationAuditlogs](#getorganizationauditlogs) - List Audit log items for Organization

## getAuditlogs

This endpoint returns the list of Audit log items for a given Product 
and the result can be optionally filtered by Config and/or Environment.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuditlogsAuditLogTypeEnum;
import org.openapis.openapi.models.operations.GetAuditlogsRequest;
import org.openapis.openapi.models.operations.GetAuditlogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "accusantium") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAuditlogsRequest req = new GetAuditlogsRequest("7aff1a3a-2fa9-4467-b392-51aa52c3f5ad") {{
                auditLogType = GetAuditlogsAuditLogTypeEnum.PRODUCT_CHANGED;
                configId = "19da1ffe-78f0-497b-8074-f15471b5e6e1";
                environmentId = "3b99d488-e1e9-41e4-90ad-2abd44269802";
                fromUtcDateTime = OffsetDateTime.parse("2021-11-22T01:26:35.048Z");
                toUtcDateTime = OffsetDateTime.parse("2022-11-08T13:10:11.700Z");
            }};            

            GetAuditlogsResponse res = sdk.auditLogs.getAuditlogs(req);

            if (res.auditLogItemModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeletedSettings

This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeletedSettingsRequest;
import org.openapis.openapi.models.operations.GetDeletedSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum", "excepturi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetDeletedSettingsRequest req = new GetDeletedSettingsRequest("4bb4f63c-969e-49a3-afa7-7dfb14cd66ae");            

            GetDeletedSettingsResponse res = sdk.auditLogs.getDeletedSettings(req);

            if (res.settingModelHaljsons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAuditlogs

This endpoint returns the list of Audit log items for a given Organization 
and the result can be optionally filtered by Product and/or Config and/or Environment.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAuditlogsAuditLogTypeEnum;
import org.openapis.openapi.models.operations.GetOrganizationAuditlogsRequest;
import org.openapis.openapi.models.operations.GetOrganizationAuditlogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non", "occaecati") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetOrganizationAuditlogsRequest req = new GetOrganizationAuditlogsRequest("5efb9ba8-8f3a-4669-9707-4ba4469b6e21") {{
                auditLogType = GetOrganizationAuditlogsAuditLogTypeEnum.SETTING_CREATED;
                configId = "1959890a-fa56-43e2-916f-e4c8b711e5b7";
                environmentId = "fd2ed028-921c-4ddc-a926-01fb576b0d5f";
                fromUtcDateTime = OffsetDateTime.parse("2022-02-22T15:09:45.631Z");
                productId = "30c5fbb2-5870-4532-82c7-3d5fe9b90c28";
                toUtcDateTime = OffsetDateTime.parse("2022-11-25T05:30:58.706Z");
            }};            

            GetOrganizationAuditlogsResponse res = sdk.auditLogs.getOrganizationAuditlogs(req);

            if (res.auditLogItemModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
