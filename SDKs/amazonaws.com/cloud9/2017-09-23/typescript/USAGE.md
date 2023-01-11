<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateEnvironmentEc2Request, CreateEnvironmentEc2Response } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateEnvironmentEc2Request = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2",
  },
  request: {
    automaticStopTimeMinutes: 8274930044578894929,
    clientRequestToken: "et",
    connectionType: "CONNECT_SSH",
    description: "rerum",
    dryRun: false,
    imageId: "debitis",
    instanceType: "voluptatum",
    name: "et",
    ownerArn: "ut",
    subnetId: "dolorem",
    tags: [
      {
        key: "voluptate",
        value: "iste",
      },
      {
        key: "vitae",
        value: "totam",
      },
    ],
  },
};

sdk.createEnvironmentEc2(req).then((res: CreateEnvironmentEc2Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->