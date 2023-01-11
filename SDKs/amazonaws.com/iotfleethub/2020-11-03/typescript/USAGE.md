<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateApplicationRequest, CreateApplicationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateApplicationRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    applicationDescription: "voluptas",
    applicationName: "fugit",
    clientToken: "et",
    roleArn: "nihil",
    tags: {
      "dicta": "debitis",
      "voluptatum": "et",
      "ut": "dolorem",
    },
  },
};

sdk.createApplication(req).then((res: CreateApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->