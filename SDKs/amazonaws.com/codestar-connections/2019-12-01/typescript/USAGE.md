<!-- Start SDK Example Usage -->
```typescript
import {
  CreateConnectionRequest,
  CreateConnectionResponse,
  CreateConnectionXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  ProviderTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateConnectionRequest = {
  createConnectionInput: {
    connectionName: "corrupti",
    hostArn: "provident",
    providerType: ProviderTypeEnum.GitHubEnterpriseServer,
    tags: [
      {
        key: "unde",
        value: "nulla",
      },
      {
        key: "corrupti",
        value: "illum",
      },
      {
        key: "vel",
        value: "error",
      },
      {
        key: "deserunt",
        value: "suscipit",
      },
    ],
  },
  xAmzAlgorithm: "iure",
  xAmzContentSha256: "magnam",
  xAmzCredential: "debitis",
  xAmzDate: "ipsa",
  xAmzSecurityToken: "delectus",
  xAmzSignature: "tempora",
  xAmzSignedHeaders: "suscipit",
  xAmzTarget: CreateConnectionXAmzTargetEnum.ComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnection,
};

sdk.createConnection(req).then((res: CreateConnectionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->