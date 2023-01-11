<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DoctorsListRequest, DoctorsListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DoctorsListRequest = {
  security: {
    drchronoOauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    cursor: "sit",
    doctor: 2259404117704393152,
    pageSize: 6050128673802995827,
  },
};

sdk.administrative.doctorsList(req).then((res: DoctorsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->