<!-- Start SDK Example Usage -->
```typescript
import {
  GETActivateTypeRequest,
  GETActivateTypeResponse,
  GETActivateTypeActionEnum,
  GETActivateTypeTypeEnum,
  GETActivateTypeVersionEnum,
  GETActivateTypeVersionBumpEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETActivateTypeRequest = {
  action: GETActivateTypeActionEnum.ActivateType,
  autoUpdate: false,
  executionRoleArn: "corrupti",
  loggingConfig: {
    logGroupName: "provident",
    logRoleArn: "distinctio",
  },
  majorVersion: 844266,
  publicTypeArn: "unde",
  publisherId: "nulla",
  type: GETActivateTypeTypeEnum.Module,
  typeName: "illum",
  typeNameAlias: "vel",
  version: GETActivateTypeVersionEnum.TwoThousandAndTen0515,
  versionBump: GETActivateTypeVersionBumpEnum.Minor,
  xAmzAlgorithm: "deserunt",
  xAmzContentSha256: "suscipit",
  xAmzCredential: "iure",
  xAmzDate: "magnam",
  xAmzSecurityToken: "debitis",
  xAmzSignature: "ipsa",
  xAmzSignedHeaders: "delectus",
};

sdk.getActivateType(req).then((res: GETActivateTypeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->