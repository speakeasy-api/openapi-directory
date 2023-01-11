<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteSettingsOrganizationsOrganizationNameRequest, DeleteSettingsOrganizationsOrganizationNameResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteSettingsOrganizationsOrganizationNameRequest = {
  security: {
    oAuth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    organizationName: "sit",
  },
};

sdk.deleteSettingsOrganizationsOrganizationName(req).then((res: DeleteSettingsOrganizationsOrganizationNameResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->