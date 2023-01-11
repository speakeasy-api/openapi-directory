<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssociateConfigurationItemsToApplicationRequest, AssociateConfigurationItemsToApplicationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateConfigurationItemsToApplicationRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication",
  },
  request: {
    applicationConfigurationId: "fugit",
    configurationIds: [
      "nihil",
    ],
  },
};

sdk.associateConfigurationItemsToApplication(req).then((res: AssociateConfigurationItemsToApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->