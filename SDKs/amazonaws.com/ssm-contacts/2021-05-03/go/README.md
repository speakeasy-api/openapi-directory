# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/ssm-contacts/2021-05-03/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AcceptPage(ctx, operations.AcceptPageRequest{
        AcceptPageRequest: shared.AcceptPageRequest{
            AcceptCode: "corrupti",
            AcceptCodeValidation: shared.AcceptCodeValidationEnumEnforce.ToPointer(),
            AcceptType: shared.AcceptTypeEnumRead,
            ContactChannelID: sdk.String("quibusdam"),
            Note: sdk.String("unde"),
            PageID: "nulla",
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.AcceptPageXAmzTargetEnumSsmContactsAcceptPage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptPageResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AcceptPage](docs/sdk/README.md#acceptpage) - Used to acknowledge an engagement to a contact channel during an incident.
* [ActivateContactChannel](docs/sdk/README.md#activatecontactchannel) - Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.
* [CreateContact](docs/sdk/README.md#createcontact) - Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.
* [CreateContactChannel](docs/sdk/README.md#createcontactchannel) - A contact channel is the method that Incident Manager uses to engage your contact.
* [CreateRotation](docs/sdk/README.md#createrotation) - Creates a rotation in an on-call schedule.
* [CreateRotationOverride](docs/sdk/README.md#createrotationoverride) - Creates an override for a rotation in an on-call schedule.
* [DeactivateContactChannel](docs/sdk/README.md#deactivatecontactchannel) - To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.
* [DeleteContact](docs/sdk/README.md#deletecontact) - To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.
* [DeleteContactChannel](docs/sdk/README.md#deletecontactchannel) - To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.
* [DeleteRotation](docs/sdk/README.md#deleterotation) - Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.
* [DeleteRotationOverride](docs/sdk/README.md#deleterotationoverride) - Deletes an existing override for an on-call rotation.
* [DescribeEngagement](docs/sdk/README.md#describeengagement) - Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.
* [DescribePage](docs/sdk/README.md#describepage) - Lists details of the engagement to a contact channel.
* [GetContact](docs/sdk/README.md#getcontact) - Retrieves information about the specified contact or escalation plan.
* [GetContactChannel](docs/sdk/README.md#getcontactchannel) - List details about a specific contact channel.
* [GetContactPolicy](docs/sdk/README.md#getcontactpolicy) - Retrieves the resource policies attached to the specified contact or escalation plan.
* [GetRotation](docs/sdk/README.md#getrotation) - Retrieves information about an on-call rotation.
* [GetRotationOverride](docs/sdk/README.md#getrotationoverride) - Retrieves information about an override to an on-call rotation.
* [ListContactChannels](docs/sdk/README.md#listcontactchannels) - Lists all contact channels for the specified contact.
* [ListContacts](docs/sdk/README.md#listcontacts) - Lists all contacts and escalation plans in Incident Manager.
* [ListEngagements](docs/sdk/README.md#listengagements) - Lists all engagements that have happened in an incident.
* [ListPageReceipts](docs/sdk/README.md#listpagereceipts) - Lists all of the engagements to contact channels that have been acknowledged.
* [ListPageResolutions](docs/sdk/README.md#listpageresolutions) - Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of <i>escalation plan &gt; on-call schedule &gt; contact</i>.
* [ListPagesByContact](docs/sdk/README.md#listpagesbycontact) - Lists the engagements to a contact's contact channels.
* [ListPagesByEngagement](docs/sdk/README.md#listpagesbyengagement) - Lists the engagements to contact channels that occurred by engaging a contact.
* [ListPreviewRotationShifts](docs/sdk/README.md#listpreviewrotationshifts) - <p>Returns a list of shifts based on rotation configuration parameters.</p> <note> <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p> </note>
* [ListRotationOverrides](docs/sdk/README.md#listrotationoverrides) - Retrieves a list of overrides currently specified for an on-call rotation.
* [ListRotationShifts](docs/sdk/README.md#listrotationshifts) - Returns a list of shifts generated by an existing rotation in the system.
* [ListRotations](docs/sdk/README.md#listrotations) - Retrieves a list of on-call rotations.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags of an escalation plan or contact.
* [PutContactPolicy](docs/sdk/README.md#putcontactpolicy) - Adds a resource policy to the specified contact or escalation plan. The resource policy is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up cross-account functionality</a>.
* [SendActivationCode](docs/sdk/README.md#sendactivationcode) - Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.
* [StartEngagement](docs/sdk/README.md#startengagement) - Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.
* [StopEngagement](docs/sdk/README.md#stopengagement) - Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.
* [TagResource](docs/sdk/README.md#tagresource) - Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from the specified resource.
* [UpdateContact](docs/sdk/README.md#updatecontact) - Updates the contact or escalation plan specified.
* [UpdateContactChannel](docs/sdk/README.md#updatecontactchannel) - Updates a contact's contact channel.
* [UpdateRotation](docs/sdk/README.md#updaterotation) - Updates the information specified for an on-call rotation.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
