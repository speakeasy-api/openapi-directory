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
import org.openapis.openapi.models.operations.ExtensionConfigurationRequest;
import org.openapis.openapi.models.operations.ExtensionConfigurationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExtensionConfigurationRequest req = new ExtensionConfigurationRequest("corrupti", "provident", 7151.9, "quibusdam", "unde") {{
                ifNoneMatch = "nulla";
                xApplecloudextensionRetryCount = 5448.83;
            }};            

            ExtensionConfigurationResponse res = sdk.config.extensionConfiguration(req);

            if (res.body != null) {
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


### [config](docs/config/README.md)

* [extensionConfiguration](docs/config/README.md#extensionconfiguration) - Configuration Resource

### [intent](docs/intent/README.md)

* [addMediaIntentHandling](docs/intent/README.md#addmediaintenthandling) - addMedia
* [playMediaIntentHandling](docs/intent/README.md#playmediaintenthandling) - playMedia
* [updateMediaAffinityIntentHandling](docs/intent/README.md#updatemediaaffinityintenthandling) - updateMediaAffinity

### [queues](docs/queues/README.md)

* [playMediaOnQueue](docs/queues/README.md#playmediaonqueue) - playMedia
* [updateActivityOnQueue](docs/queues/README.md#updateactivityonqueue) - updateActivity
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
