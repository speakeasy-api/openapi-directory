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
    xAmzTarget: "EC2WindowsBarleyService.CreateApplication",
  },
  request: {
    cweMonitorEnabled: true,
    opsCenterEnabled: false,
    opsItemSNSTopicArn: "nihil",
    resourceGroupName: "rerum",
    tags: [
      {
        key: "debitis",
        value: "voluptatum",
      },
      {
        key: "et",
        value: "ut",
      },
      {
        key: "dolorem",
        value: "et",
      },
    ],
  },
};

sdk.createApplication(req).then((res: CreateApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->