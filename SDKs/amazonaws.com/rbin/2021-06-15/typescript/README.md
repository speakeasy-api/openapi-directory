# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/rbin/2021-06-15/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/rbin/2021-06-15/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateRuleRequest,
  CreateRuleResponse,
  CreateRuleRequestBodyResourceTypeEnum,
} from "openapi/dist/sdk/models/operations";
import {
  RetentionPeriodUnitEnum,
  UnlockDelayUnitEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateRuleRequest = {
  requestBody: {
    description: "corrupti",
    lockConfiguration: {
      unlockDelay: {
        unlockDelayUnit: UnlockDelayUnitEnum.Days,
        unlockDelayValue: 592845,
      },
    },
    resourceTags: [
      {
        resourceTagKey: "quibusdam",
        resourceTagValue: "unde",
      },
      {
        resourceTagKey: "nulla",
        resourceTagValue: "corrupti",
      },
      {
        resourceTagKey: "illum",
        resourceTagValue: "vel",
      },
    ],
    resourceType: CreateRuleRequestBodyResourceTypeEnum.Ec2Image,
    retentionPeriod: {
      retentionPeriodUnit: RetentionPeriodUnitEnum.Days,
      retentionPeriodValue: 645894,
    },
    tags: [
      {
        key: "iure",
        value: "magnam",
      },
      {
        key: "debitis",
        value: "ipsa",
      },
    ],
  },
  xAmzAlgorithm: "delectus",
  xAmzContentSha256: "tempora",
  xAmzCredential: "suscipit",
  xAmzDate: "molestiae",
  xAmzSecurityToken: "minus",
  xAmzSignature: "placeat",
  xAmzSignedHeaders: "voluptatum",
};

sdk.createRule(req).then((res: CreateRuleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createRule` - Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule"> Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* `deleteRule` - Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule"> Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* `getRule` - Gets information about a Recycle Bin retention rule.
* `listRules` - Lists the Recycle Bin retention rules in the Region.
* `listTagsForResource` - Lists the tags assigned to a retention rule.
* `lockRule` - Locks a retention rule. A locked retention rule can't be modified or deleted.
* `tagResource` - Assigns tags to the specified retention rule.
* `unlockRule` - Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted only after the unlock delay period expires.
* `untagResource` - Unassigns a tag from a retention rule.
* `updateRule` - Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule"> Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

