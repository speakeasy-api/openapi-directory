<!-- Start SDK Example Usage -->
```typescript
import {
  CreateParallelDataRequest,
  CreateParallelDataResponse,
  CreateParallelDataXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  ParallelDataFormatEnum,
  EncryptionKeyTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateParallelDataRequest = {
  createParallelDataRequest: {
    clientToken: "corrupti",
    description: "provident",
    encryptionKey: {
      id: "distinctio",
      type: EncryptionKeyTypeEnum.Kms,
    },
    name: "quibusdam",
    parallelDataConfig: {
      format: ParallelDataFormatEnum.Csv,
      s3Uri: "nulla",
    },
    tags: [
      {
        key: "illum",
        value: "vel",
      },
      {
        key: "error",
        value: "deserunt",
      },
      {
        key: "suscipit",
        value: "iure",
      },
    ],
  },
  xAmzAlgorithm: "magnam",
  xAmzContentSha256: "debitis",
  xAmzCredential: "ipsa",
  xAmzDate: "delectus",
  xAmzSecurityToken: "tempora",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "molestiae",
  xAmzTarget: CreateParallelDataXAmzTargetEnum.AWSShineFrontendService20170701CreateParallelData,
};

sdk.createParallelData(req).then((res: CreateParallelDataResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->