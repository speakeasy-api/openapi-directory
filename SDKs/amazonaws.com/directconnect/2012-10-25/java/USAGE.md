<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptDirectConnectGatewayAssociationProposalRequest;
import org.openapis.openapi.models.operations.AcceptDirectConnectGatewayAssociationProposalResponse;
import org.openapis.openapi.models.operations.AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptDirectConnectGatewayAssociationProposalRequest;
import org.openapis.openapi.models.shared.RouteFilterPrefix;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptDirectConnectGatewayAssociationProposalRequest req = new AcceptDirectConnectGatewayAssociationProposalRequest(                new AcceptDirectConnectGatewayAssociationProposalRequest("provident", "distinctio", "quibusdam") {{
                                overrideAllowedPrefixesToDirectConnectGateway = new org.openapis.openapi.models.shared.RouteFilterPrefix[]{{
                                    add(new RouteFilterPrefix() {{
                                        cidr = "nulla";
                                    }}),
                                    add(new RouteFilterPrefix() {{
                                        cidr = "corrupti";
                                    }}),
                                    add(new RouteFilterPrefix() {{
                                        cidr = "illum";
                                    }}),
                                }};
                            }};, AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum.OVERTURE_SERVICE_ACCEPT_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
            }};            

            AcceptDirectConnectGatewayAssociationProposalResponse res = sdk.acceptDirectConnectGatewayAssociationProposal(req);

            if (res.acceptDirectConnectGatewayAssociationProposalResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->