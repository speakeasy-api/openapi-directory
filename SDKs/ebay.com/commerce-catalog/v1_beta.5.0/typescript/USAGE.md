<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetProductRequest, GetProductResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetProductRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    epid: "sit",
  },
};

sdk.product.getProduct(req).then((res: GetProductResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->