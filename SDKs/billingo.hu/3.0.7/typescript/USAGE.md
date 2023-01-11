<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateBankAccountRequest, CreateBankAccountResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateBankAccountRequest = {
  request: {
    accountNumber: "sit",
    accountNumberIban: "voluptas",
    currency: "HRK",
    name: "expedita",
    needQr: true,
    swift: "dolor",
  },
};

sdk.bankAccount.createBankAccount(req).then((res: CreateBankAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->