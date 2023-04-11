<!-- Start SDK Example Usage -->
```typescript
import {
  GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest,
  GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest = {
  baseVersionId: 548814,
  callback: "provident",
  format: "distinctio",
  targetScreenshotTestId: 844266,
  targetVersionId: 602763,
  tolerance: 8579.46,
};

sdk.getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionId(req).then((res: GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->