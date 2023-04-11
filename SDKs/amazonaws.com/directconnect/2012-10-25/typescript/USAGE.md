<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptDirectConnectGatewayAssociationProposalRequest,
  AcceptDirectConnectGatewayAssociationProposalResponse,
  AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptDirectConnectGatewayAssociationProposalRequest = {
  acceptDirectConnectGatewayAssociationProposalRequest: {
    associatedGatewayOwnerAccount: "corrupti",
    directConnectGatewayId: "provident",
    overrideAllowedPrefixesToDirectConnectGateway: [
      {
        cidr: "quibusdam",
      },
      {
        cidr: "unde",
      },
      {
        cidr: "nulla",
      },
    ],
    proposalId: "corrupti",
  },
  xAmzAlgorithm: "illum",
  xAmzContentSha256: "vel",
  xAmzCredential: "error",
  xAmzDate: "deserunt",
  xAmzSecurityToken: "suscipit",
  xAmzSignature: "iure",
  xAmzSignedHeaders: "magnam",
  xAmzTarget: AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum.OvertureServiceAcceptDirectConnectGatewayAssociationProposal,
};

sdk.acceptDirectConnectGatewayAssociationProposal(req).then((res: AcceptDirectConnectGatewayAssociationProposalResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->