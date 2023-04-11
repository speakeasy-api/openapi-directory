<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAppRequest,
  CreateAppResponse,
  CreateAppRequestBodyPlatformEnum,
} from "openapi/dist/sdk/models/operations";
import {
  StageEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAppRequest = {
  requestBody: {
    accessToken: "corrupti",
    autoBranchCreationConfig: {
      basicAuthCredentials: "provident",
      buildSpec: "distinctio",
      enableAutoBuild: false,
      enableBasicAuth: false,
      enablePerformanceMode: false,
      enablePullRequestPreview: false,
      environmentVariables: {
        "unde": "nulla",
        "corrupti": "illum",
        "vel": "error",
        "deserunt": "suscipit",
      },
      framework: "iure",
      pullRequestEnvironmentName: "magnam",
      stage: StageEnum.PullRequest,
    },
    autoBranchCreationPatterns: [
      "delectus",
    ],
    basicAuthCredentials: "tempora",
    buildSpec: "suscipit",
    customHeaders: "molestiae",
    customRules: [
      {
        condition: "placeat",
        source: "voluptatum",
        status: "iusto",
        target: "excepturi",
      },
      {
        condition: "nisi",
        source: "recusandae",
        status: "temporibus",
        target: "ab",
      },
      {
        condition: "quis",
        source: "veritatis",
        status: "deserunt",
        target: "perferendis",
      },
      {
        condition: "ipsam",
        source: "repellendus",
        status: "sapiente",
        target: "quo",
      },
    ],
    description: "odit",
    enableAutoBranchCreation: false,
    enableBasicAuth: false,
    enableBranchAutoBuild: false,
    enableBranchAutoDeletion: false,
    environmentVariables: {
      "at": "maiores",
      "molestiae": "quod",
      "quod": "esse",
      "totam": "porro",
    },
    iamServiceRoleArn: "dolorum",
    name: "dicta",
    oauthToken: "nam",
    platform: CreateAppRequestBodyPlatformEnum.WebDynamic,
    repository: "occaecati",
    tags: {
      "deleniti": "hic",
    },
  },
  xAmzAlgorithm: "optio",
  xAmzContentSha256: "totam",
  xAmzCredential: "beatae",
  xAmzDate: "commodi",
  xAmzSecurityToken: "molestiae",
  xAmzSignature: "modi",
  xAmzSignedHeaders: "qui",
};

sdk.createApp(req).then((res: CreateAppResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->