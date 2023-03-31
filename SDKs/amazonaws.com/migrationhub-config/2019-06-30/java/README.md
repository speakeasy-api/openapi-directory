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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateHomeRegionControlXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateHomeRegionControlHeaders;
import org.openapis.openapi.models.operations.CreateHomeRegionControlRequest;
import org.openapis.openapi.models.operations.CreateHomeRegionControlResponse;
import org.openapis.openapi.models.shared.CreateHomeRegionControlRequest;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.TargetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateHomeRegionControlRequest req = new CreateHomeRegionControlRequest() {{
                headers = new CreateHomeRegionControlHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSMigrationHubMultiAccountService.CreateHomeRegionControl";
                }};
                request = new CreateHomeRegionControlRequest() {{
                    dryRun = false;
                    homeRegion = "illum";
                    target = new Target() {{
                        id = "vel";
                        type = "ACCOUNT";
                    }};
                }};
            }};            

            CreateHomeRegionControlResponse res = sdk.createHomeRegionControl(req);

            if (res.createHomeRegionControlResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createHomeRegionControl` - This API sets up the home region for the calling account only.
* `describeHomeRegionControls` - This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.
* `getHomeRegion` - Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
