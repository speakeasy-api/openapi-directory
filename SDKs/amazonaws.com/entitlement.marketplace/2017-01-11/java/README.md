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
import org.openapis.openapi.models.operations.GetEntitlementsRequest;
import org.openapis.openapi.models.operations.GetEntitlementsResponse;
import org.openapis.openapi.models.operations.GetEntitlementsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetEntitlementsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEntitlementsRequest req = new GetEntitlementsRequest(                new GetEntitlementsRequest("provident") {{
                                filter = new java.util.HashMap<String, String[]>() {{
                                    put("quibusdam", new String[]{{
                                        add("nulla"),
                                        add("corrupti"),
                                        add("illum"),
                                    }});
                                    put("vel", new String[]{{
                                        add("deserunt"),
                                        add("suscipit"),
                                        add("iure"),
                                    }});
                                    put("magnam", new String[]{{
                                        add("ipsa"),
                                        add("delectus"),
                                        add("tempora"),
                                        add("suscipit"),
                                    }});
                                }};
                                maxResults = 477665L;
                                nextToken = "minus";
                            }};, GetEntitlementsXAmzTargetEnum.AWSMP_ENTITLEMENT_SERVICE_GET_ENTITLEMENTS) {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "iusto";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "temporibus";
            }};            

            GetEntitlementsResponse res = sdk.getEntitlements(req);

            if (res.getEntitlementsResult != null) {
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

* [getEntitlements](docs/sdk/README.md#getentitlements) - GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
