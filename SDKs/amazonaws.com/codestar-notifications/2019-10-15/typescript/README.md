# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/codestar-notifications/2019-10-15/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/codestar-notifications/2019-10-15/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateNotificationRuleRequest,
  CreateNotificationRuleResponse,
  CreateNotificationRuleRequestBodyDetailTypeEnum,
  CreateNotificationRuleRequestBodyStatusEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateNotificationRuleRequest = {
  requestBody: {
    clientRequestToken: "corrupti",
    detailType: CreateNotificationRuleRequestBodyDetailTypeEnum.Full,
    eventTypeIds: [
      "quibusdam",
      "unde",
      "nulla",
    ],
    name: "corrupti",
    resource: "illum",
    status: CreateNotificationRuleRequestBodyStatusEnum.Enabled,
    tags: {
      "deserunt": "suscipit",
      "iure": "magnam",
      "debitis": "ipsa",
    },
    targets: [
      {
        targetAddress: "tempora",
        targetType: "suscipit",
      },
      {
        targetAddress: "molestiae",
        targetType: "minus",
      },
      {
        targetAddress: "placeat",
        targetType: "voluptatum",
      },
      {
        targetAddress: "iusto",
        targetType: "excepturi",
      },
    ],
  },
  xAmzAlgorithm: "nisi",
  xAmzContentSha256: "recusandae",
  xAmzCredential: "temporibus",
  xAmzDate: "ab",
  xAmzSecurityToken: "quis",
  xAmzSignature: "veritatis",
  xAmzSignedHeaders: "deserunt",
};

sdk.createNotificationRule(req).then((res: CreateNotificationRuleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createNotificationRule` - Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.
* `deleteNotificationRule` - Deletes a notification rule for a resource.
* `deleteTarget` - Deletes a specified target for notifications.
* `describeNotificationRule` - Returns information about a specified notification rule.
* `listEventTypes` - Returns information about the event types available for configuring notifications.
* `listNotificationRules` - Returns a list of the notification rules for an Amazon Web Services account.
* `listTagsForResource` - Returns a list of the tags associated with a notification rule.
* `listTargets` - Returns a list of the notification rule targets for an Amazon Web Services account.
* `subscribe` - Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.
* `tagResource` - Associates a set of provided tags with a notification rule.
* `unsubscribe` - Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.
* `untagResource` - Removes the association between one or more provided tags and a notification rule.
* `updateNotificationRule` - <p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

