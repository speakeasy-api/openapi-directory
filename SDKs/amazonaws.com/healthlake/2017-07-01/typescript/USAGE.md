<!-- Start SDK Example Usage -->
```typescript
import {
  CreateFHIRDatastoreRequest,
  CreateFHIRDatastoreResponse,
  CreateFHIRDatastoreXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  CmkTypeEnum,
  PreloadDataTypeEnum,
  FHIRVersionEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateFHIRDatastoreRequest = {
  createFHIRDatastoreRequest: {
    clientToken: "corrupti",
    datastoreName: "provident",
    datastoreTypeVersion: FHIRVersionEnum.R4,
    preloadDataConfig: {
      preloadDataType: PreloadDataTypeEnum.Synthea,
    },
    sseConfiguration: {
      kmsEncryptionConfig: {
        cmkType: CmkTypeEnum.AwsOwnedKmsKey,
        kmsKeyId: "quibusdam",
      },
    },
    tags: [
      {
        key: "nulla",
        value: "corrupti",
      },
      {
        key: "illum",
        value: "vel",
      },
      {
        key: "error",
        value: "deserunt",
      },
    ],
  },
  xAmzAlgorithm: "suscipit",
  xAmzContentSha256: "iure",
  xAmzCredential: "magnam",
  xAmzDate: "debitis",
  xAmzSecurityToken: "ipsa",
  xAmzSignature: "delectus",
  xAmzSignedHeaders: "tempora",
  xAmzTarget: CreateFHIRDatastoreXAmzTargetEnum.HealthLakeCreateFHIRDatastore,
};

sdk.createFHIRDatastore(req).then((res: CreateFHIRDatastoreResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->