# SDK

## Overview

<fullname>AWS Marketplace Entitlement Service</fullname> <p>This reference provides descriptions of the AWS Marketplace Entitlement Service API.</p> <p>AWS Marketplace Entitlement Service is used to determine the entitlement of a customer to a given product. An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.</p> <p> <b>Getting Entitlement Records</b> </p> <ul> <li> <p> <i>GetEntitlements</i>- Gets the entitlements for a Marketplace product.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/marketplace/>
### Available Operations

* [getEntitlements](#getentitlements) - GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.

## getEntitlements

GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.

### Example Usage

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
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEntitlementsRequest req = new GetEntitlementsRequest(                new GetEntitlementsRequest("quis") {{
                                filter = new java.util.HashMap<String, String[]>() {{
                                    put("deserunt", new String[]{{
                                        add("ipsam"),
                                    }});
                                }};
                                maxResults = 832620L;
                                nextToken = "sapiente";
                            }};, GetEntitlementsXAmzTargetEnum.AWSMP_ENTITLEMENT_SERVICE_GET_ENTITLEMENTS) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
            }};            

            GetEntitlementsResponse res = sdk.sdk.getEntitlements(req);

            if (res.getEntitlementsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
