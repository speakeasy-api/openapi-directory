<!-- Start SDK Example Usage -->
```typescript
import {
  GETAcceptTransitGatewayMulticastDomainAssociationsRequest,
  GETAcceptTransitGatewayMulticastDomainAssociationsResponse,
  GETAcceptTransitGatewayMulticastDomainAssociationsActionEnum,
  GETAcceptTransitGatewayMulticastDomainAssociationsVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETAcceptTransitGatewayMulticastDomainAssociationsRequest = {
  action: GETAcceptTransitGatewayMulticastDomainAssociationsActionEnum.AcceptTransitGatewayMulticastDomainAssociations,
  dryRun: false,
  subnetIds: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  transitGatewayAttachmentId: "unde",
  transitGatewayMulticastDomainId: "nulla",
  version: GETAcceptTransitGatewayMulticastDomainAssociationsVersionEnum.TwoThousandAndSixteen1115,
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "illum",
  xAmzCredential: "vel",
  xAmzDate: "error",
  xAmzSecurityToken: "deserunt",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "iure",
};

sdk.getAcceptTransitGatewayMulticastDomainAssociations(req).then((res: GETAcceptTransitGatewayMulticastDomainAssociationsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->