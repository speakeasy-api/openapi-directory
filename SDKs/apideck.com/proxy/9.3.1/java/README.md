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
import org.openapis.openapi.models.operations.DeleteProxyRequest;
import org.openapis.openapi.models.operations.DeleteProxyResponse;
import org.openapis.openapi.models.operations.DeleteProxySecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProxyRequest req = new DeleteProxyRequest("corrupti", "provident", "distinctio", "quibusdam") {{
                xApideckDownstreamAuthorization = "unde";
            }};            

            DeleteProxyResponse res = sdk.execute.deleteProxy(req, new DeleteProxySecurity("nulla") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteProxy200ApplicationJSONAny != null) {
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


### [execute](docs/execute/README.md)

* [deleteProxy](docs/execute/README.md#deleteproxy) - DELETE
* [getProxy](docs/execute/README.md#getproxy) - GET
* [optionsProxy](docs/execute/README.md#optionsproxy) - OPTIONS
* [patchProxy](docs/execute/README.md#patchproxy) - PATCH
* [postProxy](docs/execute/README.md#postproxy) - POST
* [putProxy](docs/execute/README.md#putproxy) - PUT
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
