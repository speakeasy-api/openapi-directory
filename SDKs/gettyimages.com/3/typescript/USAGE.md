<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetV3AffiliatesSearchImagesRequest, GetV3AffiliatesSearchImagesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetV3AffiliatesSearchImagesRequest = {
  queryParams: {
    phrase: "sit",
    style: "photography",
  },
  headers: {
    acceptLanguage: "culpa",
  },
};

sdk.affiliateSearch.getV3AffiliatesSearchImages(req).then((res: GetV3AffiliatesSearchImagesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->