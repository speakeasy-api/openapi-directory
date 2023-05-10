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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddCallBroadcastBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Operations\AddCallBroadcastBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddCallBroadcastBatchRequest();
    $request->batchRequest = new BatchRequest();
    $request->batchRequest->contactListId = 548814;
    $request->batchRequest->name = 'Kelvin Sporer';
    $request->batchRequest->recipients = [
        new Recipient(),
        new Recipient(),
        new Recipient(),
    ];
    $request->batchRequest->scrubDuplicates = false;
    $request->id = 847252;
    $request->strictValidation = false;

    $requestSecurity = new AddCallBroadcastBatchSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->addCallBroadcastBatch($request, $requestSecurity);

    if ($response->resourceId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [calls](docs/calls/README.md)

* [addCallBroadcastBatch](docs/calls/README.md#addcallbroadcastbatch) - Add batches to a call broadcast
* [addCallBroadcastRecipients](docs/calls/README.md#addcallbroadcastrecipients) - Add recipients to a call broadcast
* [archiveVoiceBroadcast](docs/calls/README.md#archivevoicebroadcast) - Archive voice broadcast
* [createCallBroadcast](docs/calls/README.md#createcallbroadcast) - Create a call broadcast
* [findCallBroadcasts](docs/calls/README.md#findcallbroadcasts) - Find call broadcasts
* [findCalls](docs/calls/README.md#findcalls) - Find calls
* [getCall](docs/calls/README.md#getcall) - Find a specific call
* [getCallBroadcast](docs/calls/README.md#getcallbroadcast) - Find a specific call broadcast
* [getCallBroadcastBatches](docs/calls/README.md#getcallbroadcastbatches) - Find batches in a call broadcast
* [getCallBroadcastCalls](docs/calls/README.md#getcallbroadcastcalls) - Find calls in a call broadcast
* [getCallBroadcastStats](docs/calls/README.md#getcallbroadcaststats) - Get statistics on call broadcast
* [getCallRecording](docs/calls/README.md#getcallrecording) - Get call recording by id
* [getCallRecordingByName](docs/calls/README.md#getcallrecordingbyname) - Get call recording by name
* [getCallRecordingMp3](docs/calls/README.md#getcallrecordingmp3) - Get call recording in mp3 format
* [getCallRecordingMp3ByName](docs/calls/README.md#getcallrecordingmp3byname) - Get call mp3 recording by name
* [getCallRecordings](docs/calls/README.md#getcallrecordings) - Get call recordings for a call
* [sendCalls](docs/calls/README.md#sendcalls) - Send calls
* [startVoiceBroadcast](docs/calls/README.md#startvoicebroadcast) - Start voice broadcast
* [stopVoiceBroadcast](docs/calls/README.md#stopvoicebroadcast) - Stop voice broadcast
* [toggleCallBroadcastRecipientsStatus](docs/calls/README.md#togglecallbroadcastrecipientsstatus) - Disable/enable undialed recipients in broadcast
* [updateCallBroadcast](docs/calls/README.md#updatecallbroadcast) - Update a call broadcast

### [campaigns](docs/campaigns/README.md)

* [deleteCampaignSound](docs/campaigns/README.md#deletecampaignsound) - Delete a specific sound
* [findCampaignSounds](docs/campaigns/README.md#findcampaignsounds) - Find sounds
* [getCampaignBatch](docs/campaigns/README.md#getcampaignbatch) - Find a specific batch
* [getCampaignSound](docs/campaigns/README.md#getcampaignsound) - Find a specific sound
* [getCampaignSoundDataMp3](docs/campaigns/README.md#getcampaignsounddatamp3) - Download a MP3 sound
* [getCampaignSoundDataWav](docs/campaigns/README.md#getcampaignsounddatawav) - Download a WAV sound
* [postCallCampaignSound](docs/campaigns/README.md#postcallcampaignsound) - Add sound via call
* [postFileCampaignSound](docs/campaigns/README.md#postfilecampaignsound) - Add sound via file
* [postTTSCampaignSound](docs/campaigns/README.md#postttscampaignsound) - Add sound via text-to-speech
* [updateCampaignBatch](docs/campaigns/README.md#updatecampaignbatch) - Update a batch

### [contacts](docs/contacts/README.md)

* [addContactListItems](docs/contacts/README.md#addcontactlistitems) - Add contacts to a contact list
* [addDoNotContacts](docs/contacts/README.md#adddonotcontacts) - Add do not contact (dnc) numbers
* [createContactList](docs/contacts/README.md#createcontactlist) - Create contact lists
* [createContactListFromFile](docs/contacts/README.md#createcontactlistfromfile) - Create contact list from file
* [createContacts](docs/contacts/README.md#createcontacts) - Create contacts
* [deleteContact](docs/contacts/README.md#deletecontact) - Delete a contact
* [deleteContactList](docs/contacts/README.md#deletecontactlist) - Delete a contact list
* [deleteDoNotContact](docs/contacts/README.md#deletedonotcontact) - Delete do not contact (dnc) number. If number contains commas treat as list of numbers
* [deleteDoNotContactsBySource](docs/contacts/README.md#deletedonotcontactsbysource) - Delete do not contact (dnc) numbers contained in source.
* [findContactLists](docs/contacts/README.md#findcontactlists) - Find contact lists
* [findContacts](docs/contacts/README.md#findcontacts) - Find contacts
* [findDoNotContacts](docs/contacts/README.md#finddonotcontacts) - Find do not contact (dnc) items
* [getContact](docs/contacts/README.md#getcontact) - Find a specific contact
* [getContactHistory](docs/contacts/README.md#getcontacthistory) - Find a contact's history
* [getContactList](docs/contacts/README.md#getcontactlist) - Find a specific contact list
* [getContactListItems](docs/contacts/README.md#getcontactlistitems) - Find contacts in a contact list
* [getDoNotContact](docs/contacts/README.md#getdonotcontact) - Get do not contact (dnc)
* [getUniversalDoNotContacts](docs/contacts/README.md#getuniversaldonotcontacts) - Find universal do not contacts (udnc) associated with toNumber
* [removeContactListItem](docs/contacts/README.md#removecontactlistitem) - Delete a contact from a contact list
* [removeContactListItems](docs/contacts/README.md#removecontactlistitems) - Delete contacts from a contact list
* [updateContact](docs/contacts/README.md#updatecontact) - Update a contact
* [updateContactList](docs/contacts/README.md#updatecontactlist) - Update a contact list
* [updateDoNotContact](docs/contacts/README.md#updatedonotcontact) - Update an individual do not contact (dnc) number

### [keywords](docs/keywords/README.md)

* [findKeywordLeaseConfigs](docs/keywords/README.md#findkeywordleaseconfigs) - Find keyword lease configs
* [findKeywordLeases](docs/keywords/README.md#findkeywordleases) - Find keyword leases
* [findKeywords](docs/keywords/README.md#findkeywords) - Find keywords
* [getKeywordLease](docs/keywords/README.md#getkeywordlease) - Find a specific lease
* [getKeywordLeaseById](docs/keywords/README.md#getkeywordleasebyid) - Find a keyword by id
* [getKeywordLeaseConfig](docs/keywords/README.md#getkeywordleaseconfig) - Find a specific keyword lease config
* [isKeywordAvailable](docs/keywords/README.md#iskeywordavailable) - Check for a specific keyword
* [updateKeywordLease](docs/keywords/README.md#updatekeywordlease) - Update a lease
* [updateKeywordLeaseConfig](docs/keywords/README.md#updatekeywordleaseconfig) - Update a keyword lease config

### [me](docs/me/README.md)

* [createApiCredential](docs/me/README.md#createapicredential) - Create api credentials
* [deleteApiCredential](docs/me/README.md#deleteapicredential) - Delete api credentials
* [disableApiCredentials](docs/me/README.md#disableapicredentials) - Disable specified API credentials
* [enableApiCredentials](docs/me/README.md#enableapicredentials) - Enable specified API credentials
* [findApiCredentials](docs/me/README.md#findapicredentials) - Find api credentials
* [getAccount](docs/me/README.md#getaccount) - Find account details
* [getApiCredential](docs/me/README.md#getapicredential) - Find a specific api credential
* [getBillingPlanUsage](docs/me/README.md#getbillingplanusage) - Find plan usage
* [getCallerIds](docs/me/README.md#getcallerids) - Find caller ids
* [getCreditUsage](docs/me/README.md#getcreditusage) - Find credit usage
* [sendVerificationCodeToCallerId](docs/me/README.md#sendverificationcodetocallerid) - Create a caller id
* [verifyCallerId](docs/me/README.md#verifycallerid) - Verify a caller id

### [media](docs/media/README.md)

* [createMedia](docs/media/README.md#createmedia) - Create media
* [findMedia](docs/media/README.md#findmedia) - Find media
* [getMedia](docs/media/README.md#getmedia) - Get a specific media
* [getMediaData](docs/media/README.md#getmediadata) - Download media by extension
* [getMediaDataBinary](docs/media/README.md#getmediadatabinary) - Download a MP3 media
* [getMediaDataByKey](docs/media/README.md#getmediadatabykey) - Download media by extension

### [numbers](docs/numbers/README.md)

* [findNumberLeaseConfigs](docs/numbers/README.md#findnumberleaseconfigs) - Find lease configs
* [findNumberLeases](docs/numbers/README.md#findnumberleases) - Find leases
* [findNumberRegions](docs/numbers/README.md#findnumberregions) - Find number regions
* [findNumbersLocal](docs/numbers/README.md#findnumberslocal) - Find local numbers
* [findNumbersTollfree](docs/numbers/README.md#findnumberstollfree) - Find tollfree numbers
* [getNumberLease](docs/numbers/README.md#getnumberlease) - Find a specific lease
* [getNumberLeaseConfig](docs/numbers/README.md#getnumberleaseconfig) - Find a specific lease config
* [updateNumberLease](docs/numbers/README.md#updatenumberlease) - Update a lease
* [updateNumberLeaseConfig](docs/numbers/README.md#updatenumberleaseconfig) - Update a lease config

### [orders](docs/orders/README.md)

* [findOrders](docs/orders/README.md#findorders) - Find orders
* [getOrder](docs/orders/README.md#getorder) - Find a specific order
* [orderKeywords](docs/orders/README.md#orderkeywords) - Purchase keywords
* [orderNumbers](docs/orders/README.md#ordernumbers) - Purchase numbers

### [reports](docs/reports/README.md)

* [getDeliveryReports](docs/reports/README.md#getdeliveryreports) - Get delivery reports by ad hoc criteria

### [texts](docs/texts/README.md)

* [addTextBroadcastBatch](docs/texts/README.md#addtextbroadcastbatch) - Add batches to a text broadcast
* [addTextBroadcastRecipients](docs/texts/README.md#addtextbroadcastrecipients) - Add recipients to a text broadcast
* [archiveTextBroadcast](docs/texts/README.md#archivetextbroadcast) - Archive text broadcast
* [createTextAutoReply](docs/texts/README.md#createtextautoreply) - Create an auto reply
* [createTextBroadcast](docs/texts/README.md#createtextbroadcast) - Create a text broadcast
* [deleteTextAutoReply](docs/texts/README.md#deletetextautoreply) - Delete an auto reply
* [findTextAutoReplys](docs/texts/README.md#findtextautoreplys) - Find auto replies
* [findTextBroadcasts](docs/texts/README.md#findtextbroadcasts) - Find text broadcasts
* [findTexts](docs/texts/README.md#findtexts) - Find texts
* [getText](docs/texts/README.md#gettext) - Find a specific text
* [getTextAutoReply](docs/texts/README.md#gettextautoreply) - Find a specific auto reply
* [getTextBroadcast](docs/texts/README.md#gettextbroadcast) - Find a specific text broadcast
* [getTextBroadcastBatches](docs/texts/README.md#gettextbroadcastbatches) - Find batches in a text broadcast
* [getTextBroadcastStats](docs/texts/README.md#gettextbroadcaststats) - Get statistics on text broadcast
* [getTextBroadcastTexts](docs/texts/README.md#gettextbroadcasttexts) - Find texts in a text broadcast
* [sendTexts](docs/texts/README.md#sendtexts) - Send texts
* [startTextBroadcast](docs/texts/README.md#starttextbroadcast) - Start text broadcast
* [stopTextBroadcast](docs/texts/README.md#stoptextbroadcast) - Stop text broadcast
* [toggleTextBroadcastRecipientsStatus](docs/texts/README.md#toggletextbroadcastrecipientsstatus) - Disable/enable undialed recipients in broadcast
* [updateTextBroadcast](docs/texts/README.md#updatetextbroadcast) - Update a text broadcast

### [webhooks](docs/webhooks/README.md)

* [createWebhook](docs/webhooks/README.md#createwebhook) - Create a webhook
* [deleteWebhook](docs/webhooks/README.md#deletewebhook) - Delete a webhook
* [findWebhookResources](docs/webhooks/README.md#findwebhookresources) - Find webhook resources
* [findWebhooks](docs/webhooks/README.md#findwebhooks) - Find webhooks
* [getWebhook](docs/webhooks/README.md#getwebhook) - Find a specific webhook
* [getWebhookResource](docs/webhooks/README.md#getwebhookresource) - Find specific webhook resource
* [updateWebhook](docs/webhooks/README.md#updatewebhook) - Update a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
