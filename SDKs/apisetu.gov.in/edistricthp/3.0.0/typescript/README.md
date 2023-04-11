# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apisetu.gov.in/edistricthp/3.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apisetu.gov.in/edistricthp/3.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AecmwRequestBody,
  AecmwResponse,
  AecmwRequestBodyFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AecmwRequestBody = {
  certificateParameters: {
    udf1: "I991C0L16978",
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
  format: AecmwRequestBodyFormatEnum.Pdf,
  txnId: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
};

sdk.apIs.aecmw(req).then((res: AecmwResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### apIs

* `aecmw` - Application for Renewal of Contractor Migrant Workmen license
* `aemtw` - Application for Renewal of Motor Transport Worker Registration
* `agcer` - Agriculture/ Agriculturist Certificate
* `alimw` - Application for License for Inter State Migrant Workmen
* `arcmw` - Application for Registration of Contractor Migrant Workmen license
* `armtw` - Application for Registration of Motor Transport Worker Registration
* `bacer` - Backward Area Certificate
* `bhcer` - Bonafide Certificate
* `bpcrd` - BPL Card
* `btcer` - Birth Certificate
* `cecer` - Renewal Certificate of Contract Labour License
* `chcer` - Character Certificate
* `clcer` - Registration Certificate for Contract Labour License
* `coprg` - Copy of Pariwar Register
* `dccer` - Dogra Class Certificate
* `dmcer` - Domicile Certificate
* `dpicr` - Disabled Person Identity Card/ Certificate
* `dtcer` - Death Certificate
* `ercer` - Registration Certificate of Establishment Employing Contract Labour
* `ffcer` - Freedom Fighter Certificate
* `igcer` - Indigent (Needy Person) Certificate
* `incer` - Income Certificate
* `lhcer` - Legal Heir Certificate
* `mncer` - Minority Certificate
* `mnrga` - MNREGA Job Card
* `obcer` - OBC Certificate
* `racer` - Rural Area Certificate
* `rmcer` - Marriage Certificate
* `secer` - Renewal Certificate of Shops And Commercial Establishment
* `shcer` - SC/ST  Certificate
* `sicrd` - Senior Citizen Identity Card/ Certificate
* `srcer` - Registration Certificate of Shops And Commercial Establishment
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

