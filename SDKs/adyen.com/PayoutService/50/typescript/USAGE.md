<!-- Start SDK Example Usage -->
```typescript
import {
  shared.StoreDetailRequest,
  PostStoreDetailResponse
} from "openapi/dist/sdk/models/operations";
import {
  StoreDetailRequestEntityTypeEnum,
  RecurringContractEnum,
  RecurringTokenServiceEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.StoreDetailRequest = {
  additionalData: {
    "provident": "distinctio",
    "quibusdam": "unde",
    "nulla": "corrupti",
  },
  bank: {
    bankAccountNumber: "illum",
    bankCity: "vel",
    bankLocationId: "error",
    bankName: "deserunt",
    bic: "suscipit",
    countryCode: "iure",
    iban: "magnam",
    ownerName: "debitis",
    taxId: "ipsa",
  },
  billingAddress: {
    city: "Edinburg",
    country: "Holy See (Vatican City State)",
    houseNumberOrName: "molestiae",
    postalCode: "85453-9803",
    stateOrProvince: "veritatis",
    street: "0389 Connelly Trace",
  },
  card: {
    cvc: "at",
    expiryMonth: "maiores",
    expiryYear: "molestiae",
    holderName: "quod",
    issueNumber: "quod",
    number: "esse",
    startMonth: "totam",
    startYear: "porro",
  },
  dateOfBirth: "2022-10-06T15:49:54.663Z",
  entityType: StoreDetailRequestEntityTypeEnum.Company,
  fraudOffset: 639921,
  merchantAccount: "occaecati",
  nationality: "fugit",
  recurring: {
    contract: RecurringContractEnum.Recurring,
    recurringDetailName: "hic",
    recurringExpiry: "2021-06-08T13:49:32.889Z",
    recurringFrequency: "beatae",
    tokenService: RecurringTokenServiceEnum.Visatokenservice,
  },
  selectedBrand: "molestiae",
  shopperEmail: "modi",
  shopperName: {
    firstName: "Christy",
    lastName: "Ryan",
  },
  shopperReference: "cum",
  socialSecurityNumber: "esse",
};

sdk.initialization.postStoreDetail(req).then((res: PostStoreDetailResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->