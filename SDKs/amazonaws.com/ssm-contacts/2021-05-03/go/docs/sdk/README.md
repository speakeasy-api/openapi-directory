# SDK

## Overview

<p>Systems Manager Incident Manager is an incident management console designed to help users mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An incident is any unplanned interruption or reduction in quality of services.</p> <p>Incident Manager increases incident resolution by notifying responders of impact, highlighting relevant troubleshooting data, and providing collaboration tools to get services back up and running. To achieve the primary goal of reducing the time-to-resolution of critical incidents, Incident Manager automates response plans and enables responder team escalation.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ssm-contacts/>
### Available Operations

* [AcceptPage](#acceptpage) - Used to acknowledge an engagement to a contact channel during an incident.
* [ActivateContactChannel](#activatecontactchannel) - Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.
* [CreateContact](#createcontact) - Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.
* [CreateContactChannel](#createcontactchannel) - A contact channel is the method that Incident Manager uses to engage your contact.
* [CreateRotation](#createrotation) - Creates a rotation in an on-call schedule.
* [CreateRotationOverride](#createrotationoverride) - Creates an override for a rotation in an on-call schedule.
* [DeactivateContactChannel](#deactivatecontactchannel) - To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.
* [DeleteContact](#deletecontact) - To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.
* [DeleteContactChannel](#deletecontactchannel) - To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.
* [DeleteRotation](#deleterotation) - Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.
* [DeleteRotationOverride](#deleterotationoverride) - Deletes an existing override for an on-call rotation.
* [DescribeEngagement](#describeengagement) - Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.
* [DescribePage](#describepage) - Lists details of the engagement to a contact channel.
* [GetContact](#getcontact) - Retrieves information about the specified contact or escalation plan.
* [GetContactChannel](#getcontactchannel) - List details about a specific contact channel.
* [GetContactPolicy](#getcontactpolicy) - Retrieves the resource policies attached to the specified contact or escalation plan.
* [GetRotation](#getrotation) - Retrieves information about an on-call rotation.
* [GetRotationOverride](#getrotationoverride) - Retrieves information about an override to an on-call rotation.
* [ListContactChannels](#listcontactchannels) - Lists all contact channels for the specified contact.
* [ListContacts](#listcontacts) - Lists all contacts and escalation plans in Incident Manager.
* [ListEngagements](#listengagements) - Lists all engagements that have happened in an incident.
* [ListPageReceipts](#listpagereceipts) - Lists all of the engagements to contact channels that have been acknowledged.
* [ListPageResolutions](#listpageresolutions) - Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of <i>escalation plan &gt; on-call schedule &gt; contact</i>.
* [ListPagesByContact](#listpagesbycontact) - Lists the engagements to a contact's contact channels.
* [ListPagesByEngagement](#listpagesbyengagement) - Lists the engagements to contact channels that occurred by engaging a contact.
* [ListPreviewRotationShifts](#listpreviewrotationshifts) - <p>Returns a list of shifts based on rotation configuration parameters.</p> <note> <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p> </note>
* [ListRotationOverrides](#listrotationoverrides) - Retrieves a list of overrides currently specified for an on-call rotation.
* [ListRotationShifts](#listrotationshifts) - Returns a list of shifts generated by an existing rotation in the system.
* [ListRotations](#listrotations) - Retrieves a list of on-call rotations.
* [ListTagsForResource](#listtagsforresource) - Lists the tags of an escalation plan or contact.
* [PutContactPolicy](#putcontactpolicy) - Adds a resource policy to the specified contact or escalation plan. The resource policy is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up cross-account functionality</a>.
* [SendActivationCode](#sendactivationcode) - Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.
* [StartEngagement](#startengagement) - Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.
* [StopEngagement](#stopengagement) - Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.
* [TagResource](#tagresource) - Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.
* [UntagResource](#untagresource) - Removes tags from the specified resource.
* [UpdateContact](#updatecontact) - Updates the contact or escalation plan specified.
* [UpdateContactChannel](#updatecontactchannel) - Updates a contact's contact channel.
* [UpdateRotation](#updaterotation) - Updates the information specified for an on-call rotation.

## AcceptPage

Used to acknowledge an engagement to a contact channel during an incident.

### Example Usage

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
    res, err := s.SDK.AcceptPage(ctx, operations.AcceptPageRequest{
        AcceptPageRequest: shared.AcceptPageRequest{
            AcceptCode: "magnam",
            AcceptCodeValidation: shared.AcceptCodeValidationEnumEnforce.ToPointer(),
            AcceptType: shared.AcceptTypeEnumDelivered,
            ContactChannelID: sdk.String("delectus"),
            Note: sdk.String("tempora"),
            PageID: "suscipit",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("nisi"),
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

## ActivateContactChannel

Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.

### Example Usage

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
    res, err := s.SDK.ActivateContactChannel(ctx, operations.ActivateContactChannelRequest{
        ActivateContactChannelRequest: shared.ActivateContactChannelRequest{
            ActivationCode: "recusandae",
            ContactChannelID: "temporibus",
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.ActivateContactChannelXAmzTargetEnumSsmContactsActivateContactChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivateContactChannelResult != nil {
        // handle response
    }
}
```

## CreateContact

Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.

### Example Usage

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
    res, err := s.SDK.CreateContact(ctx, operations.CreateContactRequest{
        CreateContactRequest: shared.CreateContactRequest{
            Alias: "sapiente",
            DisplayName: sdk.String("quo"),
            IdempotencyToken: sdk.String("odit"),
            Plan: shared.Plan{
                RotationIds: []string{
                    "at",
                    "maiores",
                    "molestiae",
                    "quod",
                },
                Stages: []shared.Stage{
                    shared.Stage{
                        DurationInMinutes: 461479,
                        Targets: []shared.Target{
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "porro",
                                    RetryIntervalInMinutes: sdk.Int64(678880),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("dicta"),
                                    IsEssential: false,
                                },
                            },
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "nam",
                                    RetryIntervalInMinutes: sdk.Int64(639921),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("occaecati"),
                                    IsEssential: false,
                                },
                            },
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "fugit",
                                    RetryIntervalInMinutes: sdk.Int64(537373),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("hic"),
                                    IsEssential: false,
                                },
                            },
                        },
                    },
                    shared.Stage{
                        DurationInMinutes: 758616,
                        Targets: []shared.Target{
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "beatae",
                                    RetryIntervalInMinutes: sdk.Int64(414662),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("molestiae"),
                                    IsEssential: false,
                                },
                            },
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "modi",
                                    RetryIntervalInMinutes: sdk.Int64(186332),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("impedit"),
                                    IsEssential: false,
                                },
                            },
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "cum",
                                    RetryIntervalInMinutes: sdk.Int64(456150),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("ipsum"),
                                    IsEssential: false,
                                },
                            },
                        },
                    },
                    shared.Stage{
                        DurationInMinutes: 568434,
                        Targets: []shared.Target{
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "perferendis",
                                    RetryIntervalInMinutes: sdk.Int64(324141),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("natus"),
                                    IsEssential: false,
                                },
                            },
                        },
                    },
                    shared.Stage{
                        DurationInMinutes: 149675,
                        Targets: []shared.Target{
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "dolor",
                                    RetryIntervalInMinutes: sdk.Int64(616934),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("laboriosam"),
                                    IsEssential: false,
                                },
                            },
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "hic",
                                    RetryIntervalInMinutes: sdk.Int64(902599),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("fuga"),
                                    IsEssential: false,
                                },
                            },
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "in",
                                    RetryIntervalInMinutes: sdk.Int64(359508),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("iste"),
                                    IsEssential: false,
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("saepe"),
                    Value: sdk.String("quidem"),
                },
                shared.Tag{
                    Key: sdk.String("architecto"),
                    Value: sdk.String("ipsa"),
                },
            },
            Type: shared.ContactTypeEnumOncallSchedule,
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.CreateContactXAmzTargetEnumSsmContactsCreateContact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContactResult != nil {
        // handle response
    }
}
```

## CreateContactChannel

A contact channel is the method that Incident Manager uses to engage your contact.

### Example Usage

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
    res, err := s.SDK.CreateContactChannel(ctx, operations.CreateContactChannelRequest{
        CreateContactChannelRequest: shared.CreateContactChannelRequest{
            ContactID: "nobis",
            DeferActivation: sdk.Bool(false),
            DeliveryAddress: shared.ContactChannelAddress{
                SimpleAddress: sdk.String("enim"),
            },
            IdempotencyToken: sdk.String("omnis"),
            Name: "Ms. Cathy Marks",
            Type: shared.ChannelTypeEnumEmail,
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzTarget: operations.CreateContactChannelXAmzTargetEnumSsmContactsCreateContactChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContactChannelResult != nil {
        // handle response
    }
}
```

## CreateRotation

Creates a rotation in an on-call schedule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRotation(ctx, operations.CreateRotationRequest{
        CreateRotationRequest: shared.CreateRotationRequest{
            ContactIds: []string{
                "occaecati",
                "numquam",
                "commodi",
            },
            IdempotencyToken: sdk.String("quam"),
            Name: "Shannon Mueller",
            Recurrence: shared.RecurrenceSettings{
                DailySettings: []shared.HandOffTime{
                    shared.HandOffTime{
                        HourOfDay: 674752,
                        MinuteOfHour: 656330,
                    },
                },
                MonthlySettings: []shared.MonthlySetting{
                    shared.MonthlySetting{
                        DayOfMonth: 138183,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 778346,
                            MinuteOfHour: 196582,
                        },
                    },
                    shared.MonthlySetting{
                        DayOfMonth: 949572,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 368725,
                            MinuteOfHour: 662527,
                        },
                    },
                },
                NumberOfOnCalls: 820994,
                RecurrenceMultiplier: 13571,
                ShiftCoverages: map[string][]shared.CoverageTime{
                    "error": []shared.CoverageTime{
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 673660,
                                MinuteOfHour: 96098,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 971945,
                                MinuteOfHour: 976460,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 878194,
                                MinuteOfHour: 468651,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 509624,
                                MinuteOfHour: 976762,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 55714,
                                MinuteOfHour: 604846,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 451159,
                                MinuteOfHour: 739264,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 19987,
                                MinuteOfHour: 39187,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 441711,
                                MinuteOfHour: 282807,
                            },
                        },
                    },
                },
                WeeklySettings: []shared.WeeklySetting{
                    shared.WeeklySetting{
                        DayOfWeek: shared.DayOfWeekEnumMon,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 359444,
                            MinuteOfHour: 296140,
                        },
                    },
                    shared.WeeklySetting{
                        DayOfWeek: shared.DayOfWeekEnumThu,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 118727,
                            MinuteOfHour: 688661,
                        },
                    },
                    shared.WeeklySetting{
                        DayOfWeek: shared.DayOfWeekEnumWed,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 880476,
                            MinuteOfHour: 414263,
                        },
                    },
                    shared.WeeklySetting{
                        DayOfWeek: shared.DayOfWeekEnumSun,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 64147,
                            MinuteOfHour: 216822,
                        },
                    },
                },
            },
            StartTime: types.MustTimeFromString("2021-11-14T09:53:27.431Z"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("pariatur"),
                    Value: sdk.String("modi"),
                },
                shared.Tag{
                    Key: sdk.String("praesentium"),
                    Value: sdk.String("rem"),
                },
                shared.Tag{
                    Key: sdk.String("voluptates"),
                    Value: sdk.String("quasi"),
                },
            },
            TimeZoneID: "repudiandae",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.CreateRotationXAmzTargetEnumSsmContactsCreateRotation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRotationResult != nil {
        // handle response
    }
}
```

## CreateRotationOverride

Creates an override for a rotation in an on-call schedule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRotationOverride(ctx, operations.CreateRotationOverrideRequest{
        CreateRotationOverrideRequest: shared.CreateRotationOverrideRequest{
            EndTime: types.MustTimeFromString("2022-08-09T16:21:07.003Z"),
            IdempotencyToken: sdk.String("deserunt"),
            NewContactIds: []string{
                "quibusdam",
                "labore",
                "modi",
            },
            RotationID: "qui",
            StartTime: types.MustTimeFromString("2022-05-31T22:08:47.731Z"),
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.CreateRotationOverrideXAmzTargetEnumSsmContactsCreateRotationOverride,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRotationOverrideResult != nil {
        // handle response
    }
}
```

## DeactivateContactChannel

To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.

### Example Usage

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
    res, err := s.SDK.DeactivateContactChannel(ctx, operations.DeactivateContactChannelRequest{
        DeactivateContactChannelRequest: shared.DeactivateContactChannelRequest{
            ContactChannelID: "dolorum",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.DeactivateContactChannelXAmzTargetEnumSsmContactsDeactivateContactChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeactivateContactChannelResult != nil {
        // handle response
    }
}
```

## DeleteContact

To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.

### Example Usage

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
    res, err := s.SDK.DeleteContact(ctx, operations.DeleteContactRequest{
        DeleteContactRequest: shared.DeleteContactRequest{
            ContactID: "non",
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.DeleteContactXAmzTargetEnumSsmContactsDeleteContact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteContactResult != nil {
        // handle response
    }
}
```

## DeleteContactChannel

To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.

### Example Usage

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
    res, err := s.SDK.DeleteContactChannel(ctx, operations.DeleteContactChannelRequest{
        DeleteContactChannelRequest: shared.DeleteContactChannelRequest{
            ContactChannelID: "dolor",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DeleteContactChannelXAmzTargetEnumSsmContactsDeleteContactChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteContactChannelResult != nil {
        // handle response
    }
}
```

## DeleteRotation

Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.

### Example Usage

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
    res, err := s.SDK.DeleteRotation(ctx, operations.DeleteRotationRequest{
        DeleteRotationRequest: shared.DeleteRotationRequest{
            RotationID: "rerum",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.DeleteRotationXAmzTargetEnumSsmContactsDeleteRotation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRotationResult != nil {
        // handle response
    }
}
```

## DeleteRotationOverride

Deletes an existing override for an on-call rotation.

### Example Usage

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
    res, err := s.SDK.DeleteRotationOverride(ctx, operations.DeleteRotationOverrideRequest{
        DeleteRotationOverrideRequest: shared.DeleteRotationOverrideRequest{
            RotationID: "accusamus",
            RotationOverrideID: "non",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.DeleteRotationOverrideXAmzTargetEnumSsmContactsDeleteRotationOverride,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRotationOverrideResult != nil {
        // handle response
    }
}
```

## DescribeEngagement

Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.

### Example Usage

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
    res, err := s.SDK.DescribeEngagement(ctx, operations.DescribeEngagementRequest{
        DescribeEngagementRequest: shared.DescribeEngagementRequest{
            EngagementID: "id",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.DescribeEngagementXAmzTargetEnumSsmContactsDescribeEngagement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEngagementResult != nil {
        // handle response
    }
}
```

## DescribePage

Lists details of the engagement to a contact channel.

### Example Usage

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
    res, err := s.SDK.DescribePage(ctx, operations.DescribePageRequest{
        DescribePageRequest: shared.DescribePageRequest{
            PageID: "natus",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.DescribePageXAmzTargetEnumSsmContactsDescribePage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePageResult != nil {
        // handle response
    }
}
```

## GetContact

Retrieves information about the specified contact or escalation plan.

### Example Usage

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
    res, err := s.SDK.GetContact(ctx, operations.GetContactRequest{
        GetContactRequest: shared.GetContactRequest{
            ContactID: "labore",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.GetContactXAmzTargetEnumSsmContactsGetContact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContactResult != nil {
        // handle response
    }
}
```

## GetContactChannel

List details about a specific contact channel.

### Example Usage

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
    res, err := s.SDK.GetContactChannel(ctx, operations.GetContactChannelRequest{
        GetContactChannelRequest: shared.GetContactChannelRequest{
            ContactChannelID: "architecto",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.GetContactChannelXAmzTargetEnumSsmContactsGetContactChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContactChannelResult != nil {
        // handle response
    }
}
```

## GetContactPolicy

Retrieves the resource policies attached to the specified contact or escalation plan.

### Example Usage

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
    res, err := s.SDK.GetContactPolicy(ctx, operations.GetContactPolicyRequest{
        GetContactPolicyRequest: shared.GetContactPolicyRequest{
            ContactArn: "accusantium",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.GetContactPolicyXAmzTargetEnumSsmContactsGetContactPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContactPolicyResult != nil {
        // handle response
    }
}
```

## GetRotation

Retrieves information about an on-call rotation.

### Example Usage

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
    res, err := s.SDK.GetRotation(ctx, operations.GetRotationRequest{
        GetRotationRequest: shared.GetRotationRequest{
            RotationID: "odit",
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("maxime"),
        XAmzTarget: operations.GetRotationXAmzTargetEnumSsmContactsGetRotation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRotationResult != nil {
        // handle response
    }
}
```

## GetRotationOverride

Retrieves information about an override to an on-call rotation.

### Example Usage

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
    res, err := s.SDK.GetRotationOverride(ctx, operations.GetRotationOverrideRequest{
        GetRotationOverrideRequest: shared.GetRotationOverrideRequest{
            RotationID: "deleniti",
            RotationOverrideID: "facilis",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.GetRotationOverrideXAmzTargetEnumSsmContactsGetRotationOverride,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRotationOverrideResult != nil {
        // handle response
    }
}
```

## ListContactChannels

Lists all contact channels for the specified contact.

### Example Usage

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
    res, err := s.SDK.ListContactChannels(ctx, operations.ListContactChannelsRequest{
        ListContactChannelsRequest: shared.ListContactChannelsRequest{
            ContactID: "repellat",
            MaxResults: sdk.Int64(841140),
            NextToken: sdk.String("sed"),
        },
        MaxResults: sdk.String("saepe"),
        NextToken: sdk.String("pariatur"),
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.ListContactChannelsXAmzTargetEnumSsmContactsListContactChannels,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContactChannelsResult != nil {
        // handle response
    }
}
```

## ListContacts

Lists all contacts and escalation plans in Incident Manager.

### Example Usage

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
    res, err := s.SDK.ListContacts(ctx, operations.ListContactsRequest{
        ListContactsRequest: shared.ListContactsRequest{
            AliasPrefix: sdk.String("illum"),
            MaxResults: sdk.Int64(864934),
            NextToken: sdk.String("maxime"),
            Type: shared.ContactTypeEnumEscalation.ToPointer(),
        },
        MaxResults: sdk.String("excepturi"),
        NextToken: sdk.String("odit"),
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.ListContactsXAmzTargetEnumSsmContactsListContacts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContactsResult != nil {
        // handle response
    }
}
```

## ListEngagements

Lists all engagements that have happened in an incident.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEngagements(ctx, operations.ListEngagementsRequest{
        ListEngagementsRequest: shared.ListEngagementsRequest{
            IncidentID: sdk.String("autem"),
            MaxResults: sdk.Int64(722056),
            NextToken: sdk.String("eaque"),
            TimeRangeValue: &shared.TimeRange{
                EndTime: types.MustTimeFromString("2021-11-26T18:45:44.366Z"),
                StartTime: types.MustTimeFromString("2022-12-13T19:01:00.083Z"),
            },
        },
        MaxResults: sdk.String("fugiat"),
        NextToken: sdk.String("amet"),
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.ListEngagementsXAmzTargetEnumSsmContactsListEngagements,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEngagementsResult != nil {
        // handle response
    }
}
```

## ListPageReceipts

Lists all of the engagements to contact channels that have been acknowledged.

### Example Usage

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
    res, err := s.SDK.ListPageReceipts(ctx, operations.ListPageReceiptsRequest{
        ListPageReceiptsRequest: shared.ListPageReceiptsRequest{
            MaxResults: sdk.Int64(339404),
            NextToken: sdk.String("totam"),
            PageID: "dignissimos",
        },
        MaxResults: sdk.String("eaque"),
        NextToken: sdk.String("quis"),
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.ListPageReceiptsXAmzTargetEnumSsmContactsListPageReceipts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPageReceiptsResult != nil {
        // handle response
    }
}
```

## ListPageResolutions

Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of <i>escalation plan &gt; on-call schedule &gt; contact</i>.

### Example Usage

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
    res, err := s.SDK.ListPageResolutions(ctx, operations.ListPageResolutionsRequest{
        ListPageResolutionsRequest: shared.ListPageResolutionsRequest{
            NextToken: sdk.String("vero"),
            PageID: "nostrum",
        },
        NextToken: sdk.String("hic"),
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.ListPageResolutionsXAmzTargetEnumSsmContactsListPageResolutions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPageResolutionsResult != nil {
        // handle response
    }
}
```

## ListPagesByContact

Lists the engagements to a contact's contact channels.

### Example Usage

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
    res, err := s.SDK.ListPagesByContact(ctx, operations.ListPagesByContactRequest{
        ListPagesByContactRequest: shared.ListPagesByContactRequest{
            ContactID: "blanditiis",
            MaxResults: sdk.Int64(621479),
            NextToken: sdk.String("eaque"),
        },
        MaxResults: sdk.String("occaecati"),
        NextToken: sdk.String("rerum"),
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.ListPagesByContactXAmzTargetEnumSsmContactsListPagesByContact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPagesByContactResult != nil {
        // handle response
    }
}
```

## ListPagesByEngagement

Lists the engagements to contact channels that occurred by engaging a contact.

### Example Usage

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
    res, err := s.SDK.ListPagesByEngagement(ctx, operations.ListPagesByEngagementRequest{
        ListPagesByEngagementRequest: shared.ListPagesByEngagementRequest{
            EngagementID: "pariatur",
            MaxResults: sdk.Int64(589910),
            NextToken: sdk.String("nobis"),
        },
        MaxResults: sdk.String("libero"),
        NextToken: sdk.String("delectus"),
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.ListPagesByEngagementXAmzTargetEnumSsmContactsListPagesByEngagement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPagesByEngagementResult != nil {
        // handle response
    }
}
```

## ListPreviewRotationShifts

<p>Returns a list of shifts based on rotation configuration parameters.</p> <note> <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPreviewRotationShifts(ctx, operations.ListPreviewRotationShiftsRequest{
        ListPreviewRotationShiftsRequest: shared.ListPreviewRotationShiftsRequest{
            EndTime: types.MustTimeFromString("2022-01-21T07:17:52.299Z"),
            MaxResults: sdk.Int64(569574),
            Members: []string{
                "voluptate",
                "dignissimos",
                "reiciendis",
            },
            NextToken: sdk.String("amet"),
            Overrides: []shared.PreviewOverride{
                shared.PreviewOverride{
                    EndTime: types.MustTimeFromString("2022-11-30T20:48:38.083Z"),
                    NewMembers: []string{
                        "ipsa",
                    },
                    StartTime: types.MustTimeFromString("2022-07-06T22:32:29.592Z"),
                },
                shared.PreviewOverride{
                    EndTime: types.MustTimeFromString("2022-02-13T10:24:00.119Z"),
                    NewMembers: []string{
                        "voluptatibus",
                        "voluptas",
                        "natus",
                    },
                    StartTime: types.MustTimeFromString("2022-06-16T23:42:38.113Z"),
                },
                shared.PreviewOverride{
                    EndTime: types.MustTimeFromString("2022-02-23T01:35:05.899Z"),
                    NewMembers: []string{
                        "soluta",
                    },
                    StartTime: types.MustTimeFromString("2022-01-16T14:59:31.978Z"),
                },
            },
            Recurrence: shared.RecurrenceSettings{
                DailySettings: []shared.HandOffTime{
                    shared.HandOffTime{
                        HourOfDay: 677082,
                        MinuteOfHour: 536579,
                    },
                    shared.HandOffTime{
                        HourOfDay: 607045,
                        MinuteOfHour: 896672,
                    },
                },
                MonthlySettings: []shared.MonthlySetting{
                    shared.MonthlySetting{
                        DayOfMonth: 990339,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 469497,
                            MinuteOfHour: 216897,
                        },
                    },
                    shared.MonthlySetting{
                        DayOfMonth: 456015,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 663078,
                            MinuteOfHour: 906418,
                        },
                    },
                    shared.MonthlySetting{
                        DayOfMonth: 263322,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 137220,
                            MinuteOfHour: 20651,
                        },
                    },
                },
                NumberOfOnCalls: 229219,
                RecurrenceMultiplier: 758379,
                ShiftCoverages: map[string][]shared.CoverageTime{
                    "ad": []shared.CoverageTime{
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 383464,
                                MinuteOfHour: 645785,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 588317,
                                MinuteOfHour: 324683,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 831049,
                                MinuteOfHour: 519711,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 628982,
                                MinuteOfHour: 55,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 872651,
                                MinuteOfHour: 311860,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 273542,
                                MinuteOfHour: 425451,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 798047,
                                MinuteOfHour: 885338,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 185636,
                                MinuteOfHour: 679880,
                            },
                        },
                    },
                    "a": []shared.CoverageTime{
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 687488,
                                MinuteOfHour: 483409,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 215507,
                                MinuteOfHour: 788740,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 947371,
                                MinuteOfHour: 229442,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 730856,
                                MinuteOfHour: 880298,
                            },
                        },
                    },
                    "numquam": []shared.CoverageTime{
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 213312,
                                MinuteOfHour: 957451,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 518201,
                                MinuteOfHour: 471752,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 25662,
                                MinuteOfHour: 711584,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 207470,
                                MinuteOfHour: 153694,
                            },
                        },
                    },
                    "vel": []shared.CoverageTime{
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 374170,
                                MinuteOfHour: 646265,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 463575,
                                MinuteOfHour: 214880,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 277628,
                                MinuteOfHour: 186458,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 586784,
                                MinuteOfHour: 807581,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 863856,
                                MinuteOfHour: 747080,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 117531,
                                MinuteOfHour: 674848,
                            },
                        },
                    },
                },
                WeeklySettings: []shared.WeeklySetting{
                    shared.WeeklySetting{
                        DayOfWeek: shared.DayOfWeekEnumTue,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 132068,
                            MinuteOfHour: 174909,
                        },
                    },
                    shared.WeeklySetting{
                        DayOfWeek: shared.DayOfWeekEnumSat,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 704474,
                            MinuteOfHour: 396060,
                        },
                    },
                    shared.WeeklySetting{
                        DayOfWeek: shared.DayOfWeekEnumThu,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 565421,
                            MinuteOfHour: 840429,
                        },
                    },
                },
            },
            RotationStartTime: types.MustTimeFromString("2022-10-18T05:22:32.548Z"),
            StartTime: types.MustTimeFromString("2022-11-01T18:57:36.196Z"),
            TimeZoneID: "odio",
        },
        MaxResults: sdk.String("sunt"),
        NextToken: sdk.String("ullam"),
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.ListPreviewRotationShiftsXAmzTargetEnumSsmContactsListPreviewRotationShifts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPreviewRotationShiftsResult != nil {
        // handle response
    }
}
```

## ListRotationOverrides

Retrieves a list of overrides currently specified for an on-call rotation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRotationOverrides(ctx, operations.ListRotationOverridesRequest{
        ListRotationOverridesRequest: shared.ListRotationOverridesRequest{
            EndTime: types.MustTimeFromString("2022-05-07T21:24:02.842Z"),
            MaxResults: sdk.Int64(83422),
            NextToken: sdk.String("nobis"),
            RotationID: "quos",
            StartTime: types.MustTimeFromString("2021-10-31T07:58:44.750Z"),
        },
        MaxResults: sdk.String("aperiam"),
        NextToken: sdk.String("delectus"),
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.ListRotationOverridesXAmzTargetEnumSsmContactsListRotationOverrides,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRotationOverridesResult != nil {
        // handle response
    }
}
```

## ListRotationShifts

Returns a list of shifts generated by an existing rotation in the system.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRotationShifts(ctx, operations.ListRotationShiftsRequest{
        ListRotationShiftsRequest: shared.ListRotationShiftsRequest{
            EndTime: types.MustTimeFromString("2022-06-12T04:30:45.210Z"),
            MaxResults: sdk.Int64(929530),
            NextToken: sdk.String("consequatur"),
            RotationID: "est",
            StartTime: types.MustTimeFromString("2020-08-24T06:10:53.249Z"),
        },
        MaxResults: sdk.String("doloribus"),
        NextToken: sdk.String("ut"),
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.ListRotationShiftsXAmzTargetEnumSsmContactsListRotationShifts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRotationShiftsResult != nil {
        // handle response
    }
}
```

## ListRotations

Retrieves a list of on-call rotations.

### Example Usage

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
    res, err := s.SDK.ListRotations(ctx, operations.ListRotationsRequest{
        ListRotationsRequest: shared.ListRotationsRequest{
            MaxResults: sdk.Int64(977496),
            NextToken: sdk.String("quisquam"),
            RotationNamePrefix: sdk.String("vero"),
        },
        MaxResults: sdk.String("omnis"),
        NextToken: sdk.String("quis"),
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.ListRotationsXAmzTargetEnumSsmContactsListRotations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRotationsResult != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags of an escalation plan or contact.

### Example Usage

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceARN: "hic",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumSsmContactsListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResult != nil {
        // handle response
    }
}
```

## PutContactPolicy

Adds a resource policy to the specified contact or escalation plan. The resource policy is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up cross-account functionality</a>.

### Example Usage

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
    res, err := s.SDK.PutContactPolicy(ctx, operations.PutContactPolicyRequest{
        PutContactPolicyRequest: shared.PutContactPolicyRequest{
            ContactArn: "dolore",
            Policy: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        XAmzTarget: operations.PutContactPolicyXAmzTargetEnumSsmContactsPutContactPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutContactPolicyResult != nil {
        // handle response
    }
}
```

## SendActivationCode

Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.

### Example Usage

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
    res, err := s.SDK.SendActivationCode(ctx, operations.SendActivationCodeRequest{
        SendActivationCodeRequest: shared.SendActivationCodeRequest{
            ContactChannelID: "nulla",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzTarget: operations.SendActivationCodeXAmzTargetEnumSsmContactsSendActivationCode,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendActivationCodeResult != nil {
        // handle response
    }
}
```

## StartEngagement

Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.

### Example Usage

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
    res, err := s.SDK.StartEngagement(ctx, operations.StartEngagementRequest{
        StartEngagementRequest: shared.StartEngagementRequest{
            ContactID: "alias",
            Content: "officia",
            IdempotencyToken: sdk.String("tempora"),
            IncidentID: sdk.String("ipsam"),
            PublicContent: sdk.String("ea"),
            PublicSubject: sdk.String("aspernatur"),
            Sender: "vel",
            Subject: "possimus",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.StartEngagementXAmzTargetEnumSsmContactsStartEngagement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartEngagementResult != nil {
        // handle response
    }
}
```

## StopEngagement

Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.

### Example Usage

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
    res, err := s.SDK.StopEngagement(ctx, operations.StopEngagementRequest{
        StopEngagementRequest: shared.StopEngagementRequest{
            EngagementID: "quasi",
            Reason: sdk.String("ex"),
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.StopEngagementXAmzTargetEnumSsmContactsStopEngagement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopEngagementResult != nil {
        // handle response
    }
}
```

## TagResource

Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.

### Example Usage

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "ea",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("corporis"),
                    Value: sdk.String("veniam"),
                },
                shared.Tag{
                    Key: sdk.String("aliquid"),
                    Value: sdk.String("inventore"),
                },
                shared.Tag{
                    Key: sdk.String("magnam"),
                    Value: sdk.String("ea"),
                },
                shared.Tag{
                    Key: sdk.String("quo"),
                    Value: sdk.String("consectetur"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumSsmContactsTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResult != nil {
        // handle response
    }
}
```

## UntagResource

Removes tags from the specified resource.

### Example Usage

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "aut",
            TagKeys: []string{
                "impedit",
                "aliquam",
                "fugit",
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumSsmContactsUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResult != nil {
        // handle response
    }
}
```

## UpdateContact

Updates the contact or escalation plan specified.

### Example Usage

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
    res, err := s.SDK.UpdateContact(ctx, operations.UpdateContactRequest{
        UpdateContactRequest: shared.UpdateContactRequest{
            ContactID: "velit",
            DisplayName: sdk.String("eum"),
            Plan: &shared.Plan{
                RotationIds: []string{
                    "nobis",
                    "quas",
                },
                Stages: []shared.Stage{
                    shared.Stage{
                        DurationInMinutes: 860552,
                        Targets: []shared.Target{
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "libero",
                                    RetryIntervalInMinutes: sdk.Int64(96549),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("tempora"),
                                    IsEssential: false,
                                },
                            },
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "numquam",
                                    RetryIntervalInMinutes: sdk.Int64(131482),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("provident"),
                                    IsEssential: false,
                                },
                            },
                        },
                    },
                    shared.Stage{
                        DurationInMinutes: 55374,
                        Targets: []shared.Target{
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "magnam",
                                    RetryIntervalInMinutes: sdk.Int64(487935),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("eius"),
                                    IsEssential: false,
                                },
                            },
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "esse",
                                    RetryIntervalInMinutes: sdk.Int64(456141),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("rem"),
                                    IsEssential: false,
                                },
                            },
                        },
                    },
                    shared.Stage{
                        DurationInMinutes: 683282,
                        Targets: []shared.Target{
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "quidem",
                                    RetryIntervalInMinutes: sdk.Int64(852635),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("ut"),
                                    IsEssential: false,
                                },
                            },
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "eum",
                                    RetryIntervalInMinutes: sdk.Int64(379927),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("assumenda"),
                                    IsEssential: false,
                                },
                            },
                        },
                    },
                    shared.Stage{
                        DurationInMinutes: 181151,
                        Targets: []shared.Target{
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "quisquam",
                                    RetryIntervalInMinutes: sdk.Int64(86377),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("ipsa"),
                                    IsEssential: false,
                                },
                            },
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "id",
                                    RetryIntervalInMinutes: sdk.Int64(696997),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("neque"),
                                    IsEssential: false,
                                },
                            },
                            shared.Target{
                                ChannelTargetInfo: &shared.ChannelTargetInfo{
                                    ContactChannelID: "quo",
                                    RetryIntervalInMinutes: sdk.Int64(847276),
                                },
                                ContactTargetInfo: &shared.ContactTargetInfo{
                                    ContactID: sdk.String("quo"),
                                    IsEssential: false,
                                },
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.UpdateContactXAmzTargetEnumSsmContactsUpdateContact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateContactResult != nil {
        // handle response
    }
}
```

## UpdateContactChannel

Updates a contact's contact channel.

### Example Usage

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
    res, err := s.SDK.UpdateContactChannel(ctx, operations.UpdateContactChannelRequest{
        UpdateContactChannelRequest: shared.UpdateContactChannelRequest{
            ContactChannelID: "tempora",
            DeliveryAddress: &shared.ContactChannelAddress{
                SimpleAddress: sdk.String("debitis"),
            },
            Name: sdk.String("Kelly Donnelly"),
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.UpdateContactChannelXAmzTargetEnumSsmContactsUpdateContactChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateContactChannelResult != nil {
        // handle response
    }
}
```

## UpdateRotation

Updates the information specified for an on-call rotation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateRotation(ctx, operations.UpdateRotationRequest{
        UpdateRotationRequest: shared.UpdateRotationRequest{
            ContactIds: []string{
                "accusamus",
                "aliquam",
                "odio",
            },
            Recurrence: shared.RecurrenceSettings{
                DailySettings: []shared.HandOffTime{
                    shared.HandOffTime{
                        HourOfDay: 414567,
                        MinuteOfHour: 959434,
                    },
                    shared.HandOffTime{
                        HourOfDay: 174112,
                        MinuteOfHour: 645570,
                    },
                    shared.HandOffTime{
                        HourOfDay: 475289,
                        MinuteOfHour: 35362,
                    },
                },
                MonthlySettings: []shared.MonthlySetting{
                    shared.MonthlySetting{
                        DayOfMonth: 430402,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 556429,
                            MinuteOfHour: 510017,
                        },
                    },
                    shared.MonthlySetting{
                        DayOfMonth: 159867,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 536178,
                            MinuteOfHour: 143829,
                        },
                    },
                    shared.MonthlySetting{
                        DayOfMonth: 681393,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 649463,
                            MinuteOfHour: 277596,
                        },
                    },
                    shared.MonthlySetting{
                        DayOfMonth: 539224,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 128860,
                            MinuteOfHour: 325685,
                        },
                    },
                },
                NumberOfOnCalls: 392676,
                RecurrenceMultiplier: 147014,
                ShiftCoverages: map[string][]shared.CoverageTime{
                    "consequuntur": []shared.CoverageTime{
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 129412,
                                MinuteOfHour: 903984,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 578922,
                                MinuteOfHour: 543806,
                            },
                        },
                    },
                    "et": []shared.CoverageTime{
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 910545,
                                MinuteOfHour: 882042,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 82971,
                                MinuteOfHour: 458604,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 800379,
                                MinuteOfHour: 724168,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 877131,
                                MinuteOfHour: 399025,
                            },
                        },
                    },
                    "quasi": []shared.CoverageTime{
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 426306,
                                MinuteOfHour: 690025,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 473221,
                                MinuteOfHour: 699622,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 580197,
                                MinuteOfHour: 327720,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 716244,
                                MinuteOfHour: 756779,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 27069,
                                MinuteOfHour: 636061,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 731398,
                                MinuteOfHour: 240020,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 766964,
                                MinuteOfHour: 160538,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 9766,
                                MinuteOfHour: 796392,
                            },
                        },
                    },
                    "quaerat": []shared.CoverageTime{
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 232865,
                                MinuteOfHour: 458139,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 503427,
                                MinuteOfHour: 590984,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 953722,
                                MinuteOfHour: 857723,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 557811,
                                MinuteOfHour: 457223,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 97468,
                                MinuteOfHour: 951875,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 621679,
                                MinuteOfHour: 575751,
                            },
                        },
                        shared.CoverageTime{
                            End: &shared.HandOffTime{
                                HourOfDay: 863023,
                                MinuteOfHour: 820767,
                            },
                            Start: &shared.HandOffTime{
                                HourOfDay: 157632,
                                MinuteOfHour: 908844,
                            },
                        },
                    },
                },
                WeeklySettings: []shared.WeeklySetting{
                    shared.WeeklySetting{
                        DayOfWeek: shared.DayOfWeekEnumSat,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 85001,
                            MinuteOfHour: 159414,
                        },
                    },
                    shared.WeeklySetting{
                        DayOfWeek: shared.DayOfWeekEnumMon,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 628899,
                            MinuteOfHour: 633608,
                        },
                    },
                    shared.WeeklySetting{
                        DayOfWeek: shared.DayOfWeekEnumWed,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 949298,
                            MinuteOfHour: 62713,
                        },
                    },
                    shared.WeeklySetting{
                        DayOfWeek: shared.DayOfWeekEnumSun,
                        HandOffTime: shared.HandOffTime{
                            HourOfDay: 424032,
                            MinuteOfHour: 447378,
                        },
                    },
                },
            },
            RotationID: "eius",
            StartTime: types.MustTimeFromString("2021-04-21T04:50:55.832Z"),
            TimeZoneID: sdk.String("soluta"),
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.UpdateRotationXAmzTargetEnumSsmContactsUpdateRotation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRotationResult != nil {
        // handle response
    }
}
```
