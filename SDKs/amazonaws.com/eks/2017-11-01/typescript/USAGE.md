<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssociateEncryptionConfigRequest, AssociateEncryptionConfigResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateEncryptionConfigRequest = {
  pathParams: {
    name: "sit",
  },
  headers: {
    xAmzAlgorithm: "voluptas",
    xAmzContentSha256: "culpa",
    xAmzCredential: "expedita",
    xAmzDate: "consequuntur",
    xAmzSecurityToken: "dolor",
    xAmzSignature: "expedita",
    xAmzSignedHeaders: "voluptas",
  },
  request: {
    clientRequestToken: "fugit",
    encryptionConfig: [
      {
        provider: {
          keyArn: "nihil",
        },
        resources: [
          "dicta",
          "debitis",
          "voluptatum",
        ],
      },
    ],
  },
};

sdk.associateEncryptionConfig(req).then((res: AssociateEncryptionConfigResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->