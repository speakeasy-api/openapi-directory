<!-- Start SDK Example Usage -->
```typescript
import {
  CompaniesAddRequest,
  CompaniesAddResponse
} from "openapi/dist/sdk/models/operations";
import {
  HrisCompanyStatusEnum,
  WebsiteTypeEnum,
  PhoneNumberTypeEnum,
  EmailTypeEnum,
  AddressTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CompaniesAddRequest = {
  hrisCompanyInput: {
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
    companyNumber: "123456-AB",
    debtorId: "12345",
    displayName: "SpaceX",
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
    legalName: "SpaceX",
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
    status: HrisCompanyStatusEnum.Active,
    subdomain: "company",
    websites: [
      {
        id: "12345",
        type: WebsiteTypeEnum.Primary,
        url: "http://example.com",
      },
      {
        id: "12345",
        type: WebsiteTypeEnum.Primary,
        url: "http://example.com",
      },
      {
        id: "12345",
        type: WebsiteTypeEnum.Primary,
        url: "http://example.com",
      },
      {
        id: "12345",
        type: WebsiteTypeEnum.Primary,
        url: "http://example.com",
      },
    ],
  },
  raw: false,
  xApideckAppId: "unde",
  xApideckConsumerId: "nulla",
  xApideckServiceId: "corrupti",
};

sdk.companies.companiesAdd(req).then((res: CompaniesAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->