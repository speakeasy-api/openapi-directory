<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateRepositoryRequest,
  AssociateRepositoryResponse
} from "openapi/dist/sdk/models/operations";
import {
  EncryptionOptionEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateRepositoryRequest = {
  requestBody: {
    clientRequestToken: "corrupti",
    kmsKeyDetails: {
      encryptionOption: EncryptionOptionEnum.CustomerManagedCmk,
      kmsKeyId: "distinctio",
    },
    repository: {
      bitbucket: {
        connectionArn: "quibusdam",
        name: "unde",
        owner: "nulla",
      },
      codeCommit: {
        name: "corrupti",
      },
      gitHubEnterpriseServer: {
        connectionArn: "illum",
        name: "vel",
        owner: "error",
      },
      s3Bucket: {
        bucketName: "deserunt",
        name: "suscipit",
      },
    },
    tags: {
      "magnam": "debitis",
      "ipsa": "delectus",
    },
  },
  xAmzAlgorithm: "tempora",
  xAmzContentSha256: "suscipit",
  xAmzCredential: "molestiae",
  xAmzDate: "minus",
  xAmzSecurityToken: "placeat",
  xAmzSignature: "voluptatum",
  xAmzSignedHeaders: "iusto",
};

sdk.associateRepository(req).then((res: AssociateRepositoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->