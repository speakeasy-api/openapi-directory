<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FilterFileDataStoppingsRequest, FilterFileDataStoppingsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FilterFileDataStoppingsRequest = {
  pathParams: {
    type: "sit",
  },
  request: {
    file: {
      content: "voluptas".encode(),
      file: "culpa",
    },
  },
};

sdk.exude.filterFileDataStoppings(req).then((res: FilterFileDataStoppingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->