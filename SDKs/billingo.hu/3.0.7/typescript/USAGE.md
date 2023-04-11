<!-- Start SDK Example Usage -->
```typescript
import {
  shared.BankAccountInput,
  CreateBankAccountResponse
} from "openapi/dist/sdk/models/operations";
import {
  CurrencyEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: shared.BankAccountInput = {
  accountNumber: "corrupti",
  accountNumberIban: "provident",
  currency: CurrencyEnum.Pln,
  name: "quibusdam",
  needQr: false,
  swift: "unde",
};

sdk.bankAccount.createBankAccount(req).then((res: CreateBankAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->