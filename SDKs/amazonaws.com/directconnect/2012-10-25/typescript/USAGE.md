<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AcceptDirectConnectGatewayAssociationProposalRequest, AcceptDirectConnectGatewayAssociationProposalResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AcceptDirectConnectGatewayAssociationProposalRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "OvertureService.AcceptDirectConnectGatewayAssociationProposal",
  },
  request: {
    associatedGatewayOwnerAccount: "fugit",
    directConnectGatewayId: "et",
    overrideAllowedPrefixesToDirectConnectGateway: [
      {
        cidr: "rerum",
      },
    ],
    proposalId: "dicta",
  },
};

sdk.acceptDirectConnectGatewayAssociationProposal(req).then((res: AcceptDirectConnectGatewayAssociationProposalResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->