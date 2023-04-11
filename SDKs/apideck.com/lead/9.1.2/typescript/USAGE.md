<!-- Start SDK Example Usage -->
```typescript
import {
  LeadsAddRequest,
  LeadsAddResponse
} from "openapi/dist/sdk/models/operations";
import {
  WebsiteTypeEnum,
  PhoneNumberTypeEnum,
  EmailTypeEnum,
  CurrencyEnum,
  AddressTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: LeadsAddRequest = {
  leadInput: {
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
    companyId: "2",
    companyName: "Spacex",
    contactId: "2",
    currency: CurrencyEnum.Usd,
    customFields: [
      {
        description: "Employee Level",
        id: "2389328923893298",
        name: "employee_level",
        value: true,
      },
      {
        description: "Employee Level",
        id: "2389328923893298",
        name: "employee_level",
        value: [
          "nulla",
          "corrupti",
          "illum",
        ],
      },
      {
        description: "Employee Level",
        id: "2389328923893298",
        name: "employee_level",
        value: 10,
      },
    ],
    description: "A thinker",
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
    fax: "+12129876543",
    firstName: "Elon",
    language: "EN",
    lastName: "Musk",
    leadSource: "Cold Call",
    monetaryAmount: 75000,
    name: "Elon Musk",
    ownerId: "54321",
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
    prefix: "Sir",
    socialLinks: [
      {
        id: "12345",
        type: "twitter",
        url: "https://www.twitter.com/apideck-io",
      },
      {
        id: "12345",
        type: "twitter",
        url: "https://www.twitter.com/apideck-io",
      },
    ],
    status: "New",
    tags: [
      "magnam",
      "debitis",
    ],
    title: "CEO",
    websites: [
      {
        id: "12345",
        type: WebsiteTypeEnum.Primary,
        url: "http://example.com",
      },
    ],
  },
  raw: false,
  xApideckAppId: "delectus",
  xApideckConsumerId: "tempora",
  xApideckServiceId: "suscipit",
};

sdk.leads.leadsAdd(req).then((res: LeadsAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->