# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/ats/9.1.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/ats/9.1.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ApplicantsAddRequest,
  ApplicantsAddResponse
} from "openapi/dist/sdk/models/operations";
import {
  ApplicantWebsitesTypeEnum,
  PhoneNumberTypeEnum,
  EmailTypeEnum,
  AddressTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ApplicantsAddRequest = {
  applicantInput: {
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
    anonymized: true,
    applications: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    archived: false,
    birthday: "2000-08-12",
    confidential: false,
    coordinatorId: "12345",
    coverLetter: "I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...",
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
          "error",
          "deserunt",
        ],
      },
      {
        description: "Employee Level",
        id: "2389328923893298",
        name: "employee_level",
        value: 10,
      },
      {
        description: "Employee Level",
        id: "2389328923893298",
        name: "employee_level",
        value: 10,
      },
    ],
    deleted: true,
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
    ],
    firstName: "Elon",
    followers: [
      "ipsa",
      "delectus",
      "tempora",
      "suscipit",
    ],
    headline: "PepsiCo, Inc, Central Perk",
    initials: "EM",
    lastName: "Musk",
    middleName: "D.",
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
    ],
    photoUrl: "https://unavatar.io/elon-musk",
    positionId: "123",
    recordUrl: "https://app.intercom.io/contacts/12345",
    recruiterId: "12345",
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
    sources: [
      "voluptatum",
      "iusto",
      "excepturi",
      "nisi",
    ],
    stageId: "12345",
    tags: [
      "temporibus",
      "ab",
      "quis",
      "veritatis",
    ],
    title: "CEO",
    websites: [
      {
        id: "12345",
        type: ApplicantWebsitesTypeEnum.Primary,
        url: "http://example.com",
      },
      {
        id: "12345",
        type: ApplicantWebsitesTypeEnum.Primary,
        url: "http://example.com",
      },
      {
        id: "12345",
        type: ApplicantWebsitesTypeEnum.Primary,
        url: "http://example.com",
      },
    ],
  },
  raw: false,
  xApideckAppId: "perferendis",
  xApideckConsumerId: "ipsam",
  xApideckServiceId: "repellendus",
};

sdk.applicants.applicantsAdd(req).then((res: ApplicantsAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### applicants

* `applicantsAdd` - Create applicant
* `applicantsAll` - List applicants
* `applicantsOne` - Get applicant

### jobs

* `jobsAll` - List Jobs
* `jobsOne` - Get Job
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

