# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### calls

* `addCallBroadcastBatch` - Add batches to a call broadcast
* `addCallBroadcastRecipients` - Add recipients to a call broadcast
* `archiveVoiceBroadcast` - Archive voice broadcast
* `createCallBroadcast` - Create a call broadcast
* `findCallBroadcasts` - Find call broadcasts
* `findCalls` - Find calls
* `getCall` - Find a specific call
* `getCallBroadcast` - Find a specific call broadcast
* `getCallBroadcastBatches` - Find batches in a call broadcast
* `getCallBroadcastCalls` - Find calls in a call broadcast
* `getCallBroadcastStats` - Get statistics on call broadcast
* `getCallRecording` - Get call recording by id
* `getCallRecordingByName` - Get call recording by name
* `getCallRecordingMp3` - Get call recording in mp3 format
* `getCallRecordingMp3ByName` - Get call mp3 recording by name
* `getCallRecordings` - Get call recordings for a call
* `sendCalls` - Send calls
* `startVoiceBroadcast` - Start voice broadcast
* `stopVoiceBroadcast` - Stop voice broadcast
* `toggleCallBroadcastRecipientsStatus` - Disable/enable undialed recipients in broadcast
* `updateCallBroadcast` - Update a call broadcast

### campaigns

* `deleteCampaignSound` - Delete a specific sound
* `findCampaignSounds` - Find sounds
* `getCampaignBatch` - Find a specific batch
* `getCampaignSound` - Find a specific sound
* `getCampaignSoundDataMp3` - Download a MP3 sound
* `getCampaignSoundDataWav` - Download a WAV sound
* `postCallCampaignSound` - Add sound via call
* `postFileCampaignSound` - Add sound via file
* `postTTSCampaignSound` - Add sound via text-to-speech
* `updateCampaignBatch` - Update a batch

### contacts

* `addContactListItems` - Add contacts to a contact list
* `addDoNotContacts` - Add do not contact (dnc) numbers
* `createContactList` - Create contact lists
* `createContactListFromFile` - Create contact list from file
* `createContacts` - Create contacts
* `deleteContact` - Delete a contact
* `deleteContactList` - Delete a contact list
* `deleteDoNotContact` - Delete do not contact (dnc) number. If number contains commas treat as list of numbers
* `deleteDoNotContactsBySource` - Delete do not contact (dnc) numbers contained in source.
* `findContactLists` - Find contact lists
* `findContacts` - Find contacts
* `findDoNotContacts` - Find do not contact (dnc) items
* `getContact` - Find a specific contact
* `getContactHistory` - Find a contact's history
* `getContactList` - Find a specific contact list
* `getContactListItems` - Find contacts in a contact list
* `getDoNotContact` - Get do not contact (dnc)
* `getUniversalDoNotContacts` - Find universal do not contacts (udnc) associated with toNumber
* `removeContactListItem` - Delete a contact from a contact list
* `removeContactListItems` - Delete contacts from a contact list
* `updateContact` - Update a contact
* `updateContactList` - Update a contact list
* `updateDoNotContact` - Update an individual do not contact (dnc) number

### keywords

* `findKeywordLeaseConfigs` - Find keyword lease configs
* `findKeywordLeases` - Find keyword leases
* `findKeywords` - Find keywords
* `getKeywordLease` - Find a specific lease
* `getKeywordLeaseById` - Find a keyword by id
* `getKeywordLeaseConfig` - Find a specific keyword lease config
* `isKeywordAvailable` - Check for a specific keyword
* `updateKeywordLease` - Update a lease
* `updateKeywordLeaseConfig` - Update a keyword lease config

### me

* `createApiCredential` - Create api credentials
* `deleteApiCredential` - Delete api credentials
* `disableApiCredentials` - Disable specified API credentials
* `enableApiCredentials` - Enable specified API credentials
* `findApiCredentials` - Find api credentials
* `getAccount` - Find account details
* `getApiCredential` - Find a specific api credential
* `getBillingPlanUsage` - Find plan usage
* `getCallerIds` - Find caller ids
* `getCreditUsage` - Find credit usage
* `sendVerificationCodeToCallerId` - Create a caller id
* `verifyCallerId` - Verify a caller id

### media

* `createMedia` - Create media
* `findMedia` - Find media
* `getMedia` - Get a specific media
* `getMediaData` - Download media by extension
* `getMediaDataBinary` - Download a MP3 media
* `getMediaDataByKey` - Download media by extension

### numbers

* `findNumberLeaseConfigs` - Find lease configs
* `findNumberLeases` - Find leases
* `findNumberRegions` - Find number regions
* `findNumbersLocal` - Find local numbers
* `findNumbersTollfree` - Find tollfree numbers
* `getNumberLease` - Find a specific lease
* `getNumberLeaseConfig` - Find a specific lease config
* `updateNumberLease` - Update a lease
* `updateNumberLeaseConfig` - Update a lease config

### orders

* `findOrders` - Find orders
* `getOrder` - Find a specific order
* `orderKeywords` - Purchase keywords
* `orderNumbers` - Purchase numbers

### reports

* `getDeliveryReports` - Get delivery reports by ad hoc criteria

### texts

* `addTextBroadcastBatch` - Add batches to a text broadcast
* `addTextBroadcastRecipients` - Add recipients to a text broadcast
* `archiveTextBroadcast` - Archive text broadcast
* `createTextAutoReply` - Create an auto reply
* `createTextBroadcast` - Create a text broadcast
* `deleteTextAutoReply` - Delete an auto reply
* `findTextAutoReplys` - Find auto replies
* `findTextBroadcasts` - Find text broadcasts
* `findTexts` - Find texts
* `getText` - Find a specific text
* `getTextAutoReply` - Find a specific auto reply
* `getTextBroadcast` - Find a specific text broadcast
* `getTextBroadcastBatches` - Find batches in a text broadcast
* `getTextBroadcastStats` - Get statistics on text broadcast
* `getTextBroadcastTexts` - Find texts in a text broadcast
* `sendTexts` - Send texts
* `startTextBroadcast` - Start text broadcast
* `stopTextBroadcast` - Stop text broadcast
* `toggleTextBroadcastRecipientsStatus` - Disable/enable undialed recipients in broadcast
* `updateTextBroadcast` - Update a text broadcast

### webhooks

* `createWebhook` - Create a webhook
* `deleteWebhook` - Delete a webhook
* `findWebhookResources` - Find webhook resources
* `findWebhooks` - Find webhooks
* `getWebhook` - Find a specific webhook
* `getWebhookResource` - Find specific webhook resource
* `updateWebhook` - Update a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
