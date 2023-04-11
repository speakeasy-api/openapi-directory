# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/ivs-realtime/2020-07-14/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/ivs-realtime/2020-07-14/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateParticipantTokenRequest,
  CreateParticipantTokenResponse
} from "openapi/dist/sdk/models/operations";
import {
  ParticipantTokenCapabilityEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateParticipantTokenRequest = {
  requestBody: {
    attributes: {
      "provident": "distinctio",
      "quibusdam": "unde",
      "nulla": "corrupti",
    },
    capabilities: [
      ParticipantTokenCapabilityEnum.Publish,
      ParticipantTokenCapabilityEnum.Subscribe,
      ParticipantTokenCapabilityEnum.Subscribe,
      ParticipantTokenCapabilityEnum.Publish,
    ],
    duration: 437587,
    stageArn: "magnam",
    userId: "debitis",
  },
  xAmzAlgorithm: "ipsa",
  xAmzContentSha256: "delectus",
  xAmzCredential: "tempora",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "molestiae",
  xAmzSignature: "minus",
  xAmzSignedHeaders: "placeat",
};

sdk.createParticipantToken(req).then((res: CreateParticipantTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createParticipantToken` - <p>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created.</p> <p>Encryption keys are owned by Amazon IVS and never used directly by your application.</p>
* `createStage` - Creates a new stage (and optionally participant tokens).
* `deleteStage` - Shuts down and deletes the specified stage (disconnecting all participants).
* `disconnectParticipant` - Disconnects a specified participant and revokes the participant permanently from a specified stage.
* `getStage` - Gets information for the specified stage.
* `listStages` - Gets summary information about all stages in your account, in the AWS region where the API request is processed.
* `listTagsForResource` - Gets information about AWS tags for the specified ARN.
* `tagResource` - Adds or updates tags for the AWS resource with the specified ARN.
* `untagResource` - Removes tags from the resource with the specified ARN.
* `updateStage` - Updates a stage’s configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

