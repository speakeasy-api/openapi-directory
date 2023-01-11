<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CompanyAlternativeSearchRequest, CompanyAlternativeSearchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CompanyAlternativeSearchRequest = {
  security: {
    userKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    country: "sit",
  },
  request: {
    address: "voluptas",
    name: "culpa",
    number: "expedita",
    phone: "consequuntur",
    url: "dolor",
    vat: "expedita",
  },
};

sdk.v1Company.companyAlternativeSearch(req).then((res: CompanyAlternativeSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->