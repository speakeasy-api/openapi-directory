<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { TranslateRequest, TranslateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TranslateRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  request: {
    from: "sit",
    text: [
      "culpa",
    ],
    to: "expedita",
    translationContext: "consequuntur",
  },
};

sdk.language.translate(req).then((res: TranslateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->