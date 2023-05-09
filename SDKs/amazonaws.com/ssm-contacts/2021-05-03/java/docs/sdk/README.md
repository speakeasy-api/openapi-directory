# SDK

## Overview

<p>Systems Manager Incident Manager is an incident management console designed to help users mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An incident is any unplanned interruption or reduction in quality of services.</p> <p>Incident Manager increases incident resolution by notifying responders of impact, highlighting relevant troubleshooting data, and providing collaboration tools to get services back up and running. To achieve the primary goal of reducing the time-to-resolution of critical incidents, Incident Manager automates response plans and enables responder team escalation.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ssm-contacts/>
### Available Operations

* [acceptPage](#acceptpage) - Used to acknowledge an engagement to a contact channel during an incident.
* [activateContactChannel](#activatecontactchannel) - Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.
* [createContact](#createcontact) - Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.
* [createContactChannel](#createcontactchannel) - A contact channel is the method that Incident Manager uses to engage your contact.
* [createRotation](#createrotation) - Creates a rotation in an on-call schedule.
* [createRotationOverride](#createrotationoverride) - Creates an override for a rotation in an on-call schedule.
* [deactivateContactChannel](#deactivatecontactchannel) - To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.
* [deleteContact](#deletecontact) - To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.
* [deleteContactChannel](#deletecontactchannel) - To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.
* [deleteRotation](#deleterotation) - Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.
* [deleteRotationOverride](#deleterotationoverride) - Deletes an existing override for an on-call rotation.
* [describeEngagement](#describeengagement) - Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.
* [describePage](#describepage) - Lists details of the engagement to a contact channel.
* [getContact](#getcontact) - Retrieves information about the specified contact or escalation plan.
* [getContactChannel](#getcontactchannel) - List details about a specific contact channel.
* [getContactPolicy](#getcontactpolicy) - Retrieves the resource policies attached to the specified contact or escalation plan.
* [getRotation](#getrotation) - Retrieves information about an on-call rotation.
* [getRotationOverride](#getrotationoverride) - Retrieves information about an override to an on-call rotation.
* [listContactChannels](#listcontactchannels) - Lists all contact channels for the specified contact.
* [listContacts](#listcontacts) - Lists all contacts and escalation plans in Incident Manager.
* [listEngagements](#listengagements) - Lists all engagements that have happened in an incident.
* [listPageReceipts](#listpagereceipts) - Lists all of the engagements to contact channels that have been acknowledged.
* [listPageResolutions](#listpageresolutions) - Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of <i>escalation plan &gt; on-call schedule &gt; contact</i>.
* [listPagesByContact](#listpagesbycontact) - Lists the engagements to a contact's contact channels.
* [listPagesByEngagement](#listpagesbyengagement) - Lists the engagements to contact channels that occurred by engaging a contact.
* [listPreviewRotationShifts](#listpreviewrotationshifts) - <p>Returns a list of shifts based on rotation configuration parameters.</p> <note> <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p> </note>
* [listRotationOverrides](#listrotationoverrides) - Retrieves a list of overrides currently specified for an on-call rotation.
* [listRotationShifts](#listrotationshifts) - Returns a list of shifts generated by an existing rotation in the system.
* [listRotations](#listrotations) - Retrieves a list of on-call rotations.
* [listTagsForResource](#listtagsforresource) - Lists the tags of an escalation plan or contact.
* [putContactPolicy](#putcontactpolicy) - Adds a resource policy to the specified contact or escalation plan. The resource policy is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up cross-account functionality</a>.
* [sendActivationCode](#sendactivationcode) - Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.
* [startEngagement](#startengagement) - Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.
* [stopEngagement](#stopengagement) - Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.
* [tagResource](#tagresource) - Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.
* [untagResource](#untagresource) - Removes tags from the specified resource.
* [updateContact](#updatecontact) - Updates the contact or escalation plan specified.
* [updateContactChannel](#updatecontactchannel) - Updates a contact's contact channel.
* [updateRotation](#updaterotation) - Updates the information specified for an on-call rotation.

## acceptPage

Used to acknowledge an engagement to a contact channel during an incident.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptPageRequest;
import org.openapis.openapi.models.operations.AcceptPageResponse;
import org.openapis.openapi.models.operations.AcceptPageXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptCodeValidationEnum;
import org.openapis.openapi.models.shared.AcceptPageRequest;
import org.openapis.openapi.models.shared.AcceptTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptPageRequest req = new AcceptPageRequest(                new AcceptPageRequest("ipsa", AcceptTypeEnum.READ, "tempora") {{
                                acceptCodeValidation = AcceptCodeValidationEnum.IGNORE;
                                contactChannelId = "molestiae";
                                note = "minus";
                            }};, AcceptPageXAmzTargetEnum.SSM_CONTACTS_ACCEPT_PAGE) {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "iusto";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "temporibus";
            }};            

            AcceptPageResponse res = sdk.sdk.acceptPage(req);

            if (res.acceptPageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activateContactChannel

Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateContactChannelRequest;
import org.openapis.openapi.models.operations.ActivateContactChannelResponse;
import org.openapis.openapi.models.operations.ActivateContactChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActivateContactChannelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivateContactChannelRequest req = new ActivateContactChannelRequest(                new ActivateContactChannelRequest("quis", "veritatis");, ActivateContactChannelXAmzTargetEnum.SSM_CONTACTS_ACTIVATE_CONTACT_CHANNEL) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            ActivateContactChannelResponse res = sdk.sdk.activateContactChannel(req);

            if (res.activateContactChannelResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createContact

Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContactRequest;
import org.openapis.openapi.models.operations.CreateContactResponse;
import org.openapis.openapi.models.operations.CreateContactXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChannelTargetInfo;
import org.openapis.openapi.models.shared.ContactTargetInfo;
import org.openapis.openapi.models.shared.ContactTypeEnum;
import org.openapis.openapi.models.shared.CreateContactRequest;
import org.openapis.openapi.models.shared.Plan;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Stage;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateContactRequest req = new CreateContactRequest(                new CreateContactRequest("at",                 new Plan() {{
                                                rotationIds = new String[]{{
                                                    add("molestiae"),
                                                    add("quod"),
                                                    add("quod"),
                                                    add("esse"),
                                                }};
                                                stages = new org.openapis.openapi.models.shared.Stage[]{{
                                                    add(new Stage(264555L,                 new org.openapis.openapi.models.shared.Target[]{{
                                                                        add(new Target() {{
                                                                            channelTargetInfo = new ChannelTargetInfo("esse") {{
                                                                                contactChannelId = "impedit";
                                                                                retryIntervalInMinutes = 736918L;
                                                                            }};
                                                                            contactTargetInfo = new ContactTargetInfo(false) {{
                                                                                contactId = "ipsum";
                                                                                isEssential = false;
                                                                            }};
                                                                        }}),
                                                                    }}) {{
                                                        durationInMinutes = 780529L;
                                                        targets = new org.openapis.openapi.models.shared.Target[]{{
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("officia") {{
                                                                    contactChannelId = "dicta";
                                                                    retryIntervalInMinutes = 720633L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "occaecati";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("hic") {{
                                                                    contactChannelId = "fugit";
                                                                    retryIntervalInMinutes = 537373L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "optio";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("commodi") {{
                                                                    contactChannelId = "totam";
                                                                    retryIntervalInMinutes = 105907L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "molestiae";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new Stage(612096L,                 new org.openapis.openapi.models.shared.Target[]{{
                                                                        add(new Target() {{
                                                                            channelTargetInfo = new ChannelTargetInfo("hic") {{
                                                                                contactChannelId = "natus";
                                                                                retryIntervalInMinutes = 386489L;
                                                                            }};
                                                                            contactTargetInfo = new ContactTargetInfo(false) {{
                                                                                contactId = "saepe";
                                                                                isEssential = false;
                                                                            }};
                                                                        }}),
                                                                    }}) {{
                                                        durationInMinutes = 568434L;
                                                        targets = new org.openapis.openapi.models.shared.Target[]{{
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("natus") {{
                                                                    contactChannelId = "perferendis";
                                                                    retryIntervalInMinutes = 324141L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "sed";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new Stage(666767L,                 new org.openapis.openapi.models.shared.Target[]{{
                                                                        add(new Target() {{
                                                                            channelTargetInfo = new ChannelTargetInfo("dolorem") {{
                                                                                contactChannelId = "laborum";
                                                                                retryIntervalInMinutes = 170909L;
                                                                            }};
                                                                            contactTargetInfo = new ContactTargetInfo(false) {{
                                                                                contactId = "corporis";
                                                                                isEssential = false;
                                                                            }};
                                                                        }}),
                                                                        add(new Target() {{
                                                                            channelTargetInfo = new ChannelTargetInfo("enim") {{
                                                                                contactChannelId = "explicabo";
                                                                                retryIntervalInMinutes = 750686L;
                                                                            }};
                                                                            contactTargetInfo = new ContactTargetInfo(false) {{
                                                                                contactId = "omnis";
                                                                                isEssential = false;
                                                                            }};
                                                                        }}),
                                                                        add(new Target() {{
                                                                            channelTargetInfo = new ChannelTargetInfo("excepturi") {{
                                                                                contactChannelId = "nemo";
                                                                                retryIntervalInMinutes = 325047L;
                                                                            }};
                                                                            contactTargetInfo = new ContactTargetInfo(false) {{
                                                                                contactId = "accusantium";
                                                                                isEssential = false;
                                                                            }};
                                                                        }}),
                                                                    }}) {{
                                                        durationInMinutes = 681820L;
                                                        targets = new org.openapis.openapi.models.shared.Target[]{{
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("iure") {{
                                                                    contactChannelId = "corporis";
                                                                    retryIntervalInMinutes = 613064L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "saepe";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("ipsa") {{
                                                                    contactChannelId = "quidem";
                                                                    retryIntervalInMinutes = 99280L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "reiciendis";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                            }};, ContactTypeEnum.ESCALATION) {{
                                displayName = "culpa";
                                idempotencyToken = "doloribus";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "architecto";
                                        value = "mollitia";
                                    }}),
                                    add(new Tag() {{
                                        key = "dolorem";
                                        value = "culpa";
                                    }}),
                                    add(new Tag() {{
                                        key = "consequuntur";
                                        value = "repellat";
                                    }}),
                                    add(new Tag() {{
                                        key = "mollitia";
                                        value = "occaecati";
                                    }}),
                                }};
                            }};, CreateContactXAmzTargetEnum.SSM_CONTACTS_CREATE_CONTACT) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "quam";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "velit";
                xAmzSignature = "error";
                xAmzSignedHeaders = "quia";
            }};            

            CreateContactResponse res = sdk.sdk.createContact(req);

            if (res.createContactResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createContactChannel

A contact channel is the method that Incident Manager uses to engage your contact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContactChannelRequest;
import org.openapis.openapi.models.operations.CreateContactChannelResponse;
import org.openapis.openapi.models.operations.CreateContactChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChannelTypeEnum;
import org.openapis.openapi.models.shared.ContactChannelAddress;
import org.openapis.openapi.models.shared.CreateContactChannelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateContactChannelRequest req = new CreateContactChannelRequest(                new CreateContactChannelRequest("vitae",                 new ContactChannelAddress() {{
                                                simpleAddress = "laborum";
                                            }};, "animi", ChannelTypeEnum.SMS) {{
                                deferActivation = false;
                                idempotencyToken = "odit";
                            }};, CreateContactChannelXAmzTargetEnum.SSM_CONTACTS_CREATE_CONTACT_CHANNEL) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "tenetur";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "id";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "aut";
            }};            

            CreateContactChannelResponse res = sdk.sdk.createContactChannel(req);

            if (res.createContactChannelResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRotation

Creates a rotation in an on-call schedule.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRotationRequest;
import org.openapis.openapi.models.operations.CreateRotationResponse;
import org.openapis.openapi.models.operations.CreateRotationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CoverageTime;
import org.openapis.openapi.models.shared.CreateRotationRequest;
import org.openapis.openapi.models.shared.DayOfWeekEnum;
import org.openapis.openapi.models.shared.HandOffTime;
import org.openapis.openapi.models.shared.MonthlySetting;
import org.openapis.openapi.models.shared.RecurrenceSettings;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.WeeklySetting;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRotationRequest req = new CreateRotationRequest(                new CreateRotationRequest(                new String[]{{
                                                add("temporibus"),
                                                add("laborum"),
                                                add("quasi"),
                                            }}, "reiciendis",                 new RecurrenceSettings(976460L, 878194L) {{
                                                dailySettings = new org.openapis.openapi.models.shared.HandOffTime[]{{
                                                    add(new HandOffTime(55714L, 604846L) {{
                                                        hourOfDay = 509624L;
                                                        minuteOfHour = 976762L;
                                                    }}),
                                                    add(new HandOffTime(19987L, 39187L) {{
                                                        hourOfDay = 451159L;
                                                        minuteOfHour = 739264L;
                                                    }}),
                                                }};
                                                monthlySettings = new org.openapis.openapi.models.shared.MonthlySetting[]{{
                                                    add(new MonthlySetting(480894L,                 new HandOffTime(118727L, 688661L);) {{
                                                        dayOfMonth = 282807L;
                                                        handOffTime = new HandOffTime(359444L, 296140L) {{
                                                            hourOfDay = 979587L;
                                                            minuteOfHour = 120196L;
                                                        }};
                                                    }}),
                                                    add(new MonthlySetting(216822L,                 new HandOffTime(692472L, 565189L);) {{
                                                        dayOfMonth = 317983L;
                                                        handOffTime = new HandOffTime(918236L, 64147L) {{
                                                            hourOfDay = 880476L;
                                                            minuteOfHour = 414263L;
                                                        }};
                                                    }}),
                                                }};
                                                shiftCoverages = new java.util.HashMap<String, org.openapis.openapi.models.shared.CoverageTime[]>() {{
                                                    put("pariatur", new org.openapis.openapi.models.shared.CoverageTime[]{{
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(916723L, 93940L) {{
                                                                hourOfDay = 508969L;
                                                                minuteOfHour = 523248L;
                                                            }};
                                                            start = new HandOffTime(83112L, 929297L) {{
                                                                hourOfDay = 921158L;
                                                                minuteOfHour = 575947L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(9356L, 667411L) {{
                                                                hourOfDay = 277718L;
                                                                minuteOfHour = 318569L;
                                                            }};
                                                            start = new HandOffTime(647174L, 716327L) {{
                                                                hourOfDay = 842342L;
                                                                minuteOfHour = 131797L;
                                                            }};
                                                        }}),
                                                    }});
                                                    put("quibusdam", new org.openapis.openapi.models.shared.CoverageTime[]{{
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(397821L, 586513L) {{
                                                                hourOfDay = 264730L;
                                                                minuteOfHour = 183191L;
                                                            }};
                                                            start = new HandOffTime(164940L, 828940L) {{
                                                                hourOfDay = 552822L;
                                                                minuteOfHour = 20107L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(146441L, 677817L) {{
                                                                hourOfDay = 369808L;
                                                                minuteOfHour = 4695L;
                                                            }};
                                                            start = new HandOffTime(703737L, 735194L) {{
                                                                hourOfDay = 569618L;
                                                                minuteOfHour = 270008L;
                                                            }};
                                                        }}),
                                                    }});
                                                    put("labore", new org.openapis.openapi.models.shared.CoverageTime[]{{
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(756107L, 576157L) {{
                                                                hourOfDay = 433288L;
                                                                minuteOfHour = 248753L;
                                                            }};
                                                            start = new HandOffTime(896039L, 572252L) {{
                                                                hourOfDay = 396098L;
                                                                minuteOfHour = 592042L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(891555L, 952749L) {{
                                                                hourOfDay = 638921L;
                                                                minuteOfHour = 223081L;
                                                            }};
                                                            start = new HandOffTime(449198L, 846409L) {{
                                                                hourOfDay = 680056L;
                                                                minuteOfHour = 447125L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(116202L, 297437L) {{
                                                                hourOfDay = 978571L;
                                                                minuteOfHour = 699479L;
                                                            }};
                                                            start = new HandOffTime(411820L, 396506L) {{
                                                                hourOfDay = 767024L;
                                                                minuteOfHour = 813798L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(249796L, 581273L) {{
                                                                hourOfDay = 675439L;
                                                                minuteOfHour = 881104L;
                                                            }};
                                                            start = new HandOffTime(965417L, 692532L) {{
                                                                hourOfDay = 313218L;
                                                                minuteOfHour = 881736L;
                                                            }};
                                                        }}),
                                                    }});
                                                }};
                                                weeklySettings = new org.openapis.openapi.models.shared.WeeklySetting[]{{
                                                    add(new WeeklySetting(DayOfWeekEnum.TUE,                 new HandOffTime(643990L, 394869L);) {{
                                                        dayOfWeek = DayOfWeekEnum.SAT;
                                                        handOffTime = new HandOffTime(533206L, 956084L) {{
                                                            hourOfDay = 659669L;
                                                            minuteOfHour = 501324L;
                                                        }};
                                                    }}),
                                                    add(new WeeklySetting(DayOfWeekEnum.THU,                 new HandOffTime(301575L, 716075L);) {{
                                                        dayOfWeek = DayOfWeekEnum.WED;
                                                        handOffTime = new HandOffTime(474867L, 19193L) {{
                                                            hourOfDay = 618809L;
                                                            minuteOfHour = 606393L;
                                                        }};
                                                    }}),
                                                    add(new WeeklySetting(DayOfWeekEnum.SAT,                 new HandOffTime(428769L, 878453L);) {{
                                                        dayOfWeek = DayOfWeekEnum.FRI;
                                                        handOffTime = new HandOffTime(383462L, 618016L) {{
                                                            hourOfDay = 287991L;
                                                            minuteOfHour = 290077L;
                                                        }};
                                                    }}),
                                                }};
                                            }};, "aspernatur") {{
                                idempotencyToken = "architecto";
                                startTime = OffsetDateTime.parse("2022-11-28T06:48:16.205Z");
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "ullam";
                                        value = "provident";
                                    }}),
                                    add(new Tag() {{
                                        key = "quos";
                                        value = "sint";
                                    }}),
                                    add(new Tag() {{
                                        key = "accusantium";
                                        value = "mollitia";
                                    }}),
                                }};
                            }};, CreateRotationXAmzTargetEnum.SSM_CONTACTS_CREATE_ROTATION) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "ad";
                xAmzDate = "eum";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "odit";
            }};            

            CreateRotationResponse res = sdk.sdk.createRotation(req);

            if (res.createRotationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRotationOverride

Creates an override for a rotation in an on-call schedule.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRotationOverrideRequest;
import org.openapis.openapi.models.operations.CreateRotationOverrideResponse;
import org.openapis.openapi.models.operations.CreateRotationOverrideXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRotationOverrideRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRotationOverrideRequest req = new CreateRotationOverrideRequest(                new CreateRotationOverrideRequest(OffsetDateTime.parse("2022-07-25T21:49:23.340Z"),                 new String[]{{
                                                add("debitis"),
                                                add("eius"),
                                                add("maxime"),
                                                add("deleniti"),
                                            }}, "facilis", OffsetDateTime.parse("2022-11-25T10:00:44.006Z")) {{
                                idempotencyToken = "architecto";
                            }};, CreateRotationOverrideXAmzTargetEnum.SSM_CONTACTS_CREATE_ROTATION_OVERRIDE) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
            }};            

            CreateRotationOverrideResponse res = sdk.sdk.createRotationOverride(req);

            if (res.createRotationOverrideResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deactivateContactChannel

To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeactivateContactChannelRequest;
import org.openapis.openapi.models.operations.DeactivateContactChannelResponse;
import org.openapis.openapi.models.operations.DeactivateContactChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeactivateContactChannelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeactivateContactChannelRequest req = new DeactivateContactChannelRequest(                new DeactivateContactChannelRequest("pariatur");, DeactivateContactChannelXAmzTargetEnum.SSM_CONTACTS_DEACTIVATE_CONTACT_CHANNEL) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "praesentium";
                xAmzDate = "natus";
                xAmzSecurityToken = "magni";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "quo";
            }};            

            DeactivateContactChannelResponse res = sdk.sdk.deactivateContactChannel(req);

            if (res.deactivateContactChannelResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteContact

To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContactRequest;
import org.openapis.openapi.models.operations.DeleteContactResponse;
import org.openapis.openapi.models.operations.DeleteContactXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteContactRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteContactRequest req = new DeleteContactRequest(                new DeleteContactRequest("pariatur");, DeleteContactXAmzTargetEnum.SSM_CONTACTS_DELETE_CONTACT) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "ea";
                xAmzCredential = "excepturi";
                xAmzDate = "odit";
                xAmzSecurityToken = "ea";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "ab";
            }};            

            DeleteContactResponse res = sdk.sdk.deleteContact(req);

            if (res.deleteContactResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteContactChannel

To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContactChannelRequest;
import org.openapis.openapi.models.operations.DeleteContactChannelResponse;
import org.openapis.openapi.models.operations.DeleteContactChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteContactChannelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteContactChannelRequest req = new DeleteContactChannelRequest(                new DeleteContactChannelRequest("quidem");, DeleteContactChannelXAmzTargetEnum.SSM_CONTACTS_DELETE_CONTACT_CHANNEL) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "autem";
                xAmzDate = "nam";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "nemo";
            }};            

            DeleteContactChannelResponse res = sdk.sdk.deleteContactChannel(req);

            if (res.deleteContactChannelResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRotation

Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRotationRequest;
import org.openapis.openapi.models.operations.DeleteRotationResponse;
import org.openapis.openapi.models.operations.DeleteRotationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRotationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRotationRequest req = new DeleteRotationRequest(                new DeleteRotationRequest("perferendis");, DeleteRotationXAmzTargetEnum.SSM_CONTACTS_DELETE_ROTATION) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "amet";
                xAmzCredential = "aut";
                xAmzDate = "cumque";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "libero";
            }};            

            DeleteRotationResponse res = sdk.sdk.deleteRotation(req);

            if (res.deleteRotationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRotationOverride

Deletes an existing override for an on-call rotation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRotationOverrideRequest;
import org.openapis.openapi.models.operations.DeleteRotationOverrideResponse;
import org.openapis.openapi.models.operations.DeleteRotationOverrideXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRotationOverrideRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRotationOverrideRequest req = new DeleteRotationOverrideRequest(                new DeleteRotationOverrideRequest("dolores", "quis");, DeleteRotationOverrideXAmzTargetEnum.SSM_CONTACTS_DELETE_ROTATION_OVERRIDE) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "eaque";
                xAmzDate = "quis";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "perferendis";
            }};            

            DeleteRotationOverrideResponse res = sdk.sdk.deleteRotationOverride(req);

            if (res.deleteRotationOverrideResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEngagement

Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEngagementRequest;
import org.openapis.openapi.models.operations.DescribeEngagementResponse;
import org.openapis.openapi.models.operations.DescribeEngagementXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEngagementRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEngagementRequest req = new DescribeEngagementRequest(                new DescribeEngagementRequest("minus");, DescribeEngagementXAmzTargetEnum.SSM_CONTACTS_DESCRIBE_ENGAGEMENT) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "vero";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "hic";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "omnis";
            }};            

            DescribeEngagementResponse res = sdk.sdk.describeEngagement(req);

            if (res.describeEngagementResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePage

Lists details of the engagement to a contact channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePageRequest;
import org.openapis.openapi.models.operations.DescribePageResponse;
import org.openapis.openapi.models.operations.DescribePageXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePageRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePageRequest req = new DescribePageRequest(                new DescribePageRequest("perspiciatis");, DescribePageXAmzTargetEnum.SSM_CONTACTS_DESCRIBE_PAGE) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
            }};            

            DescribePageResponse res = sdk.sdk.describePage(req);

            if (res.describePageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContact

Retrieves information about the specified contact or escalation plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactRequest;
import org.openapis.openapi.models.operations.GetContactResponse;
import org.openapis.openapi.models.operations.GetContactXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetContactRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContactRequest req = new GetContactRequest(                new GetContactRequest("adipisci");, GetContactXAmzTargetEnum.SSM_CONTACTS_GET_CONTACT) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "earum";
                xAmzCredential = "modi";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "pariatur";
            }};            

            GetContactResponse res = sdk.sdk.getContact(req);

            if (res.getContactResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContactChannel

List details about a specific contact channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactChannelRequest;
import org.openapis.openapi.models.operations.GetContactChannelResponse;
import org.openapis.openapi.models.operations.GetContactChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetContactChannelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContactChannelRequest req = new GetContactChannelRequest(                new GetContactChannelRequest("nobis");, GetContactChannelXAmzTargetEnum.SSM_CONTACTS_GET_CONTACT_CHANNEL) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quaerat";
                xAmzDate = "quos";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolorem";
            }};            

            GetContactChannelResponse res = sdk.sdk.getContactChannel(req);

            if (res.getContactChannelResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContactPolicy

Retrieves the resource policies attached to the specified contact or escalation plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactPolicyRequest;
import org.openapis.openapi.models.operations.GetContactPolicyResponse;
import org.openapis.openapi.models.operations.GetContactPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetContactPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContactPolicyRequest req = new GetContactPolicyRequest(                new GetContactPolicyRequest("qui");, GetContactPolicyXAmzTargetEnum.SSM_CONTACTS_GET_CONTACT_POLICY) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "excepturi";
                xAmzDate = "cum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "reiciendis";
            }};            

            GetContactPolicyResponse res = sdk.sdk.getContactPolicy(req);

            if (res.getContactPolicyResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRotation

Retrieves information about an on-call rotation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRotationRequest;
import org.openapis.openapi.models.operations.GetRotationResponse;
import org.openapis.openapi.models.operations.GetRotationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRotationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRotationRequest req = new GetRotationRequest(                new GetRotationRequest("dolorum");, GetRotationXAmzTargetEnum.SSM_CONTACTS_GET_ROTATION) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "ipsa";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "iure";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "quaerat";
            }};            

            GetRotationResponse res = sdk.sdk.getRotation(req);

            if (res.getRotationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRotationOverride

Retrieves information about an override to an on-call rotation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRotationOverrideRequest;
import org.openapis.openapi.models.operations.GetRotationOverrideResponse;
import org.openapis.openapi.models.operations.GetRotationOverrideXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRotationOverrideRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRotationOverrideRequest req = new GetRotationOverrideRequest(                new GetRotationOverrideRequest("quidem", "voluptatibus");, GetRotationOverrideXAmzTargetEnum.SSM_CONTACTS_GET_ROTATION_OVERRIDE) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "natus";
                xAmzCredential = "eos";
                xAmzDate = "atque";
                xAmzSecurityToken = "sit";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "ab";
            }};            

            GetRotationOverrideResponse res = sdk.sdk.getRotationOverride(req);

            if (res.getRotationOverrideResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listContactChannels

Lists all contact channels for the specified contact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListContactChannelsRequest;
import org.openapis.openapi.models.operations.ListContactChannelsResponse;
import org.openapis.openapi.models.operations.ListContactChannelsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListContactChannelsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListContactChannelsRequest req = new ListContactChannelsRequest(                new ListContactChannelsRequest("dolorum") {{
                                maxResults = 478596L;
                                nextToken = "voluptate";
                            }};, ListContactChannelsXAmzTargetEnum.SSM_CONTACTS_LIST_CONTACT_CHANNELS) {{
                maxResults = "dolorum";
                nextToken = "deleniti";
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "distinctio";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "voluptate";
            }};            

            ListContactChannelsResponse res = sdk.sdk.listContactChannels(req);

            if (res.listContactChannelsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listContacts

Lists all contacts and escalation plans in Incident Manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListContactsRequest;
import org.openapis.openapi.models.operations.ListContactsResponse;
import org.openapis.openapi.models.operations.ListContactsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContactTypeEnum;
import org.openapis.openapi.models.shared.ListContactsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListContactsRequest req = new ListContactsRequest(                new ListContactsRequest() {{
                                aliasPrefix = "saepe";
                                maxResults = 263322L;
                                nextToken = "aspernatur";
                                type = ContactTypeEnum.PERSONAL;
                            }};, ListContactsXAmzTargetEnum.SSM_CONTACTS_LIST_CONTACTS) {{
                maxResults = "amet";
                nextToken = "optio";
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "ad";
                xAmzCredential = "saepe";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "minima";
            }};            

            ListContactsResponse res = sdk.sdk.listContacts(req);

            if (res.listContactsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEngagements

Lists all engagements that have happened in an incident.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEngagementsRequest;
import org.openapis.openapi.models.operations.ListEngagementsResponse;
import org.openapis.openapi.models.operations.ListEngagementsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEngagementsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEngagementsRequest req = new ListEngagementsRequest(                new ListEngagementsRequest() {{
                                incidentId = "totam";
                                maxResults = 628982L;
                                nextToken = "alias";
                                timeRangeValue = new TimeRange() {{
                                    endTime = OffsetDateTime.parse("2022-01-24T12:18:47.570Z");
                                    startTime = OffsetDateTime.parse("2022-07-29T17:02:39.743Z");
                                }};;
                            }};, ListEngagementsXAmzTargetEnum.SSM_CONTACTS_LIST_ENGAGEMENTS) {{
                maxResults = "quod";
                nextToken = "officiis";
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "a";
                xAmzDate = "esse";
                xAmzSecurityToken = "harum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "ipsum";
            }};            

            ListEngagementsResponse res = sdk.sdk.listEngagements(req);

            if (res.listEngagementsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPageReceipts

Lists all of the engagements to contact channels that have been acknowledged.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPageReceiptsRequest;
import org.openapis.openapi.models.operations.ListPageReceiptsResponse;
import org.openapis.openapi.models.operations.ListPageReceiptsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPageReceiptsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPageReceiptsRequest req = new ListPageReceiptsRequest(                new ListPageReceiptsRequest("tenetur") {{
                                maxResults = 229442L;
                                nextToken = "tempore";
                            }};, ListPageReceiptsXAmzTargetEnum.SSM_CONTACTS_LIST_PAGE_RECEIPTS) {{
                maxResults = "accusamus";
                nextToken = "numquam";
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "sapiente";
                xAmzDate = "totam";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "expedita";
            }};            

            ListPageReceiptsResponse res = sdk.sdk.listPageReceipts(req);

            if (res.listPageReceiptsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPageResolutions

Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of <i>escalation plan &gt; on-call schedule &gt; contact</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPageResolutionsRequest;
import org.openapis.openapi.models.operations.ListPageResolutionsResponse;
import org.openapis.openapi.models.operations.ListPageResolutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPageResolutionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPageResolutionsRequest req = new ListPageResolutionsRequest(                new ListPageResolutionsRequest("sed") {{
                                nextToken = "vel";
                            }};, ListPageResolutionsXAmzTargetEnum.SSM_CONTACTS_LIST_PAGE_RESOLUTIONS) {{
                nextToken = "libero";
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "quam";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "cupiditate";
            }};            

            ListPageResolutionsResponse res = sdk.sdk.listPageResolutions(req);

            if (res.listPageResolutionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPagesByContact

Lists the engagements to a contact's contact channels.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPagesByContactRequest;
import org.openapis.openapi.models.operations.ListPagesByContactResponse;
import org.openapis.openapi.models.operations.ListPagesByContactXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPagesByContactRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPagesByContactRequest req = new ListPagesByContactRequest(                new ListPagesByContactRequest("pariatur") {{
                                maxResults = 747080L;
                                nextToken = "dicta";
                            }};, ListPagesByContactXAmzTargetEnum.SSM_CONTACTS_LIST_PAGES_BY_CONTACT) {{
                maxResults = "laborum";
                nextToken = "totam";
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "dolores";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "quam";
            }};            

            ListPagesByContactResponse res = sdk.sdk.listPagesByContact(req);

            if (res.listPagesByContactResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPagesByEngagement

Lists the engagements to contact channels that occurred by engaging a contact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPagesByEngagementRequest;
import org.openapis.openapi.models.operations.ListPagesByEngagementResponse;
import org.openapis.openapi.models.operations.ListPagesByEngagementXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPagesByEngagementRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPagesByEngagementRequest req = new ListPagesByEngagementRequest(                new ListPagesByEngagementRequest("temporibus") {{
                                maxResults = 183280L;
                                nextToken = "neque";
                            }};, ListPagesByEngagementXAmzTargetEnum.SSM_CONTACTS_LIST_PAGES_BY_ENGAGEMENT) {{
                maxResults = "fugit";
                nextToken = "magni";
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "ullam";
                xAmzDate = "nam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "cumque";
            }};            

            ListPagesByEngagementResponse res = sdk.sdk.listPagesByEngagement(req);

            if (res.listPagesByEngagementResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPreviewRotationShifts

<p>Returns a list of shifts based on rotation configuration parameters.</p> <note> <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPreviewRotationShiftsRequest;
import org.openapis.openapi.models.operations.ListPreviewRotationShiftsResponse;
import org.openapis.openapi.models.operations.ListPreviewRotationShiftsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CoverageTime;
import org.openapis.openapi.models.shared.DayOfWeekEnum;
import org.openapis.openapi.models.shared.HandOffTime;
import org.openapis.openapi.models.shared.ListPreviewRotationShiftsRequest;
import org.openapis.openapi.models.shared.MonthlySetting;
import org.openapis.openapi.models.shared.PreviewOverride;
import org.openapis.openapi.models.shared.RecurrenceSettings;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeeklySetting;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPreviewRotationShiftsRequest req = new ListPreviewRotationShiftsRequest(                new ListPreviewRotationShiftsRequest(OffsetDateTime.parse("2022-10-25T09:42:54.177Z"),                 new String[]{{
                                                add("ipsum"),
                                                add("veritatis"),
                                                add("nobis"),
                                                add("quos"),
                                            }},                 new RecurrenceSettings(731694L, 584476L) {{
                                                dailySettings = new org.openapis.openapi.models.shared.HandOffTime[]{{
                                                    add(new HandOffTime(292147L, 286915L) {{
                                                        hourOfDay = 961937L;
                                                        minuteOfHour = 209157L;
                                                    }}),
                                                }};
                                                monthlySettings = new org.openapis.openapi.models.shared.MonthlySetting[]{{
                                                    add(new MonthlySetting(929530L,                 new HandOffTime(9240L, 669917L);) {{
                                                        dayOfMonth = 677263L;
                                                        handOffTime = new HandOffTime(16429L, 555649L) {{
                                                            hourOfDay = 100294L;
                                                            minuteOfHour = 63038L;
                                                        }};
                                                    }}),
                                                }};
                                                shiftCoverages = new java.util.HashMap<String, org.openapis.openapi.models.shared.CoverageTime[]>() {{
                                                    put("porro", new org.openapis.openapi.models.shared.CoverageTime[]{{
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(586410L, 181631L) {{
                                                                hourOfDay = 281730L;
                                                                minuteOfHour = 703495L;
                                                            }};
                                                            start = new HandOffTime(485628L, 580447L) {{
                                                                hourOfDay = 63955L;
                                                                minuteOfHour = 512393L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(876506L, 606476L) {{
                                                                hourOfDay = 977496L;
                                                                minuteOfHour = 787542L;
                                                            }};
                                                            start = new HandOffTime(961571L, 455169L) {{
                                                                hourOfDay = 338159L;
                                                                minuteOfHour = 218403L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(949319L, 492268L) {{
                                                                hourOfDay = 231701L;
                                                                minuteOfHour = 878870L;
                                                            }};
                                                            start = new HandOffTime(799203L, 486160L) {{
                                                                hourOfDay = 941378L;
                                                                minuteOfHour = 715561L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(874288L, 498140L) {{
                                                                hourOfDay = 630448L;
                                                                minuteOfHour = 708548L;
                                                            }};
                                                            start = new HandOffTime(848944L, 194342L) {{
                                                                hourOfDay = 293020L;
                                                                minuteOfHour = 844550L;
                                                            }};
                                                        }}),
                                                    }});
                                                    put("natus", new org.openapis.openapi.models.shared.CoverageTime[]{{
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(347233L, 862310L) {{
                                                                hourOfDay = 13236L;
                                                                minuteOfHour = 974259L;
                                                            }};
                                                            start = new HandOffTime(981830L, 985033L) {{
                                                                hourOfDay = 148141L;
                                                                minuteOfHour = 780427L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(497391L, 4048L) {{
                                                                hourOfDay = 478370L;
                                                                minuteOfHour = 753570L;
                                                            }};
                                                            start = new HandOffTime(368584L, 410492L) {{
                                                                hourOfDay = 639473L;
                                                                minuteOfHour = 269479L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(822118L, 297842L) {{
                                                                hourOfDay = 136900L;
                                                                minuteOfHour = 428224L;
                                                            }};
                                                            start = new HandOffTime(511319L, 120657L) {{
                                                                hourOfDay = 189848L;
                                                                minuteOfHour = 401132L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(97844L, 406120L) {{
                                                                hourOfDay = 224317L;
                                                                minuteOfHour = 980700L;
                                                            }};
                                                            start = new HandOffTime(972920L, 343605L) {{
                                                                hourOfDay = 862192L;
                                                                minuteOfHour = 569211L;
                                                            }};
                                                        }}),
                                                    }});
                                                    put("sapiente", new org.openapis.openapi.models.shared.CoverageTime[]{{
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(774048L, 359271L) {{
                                                                hourOfDay = 906556L;
                                                                minuteOfHour = 411372L;
                                                            }};
                                                            start = new HandOffTime(81101L, 301831L) {{
                                                                hourOfDay = 333145L;
                                                                minuteOfHour = 399499L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(232234L, 926213L) {{
                                                                hourOfDay = 407241L;
                                                                minuteOfHour = 775220L;
                                                            }};
                                                            start = new HandOffTime(53427L, 952871L) {{
                                                                hourOfDay = 132487L;
                                                                minuteOfHour = 325310L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(11427L, 533466L) {{
                                                                hourOfDay = 725595L;
                                                                minuteOfHour = 13948L;
                                                            }};
                                                            start = new HandOffTime(146946L, 882860L) {{
                                                                hourOfDay = 770581L;
                                                                minuteOfHour = 304582L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(89603L, 677412L) {{
                                                                hourOfDay = 79522L;
                                                                minuteOfHour = 250622L;
                                                            }};
                                                            start = new HandOffTime(245367L, 432148L) {{
                                                                hourOfDay = 672048L;
                                                                minuteOfHour = 810424L;
                                                            }};
                                                        }}),
                                                    }});
                                                    put("autem", new org.openapis.openapi.models.shared.CoverageTime[]{{
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(860552L, 379034L) {{
                                                                hourOfDay = 557369L;
                                                                minuteOfHour = 829603L;
                                                            }};
                                                            start = new HandOffTime(270328L, 256139L) {{
                                                                hourOfDay = 727044L;
                                                                minuteOfHour = 96549L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(55374L, 476477L) {{
                                                                hourOfDay = 131482L;
                                                                minuteOfHour = 591935L;
                                                            }};
                                                            start = new HandOffTime(262118L, 458515L) {{
                                                                hourOfDay = 301598L;
                                                                minuteOfHour = 487935L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(683282L, 442015L) {{
                                                                hourOfDay = 456141L;
                                                                minuteOfHour = 524593L;
                                                            }};
                                                            start = new HandOffTime(283519L, 433439L) {{
                                                                hourOfDay = 695626L;
                                                                minuteOfHour = 852635L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(181151L, 509342L) {{
                                                                hourOfDay = 379927L;
                                                                minuteOfHour = 826871L;
                                                            }};
                                                            start = new HandOffTime(56848L, 660040L) {{
                                                                hourOfDay = 788546L;
                                                                minuteOfHour = 86377L;
                                                            }};
                                                        }}),
                                                    }});
                                                }};
                                                weeklySettings = new org.openapis.openapi.models.shared.WeeklySetting[]{{
                                                    add(new WeeklySetting(DayOfWeekEnum.TUE,                 new HandOffTime(178367L, 373813L);) {{
                                                        dayOfWeek = DayOfWeekEnum.TUE;
                                                        handOffTime = new HandOffTime(777408L, 681359L) {{
                                                            hourOfDay = 778696L;
                                                            minuteOfHour = 847276L;
                                                        }};
                                                    }}),
                                                    add(new WeeklySetting(DayOfWeekEnum.WED,                 new HandOffTime(133465L, 197054L);) {{
                                                        dayOfWeek = DayOfWeekEnum.MON;
                                                        handOffTime = new HandOffTime(272822L, 892050L) {{
                                                            hourOfDay = 587600L;
                                                            minuteOfHour = 9688L;
                                                        }};
                                                    }}),
                                                    add(new WeeklySetting(DayOfWeekEnum.SAT,                 new HandOffTime(490819L, 76956L);) {{
                                                        dayOfWeek = DayOfWeekEnum.SAT;
                                                        handOffTime = new HandOffTime(44612L, 715179L) {{
                                                            hourOfDay = 459856L;
                                                            minuteOfHour = 925164L;
                                                        }};
                                                    }}),
                                                }};
                                            }};, "nihil") {{
                                maxResults = 518835L;
                                nextToken = "accusamus";
                                overrides = new org.openapis.openapi.models.shared.PreviewOverride[]{{
                                    add(new PreviewOverride() {{
                                        endTime = OffsetDateTime.parse("2022-06-04T04:43:25.138Z");
                                        newMembers = new String[]{{
                                            add("sapiente"),
                                            add("dolores"),
                                        }};
                                        startTime = OffsetDateTime.parse("2022-01-19T00:55:43.636Z");
                                    }}),
                                    add(new PreviewOverride() {{
                                        endTime = OffsetDateTime.parse("2022-03-20T23:14:37.473Z");
                                        newMembers = new String[]{{
                                            add("quas"),
                                            add("praesentium"),
                                        }};
                                        startTime = OffsetDateTime.parse("2022-06-19T07:05:05.913Z");
                                    }}),
                                }};
                                rotationStartTime = OffsetDateTime.parse("2022-04-27T07:00:05.421Z");
                                startTime = OffsetDateTime.parse("2022-06-12T08:30:58.411Z");
                            }};, ListPreviewRotationShiftsXAmzTargetEnum.SSM_CONTACTS_LIST_PREVIEW_ROTATION_SHIFTS) {{
                maxResults = "atque";
                nextToken = "explicabo";
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "fugit";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "ratione";
                xAmzSignedHeaders = "explicabo";
            }};            

            ListPreviewRotationShiftsResponse res = sdk.sdk.listPreviewRotationShifts(req);

            if (res.listPreviewRotationShiftsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRotationOverrides

Retrieves a list of overrides currently specified for an on-call rotation.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRotationOverridesRequest;
import org.openapis.openapi.models.operations.ListRotationOverridesResponse;
import org.openapis.openapi.models.operations.ListRotationOverridesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRotationOverridesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRotationOverridesRequest req = new ListRotationOverridesRequest(                new ListRotationOverridesRequest(OffsetDateTime.parse("2021-11-30T00:31:10.440Z"), "et", OffsetDateTime.parse("2022-02-02T15:37:41.657Z")) {{
                                maxResults = 882042L;
                                nextToken = "veritatis";
                            }};, ListRotationOverridesXAmzTargetEnum.SSM_CONTACTS_LIST_ROTATION_OVERRIDES) {{
                maxResults = "esse";
                nextToken = "quod";
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "vero";
                xAmzCredential = "aliquid";
                xAmzDate = "quasi";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "harum";
            }};            

            ListRotationOverridesResponse res = sdk.sdk.listRotationOverrides(req);

            if (res.listRotationOverridesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRotationShifts

Returns a list of shifts generated by an existing rotation in the system.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRotationShiftsRequest;
import org.openapis.openapi.models.operations.ListRotationShiftsResponse;
import org.openapis.openapi.models.operations.ListRotationShiftsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRotationShiftsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRotationShiftsRequest req = new ListRotationShiftsRequest(                new ListRotationShiftsRequest(OffsetDateTime.parse("2021-11-03T10:56:47.600Z"), "minima") {{
                                maxResults = 716244L;
                                nextToken = "eligendi";
                                startTime = OffsetDateTime.parse("2022-05-13T20:06:18.158Z");
                            }};, ListRotationShiftsXAmzTargetEnum.SSM_CONTACTS_LIST_ROTATION_SHIFTS) {{
                maxResults = "tempore";
                nextToken = "adipisci";
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "consequatur";
                xAmzDate = "minus";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consectetur";
            }};            

            ListRotationShiftsResponse res = sdk.sdk.listRotationShifts(req);

            if (res.listRotationShiftsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRotations

Retrieves a list of on-call rotations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRotationsRequest;
import org.openapis.openapi.models.operations.ListRotationsResponse;
import org.openapis.openapi.models.operations.ListRotationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRotationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRotationsRequest req = new ListRotationsRequest(                new ListRotationsRequest() {{
                                maxResults = 503427L;
                                nextToken = "provident";
                                rotationNamePrefix = "a";
                            }};, ListRotationsXAmzTargetEnum.SSM_CONTACTS_LIST_ROTATIONS) {{
                maxResults = "nulla";
                nextToken = "quas";
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "a";
                xAmzDate = "error";
                xAmzSecurityToken = "sint";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "possimus";
            }};            

            ListRotationsResponse res = sdk.sdk.listRotations(req);

            if (res.listRotationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags of an escalation plan or contact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("eveniet");, ListTagsForResourceXAmzTargetEnum.SSM_CONTACTS_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "facere";
                xAmzCredential = "veritatis";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "culpa";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putContactPolicy

Adds a resource policy to the specified contact or escalation plan. The resource policy is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up cross-account functionality</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutContactPolicyRequest;
import org.openapis.openapi.models.operations.PutContactPolicyResponse;
import org.openapis.openapi.models.operations.PutContactPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutContactPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutContactPolicyRequest req = new PutContactPolicyRequest(                new PutContactPolicyRequest("tenetur", "quae");, PutContactPolicyXAmzTargetEnum.SSM_CONTACTS_PUT_CONTACT_POLICY) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "in";
                xAmzDate = "eius";
                xAmzSecurityToken = "libero";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "soluta";
            }};            

            PutContactPolicyResponse res = sdk.sdk.putContactPolicy(req);

            if (res.putContactPolicyResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendActivationCode

Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendActivationCodeRequest;
import org.openapis.openapi.models.operations.SendActivationCodeResponse;
import org.openapis.openapi.models.operations.SendActivationCodeXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendActivationCodeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendActivationCodeRequest req = new SendActivationCodeRequest(                new SendActivationCodeRequest("aliquam");, SendActivationCodeXAmzTargetEnum.SSM_CONTACTS_SEND_ACTIVATION_CODE) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "ullam";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "aut";
            }};            

            SendActivationCodeResponse res = sdk.sdk.sendActivationCode(req);

            if (res.sendActivationCodeResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startEngagement

Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartEngagementRequest;
import org.openapis.openapi.models.operations.StartEngagementResponse;
import org.openapis.openapi.models.operations.StartEngagementXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartEngagementRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartEngagementRequest req = new StartEngagementRequest(                new StartEngagementRequest("qui", "quibusdam", "ex", "deleniti") {{
                                idempotencyToken = "itaque";
                                incidentId = "dolorum";
                                publicContent = "architecto";
                                publicSubject = "omnis";
                            }};, StartEngagementXAmzTargetEnum.SSM_CONTACTS_START_ENGAGEMENT) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "at";
                xAmzDate = "et";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "minima";
            }};            

            StartEngagementResponse res = sdk.sdk.startEngagement(req);

            if (res.startEngagementResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopEngagement

Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopEngagementRequest;
import org.openapis.openapi.models.operations.StopEngagementResponse;
import org.openapis.openapi.models.operations.StopEngagementXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopEngagementRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopEngagementRequest req = new StopEngagementRequest(                new StopEngagementRequest("consectetur") {{
                                reason = "adipisci";
                            }};, StopEngagementXAmzTargetEnum.SSM_CONTACTS_STOP_ENGAGEMENT) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "accusantium";
                xAmzDate = "rem";
                xAmzSecurityToken = "aut";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "eum";
            }};            

            StopEngagementResponse res = sdk.sdk.stopEngagement(req);

            if (res.stopEngagementResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("ab",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "non";
                                                    value = "voluptatem";
                                                }}),
                                                add(new Tag() {{
                                                    key = "dolor";
                                                    value = "occaecati";
                                                }}),
                                                add(new Tag() {{
                                                    key = "numquam";
                                                    value = "impedit";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.SSM_CONTACTS_TAG_RESOURCE) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "aut";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "natus";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes tags from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("voluptatibus",                 new String[]{{
                                                add("asperiores"),
                                                add("aperiam"),
                                            }});, UntagResourceXAmzTargetEnum.SSM_CONTACTS_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "consequuntur";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "officia";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "dignissimos";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContact

Updates the contact or escalation plan specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContactRequest;
import org.openapis.openapi.models.operations.UpdateContactResponse;
import org.openapis.openapi.models.operations.UpdateContactXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChannelTargetInfo;
import org.openapis.openapi.models.shared.ContactTargetInfo;
import org.openapis.openapi.models.shared.Plan;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Stage;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.UpdateContactRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateContactRequest req = new UpdateContactRequest(                new UpdateContactRequest("asperiores") {{
                                displayName = "nemo";
                                plan = new Plan() {{
                                    rotationIds = new String[]{{
                                        add("quaerat"),
                                    }};
                                    stages = new org.openapis.openapi.models.shared.Stage[]{{
                                        add(new Stage(926880L,                 new org.openapis.openapi.models.shared.Target[]{{
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("ducimus") {{
                                                                    contactChannelId = "fugiat";
                                                                    retryIntervalInMinutes = 424089L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "quos";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("possimus") {{
                                                                    contactChannelId = "vel";
                                                                    retryIntervalInMinutes = 287051L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "facilis";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("in") {{
                                                                    contactChannelId = "cum";
                                                                    retryIntervalInMinutes = 414857L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "corporis";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                        }}) {{
                                            durationInMinutes = 801836L;
                                            targets = new org.openapis.openapi.models.shared.Target[]{{
                                                add(new Target() {{
                                                    channelTargetInfo = new ChannelTargetInfo("fuga") {{
                                                        contactChannelId = "ab";
                                                        retryIntervalInMinutes = 241418L;
                                                    }};
                                                    contactTargetInfo = new ContactTargetInfo(false) {{
                                                        contactId = "id";
                                                        isEssential = false;
                                                    }};
                                                }}),
                                                add(new Target() {{
                                                    channelTargetInfo = new ChannelTargetInfo("culpa") {{
                                                        contactChannelId = "suscipit";
                                                        retryIntervalInMinutes = 246063L;
                                                    }};
                                                    contactTargetInfo = new ContactTargetInfo(false) {{
                                                        contactId = "est";
                                                        isEssential = false;
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new Stage(897071L,                 new org.openapis.openapi.models.shared.Target[]{{
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("adipisci") {{
                                                                    contactChannelId = "sunt";
                                                                    retryIntervalInMinutes = 992012L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "non";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("dignissimos") {{
                                                                    contactChannelId = "amet";
                                                                    retryIntervalInMinutes = 105906L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "a";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                        }}) {{
                                            durationInMinutes = 968904L;
                                            targets = new org.openapis.openapi.models.shared.Target[]{{
                                                add(new Target() {{
                                                    channelTargetInfo = new ChannelTargetInfo("aliquid") {{
                                                        contactChannelId = "nemo";
                                                        retryIntervalInMinutes = 924967L;
                                                    }};
                                                    contactTargetInfo = new ContactTargetInfo(false) {{
                                                        contactId = "aperiam";
                                                        isEssential = false;
                                                    }};
                                                }}),
                                                add(new Target() {{
                                                    channelTargetInfo = new ChannelTargetInfo("in") {{
                                                        contactChannelId = "cum";
                                                        retryIntervalInMinutes = 232627L;
                                                    }};
                                                    contactTargetInfo = new ContactTargetInfo(false) {{
                                                        contactId = "exercitationem";
                                                        isEssential = false;
                                                    }};
                                                }}),
                                                add(new Target() {{
                                                    channelTargetInfo = new ChannelTargetInfo("numquam") {{
                                                        contactChannelId = "earum";
                                                        retryIntervalInMinutes = 814967L;
                                                    }};
                                                    contactTargetInfo = new ContactTargetInfo(false) {{
                                                        contactId = "doloribus";
                                                        isEssential = false;
                                                    }};
                                                }}),
                                                add(new Target() {{
                                                    channelTargetInfo = new ChannelTargetInfo("quidem") {{
                                                        contactChannelId = "suscipit";
                                                        retryIntervalInMinutes = 968972L;
                                                    }};
                                                    contactTargetInfo = new ContactTargetInfo(false) {{
                                                        contactId = "saepe";
                                                        isEssential = false;
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new Stage(916727L,                 new org.openapis.openapi.models.shared.Target[]{{
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("similique") {{
                                                                    contactChannelId = "vitae";
                                                                    retryIntervalInMinutes = 881721L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "tempora";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("voluptas") {{
                                                                    contactChannelId = "aspernatur";
                                                                    retryIntervalInMinutes = 379057L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "voluptas";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("dolorum") {{
                                                                    contactChannelId = "minima";
                                                                    retryIntervalInMinutes = 748789L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "adipisci";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                        }}) {{
                                            durationInMinutes = 891523L;
                                            targets = new org.openapis.openapi.models.shared.Target[]{{
                                                add(new Target() {{
                                                    channelTargetInfo = new ChannelTargetInfo("laboriosam") {{
                                                        contactChannelId = "corporis";
                                                        retryIntervalInMinutes = 689768L;
                                                    }};
                                                    contactTargetInfo = new ContactTargetInfo(false) {{
                                                        contactId = "ipsa";
                                                        isEssential = false;
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new Stage(885963L,                 new org.openapis.openapi.models.shared.Target[]{{
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("cum") {{
                                                                    contactChannelId = "ullam";
                                                                    retryIntervalInMinutes = 237742L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "blanditiis";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("nesciunt") {{
                                                                    contactChannelId = "quas";
                                                                    retryIntervalInMinutes = 942584L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "culpa";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("totam") {{
                                                                    contactChannelId = "corrupti";
                                                                    retryIntervalInMinutes = 867290L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "hic";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                            add(new Target() {{
                                                                channelTargetInfo = new ChannelTargetInfo("sit") {{
                                                                    contactChannelId = "exercitationem";
                                                                    retryIntervalInMinutes = 750765L;
                                                                }};
                                                                contactTargetInfo = new ContactTargetInfo(false) {{
                                                                    contactId = "rerum";
                                                                    isEssential = false;
                                                                }};
                                                            }}),
                                                        }}) {{
                                            durationInMinutes = 795535L;
                                            targets = new org.openapis.openapi.models.shared.Target[]{{
                                                add(new Target() {{
                                                    channelTargetInfo = new ChannelTargetInfo("dolore") {{
                                                        contactChannelId = "blanditiis";
                                                        retryIntervalInMinutes = 449292L;
                                                    }};
                                                    contactTargetInfo = new ContactTargetInfo(false) {{
                                                        contactId = "aliquam";
                                                        isEssential = false;
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                }};;
                            }};, UpdateContactXAmzTargetEnum.SSM_CONTACTS_UPDATE_CONTACT) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "explicabo";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "expedita";
            }};            

            UpdateContactResponse res = sdk.sdk.updateContact(req);

            if (res.updateContactResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContactChannel

Updates a contact's contact channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContactChannelRequest;
import org.openapis.openapi.models.operations.UpdateContactChannelResponse;
import org.openapis.openapi.models.operations.UpdateContactChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContactChannelAddress;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateContactChannelRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateContactChannelRequest req = new UpdateContactChannelRequest(                new UpdateContactChannelRequest("iste") {{
                                deliveryAddress = new ContactChannelAddress() {{
                                    simpleAddress = "dolore";
                                }};;
                                name = "Aaron King";
                            }};, UpdateContactChannelXAmzTargetEnum.SSM_CONTACTS_UPDATE_CONTACT_CHANNEL) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "unde";
                xAmzDate = "architecto";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "debitis";
            }};            

            UpdateContactChannelResponse res = sdk.sdk.updateContactChannel(req);

            if (res.updateContactChannelResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRotation

Updates the information specified for an on-call rotation.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRotationRequest;
import org.openapis.openapi.models.operations.UpdateRotationResponse;
import org.openapis.openapi.models.operations.UpdateRotationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CoverageTime;
import org.openapis.openapi.models.shared.DayOfWeekEnum;
import org.openapis.openapi.models.shared.HandOffTime;
import org.openapis.openapi.models.shared.MonthlySetting;
import org.openapis.openapi.models.shared.RecurrenceSettings;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRotationRequest;
import org.openapis.openapi.models.shared.WeeklySetting;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRotationRequest req = new UpdateRotationRequest(                new UpdateRotationRequest(                new RecurrenceSettings(967795L, 19300L) {{
                                                dailySettings = new org.openapis.openapi.models.shared.HandOffTime[]{{
                                                    add(new HandOffTime(148478L, 592231L) {{
                                                        hourOfDay = 979574L;
                                                        minuteOfHour = 274823L;
                                                    }}),
                                                    add(new HandOffTime(215529L, 406733L) {{
                                                        hourOfDay = 258702L;
                                                        minuteOfHour = 896762L;
                                                    }}),
                                                    add(new HandOffTime(975752L, 271653L) {{
                                                        hourOfDay = 579912L;
                                                        minuteOfHour = 552078L;
                                                    }}),
                                                }};
                                                monthlySettings = new org.openapis.openapi.models.shared.MonthlySetting[]{{
                                                    add(new MonthlySetting(888044L,                 new HandOffTime(505866L, 708609L);) {{
                                                        dayOfMonth = 455444L;
                                                        handOffTime = new HandOffTime(25497L, 248413L) {{
                                                            hourOfDay = 970076L;
                                                            minuteOfHour = 401713L;
                                                        }};
                                                    }}),
                                                    add(new MonthlySetting(26522L,                 new HandOffTime(750595L, 625637L);) {{
                                                        dayOfMonth = 310381L;
                                                        handOffTime = new HandOffTime(894864L, 524970L) {{
                                                            hourOfDay = 277773L;
                                                            minuteOfHour = 373035L;
                                                        }};
                                                    }}),
                                                }};
                                                shiftCoverages = new java.util.HashMap<String, org.openapis.openapi.models.shared.CoverageTime[]>() {{
                                                    put("minima", new org.openapis.openapi.models.shared.CoverageTime[]{{
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(168576L, 48690L) {{
                                                                hourOfDay = 967122L;
                                                                minuteOfHour = 862319L;
                                                            }};
                                                            start = new HandOffTime(329935L, 446135L) {{
                                                                hourOfDay = 901483L;
                                                                minuteOfHour = 253642L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(512452L, 348476L) {{
                                                                hourOfDay = 889234L;
                                                                minuteOfHour = 104627L;
                                                            }};
                                                            start = new HandOffTime(386827L, 680515L) {{
                                                                hourOfDay = 510629L;
                                                                minuteOfHour = 740098L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(944708L, 710529L) {{
                                                                hourOfDay = 530089L;
                                                                minuteOfHour = 622385L;
                                                            }};
                                                            start = new HandOffTime(677115L, 341698L) {{
                                                                hourOfDay = 892863L;
                                                                minuteOfHour = 204923L;
                                                            }};
                                                        }}),
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(548361L, 879235L) {{
                                                                hourOfDay = 639028L;
                                                                minuteOfHour = 676243L;
                                                            }};
                                                            start = new HandOffTime(148268L, 282699L) {{
                                                                hourOfDay = 272683L;
                                                                minuteOfHour = 543678L;
                                                            }};
                                                        }}),
                                                    }});
                                                    put("fugiat", new org.openapis.openapi.models.shared.CoverageTime[]{{
                                                        add(new CoverageTime() {{
                                                            end = new HandOffTime(299643L, 7884L) {{
                                                                hourOfDay = 635057L;
                                                                minuteOfHour = 710337L;
                                                            }};
                                                            start = new HandOffTime(24527L, 530537L) {{
                                                                hourOfDay = 460220L;
                                                                minuteOfHour = 372679L;
                                                            }};
                                                        }}),
                                                    }});
                                                }};
                                                weeklySettings = new org.openapis.openapi.models.shared.WeeklySetting[]{{
                                                    add(new WeeklySetting(DayOfWeekEnum.TUE,                 new HandOffTime(24313L, 425508L);) {{
                                                        dayOfWeek = DayOfWeekEnum.SUN;
                                                        handOffTime = new HandOffTime(502710L, 405942L) {{
                                                            hourOfDay = 361151L;
                                                            minuteOfHour = 89494L;
                                                        }};
                                                    }}),
                                                    add(new WeeklySetting(DayOfWeekEnum.SUN,                 new HandOffTime(209750L, 690894L);) {{
                                                        dayOfWeek = DayOfWeekEnum.WED;
                                                        handOffTime = new HandOffTime(8511L, 279068L) {{
                                                            hourOfDay = 906172L;
                                                            minuteOfHour = 622231L;
                                                        }};
                                                    }}),
                                                    add(new WeeklySetting(DayOfWeekEnum.THU,                 new HandOffTime(671957L, 724148L);) {{
                                                        dayOfWeek = DayOfWeekEnum.MON;
                                                        handOffTime = new HandOffTime(289776L, 695270L) {{
                                                            hourOfDay = 99416L;
                                                            minuteOfHour = 577140L;
                                                        }};
                                                    }}),
                                                }};
                                            }};, "tenetur") {{
                                contactIds = new String[]{{
                                    add("alias"),
                                    add("amet"),
                                }};
                                startTime = OffsetDateTime.parse("2022-02-02T22:51:17.351Z");
                                timeZoneId = "unde";
                            }};, UpdateRotationXAmzTargetEnum.SSM_CONTACTS_UPDATE_ROTATION) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "provident";
                xAmzCredential = "repellendus";
                xAmzDate = "delectus";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "est";
            }};            

            UpdateRotationResponse res = sdk.sdk.updateRotation(req);

            if (res.updateRotationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
