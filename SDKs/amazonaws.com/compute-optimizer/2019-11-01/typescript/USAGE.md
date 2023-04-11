<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteRecommendationPreferencesRequest,
  DeleteRecommendationPreferencesResponse,
  DeleteRecommendationPreferencesXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  ScopeNameEnum,
  ResourceTypeEnum,
  RecommendationPreferenceNameEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteRecommendationPreferencesRequest = {
  deleteRecommendationPreferencesRequest: {
    recommendationPreferenceNames: [
      RecommendationPreferenceNameEnum.InferredWorkloadTypes,
      RecommendationPreferenceNameEnum.ExternalMetricsPreference,
      RecommendationPreferenceNameEnum.ExternalMetricsPreference,
    ],
    resourceType: ResourceTypeEnum.LambdaFunction,
    scope: {
      name: ScopeNameEnum.ResourceArn,
      value: "corrupti",
    },
  },
  xAmzAlgorithm: "illum",
  xAmzContentSha256: "vel",
  xAmzCredential: "error",
  xAmzDate: "deserunt",
  xAmzSecurityToken: "suscipit",
  xAmzSignature: "iure",
  xAmzSignedHeaders: "magnam",
  xAmzTarget: DeleteRecommendationPreferencesXAmzTargetEnum.ComputeOptimizerServiceDeleteRecommendationPreferences,
};

sdk.deleteRecommendationPreferences(req).then((res: DeleteRecommendationPreferencesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->