<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CinemaSearchReadRequest, CinemaSearchReadResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CinemaSearchReadRequest = {
  pathParams: {
    id: "sit",
  },
};

sdk.cinema.cinemaSearchRead(req).then((res: CinemaSearchReadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->