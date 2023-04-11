# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/customer-support/9.1.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/customer-support/9.1.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CustomersAddRequest,
  CustomersAddResponse
} from "openapi/dist/sdk/models/operations";
import {
  CustomerSupportCustomerStatusEnum,
  PhoneNumberTypeEnum,
  EmailTypeEnum,
  CurrencyEnum,
  BankAccountAccountTypeEnum,
  AddressTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CustomersAddRequest = {
  customerSupportCustomerInput: {
    addresses: [
      {
        city: "San Francisco",
        contactName: "Elon Musk",
        country: "US",
        county: "Santa Clara",
        email: "elon@musk.com",
        fax: "122-111-1111",
        id: "123",
        latitude: "40.759211",
        line1: "Main street",
        line2: "apt #",
        line3: "Suite #",
        line4: "delivery instructions",
        longitude: "-73.984638",
        name: "HQ US",
        phoneNumber: "111-111-1111",
        postalCode: "94104",
        rowVersion: "1-12345",
        salutation: "Mr",
        state: "CA",
        streetNumber: "25",
        string: "25 Spring Street, Blackburn, VIC 3130",
        type: AddressTypeEnum.Primary,
        website: "https://elonmusk.com",
      },
      {
        city: "San Francisco",
        contactName: "Elon Musk",
        country: "US",
        county: "Santa Clara",
        email: "elon@musk.com",
        fax: "122-111-1111",
        id: "123",
        latitude: "40.759211",
        line1: "Main street",
        line2: "apt #",
        line3: "Suite #",
        line4: "delivery instructions",
        longitude: "-73.984638",
        name: "HQ US",
        phoneNumber: "111-111-1111",
        postalCode: "94104",
        rowVersion: "1-12345",
        salutation: "Mr",
        state: "CA",
        streetNumber: "25",
        string: "25 Spring Street, Blackburn, VIC 3130",
        type: AddressTypeEnum.Primary,
        website: "https://elonmusk.com",
      },
      {
        city: "San Francisco",
        contactName: "Elon Musk",
        country: "US",
        county: "Santa Clara",
        email: "elon@musk.com",
        fax: "122-111-1111",
        id: "123",
        latitude: "40.759211",
        line1: "Main street",
        line2: "apt #",
        line3: "Suite #",
        line4: "delivery instructions",
        longitude: "-73.984638",
        name: "HQ US",
        phoneNumber: "111-111-1111",
        postalCode: "94104",
        rowVersion: "1-12345",
        salutation: "Mr",
        state: "CA",
        streetNumber: "25",
        string: "25 Spring Street, Blackburn, VIC 3130",
        type: AddressTypeEnum.Primary,
        website: "https://elonmusk.com",
      },
    ],
    bankAccounts: {
      accountName: "SPACEX LLC",
      accountNumber: "123465",
      accountType: BankAccountAccountTypeEnum.CreditCard,
      bankCode: "BNH",
      bic: "AUDSCHGGXXX",
      branchIdentifier: "001",
      bsbNumber: "062-001",
      currency: CurrencyEnum.Usd,
      iban: "CH2989144532982975332",
    },
    companyName: "SpaceX",
    currency: CurrencyEnum.Usd,
    emails: [
      {
        email: "elon@musk.com",
        id: "123",
        type: EmailTypeEnum.Primary,
      },
      {
        email: "elon@musk.com",
        id: "123",
        type: EmailTypeEnum.Primary,
      },
      {
        email: "elon@musk.com",
        id: "123",
        type: EmailTypeEnum.Primary,
      },
    ],
    firstName: "Elon",
    individual: true,
    lastName: "Musk",
    notes: "Some notes about this customer",
    phoneNumbers: [
      {
        areaCode: "323",
        countryCode: "1",
        extension: "105",
        id: "12345",
        number: "111-111-1111",
        type: PhoneNumberTypeEnum.Primary,
      },
      {
        areaCode: "323",
        countryCode: "1",
        extension: "105",
        id: "12345",
        number: "111-111-1111",
        type: PhoneNumberTypeEnum.Primary,
      },
      {
        areaCode: "323",
        countryCode: "1",
        extension: "105",
        id: "12345",
        number: "111-111-1111",
        type: PhoneNumberTypeEnum.Primary,
      },
    ],
    status: CustomerSupportCustomerStatusEnum.Active,
    taxNumber: "US123945459",
  },
  raw: false,
  xApideckAppId: "quibusdam",
  xApideckConsumerId: "unde",
  xApideckServiceId: "nulla",
};

sdk.customers.customersAdd(req).then((res: CustomersAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### customers

* `customersAdd` - Create Customer Support Customer
* `customersAll` - List Customer Support Customers
* `customersDelete` - Delete Customer Support Customer
* `customersOne` - Get Customer Support Customer
* `customersUpdate` - Update Customer Support Customer
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

