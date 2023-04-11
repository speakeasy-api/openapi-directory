# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apisetu.gov.in/mppmc/3.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apisetu.gov.in/mppmc/3.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  SocerRequestBody,
  SocerResponse,
  SocerRequestBodyFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SocerRequestBody = {
  certificateParameters: {
    appno: "REG1307241",
    dateOfBirth: "11-11-1990",
    enrolno: "41C172C17OCT1203",
    typOfCert: "Registration Certificate&#x28;PREGC&#x29;,Duplicate Registration Certificate&#x28;PDURC&#x29;,Good S",
  },
  consentArtifact: {
    consent: {
      consentId: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
      data: {
        id: "corrupti",
      },
      dataConsumer: {
        id: "provident",
      },
      dataProvider: {
        id: "distinctio",
      },
      permission: {
        access: "quibusdam",
        dateRange: {
          from: "2021-04-14T16:47:33.722Z",
          to: "2021-04-22T12:08:58.275Z",
        },
        frequency: {
          repeats: 4236.55,
          unit: "error",
          value: 6458.94,
        },
      },
      purpose: {
        description: "suscipit",
      },
      timestamp: "2022-09-14T09:35:47.986Z",
      user: {
        email: "Anahi38@hotmail.com",
        idNumber: "molestiae",
        idType: "minus",
        mobile: "645-598-0306 x03897",
      },
    },
    signature: {
      signature: "odit",
    },
  },
  format: SocerRequestBodyFormatEnum.Pdf,
  txnId: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
};

sdk.apIs.socer(req).then((res: SocerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### apIs

* `socer` - Educational/ Exam Registration Certificate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

