<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CopyBackupToRegionRequest, CopyBackupToRegionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CopyBackupToRegionRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "BaldrApiService.CopyBackupToRegion",
  },
  request: {
    backupId: "fugit",
    destinationRegion: "et",
    tagList: [
      {
        key: "rerum",
        value: "dicta",
      },
    ],
  },
};

sdk.copyBackupToRegion(req).then((res: CopyBackupToRegionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->