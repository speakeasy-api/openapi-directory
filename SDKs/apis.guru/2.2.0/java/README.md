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
import org.openapis.openapi.models.operations.GetAPIRequest;
import org.openapis.openapi.models.operations.GetAPIResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAPIRequest req = new GetAPIRequest("2.1.0", "apis.guru");            

            GetAPIResponse res = sdk.apIs.getAPI(req);

            if (res.api != null) {
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


### [apIs](docs/apis/README.md)

* [getAPI](docs/apis/README.md#getapi) - Retrieve one version of a particular API
* [getMetrics](docs/apis/README.md#getmetrics) - Get basic metrics
* [getProvider](docs/apis/README.md#getprovider) - List all APIs for a particular provider
* [getProviders](docs/apis/README.md#getproviders) - List all providers
* [getServiceAPI](docs/apis/README.md#getserviceapi) - Retrieve one version of a particular API with a serviceName.
* [getServices](docs/apis/README.md#getservices) - List all serviceNames for a particular provider
* [listAPIs](docs/apis/README.md#listapis) - List all APIs
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
