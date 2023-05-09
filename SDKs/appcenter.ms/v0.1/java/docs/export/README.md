# export

### Available Operations

* [exportConfigurationsCreate](#exportconfigurationscreate) - Create new export configuration
* [exportConfigurationsDelete](#exportconfigurationsdelete) - Delete export configuration.
* [exportConfigurationsDisable](#exportconfigurationsdisable) - Disable export configuration.
* [exportConfigurationsEnable](#exportconfigurationsenable) - Enable export configuration.
* [exportConfigurationsGet](#exportconfigurationsget) - Get export configuration.
* [exportConfigurationsList](#exportconfigurationslist) - List export configurations.
* [exportConfigurationsPartialUpdate](#exportconfigurationspartialupdate) - Partially update export configuration.

## exportConfigurationsCreate

Create new export configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportConfigurationsCreateRequest;
import org.openapis.openapi.models.operations.ExportConfigurationsCreateRequestBody;
import org.openapis.openapi.models.operations.ExportConfigurationsCreateRequestBodyExportEntitiesEnum;
import org.openapis.openapi.models.operations.ExportConfigurationsCreateRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.ExportConfigurationsCreateResponse;
import org.openapis.openapi.models.operations.ExportConfigurationsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportConfigurationsCreateRequest req = new ExportConfigurationsCreateRequest(                new ExportConfigurationsCreateRequestBody(ExportConfigurationsCreateRequestBodyTypeEnum.BLOB_STORAGE_LINKED_SUBSCRIPTION) {{
                                backfill = false;
                                exportEntities = new org.openapis.openapi.models.operations.ExportConfigurationsCreateRequestBodyExportEntitiesEnum[]{{
                                    add(ExportConfigurationsCreateRequestBodyExportEntitiesEnum.ATTACHMENTS),
                                    add(ExportConfigurationsCreateRequestBodyExportEntitiesEnum.ERRORS),
                                    add(ExportConfigurationsCreateRequestBodyExportEntitiesEnum.NO_LOGS),
                                    add(ExportConfigurationsCreateRequestBodyExportEntitiesEnum.ERRORS),
                                }};
                                resourceGroup = "alias";
                                resourceName = "suscipit";
                            }};, "deserunt", "molestias");            

            ExportConfigurationsCreateResponse res = sdk.export.exportConfigurationsCreate(req, new ExportConfigurationsCreateSecurity("laborum") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.exportConfigurationsCreate202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportConfigurationsDelete

Delete export configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportConfigurationsDeleteRequest;
import org.openapis.openapi.models.operations.ExportConfigurationsDeleteResponse;
import org.openapis.openapi.models.operations.ExportConfigurationsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportConfigurationsDeleteRequest req = new ExportConfigurationsDeleteRequest("est", "occaecati", "labore");            

            ExportConfigurationsDeleteResponse res = sdk.export.exportConfigurationsDelete(req, new ExportConfigurationsDeleteSecurity("quo") {{
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

## exportConfigurationsDisable

Disable export configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportConfigurationsDisableRequest;
import org.openapis.openapi.models.operations.ExportConfigurationsDisableResponse;
import org.openapis.openapi.models.operations.ExportConfigurationsDisableSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportConfigurationsDisableRequest req = new ExportConfigurationsDisableRequest("perferendis", "fugit", "aliquid");            

            ExportConfigurationsDisableResponse res = sdk.export.exportConfigurationsDisable(req, new ExportConfigurationsDisableSecurity("magnam") {{
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

## exportConfigurationsEnable

Enable export configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportConfigurationsEnableRequest;
import org.openapis.openapi.models.operations.ExportConfigurationsEnableResponse;
import org.openapis.openapi.models.operations.ExportConfigurationsEnableSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportConfigurationsEnableRequest req = new ExportConfigurationsEnableRequest("quaerat", "eligendi", "hic");            

            ExportConfigurationsEnableResponse res = sdk.export.exportConfigurationsEnable(req, new ExportConfigurationsEnableSecurity("nostrum") {{
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

## exportConfigurationsGet

Get export configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportConfigurationsGetRequest;
import org.openapis.openapi.models.operations.ExportConfigurationsGetResponse;
import org.openapis.openapi.models.operations.ExportConfigurationsGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportConfigurationsGetRequest req = new ExportConfigurationsGetRequest("officiis", "unde", "nulla");            

            ExportConfigurationsGetResponse res = sdk.export.exportConfigurationsGet(req, new ExportConfigurationsGetSecurity("error") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.exportConfigurationsGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportConfigurationsList

List export configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportConfigurationsListRequest;
import org.openapis.openapi.models.operations.ExportConfigurationsListResponse;
import org.openapis.openapi.models.operations.ExportConfigurationsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportConfigurationsListRequest req = new ExportConfigurationsListRequest("mollitia", "magnam");            

            ExportConfigurationsListResponse res = sdk.export.exportConfigurationsList(req, new ExportConfigurationsListSecurity("nostrum") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.exportConfigurationsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportConfigurationsPartialUpdate

Partially update export configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportConfigurationsPartialUpdateRequest;
import org.openapis.openapi.models.operations.ExportConfigurationsPartialUpdateRequestBody;
import org.openapis.openapi.models.operations.ExportConfigurationsPartialUpdateRequestBodyExportEntitiesEnum;
import org.openapis.openapi.models.operations.ExportConfigurationsPartialUpdateRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.ExportConfigurationsPartialUpdateResponse;
import org.openapis.openapi.models.operations.ExportConfigurationsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportConfigurationsPartialUpdateRequest req = new ExportConfigurationsPartialUpdateRequest(                new ExportConfigurationsPartialUpdateRequestBody(ExportConfigurationsPartialUpdateRequestBodyTypeEnum.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY) {{
                                backfill = false;
                                exportEntities = new org.openapis.openapi.models.operations.ExportConfigurationsPartialUpdateRequestBodyExportEntitiesEnum[]{{
                                    add(ExportConfigurationsPartialUpdateRequestBodyExportEntitiesEnum.ATTACHMENTS),
                                    add(ExportConfigurationsPartialUpdateRequestBodyExportEntitiesEnum.NO_LOGS),
                                    add(ExportConfigurationsPartialUpdateRequestBodyExportEntitiesEnum.NO_LOGS),
                                }};
                                resourceGroup = "quasi";
                                resourceName = "deserunt";
                            }};, "quod", "laboriosam", "doloremque");            

            ExportConfigurationsPartialUpdateResponse res = sdk.export.exportConfigurationsPartialUpdate(req, new ExportConfigurationsPartialUpdateSecurity("voluptatem") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.exportConfigurationsPartialUpdate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
