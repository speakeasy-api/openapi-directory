<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetContainersMessagesRequest, GetContainersMessagesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetContainersMessagesRequest = {
  headers: {
    xAuthProjectId: "sit",
    xAuthToken: "voluptas",
  },
};

sdk.apiInfo.getContainersMessages(req).then((res: GetContainersMessagesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->