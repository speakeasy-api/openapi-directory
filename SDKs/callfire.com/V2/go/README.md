# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/callfire.com/V2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Calls.AddCallBroadcastBatch(ctx, operations.AddCallBroadcastBatchRequest{
        BatchRequest: &shared.BatchRequest{
            ContactListID: sdk.Int64(548814),
            Name: sdk.String("Kelvin Sporer"),
            Recipients: []shared.Recipient{
                shared.Recipient{
                    Attributes: map[string]string{
                        "vel": "error",
                        "deserunt": "suscipit",
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    ContactID: sdk.Int64(963663),
                    FromNumber: sdk.String("tempora"),
                    PhoneNumber: sdk.String("suscipit"),
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "minus": "placeat",
                        "voluptatum": "iusto",
                    },
                    ContactID: sdk.Int64(568045),
                    FromNumber: sdk.String("nisi"),
                    PhoneNumber: sdk.String("recusandae"),
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "ab": "quis",
                        "veritatis": "deserunt",
                        "perferendis": "ipsam",
                        "repellendus": "sapiente",
                    },
                    ContactID: sdk.Int64(778157),
                    FromNumber: sdk.String("odit"),
                    PhoneNumber: sdk.String("at"),
                },
            },
            ScrubDuplicates: sdk.Bool(false),
        },
        ID: 870088,
        StrictValidation: sdk.Bool(false),
    }, operations.AddCallBroadcastBatchSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceID != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Calls](docs/calls/README.md)

