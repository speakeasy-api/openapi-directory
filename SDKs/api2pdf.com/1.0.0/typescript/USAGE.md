<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ChromeFromHtmlPostRequest, ChromeFromHtmlPostResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    headerApiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: ChromeFromHtmlPostRequest = {
  request: {
    fileName: "sit",
    html: "voluptas",
    inlinePdf: true,
    options: {
      landscape: "expedita",
      printBackground: true,
    },
  },
};

sdk.headlessChrome.chromeFromHtmlPost(req).then((res: ChromeFromHtmlPostResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->