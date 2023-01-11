<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteReportDefinitionRequest, DeleteReportDefinitionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DeleteReportDefinitionRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSOrigamiServiceGatewayService.DeleteReportDefinition",
  },
  request: {
    reportName: "fugit",
  },
};

sdk.deleteReportDefinition(req).then((res: DeleteReportDefinitionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->