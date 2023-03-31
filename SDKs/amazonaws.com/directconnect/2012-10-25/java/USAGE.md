<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptDirectConnectGatewayAssociationProposalHeaders;
import org.openapis.openapi.models.operations.AcceptDirectConnectGatewayAssociationProposalRequest;
import org.openapis.openapi.models.operations.AcceptDirectConnectGatewayAssociationProposalResponse;
import org.openapis.openapi.models.shared.AcceptDirectConnectGatewayAssociationProposalRequest;
import org.openapis.openapi.models.shared.RouteFilterPrefix;

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

            AcceptDirectConnectGatewayAssociationProposalRequest req = new AcceptDirectConnectGatewayAssociationProposalRequest() {{
                headers = new AcceptDirectConnectGatewayAssociationProposalHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "OvertureService.AcceptDirectConnectGatewayAssociationProposal";
                }};
                request = new AcceptDirectConnectGatewayAssociationProposalRequest() {{
                    associatedGatewayOwnerAccount = "illum";
                    directConnectGatewayId = "vel";
                    overrideAllowedPrefixesToDirectConnectGateway = new org.openapis.openapi.models.shared.RouteFilterPrefix[]{{
                        add(new RouteFilterPrefix() {{
                            cidr = "deserunt";
                        }}),
                        add(new RouteFilterPrefix() {{
                            cidr = "suscipit";
                        }}),
                        add(new RouteFilterPrefix() {{
                            cidr = "iure";
                        }}),
                    }};
                    proposalId = "magnam";
                }};
            }};            

            AcceptDirectConnectGatewayAssociationProposalResponse res = sdk.acceptDirectConnectGatewayAssociationProposal(req);

            if (res.acceptDirectConnectGatewayAssociationProposalResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->