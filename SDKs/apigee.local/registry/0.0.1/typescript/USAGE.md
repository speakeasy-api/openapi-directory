<!-- Start SDK Example Usage -->
```typescript
import {
  RegistryCreateApiRequest,
  RegistryCreateApiResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RegistryCreateApiRequest = {
  apiInput: {
    annotations: {
      "provident": "distinctio",
      "quibusdam": "unde",
      "nulla": "corrupti",
    },
    availability: "illum",
    description: "vel",
    displayName: "error",
    labels: {
      "suscipit": "iure",
      "magnam": "debitis",
      "ipsa": "delectus",
    },
    name: "tempora",
    recommendedDeployment: "suscipit",
    recommendedVersion: "molestiae",
  },
  apiId: "minus",
  location: "placeat",
  project: "voluptatum",
};

sdk.registry.registryCreateApi(req).then((res: RegistryCreateApiResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->