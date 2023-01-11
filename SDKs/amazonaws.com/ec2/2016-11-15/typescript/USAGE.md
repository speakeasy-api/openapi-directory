<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAcceptTransitGatewayPeeringAttachmentRequest, GetAcceptTransitGatewayPeeringAttachmentResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAcceptTransitGatewayPeeringAttachmentRequest = {
  queryParams: {
    action: "AcceptTransitGatewayPeeringAttachment",
    dryRun: false,
    transitGatewayAttachmentId: "culpa",
    version: "2016-11-15",
  },
  headers: {
    xAmzAlgorithm: "consequuntur",
    xAmzContentSha256: "dolor",
    xAmzCredential: "expedita",
    xAmzDate: "voluptas",
    xAmzSecurityToken: "fugit",
    xAmzSignature: "et",
    xAmzSignedHeaders: "nihil",
  },
};

sdk.getAcceptTransitGatewayPeeringAttachment(req).then((res: GetAcceptTransitGatewayPeeringAttachmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->