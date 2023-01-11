<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostCreateNotificationConfigurationRequest, PostCreateNotificationConfigurationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostCreateNotificationConfigurationRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: "sit",
};

sdk.general.postCreateNotificationConfiguration(req).then((res: PostCreateNotificationConfigurationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->