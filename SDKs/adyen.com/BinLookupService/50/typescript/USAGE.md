<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostGet3dsAvailabilityRequest, PostGet3dsAvailabilityResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostGet3dsAvailabilityRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: "sit",
};

sdk.general.postGet3dsAvailability(req).then((res: PostGet3dsAvailabilityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->