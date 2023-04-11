<!-- Start SDK Example Usage -->
```typescript
import {
  CompareFacesRequest,
  CompareFacesResponse,
  CompareFacesXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  QualityFilterEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CompareFacesRequest = {
  compareFacesRequest: {
    qualityFilter: QualityFilterEnum.Low,
    similarityThreshold: 5928.45,
    sourceImage: {
      bytes: "distinctio",
      s3Object: {
        bucket: "quibusdam",
        name: "unde",
        version: "nulla",
      },
    },
    targetImage: {
      bytes: "corrupti",
      s3Object: {
        bucket: "illum",
        name: "vel",
        version: "error",
      },
    },
  },
  xAmzAlgorithm: "deserunt",
  xAmzContentSha256: "suscipit",
  xAmzCredential: "iure",
  xAmzDate: "magnam",
  xAmzSecurityToken: "debitis",
  xAmzSignature: "ipsa",
  xAmzSignedHeaders: "delectus",
  xAmzTarget: CompareFacesXAmzTargetEnum.RekognitionServiceCompareFaces,
};

sdk.compareFaces(req).then((res: CompareFacesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->