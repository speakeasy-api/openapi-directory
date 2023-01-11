<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddApplicationCloudWatchLoggingOptionRequest, AddApplicationCloudWatchLoggingOptionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddApplicationCloudWatchLoggingOptionRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption",
  },
  request: {
    applicationName: "fugit",
    cloudWatchLoggingOption: {
      logStreamARN: "et",
      roleARN: "nihil",
    },
    currentApplicationVersionId: 8325060299420976708,
  },
};

sdk.addApplicationCloudWatchLoggingOption(req).then((res: AddApplicationCloudWatchLoggingOptionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->