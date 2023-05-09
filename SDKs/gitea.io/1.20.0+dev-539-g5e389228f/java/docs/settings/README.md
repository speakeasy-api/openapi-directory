# settings

### Available Operations

* [getGeneralAPISettings](#getgeneralapisettings) - Get instance's global settings for api
* [getGeneralAttachmentSettings](#getgeneralattachmentsettings) - Get instance's global settings for Attachment
* [getGeneralRepositorySettings](#getgeneralrepositorysettings) - Get instance's global settings for repositories
* [getGeneralUISettings](#getgeneraluisettings) - Get instance's global settings for ui

## getGeneralAPISettings

Get instance's global settings for api

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneralAPISettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGeneralAPISettingsResponse res = sdk.settings.getGeneralAPISettings();

            if (res.generalAPISettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneralAttachmentSettings

Get instance's global settings for Attachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneralAttachmentSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGeneralAttachmentSettingsResponse res = sdk.settings.getGeneralAttachmentSettings();

            if (res.generalAttachmentSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneralRepositorySettings

Get instance's global settings for repositories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneralRepositorySettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGeneralRepositorySettingsResponse res = sdk.settings.getGeneralRepositorySettings();

            if (res.generalRepoSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneralUISettings

Get instance's global settings for ui

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneralUISettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGeneralUISettingsResponse res = sdk.settings.getGeneralUISettings();

            if (res.generalUISettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
