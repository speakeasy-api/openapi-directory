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
import org.openapis.openapi.models.operations.ApiResourceCoverageOneRequest;
import org.openapis.openapi.models.operations.ApiResourceCoverageOneResponse;
import org.openapis.openapi.models.operations.ApiResourceCoverageOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiResourceCoverageOneRequest req = new ApiResourceCoverageOneRequest("corrupti", "provident", "distinctio");            

            ApiResourceCoverageOneResponse res = sdk.apiResources.apiResourceCoverageOne(req, new ApiResourceCoverageOneSecurity("quibusdam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getApiResourceCoverageResponse != null) {
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


### [apiResources](docs/apiresources/README.md)

* [apiResourceCoverageOne](docs/apiresources/README.md#apiresourcecoverageone) - Get API Resource Coverage
* [apiResourcesOne](docs/apiresources/README.md#apiresourcesone) - Get API Resource

### [apIs](docs/apis/README.md)

* [apisAll](docs/apis/README.md#apisall) - List APIs
* [apisOne](docs/apis/README.md#apisone) - Get API

### [connectorDocs](docs/connectordocs/README.md)

* [connectorDocsOne](docs/connectordocs/README.md#connectordocsone) - Get Connector Doc content

### [connectorResources](docs/connectorresources/README.md)

* [connectorResourcesOne](docs/connectorresources/README.md#connectorresourcesone) - Get Connector Resource

### [connectors](docs/connectors/README.md)

* [connectorsAll](docs/connectors/README.md#connectorsall) - List Connectors
* [connectorsOne](docs/connectors/README.md#connectorsone) - Get Connector
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
