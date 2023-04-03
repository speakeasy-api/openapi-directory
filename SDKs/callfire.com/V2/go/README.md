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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AddCallBroadcastBatchRequest{
        BatchRequest: &shared.BatchRequest{
            ContactListID: 548814,
            Name: "provident",
            Recipients: []shared.Recipient{
                shared.Recipient{
                    Attributes: map[string]string{
                        "unde": "nulla",
                        "corrupti": "illum",
                        "vel": "error",
                        "deserunt": "suscipit",
                    },
                    ContactID: 437587,
                    FromNumber: "magnam",
                    PhoneNumber: "debitis",
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "delectus": "tempora",
                    },
                    ContactID: 383441,
                    FromNumber: "molestiae",
                    PhoneNumber: "minus",
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "voluptatum": "iusto",
                        "excepturi": "nisi",
                        "recusandae": "temporibus",
                        "ab": "quis",
                    },
                    ContactID: 87129,
                    FromNumber: "deserunt",
                    PhoneNumber: "perferendis",
                },
            },
            ScrubDuplicates: false,
        },
        ID: 368241,
        StrictValidation: false,
    }

    ctx := context.Background()
    res, err := s.Calls.AddCallBroadcastBatch(ctx, req, operations.AddCallBroadcastBatchSecurity{
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


### Calls

* `AddCallBroadcastBatch` - Add batches to a call broadcast
* `AddCallBroadcastRecipients` - Add recipients to a call broadcast
* `ArchiveVoiceBroadcast` - Archive voice broadcast
* `CreateCallBroadcast` - Create a call broadcast
* `FindCallBroadcasts` - Find call broadcasts
* `FindCalls` - Find calls
* `GetCall` - Find a specific call
* `GetCallBroadcast` - Find a specific call broadcast
* `GetCallBroadcastBatches` - Find batches in a call broadcast
* `GetCallBroadcastCalls` - Find calls in a call broadcast
* `GetCallBroadcastStats` - Get statistics on call broadcast
* `GetCallRecording` - Get call recording by id
* `GetCallRecordingByName` - Get call recording by name
* `GetCallRecordingMp3` - Get call recording in mp3 format
* `GetCallRecordingMp3ByName` - Get call mp3 recording by name
* `GetCallRecordings` - Get call recordings for a call
* `SendCalls` - Send calls
* `StartVoiceBroadcast` - Start voice broadcast
* `StopVoiceBroadcast` - Stop voice broadcast
* `ToggleCallBroadcastRecipientsStatus` - Disable/enable undialed recipients in broadcast
* `UpdateCallBroadcast` - Update a call broadcast

### Campaigns

* `DeleteCampaignSound` - Delete a specific sound
* `FindCampaignSounds` - Find sounds
* `GetCampaignBatch` - Find a specific batch
* `GetCampaignSound` - Find a specific sound
* `GetCampaignSoundDataMp3` - Download a MP3 sound
* `GetCampaignSoundDataWav` - Download a WAV sound
* `PostCallCampaignSound` - Add sound via call
* `PostFileCampaignSound` - Add sound via file
* `PostTTSCampaignSound` - Add sound via text-to-speech
* `UpdateCampaignBatch` - Update a batch

### Contacts

* `AddContactListItems` - Add contacts to a contact list
* `AddDoNotContacts` - Add do not contact (dnc) numbers
* `CreateContactList` - Create contact lists
* `CreateContactListFromFile` - Create contact list from file
* `CreateContacts` - Create contacts
* `DeleteContact` - Delete a contact
* `DeleteContactList` - Delete a contact list
* `DeleteDoNotContact` - Delete do not contact (dnc) number. If number contains commas treat as list of numbers
* `DeleteDoNotContactsBySource` - Delete do not contact (dnc) numbers contained in source.
* `FindContactLists` - Find contact lists
* `FindContacts` - Find contacts
* `FindDoNotContacts` - Find do not contact (dnc) items
* `GetContact` - Find a specific contact
* `GetContactHistory` - Find a contact's history
* `GetContactList` - Find a specific contact list
* `GetContactListItems` - Find contacts in a contact list
* `GetDoNotContact` - Get do not contact (dnc)
* `GetUniversalDoNotContacts` - Find universal do not contacts (udnc) associated with toNumber
* `RemoveContactListItem` - Delete a contact from a contact list
* `RemoveContactListItems` - Delete contacts from a contact list
* `UpdateContact` - Update a contact
* `UpdateContactList` - Update a contact list
* `UpdateDoNotContact` - Update an individual do not contact (dnc) number

### Keywords

* `FindKeywordLeaseConfigs` - Find keyword lease configs
* `FindKeywordLeases` - Find keyword leases
* `FindKeywords` - Find keywords
* `GetKeywordLease` - Find a specific lease
* `GetKeywordLeaseByID` - Find a keyword by id
* `GetKeywordLeaseConfig` - Find a specific keyword lease config
* `IsKeywordAvailable` - Check for a specific keyword
* `UpdateKeywordLease` - Update a lease
* `UpdateKeywordLeaseConfig` - Update a keyword lease config

### Me

* `CreateAPICredential` - Create api credentials
* `DeleteAPICredential` - Delete api credentials
* `DisableAPICredentials` - Disable specified API credentials
* `EnableAPICredentials` - Enable specified API credentials
* `FindAPICredentials` - Find api credentials
* `GetAccount` - Find account details
* `GetAPICredential` - Find a specific api credential
* `GetBillingPlanUsage` - Find plan usage
* `GetCallerIds` - Find caller ids
* `GetCreditUsage` - Find credit usage
* `SendVerificationCodeToCallerID` - Create a caller id
* `VerifyCallerID` - Verify a caller id

### Media

* `CreateMedia` - Create media
* `FindMedia` - Find media
* `GetMedia` - Get a specific media
* `GetMediaData` - Download media by extension
* `GetMediaDataBinary` - Download a MP3 media
* `GetMediaDataByKey` - Download media by extension

### Numbers

* `FindNumberLeaseConfigs` - Find lease configs
* `FindNumberLeases` - Find leases
* `FindNumberRegions` - Find number regions
* `FindNumbersLocal` - Find local numbers
* `FindNumbersTollfree` - Find tollfree numbers
* `GetNumberLease` - Find a specific lease
* `GetNumberLeaseConfig` - Find a specific lease config
* `UpdateNumberLease` - Update a lease
* `UpdateNumberLeaseConfig` - Update a lease config

### Orders

* `FindOrders` - Find orders
* `GetOrder` - Find a specific order
* `OrderKeywords` - Purchase keywords
* `OrderNumbers` - Purchase numbers

### Reports

* `GetDeliveryReports` - Get delivery reports by ad hoc criteria

### Texts

* `AddTextBroadcastBatch` - Add batches to a text broadcast
* `AddTextBroadcastRecipients` - Add recipients to a text broadcast
* `ArchiveTextBroadcast` - Archive text broadcast
* `CreateTextAutoReply` - Create an auto reply
* `CreateTextBroadcast` - Create a text broadcast
* `DeleteTextAutoReply` - Delete an auto reply
* `FindTextAutoReplys` - Find auto replies
* `FindTextBroadcasts` - Find text broadcasts
* `FindTexts` - Find texts
* `GetText` - Find a specific text
* `GetTextAutoReply` - Find a specific auto reply
* `GetTextBroadcast` - Find a specific text broadcast
* `GetTextBroadcastBatches` - Find batches in a text broadcast
* `GetTextBroadcastStats` - Get statistics on text broadcast
* `GetTextBroadcastTexts` - Find texts in a text broadcast
* `SendTexts` - Send texts
* `StartTextBroadcast` - Start text broadcast
* `StopTextBroadcast` - Stop text broadcast
* `ToggleTextBroadcastRecipientsStatus` - Disable/enable undialed recipients in broadcast
* `UpdateTextBroadcast` - Update a text broadcast

### Webhooks

* `CreateWebhook` - Create a webhook
* `DeleteWebhook` - Delete a webhook
* `FindWebhookResources` - Find webhook resources
* `FindWebhooks` - Find webhooks
* `GetWebhook` - Find a specific webhook
* `GetWebhookResource` - Find specific webhook resource
* `UpdateWebhook` - Update a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
