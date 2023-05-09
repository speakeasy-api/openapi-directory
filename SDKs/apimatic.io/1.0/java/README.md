# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConvertAPIFormatEnum;
import org.openapis.openapi.models.operations.ConvertAPIRequest;
import org.openapis.openapi.models.operations.ConvertAPIRequestBody;
import org.openapis.openapi.models.operations.ConvertAPIResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConvertAPIRequest req = new ConvertAPIRequest(ConvertAPIFormatEnum.APIBLUEPRINT) {{
                requestBody = new ConvertAPIRequestBody() {{
                    url = "provident";
                }};;
            }};            

            ConvertAPIResponse res = sdk.convertAPI(req);

            if (res.convertAPI200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [convertAPI](docs/sdk/README.md#convertapi) - Transform API Descriptions from/to various formats
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
