<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETAcceptTransitGatewayMulticastDomainAssociationsActionEnum;
import org.openapis.openapi.models.operations.GETAcceptTransitGatewayMulticastDomainAssociationsVersionEnum;
import org.openapis.openapi.models.operations.GETAcceptTransitGatewayMulticastDomainAssociationsQueryParams;
import org.openapis.openapi.models.operations.GETAcceptTransitGatewayMulticastDomainAssociationsHeaders;
import org.openapis.openapi.models.operations.GETAcceptTransitGatewayMulticastDomainAssociationsRequest;
import org.openapis.openapi.models.operations.GETAcceptTransitGatewayMulticastDomainAssociationsResponse;

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

            GETAcceptTransitGatewayMulticastDomainAssociationsRequest req = new GETAcceptTransitGatewayMulticastDomainAssociationsRequest() {{
                queryParams = new GETAcceptTransitGatewayMulticastDomainAssociationsQueryParams() {{
                    action = "AcceptTransitGatewayMulticastDomainAssociations";
                    dryRun = false;
                    subnetIds = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                    transitGatewayAttachmentId = "unde";
                    transitGatewayMulticastDomainId = "nulla";
                    version = "2016-11-15";
                }};
                headers = new GETAcceptTransitGatewayMulticastDomainAssociationsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "illum";
                    xAmzCredential = "vel";
                    xAmzDate = "error";
                    xAmzSecurityToken = "deserunt";
                    xAmzSignature = "suscipit";
                    xAmzSignedHeaders = "iure";
                }};
            }};            

            GETAcceptTransitGatewayMulticastDomainAssociationsResponse res = sdk.getAcceptTransitGatewayMulticastDomainAssociations(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->