<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateSuiteDefinitionRequest, CreateSuiteDefinitionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateSuiteDefinitionRequest = {
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
    suiteDefinitionConfiguration: {
      devicePermissionRoleArn: "voluptas",
      devices: [
        {
          certificateArn: "et",
          thingArn: "nihil",
        },
      ],
      intendedForQualification: true,
      rootGroup: "dicta",
      suiteDefinitionName: "debitis",
    },
    tags: {
      "et": "ut",
    },
  },
};

sdk.createSuiteDefinition(req).then((res: CreateSuiteDefinitionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->