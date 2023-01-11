# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AcceptPageRequest req = new AcceptPageRequest() {{
                headers = new AcceptPageHeaders() {{
                    xAmzAlgorithm = "vitae";
                    xAmzContentSha256 = "quasi";
                    xAmzCredential = "ipsum";
                    xAmzDate = "incidunt";
                    xAmzSecurityToken = "vitae";
                    xAmzSignature = "animi";
                    xAmzSignedHeaders = "eos";
                    xAmzTarget = "SSMContacts.AcceptPage";
                }};
                request = new AcceptPageRequest() {{
                    acceptCode = "aperiam";
                    acceptCodeValidation = "ENFORCE";
                    acceptType = "DELIVERED";
                    contactChannelId = "in";
                    note = "eum";
                    pageId = "quibusdam";
                }};
            }};

            AcceptPageResponse res = sdk.acceptPage(req);

            if (res.acceptPageResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `acceptPage` - Used to acknowledge an engagement to a contact channel during an incident.
* `activateContactChannel` - Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.
* `createContact` - Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident. 
* `createContactChannel` - A contact channel is the method that Incident Manager uses to engage your contact.
* `deactivateContactChannel` - To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.
* `deleteContact` - To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.
* `deleteContactChannel` - To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.
* `describeEngagement` - Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.
* `describePage` - Lists details of the engagement to a contact channel.
* `getContact` - Retrieves information about the specified contact or escalation plan.
* `getContactChannel` - List details about a specific contact channel.
* `getContactPolicy` - Retrieves the resource policies attached to the specified contact or escalation plan.
* `listContactChannels` - Lists all contact channels for the specified contact.
* `listContacts` - Lists all contacts and escalation plans in Incident Manager.
* `listEngagements` - Lists all engagements that have happened in an incident.
* `listPageReceipts` - Lists all of the engagements to contact channels that have been acknowledged. 
* `listPagesByContact` - Lists the engagements to a contact's contact channels.
* `listPagesByEngagement` - Lists the engagements to contact channels that occurred by engaging a contact.
* `listTagsForResource` - Lists the tags of an escalation plan or contact.
* `putContactPolicy` - Adds a resource to the specified contact or escalation plan.
* `sendActivationCode` - Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.
* `startEngagement` - Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.
* `stopEngagement` - Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.
* `tagResource` - Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set. 
* `untagResource` - Removes tags from the specified resource. 
* `updateContact` - Updates the contact or escalation plan specified. 
* `updateContactChannel` - Updates a contact's contact channel.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
