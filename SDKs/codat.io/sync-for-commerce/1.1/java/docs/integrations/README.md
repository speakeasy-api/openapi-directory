# integrations

## Overview

View useful information about codat's integrations.

### Available Operations

* [getIntegrationBranding](#getintegrationbranding) - Get branding for an integration
* [listIntegrations](#listintegrations) - List information on Codat's supported integrations

## getIntegrationBranding

Retrieve Integration branding assets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntegrationBrandingRequest;
import org.openapis.openapi.models.operations.GetIntegrationBrandingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIntegrationBrandingRequest req = new GetIntegrationBrandingRequest("provident");            

            GetIntegrationBrandingResponse res = sdk.integrations.getIntegrationBranding(req);

            if (res.branding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIntegrations

Retrieve a list of available integrations support by datatype and state of release.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIntegrationsRequest;
import org.openapis.openapi.models.operations.ListIntegrationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIntegrationsRequest req = new ListIntegrationsRequest(659669) {{
                orderBy = "blanditiis";
                pageSize = 533206;
                query = "sapiente";
            }};            

            ListIntegrationsResponse res = sdk.integrations.listIntegrations(req);

            if (res.integrations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