* [AddCallBroadcastBatch](docs/calls/README.md#addcallbroadcastbatch) - Add batches to a call broadcast
* [AddCallBroadcastRecipients](docs/calls/README.md#addcallbroadcastrecipients) - Add recipients to a call broadcast
* [ArchiveVoiceBroadcast](docs/calls/README.md#archivevoicebroadcast) - Archive voice broadcast
* [CreateCallBroadcast](docs/calls/README.md#createcallbroadcast) - Create a call broadcast
* [FindCallBroadcasts](docs/calls/README.md#findcallbroadcasts) - Find call broadcasts
* [FindCalls](docs/calls/README.md#findcalls) - Find calls
* [GetCall](docs/calls/README.md#getcall) - Find a specific call
* [GetCallBroadcast](docs/calls/README.md#getcallbroadcast) - Find a specific call broadcast
* [GetCallBroadcastBatches](docs/calls/README.md#getcallbroadcastbatches) - Find batches in a call broadcast
* [GetCallBroadcastCalls](docs/calls/README.md#getcallbroadcastcalls) - Find calls in a call broadcast
* [GetCallBroadcastStats](docs/calls/README.md#getcallbroadcaststats) - Get statistics on call broadcast
* [GetCallRecording](docs/calls/README.md#getcallrecording) - Get call recording by id
* [GetCallRecordingByName](docs/calls/README.md#getcallrecordingbyname) - Get call recording by name
* [GetCallRecordingMp3](docs/calls/README.md#getcallrecordingmp3) - Get call recording in mp3 format
* [GetCallRecordingMp3ByName](docs/calls/README.md#getcallrecordingmp3byname) - Get call mp3 recording by name
* [GetCallRecordings](docs/calls/README.md#getcallrecordings) - Get call recordings for a call
* [SendCalls](docs/calls/README.md#sendcalls) - Send calls
* [StartVoiceBroadcast](docs/calls/README.md#startvoicebroadcast) - Start voice broadcast
* [StopVoiceBroadcast](docs/calls/README.md#stopvoicebroadcast) - Stop voice broadcast
* [ToggleCallBroadcastRecipientsStatus](docs/calls/README.md#togglecallbroadcastrecipientsstatus) - Disable/enable undialed recipients in broadcast
* [UpdateCallBroadcast](docs/calls/README.md#updatecallbroadcast) - Update a call broadcast

### [Campaigns](docs/campaigns/README.md)

* [DeleteCampaignSound](docs/campaigns/README.md#deletecampaignsound) - Delete a specific sound
* [FindCampaignSounds](docs/campaigns/README.md#findcampaignsounds) - Find sounds
* [GetCampaignBatch](docs/campaigns/README.md#getcampaignbatch) - Find a specific batch
* [GetCampaignSound](docs/campaigns/README.md#getcampaignsound) - Find a specific sound
* [GetCampaignSoundDataMp3](docs/campaigns/README.md#getcampaignsounddatamp3) - Download a MP3 sound
* [GetCampaignSoundDataWav](docs/campaigns/README.md#getcampaignsounddatawav) - Download a WAV sound
* [PostCallCampaignSound](docs/campaigns/README.md#postcallcampaignsound) - Add sound via call
* [PostFileCampaignSound](docs/campaigns/README.md#postfilecampaignsound) - Add sound via file
* [PostTTSCampaignSound](docs/campaigns/README.md#postttscampaignsound) - Add sound via text-to-speech
* [UpdateCampaignBatch](docs/campaigns/README.md#updatecampaignbatch) - Update a batch

### [Contacts](docs/contacts/README.md)

* [AddContactListItems](docs/contacts/README.md#addcontactlistitems) - Add contacts to a contact list
* [AddDoNotContacts](docs/contacts/README.md#adddonotcontacts) - Add do not contact (dnc) numbers
* [CreateContactList](docs/contacts/README.md#createcontactlist) - Create contact lists
* [CreateContactListFromFile](docs/contacts/README.md#createcontactlistfromfile) - Create contact list from file
* [CreateContacts](docs/contacts/README.md#createcontacts) - Create contacts
* [DeleteContact](docs/contacts/README.md#deletecontact) - Delete a contact
* [DeleteContactList](docs/contacts/README.md#deletecontactlist) - Delete a contact list
* [DeleteDoNotContact](docs/contacts/README.md#deletedonotcontact) - Delete do not contact (dnc) number. If number contains commas treat as list of numbers
* [DeleteDoNotContactsBySource](docs/contacts/README.md#deletedonotcontactsbysource) - Delete do not contact (dnc) numbers contained in source.
* [FindContactLists](docs/contacts/README.md#findcontactlists) - Find contact lists
* [FindContacts](docs/contacts/README.md#findcontacts) - Find contacts
* [FindDoNotContacts](docs/contacts/README.md#finddonotcontacts) - Find do not contact (dnc) items
* [GetContact](docs/contacts/README.md#getcontact) - Find a specific contact
* [GetContactHistory](docs/contacts/README.md#getcontacthistory) - Find a contact's history
* [GetContactList](docs/contacts/README.md#getcontactlist) - Find a specific contact list
* [GetContactListItems](docs/contacts/README.md#getcontactlistitems) - Find contacts in a contact list
* [GetDoNotContact](docs/contacts/README.md#getdonotcontact) - Get do not contact (dnc)
* [GetUniversalDoNotContacts](docs/contacts/README.md#getuniversaldonotcontacts) - Find universal do not contacts (udnc) associated with toNumber
* [RemoveContactListItem](docs/contacts/README.md#removecontactlistitem) - Delete a contact from a contact list
* [RemoveContactListItems](docs/contacts/README.md#removecontactlistitems) - Delete contacts from a contact list
* [UpdateContact](docs/contacts/README.md#updatecontact) - Update a contact
* [UpdateContactList](docs/contacts/README.md#updatecontactlist) - Update a contact list
* [UpdateDoNotContact](docs/contacts/README.md#updatedonotcontact) - Update an individual do not contact (dnc) number

### [Keywords](docs/keywords/README.md)

* [FindKeywordLeaseConfigs](docs/keywords/README.md#findkeywordleaseconfigs) - Find keyword lease configs
* [FindKeywordLeases](docs/keywords/README.md#findkeywordleases) - Find keyword leases
* [FindKeywords](docs/keywords/README.md#findkeywords) - Find keywords
* [GetKeywordLease](docs/keywords/README.md#getkeywordlease) - Find a specific lease
* [GetKeywordLeaseByID](docs/keywords/README.md#getkeywordleasebyid) - Find a keyword by id
* [GetKeywordLeaseConfig](docs/keywords/README.md#getkeywordleaseconfig) - Find a specific keyword lease config
* [IsKeywordAvailable](docs/keywords/README.md#iskeywordavailable) - Check for a specific keyword
* [UpdateKeywordLease](docs/keywords/README.md#updatekeywordlease) - Update a lease
* [UpdateKeywordLeaseConfig](docs/keywords/README.md#updatekeywordleaseconfig) - Update a keyword lease config

### [Me](docs/me/README.md)

* [CreateAPICredential](docs/me/README.md#createapicredential) - Create api credentials
* [DeleteAPICredential](docs/me/README.md#deleteapicredential) - Delete api credentials
* [DisableAPICredentials](docs/me/README.md#disableapicredentials) - Disable specified API credentials
* [EnableAPICredentials](docs/me/README.md#enableapicredentials) - Enable specified API credentials
* [FindAPICredentials](docs/me/README.md#findapicredentials) - Find api credentials
* [GetAccount](docs/me/README.md#getaccount) - Find account details
* [GetAPICredential](docs/me/README.md#getapicredential) - Find a specific api credential
* [GetBillingPlanUsage](docs/me/README.md#getbillingplanusage) - Find plan usage
* [GetCallerIds](docs/me/README.md#getcallerids) - Find caller ids
* [GetCreditUsage](docs/me/README.md#getcreditusage) - Find credit usage
* [SendVerificationCodeToCallerID](docs/me/README.md#sendverificationcodetocallerid) - Create a caller id
* [VerifyCallerID](docs/me/README.md#verifycallerid) - Verify a caller id

### [Media](docs/media/README.md)

* [CreateMedia](docs/media/README.md#createmedia) - Create media
* [FindMedia](docs/media/README.md#findmedia) - Find media
* [GetMedia](docs/media/README.md#getmedia) - Get a specific media
* [GetMediaData](docs/media/README.md#getmediadata) - Download media by extension
* [GetMediaDataBinary](docs/media/README.md#getmediadatabinary) - Download a MP3 media
* [GetMediaDataByKey](docs/media/README.md#getmediadatabykey) - Download media by extension

### [Numbers](docs/numbers/README.md)

* [FindNumberLeaseConfigs](docs/numbers/README.md#findnumberleaseconfigs) - Find lease configs
* [FindNumberLeases](docs/numbers/README.md#findnumberleases) - Find leases
* [FindNumberRegions](docs/numbers/README.md#findnumberregions) - Find number regions
* [FindNumbersLocal](docs/numbers/README.md#findnumberslocal) - Find local numbers
* [FindNumbersTollfree](docs/numbers/README.md#findnumberstollfree) - Find tollfree numbers
* [GetNumberLease](docs/numbers/README.md#getnumberlease) - Find a specific lease
* [GetNumberLeaseConfig](docs/numbers/README.md#getnumberleaseconfig) - Find a specific lease config
* [UpdateNumberLease](docs/numbers/README.md#updatenumberlease) - Update a lease
* [UpdateNumberLeaseConfig](docs/numbers/README.md#updatenumberleaseconfig) - Update a lease config

### [Orders](docs/orders/README.md)

* [FindOrders](docs/orders/README.md#findorders) - Find orders
* [GetOrder](docs/orders/README.md#getorder) - Find a specific order
* [OrderKeywords](docs/orders/README.md#orderkeywords) - Purchase keywords
* [OrderNumbers](docs/orders/README.md#ordernumbers) - Purchase numbers

### [Reports](docs/reports/README.md)

* [GetDeliveryReports](docs/reports/README.md#getdeliveryreports) - Get delivery reports by ad hoc criteria

### [Texts](docs/texts/README.md)

* [AddTextBroadcastBatch](docs/texts/README.md#addtextbroadcastbatch) - Add batches to a text broadcast
* [AddTextBroadcastRecipients](docs/texts/README.md#addtextbroadcastrecipients) - Add recipients to a text broadcast
* [ArchiveTextBroadcast](docs/texts/README.md#archivetextbroadcast) - Archive text broadcast
* [CreateTextAutoReply](docs/texts/README.md#createtextautoreply) - Create an auto reply
* [CreateTextBroadcast](docs/texts/README.md#createtextbroadcast) - Create a text broadcast
* [DeleteTextAutoReply](docs/texts/README.md#deletetextautoreply) - Delete an auto reply
* [FindTextAutoReplys](docs/texts/README.md#findtextautoreplys) - Find auto replies
* [FindTextBroadcasts](docs/texts/README.md#findtextbroadcasts) - Find text broadcasts
* [FindTexts](docs/texts/README.md#findtexts) - Find texts
* [GetText](docs/texts/README.md#gettext) - Find a specific text
* [GetTextAutoReply](docs/texts/README.md#gettextautoreply) - Find a specific auto reply
* [GetTextBroadcast](docs/texts/README.md#gettextbroadcast) - Find a specific text broadcast
* [GetTextBroadcastBatches](docs/texts/README.md#gettextbroadcastbatches) - Find batches in a text broadcast
* [GetTextBroadcastStats](docs/texts/README.md#gettextbroadcaststats) - Get statistics on text broadcast
* [GetTextBroadcastTexts](docs/texts/README.md#gettextbroadcasttexts) - Find texts in a text broadcast
* [SendTexts](docs/texts/README.md#sendtexts) - Send texts
* [StartTextBroadcast](docs/texts/README.md#starttextbroadcast) - Start text broadcast
* [StopTextBroadcast](docs/texts/README.md#stoptextbroadcast) - Stop text broadcast
* [ToggleTextBroadcastRecipientsStatus](docs/texts/README.md#toggletextbroadcastrecipientsstatus) - Disable/enable undialed recipients in broadcast
* [UpdateTextBroadcast](docs/texts/README.md#updatetextbroadcast) - Update a text broadcast

### [Webhooks](docs/webhooks/README.md)

* [CreateWebhook](docs/webhooks/README.md#createwebhook) - Create a webhook
* [DeleteWebhook](docs/webhooks/README.md#deletewebhook) - Delete a webhook
* [FindWebhookResources](docs/webhooks/README.md#findwebhookresources) - Find webhook resources
* [FindWebhooks](docs/webhooks/README.md#findwebhooks) - Find webhooks
* [GetWebhook](docs/webhooks/README.md#getwebhook) - Find a specific webhook
* [GetWebhookResource](docs/webhooks/README.md#getwebhookresource) - Find specific webhook resource
* [UpdateWebhook](docs/webhooks/README.md#updatewebhook) - Update a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
