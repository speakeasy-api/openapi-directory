<!-- Start SDK Example Usage -->
```typescript
import {
  CreateApiRequest,
  CreateApiResponse,
  CreateApiRequestBodyProtocolTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateApiRequest = {
  requestBody: {
    apiKeySelectionExpression: "corrupti",
    corsConfiguration: {
      allowCredentials: false,
      allowHeaders: [
        "distinctio",
        "quibusdam",
        "unde",
      ],
      allowMethods: [
        "corrupti",
        "illum",
        "vel",
        "error",
      ],
      allowOrigins: [
        "suscipit",
        "iure",
        "magnam",
      ],
      exposeHeaders: [
        "ipsa",
        "delectus",
        "tempora",
        "suscipit",
      ],
      maxAge: 477665,
    },
    credentialsArn: "minus",
    description: "placeat",
    disableExecuteApiEndpoint: false,
    disableSchemaValidation: false,
    name: "voluptatum",
    protocolType: CreateApiRequestBodyProtocolTypeEnum.Websocket,
    routeKey: "excepturi",
    routeSelectionExpression: "nisi",
    tags: {
      "temporibus": "ab",
      "quis": "veritatis",
      "deserunt": "perferendis",
      "ipsam": "repellendus",
    },
    target: "sapiente",
    version: "quo",
  },
  xAmzAlgorithm: "odit",
  xAmzContentSha256: "at",
  xAmzCredential: "at",
  xAmzDate: "maiores",
  xAmzSecurityToken: "molestiae",
  xAmzSignature: "quod",
  xAmzSignedHeaders: "quod",
};

sdk.createApi(req).then((res: CreateApiResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->