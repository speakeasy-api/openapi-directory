<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CampaignAnalyticsRequest, CampaignAnalyticsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CampaignAnalyticsRequest = {
  queryParams: {
    campaignId: "sit",
    endingAt: "voluptas",
    length: "culpa",
  },
};

sdk.campaign.campaignAnalytics(req).then((res: CampaignAnalyticsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->