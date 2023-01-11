<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AcceptDirectConnectGatewayAssociationProposalRequest req = new AcceptDirectConnectGatewayAssociationProposalRequest() {{
                headers = new AcceptDirectConnectGatewayAssociationProposalHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "OvertureService.AcceptDirectConnectGatewayAssociationProposal";
                }};
                request = new AcceptDirectConnectGatewayAssociationProposalRequest() {{
                    associatedGatewayOwnerAccount = "fugit";
                    directConnectGatewayId = "et";
                    overrideAllowedPrefixesToDirectConnectGateway = new openapisdk.models.shared.RouteFilterPrefix[]() {{
                        add(new RouteFilterPrefix() {{
                            cidr = "rerum";
                        }}),
                    }};
                    proposalId = "dicta";
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