<!-- Start SDK Example Usage -->
```typescript
import {
  CemstRequestBody,
  CemstResponse,
  CemstRequestBodyFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CemstRequestBody = {
  certificateParameters: {
    fullName: "Sunil Kumar",
    uid: "123412341234",
    rollno: "102012xxxx",
    year: "2018,2019,2020",
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
  format: CemstRequestBodyFormatEnum.Pdf,
  txnId: "f7f1469c-29b0-4325-9dfc-c567200a70f7",
};

sdk.apIs.cemst(req).then((res: CemstResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->