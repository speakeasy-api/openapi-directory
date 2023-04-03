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
import org.openapis.openapi.models.operations.GetEntitlementsXAmzTargetEnum;
import org.openapis.openapi.models.operations.GetEntitlementsRequest;
import org.openapis.openapi.models.operations.GetEntitlementsResponse;
import org.openapis.openapi.models.shared.GetEntitlementsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEntitlementsRequest req = new GetEntitlementsRequest() {{
                getEntitlementsRequest = new GetEntitlementsRequest() {{
                    filter = new java.util.HashMap<String, String[]>() {{
                        put("provident", new String[]{{
                            add("quibusdam"),
                            add("unde"),
                            add("nulla"),
                        }});
                        put("corrupti", new String[]{{
                            add("vel"),
                            add("error"),
                            add("deserunt"),
                            add("suscipit"),
                        }});
                        put("iure", new String[]{{
                            add("debitis"),
                            add("ipsa"),
                        }});
                    }};
                    maxResults = 963663;
                    nextToken = "tempora";
                    productCode = "suscipit";
                }};
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "minus";
                xAmzCredential = "placeat";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "nisi";
                xAmzTarget = "AWSMPEntitlementService.GetEntitlements";
            }}            

            GetEntitlementsResponse res = sdk.getEntitlements(req);

            if (res.getEntitlementsResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getEntitlements` - GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
