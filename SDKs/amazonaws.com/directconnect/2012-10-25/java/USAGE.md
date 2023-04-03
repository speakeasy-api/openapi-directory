<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptDirectConnectGatewayAssociationProposalRequest;
import org.openapis.openapi.models.operations.AcceptDirectConnectGatewayAssociationProposalResponse;
import org.openapis.openapi.models.shared.AcceptDirectConnectGatewayAssociationProposalRequest;
import org.openapis.openapi.models.shared.RouteFilterPrefix;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptDirectConnectGatewayAssociationProposalRequest req = new AcceptDirectConnectGatewayAssociationProposalRequest() {{
                acceptDirectConnectGatewayAssociationProposalRequest = new AcceptDirectConnectGatewayAssociationProposalRequest() {{
                    associatedGatewayOwnerAccount = "corrupti";
                    directConnectGatewayId = "provident";
                    overrideAllowedPrefixesToDirectConnectGateway = new org.openapis.openapi.models.shared.RouteFilterPrefix[]{{
                        add(new RouteFilterPrefix() {{
                            cidr = "quibusdam";
                        }}),
                        add(new RouteFilterPrefix() {{
                            cidr = "unde";
                        }}),
                        add(new RouteFilterPrefix() {{
                            cidr = "nulla";
                        }}),
                    }};
                    proposalId = "corrupti";
                }};
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
                xAmzTarget = "OvertureService.AcceptDirectConnectGatewayAssociationProposal";
            }}            

            AcceptDirectConnectGatewayAssociationProposalResponse res = sdk.acceptDirectConnectGatewayAssociationProposal(req);

            if (res.acceptDirectConnectGatewayAssociationProposalResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->