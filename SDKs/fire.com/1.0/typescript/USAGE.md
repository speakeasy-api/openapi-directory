<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateApiApplicationRequest, CreateApiApplicationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: CreateApiApplicationRequest = {
  request: {
    applicationName: "sit",
    enabled: false,
    expiry: "1978-05-13T03:50:47Z",
    ican: 501233450539197794,
    numberOfPayeeApprovalsRequired: 3390393562759376202,
    numberOfPaymentApprovalsRequired: 2669985732393126063,
    permissions: [
      "voluptas",
      "fugit",
    ],
  },
};

sdk.api.createApiApplication(req).then((res: CreateApiApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->