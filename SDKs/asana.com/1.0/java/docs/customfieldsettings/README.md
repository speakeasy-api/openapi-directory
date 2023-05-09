# customFieldSettings

## Overview

Custom fields are attached to a particular project with the custom field settings resource. This resource both represents the many-to-many join of the custom field and project as well as stores information that is relevant to that particular pairing. For instance, the `is_important` property determines some possible application-specific handling of that custom field.

### Available Operations

* [getCustomFieldSettingsForPortfolio](#getcustomfieldsettingsforportfolio) - Get a portfolio's custom fields
* [getCustomFieldSettingsForProject](#getcustomfieldsettingsforproject) - Get a project's custom fields

## getCustomFieldSettingsForPortfolio

Returns a list of all of the custom fields settings on a portfolio, in compact form.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFieldSettingsForPortfolioRequest;
import org.openapis.openapi.models.operations.GetCustomFieldSettingsForPortfolioResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetCustomFieldSettingsForPortfolioRequest req = new GetCustomFieldSettingsForPortfolioRequest("explicabo") {{
                limit = 750686L;
                offset = "enim";
                optFields = new String[]{{
                    add("nemo"),
                    add("minima"),
                    add("excepturi"),
                }};
                optPretty = false;
            }};            

            GetCustomFieldSettingsForPortfolioResponse res = sdk.customFieldSettings.getCustomFieldSettingsForPortfolio(req);

            if (res.getCustomFieldSettingsForPortfolio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomFieldSettingsForProject

Returns a list of all of the custom fields settings on a project, in compact form. Note that, as in all queries to collections which return compact representation, `opt_fields` can be used to include more data than is returned in the compact representation. See the [getting started guide on input/output options](https://developers.asana.com/docs/#input-output-options) for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFieldSettingsForProjectRequest;
import org.openapis.openapi.models.operations.GetCustomFieldSettingsForProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetCustomFieldSettingsForProjectRequest req = new GetCustomFieldSettingsForProjectRequest("accusantium") {{
                limit = 438601L;
                offset = "culpa";
                optFields = new String[]{{
                    add("sapiente"),
                    add("architecto"),
                    add("mollitia"),
                    add("dolorem"),
                }};
                optPretty = false;
            }};            

            GetCustomFieldSettingsForProjectResponse res = sdk.customFieldSettings.getCustomFieldSettingsForProject(req);

            if (res.getCustomFieldSettingsForProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
