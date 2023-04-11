# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/hris/9.1.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/hris/9.1.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### companies

* `companiesAdd` - Create Company
* `companiesAll` - List Companies
* `companiesDelete` - Delete Company
* `companiesOne` - Get Company
* `companiesUpdate` - Update Company

### departments

* `departmentsAdd` - Create Department
* `departmentsAll` - List Departments
* `departmentsDelete` - Delete Department
* `departmentsOne` - Get Department
* `departmentsUpdate` - Update Department

### employeePayrolls

* `employeePayrollsAll` - List Employee Payrolls
* `employeePayrollsOne` - Get Employee Payroll

### employeeSchedules

* `employeeSchedulesAll` - List Employee Schedules

### employees

* `employeesAdd` - Create Employee
* `employeesAll` - List Employees
* `employeesDelete` - Delete Employee
* `employeesOne` - Get Employee
* `employeesUpdate` - Update Employee

### jobs

* `jobsAll` - List Jobs
* `jobsOne` - One Job

### payrolls

* `payrollsAll` - List Payroll
* `payrollsOne` - Get Payroll

### timeOffRequests

* `timeOffRequestsAdd` - Create Time Off Request
* `timeOffRequestsAll` - List Time Off Requests
* `timeOffRequestsDelete` - Delete Time Off Request
* `timeOffRequestsOne` - Get Time Off Request
* `timeOffRequestsUpdate` - Update Time Off Request
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

