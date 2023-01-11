<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetContactRequest, GetContactResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    oauth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: GetContactRequest = {
  pathParams: {
    id: "sit",
  },
};

sdk.contacts.getContact(req).then((res: GetContactResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->