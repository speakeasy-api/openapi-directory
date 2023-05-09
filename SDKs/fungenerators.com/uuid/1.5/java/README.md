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
import org.openapis.openapi.models.operations.GetUuidRequest;
import org.openapis.openapi.models.operations.GetUuidResponse;
import org.openapis.openapi.models.operations.GetUuidSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUuidRequest req = new GetUuidRequest() {{
                count = 548814L;
            }};            

            GetUuidResponse res = sdk.uuidGeneration.getUuid(req, new GetUuidSecurity("provident") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [uuidGeneration](docs/uuidgeneration/README.md)

* [getUuid](docs/uuidgeneration/README.md#getuuid) - Generate a random UUID (v4).
* [getUuidVersionVersion](docs/uuidgeneration/README.md#getuuidversionversion) - Generate a random UUID (v4).

### [uuidParsing](docs/uuidparsing/README.md)

* [postUuid](docs/uuidparsing/README.md#postuuid) - Parse a UUID string and return its version and check whether it is valid.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
