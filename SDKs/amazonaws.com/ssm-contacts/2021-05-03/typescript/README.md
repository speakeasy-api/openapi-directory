# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/ssm-contacts/2021-05-03/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/ssm-contacts/2021-05-03/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptPageRequest,
  AcceptPageResponse,
  AcceptPageXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AcceptTypeEnum,
  AcceptCodeValidationEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptPageRequest = {
  acceptPageRequest: {
    acceptCode: "corrupti",
    acceptCodeValidation: AcceptCodeValidationEnum.Enforce,
    acceptType: AcceptTypeEnum.Read,
    contactChannelId: "quibusdam",
    note: "unde",
    pageId: "nulla",
  },
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "illum",
  xAmzCredential: "vel",
  xAmzDate: "error",
  xAmzSecurityToken: "deserunt",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "iure",
  xAmzTarget: AcceptPageXAmzTargetEnum.SSMContactsAcceptPage,
};

sdk.acceptPage(req).then((res: AcceptPageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `acceptPage` - Used to acknowledge an engagement to a contact channel during an incident.
* `activateContactChannel` - Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.
* `createContact` - Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.
* `createContactChannel` - A contact channel is the method that Incident Manager uses to engage your contact.
* `createRotation` - Creates a rotation in an on-call schedule.
* `createRotationOverride` - Creates an override for a rotation in an on-call schedule.
* `deactivateContactChannel` - To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.
* `deleteContact` - To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.
* `deleteContactChannel` - To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.
* `deleteRotation` - Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.
* `deleteRotationOverride` - Deletes an existing override for an on-call rotation.
* `describeEngagement` - Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.
* `describePage` - Lists details of the engagement to a contact channel.
* `getContact` - Retrieves information about the specified contact or escalation plan.
* `getContactChannel` - List details about a specific contact channel.
* `getContactPolicy` - Retrieves the resource policies attached to the specified contact or escalation plan.
* `getRotation` - Retrieves information about an on-call rotation.
* `getRotationOverride` - Retrieves information about an override to an on-call rotation.
* `listContactChannels` - Lists all contact channels for the specified contact.
* `listContacts` - Lists all contacts and escalation plans in Incident Manager.
* `listEngagements` - Lists all engagements that have happened in an incident.
* `listPageReceipts` - Lists all of the engagements to contact channels that have been acknowledged.
* `listPageResolutions` - Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of <i>escalation plan &gt; on-call schedule &gt; contact</i>.
* `listPagesByContact` - Lists the engagements to a contact's contact channels.
* `listPagesByEngagement` - Lists the engagements to contact channels that occurred by engaging a contact.
* `listPreviewRotationShifts` - <p>Returns a list of shifts based on rotation configuration parameters.</p> <note> <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p> </note>
* `listRotationOverrides` - Retrieves a list of overrides currently specified for an on-call rotation.
* `listRotationShifts` - Returns a list of shifts generated by an existing rotation in the system.
* `listRotations` - Retrieves a list of on-call rotations.
* `listTagsForResource` - Lists the tags of an escalation plan or contact.
* `putContactPolicy` - Adds a resource policy to the specified contact or escalation plan. The resource policy is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up cross-account functionality</a>.
* `sendActivationCode` - Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.
* `startEngagement` - Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.
* `stopEngagement` - Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.
* `tagResource` - Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.
* `untagResource` - Removes tags from the specified resource.
* `updateContact` - Updates the contact or escalation plan specified.
* `updateContactChannel` - Updates a contact's contact channel.
* `updateRotation` - Updates the information specified for an on-call rotation.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

