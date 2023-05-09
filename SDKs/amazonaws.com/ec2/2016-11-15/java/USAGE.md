<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAcceptTransitGatewayMulticastDomainAssociationsActionEnum;
import org.openapis.openapi.models.operations.GETAcceptTransitGatewayMulticastDomainAssociationsRequest;
import org.openapis.openapi.models.operations.GETAcceptTransitGatewayMulticastDomainAssociationsResponse;
import org.openapis.openapi.models.operations.GETAcceptTransitGatewayMulticastDomainAssociationsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAcceptTransitGatewayMulticastDomainAssociationsRequest req = new GETAcceptTransitGatewayMulticastDomainAssociationsRequest(GETAcceptTransitGatewayMulticastDomainAssociationsActionEnum.ACCEPT_TRANSIT_GATEWAY_MULTICAST_DOMAIN_ASSOCIATIONS, GETAcceptTransitGatewayMulticastDomainAssociationsVersionEnum.TWO_THOUSAND_AND_SIXTEEN1115) {{
                dryRun = false;
                subnetIds = new String[]{{
                    add("distinctio"),
                    add("quibusdam"),
                    add("unde"),
                }};
                transitGatewayAttachmentId = "nulla";
                transitGatewayMulticastDomainId = "corrupti";
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
            }};            

            GETAcceptTransitGatewayMulticastDomainAssociationsResponse res = sdk.getAcceptTransitGatewayMulticastDomainAssociations(req);

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