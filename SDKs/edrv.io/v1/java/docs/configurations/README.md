# configurations

### Available Operations

* [getConfiguration](#getconfiguration) - Get one Configuration data
* [getConfigurations](#getconfigurations) - Get Configurations data
* [postConfigurations](#postconfigurations) - Create connector with parameters

## getConfiguration

Get one Configuration data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigurationRequest;
import org.openapis.openapi.models.operations.GetConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConfigurationRequest req = new GetConfigurationRequest("saepe");            

            GetConfigurationResponse res = sdk.configurations.getConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfigurations

Get Configurations data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigurationsRequest;
import org.openapis.openapi.models.operations.GetConfigurationsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrder1Enum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConfigurationsRequest req = new GetConfigurationsRequest() {{
                createdAtDollarGte = OffsetDateTime.parse("2022-08-22T18:42:38.160Z");
                createdAtDollarLte = OffsetDateTime.parse("2022-02-15T23:12:00.119Z");
                paginateEnabled = false;
                paginateLimit = 902349L;
                paginatePage = "quidem";
                sortBy = "architecto";
                sortOrder = SortOrder1Enum.DESC;
                updatedAtDollarGte = OffsetDateTime.parse("2020-12-31T21:22:14.646Z");
                updatedAtDollarLte = OffsetDateTime.parse("2021-08-29T10:25:27.700Z");
            }};            

            GetConfigurationsResponse res = sdk.configurations.getConfigurations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConfigurations

Create connector with parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConfigurationsRequestBody;
import org.openapis.openapi.models.operations.PostConfigurationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostConfigurationsRequestBody req = new PostConfigurationsRequestBody() {{
                key = "dolorem";
                value = "corporis";
            }};            

            PostConfigurationsResponse res = sdk.configurations.postConfigurations(req);

            if (res.postConfigurations201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
