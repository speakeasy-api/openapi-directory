<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CategoriesAllRequest, CategoriesAllResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CategoriesAllRequest = {
  pathParams: {
    ecosystemId: "sit",
  },
  queryParams: {
    cursor: "voluptas",
    limit: 6050128673802995827,
  },
};

sdk.category.categoriesAll(req).then((res: CategoriesAllResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->