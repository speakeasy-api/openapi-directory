<!-- Start SDK Example Usage -->
```typescript
import {
  ConvertRecoveryPointToSnapshotRequest,
  ConvertRecoveryPointToSnapshotResponse,
  ConvertRecoveryPointToSnapshotXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: ConvertRecoveryPointToSnapshotRequest = {
  convertRecoveryPointToSnapshotRequest: {
    recoveryPointId: "corrupti",
    retentionPeriod: 592845,
    snapshotName: "distinctio",
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
  xAmzTarget: ConvertRecoveryPointToSnapshotXAmzTargetEnum.RedshiftServerlessConvertRecoveryPointToSnapshot,
};

sdk.convertRecoveryPointToSnapshot(req).then((res: ConvertRecoveryPointToSnapshotResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->