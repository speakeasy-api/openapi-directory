<!-- Start SDK Example Usage -->
```typescript
import {
  DrvlcRequestBody,
  DrvlcResponse,
  DrvlcRequestBodyFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DrvlcRequestBody = {
  certificateParameters: {
    dob: "31-12-1980",
    fullName: "Sunil Kumar",
    uid: "123412341234",
    dlno: "Ex. JH02/2009/236543",
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
  format: DrvlcRequestBodyFormatEnum.Pdf,
  txnId: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
};

sdk.apIs.drvlc(req).then((res: DrvlcResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->