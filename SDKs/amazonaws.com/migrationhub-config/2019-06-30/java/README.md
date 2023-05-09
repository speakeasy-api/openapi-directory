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
import org.openapis.openapi.models.operations.CreateHomeRegionControlRequest;
import org.openapis.openapi.models.operations.CreateHomeRegionControlResponse;
import org.openapis.openapi.models.operations.CreateHomeRegionControlXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateHomeRegionControlRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.TargetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateHomeRegionControlRequest req = new CreateHomeRegionControlRequest(                new CreateHomeRegionControlRequest("provident",                 new Target(TargetTypeEnum.ACCOUNT) {{
                                                id = "bd9d8d69-a674-4e0f-867c-c8796ed151a0";
                                            }};) {{
                                dryRun = false;
                            }};, CreateHomeRegionControlXAmzTargetEnum.AWS_MIGRATION_HUB_MULTI_ACCOUNT_SERVICE_CREATE_HOME_REGION_CONTROL) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            CreateHomeRegionControlResponse res = sdk.createHomeRegionControl(req);

            if (res.createHomeRegionControlResult != null) {
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

* [createHomeRegionControl](docs/sdk/README.md#createhomeregioncontrol) - This API sets up the home region for the calling account only.
* [describeHomeRegionControls](docs/sdk/README.md#describehomeregioncontrols) - This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.
* [getHomeRegion](docs/sdk/README.md#gethomeregion) - Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
