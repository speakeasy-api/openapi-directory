# Activities

### Available Operations

* [ActivitiesAdd](#activitiesadd) - Create activity
* [ActivitiesAll](#activitiesall) - List activities
* [ActivitiesDelete](#activitiesdelete) - Delete activity
* [ActivitiesOne](#activitiesone) - Get activity
* [ActivitiesUpdate](#activitiesupdate) - Update activity

## ActivitiesAdd

Create activity

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Activities.ActivitiesAdd(ctx, operations.ActivitiesAddRequest{
        ActivityInput: shared.ActivityInput{
            AccountID: sdk.String("12345"),
            ActivityDate: sdk.String("2021-05-01"),
            ActivityDatetime: sdk.String("2021-05-01T12:00:00.000Z"),
            AllDayEvent: sdk.Bool(false),
            Archived: sdk.Bool(false),
            AssetID: sdk.String("12345"),
            Attendees: []shared.ActivityAttendeeInput{
                shared.ActivityAttendeeInput{
                    EmailAddress: sdk.String("elon@musk.com"),
                    FirstName: sdk.String("Elon"),
                    IsOrganizer: sdk.Bool(true),
                    LastName: sdk.String("Musk"),
                    MiddleName: sdk.String("D."),
                    Name: sdk.String("Elon Musk"),
                    Prefix: sdk.String("Mr."),
                    Status: shared.ActivityAttendeeStatusEnumAccepted.ToPointer(),
                    Suffix: sdk.String("PhD"),
                },
                shared.ActivityAttendeeInput{
                    EmailAddress: sdk.String("elon@musk.com"),
                    FirstName: sdk.String("Elon"),
                    IsOrganizer: sdk.Bool(true),
                    LastName: sdk.String("Musk"),
                    MiddleName: sdk.String("D."),
                    Name: sdk.String("Elon Musk"),
                    Prefix: sdk.String("Mr."),
                    Status: shared.ActivityAttendeeStatusEnumAccepted.ToPointer(),
                    Suffix: sdk.String("PhD"),
                },
            },
            CampaignID: sdk.String("12345"),
            CaseID: sdk.String("12345"),
            Child: sdk.Bool(false),
            CompanyID: sdk.String("12345"),
            ContactID: sdk.String("12345"),
            ContractID: sdk.String("12345"),
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: []string{
                        "delectus",
                    },
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.Float64(10),
                },
            },
            CustomObjectID: sdk.String("12345"),
            Deleted: sdk.Bool(false),
            Description: sdk.String("More info about the meeting"),
            Done: sdk.Bool(false),
            DurationSeconds: sdk.Int64(1800),
            EndDate: sdk.String("2021-05-01"),
            EndDatetime: sdk.String("2021-05-01T12:30:00.000Z"),
            EventSubType: sdk.String("debrief"),
            GroupEvent: sdk.Bool(true),
            GroupEventType: sdk.String("Proposed"),
            LeadID: sdk.String("12345"),
            Location: sdk.String("Space"),
            LocationAddress: &shared.Address{
                City: sdk.String("San Francisco"),
                ContactName: sdk.String("Elon Musk"),
                Country: sdk.String("US"),
                County: sdk.String("Santa Clara"),
                Email: sdk.String("elon@musk.com"),
                Fax: sdk.String("122-111-1111"),
                ID: sdk.String("123"),
                Latitude: sdk.String("40.759211"),
                Line1: sdk.String("Main street"),
                Line2: sdk.String("apt #"),
                Line3: sdk.String("Suite #"),
                Line4: sdk.String("delivery instructions"),
                Longitude: sdk.String("-73.984638"),
                Name: sdk.String("HQ US"),
                PhoneNumber: sdk.String("111-111-1111"),
                PostalCode: sdk.String("94104"),
                RowVersion: sdk.String("1-12345"),
                Salutation: sdk.String("Mr"),
                State: sdk.String("CA"),
                StreetNumber: sdk.String("25"),
                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                Website: sdk.String("https://elonmusk.com"),
            },
            Note: sdk.String("An internal note about the meeting"),
            OpportunityID: sdk.String("12345"),
            OwnerID: sdk.String("12345"),
            Private: sdk.Bool(true),
            ProductID: sdk.String("12345"),
            Recurrent: sdk.Bool(false),
            ReminderDatetime: sdk.String("2021-05-01T17:00:00.000Z"),
            ReminderSet: sdk.Bool(false),
            ShowAs: shared.ActivityShowAsEnumBusy.ToPointer(),
            SolutionID: sdk.String("12345"),
            StartDatetime: sdk.String("2021-05-01T12:00:00.000Z"),
            Title: sdk.String("Meeting"),
            Type: shared.ActivityTypeEnumMeeting,
            UserID: sdk.String("12345"),
            VideoConferenceID: sdk.String("zoom:88120759396"),
            VideoConferenceURL: sdk.String("https://us02web.zoom.us/j/88120759396"),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "suscipit",
        XApideckConsumerID: "molestiae",
        XApideckServiceID: sdk.String("minus"),
    }, operations.ActivitiesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateActivityResponse != nil {
        // handle response
    }
}
```

## ActivitiesAll

List activities

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Activities.ActivitiesAll(ctx, operations.ActivitiesAllRequest{
        Cursor: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Filter: &shared.ActivitiesFilter{
            UpdatedSince: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
        },
        Limit: sdk.Int64(479977),
        Raw: sdk.Bool(false),
        XApideckAppID: "excepturi",
        XApideckConsumerID: "nisi",
        XApideckServiceID: sdk.String("recusandae"),
    }, operations.ActivitiesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetActivitiesResponse != nil {
        // handle response
    }
}
```

## ActivitiesDelete

Delete activity

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Activities.ActivitiesDelete(ctx, operations.ActivitiesDeleteRequest{
        ID: "d151a05d-fc2d-4df7-8c78-ca1ba928fc81",
        Raw: sdk.Bool(false),
        XApideckAppID: "commodi",
        XApideckConsumerID: "molestiae",
        XApideckServiceID: sdk.String("modi"),
    }, operations.ActivitiesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteActivityResponse != nil {
        // handle response
    }
}
```

## ActivitiesOne

Get activity

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Activities.ActivitiesOne(ctx, operations.ActivitiesOneRequest{
        Fields: sdk.String("qui"),
        ID: "cb739205-9293-496f-aa75-96eb10faaa23",
        Raw: sdk.Bool(false),
        XApideckAppID: "corporis",
        XApideckConsumerID: "explicabo",
        XApideckServiceID: sdk.String("nobis"),
    }, operations.ActivitiesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetActivityResponse != nil {
        // handle response
    }
}
```

## ActivitiesUpdate

Update activity

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Activities.ActivitiesUpdate(ctx, operations.ActivitiesUpdateRequest{
        ActivityInput: shared.ActivityInput{
            AccountID: sdk.String("12345"),
            ActivityDate: sdk.String("2021-05-01"),
            ActivityDatetime: sdk.String("2021-05-01T12:00:00.000Z"),
            AllDayEvent: sdk.Bool(false),
            Archived: sdk.Bool(false),
            AssetID: sdk.String("12345"),
            Attendees: []shared.ActivityAttendeeInput{
                shared.ActivityAttendeeInput{
                    EmailAddress: sdk.String("elon@musk.com"),
                    FirstName: sdk.String("Elon"),
                    IsOrganizer: sdk.Bool(true),
                    LastName: sdk.String("Musk"),
                    MiddleName: sdk.String("D."),
                    Name: sdk.String("Elon Musk"),
                    Prefix: sdk.String("Mr."),
                    Status: shared.ActivityAttendeeStatusEnumAccepted.ToPointer(),
                    Suffix: sdk.String("PhD"),
                },
                shared.ActivityAttendeeInput{
                    EmailAddress: sdk.String("elon@musk.com"),
                    FirstName: sdk.String("Elon"),
                    IsOrganizer: sdk.Bool(true),
                    LastName: sdk.String("Musk"),
                    MiddleName: sdk.String("D."),
                    Name: sdk.String("Elon Musk"),
                    Prefix: sdk.String("Mr."),
                    Status: shared.ActivityAttendeeStatusEnumAccepted.ToPointer(),
                    Suffix: sdk.String("PhD"),
                },
            },
            CampaignID: sdk.String("12345"),
            CaseID: sdk.String("12345"),
            Child: sdk.Bool(false),
            CompanyID: sdk.String("12345"),
            ContactID: sdk.String("12345"),
            ContractID: sdk.String("12345"),
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.Float64(10),
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.Float64(10),
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.Bool(true),
                },
            },
            CustomObjectID: sdk.String("12345"),
            Deleted: sdk.Bool(false),
            Description: sdk.String("More info about the meeting"),
            Done: sdk.Bool(false),
            DurationSeconds: sdk.Int64(1800),
            EndDate: sdk.String("2021-05-01"),
            EndDatetime: sdk.String("2021-05-01T12:30:00.000Z"),
            EventSubType: sdk.String("debrief"),
            GroupEvent: sdk.Bool(true),
            GroupEventType: sdk.String("Proposed"),
            LeadID: sdk.String("12345"),
            Location: sdk.String("Space"),
            LocationAddress: &shared.Address{
                City: sdk.String("San Francisco"),
                ContactName: sdk.String("Elon Musk"),
                Country: sdk.String("US"),
                County: sdk.String("Santa Clara"),
                Email: sdk.String("elon@musk.com"),
                Fax: sdk.String("122-111-1111"),
                ID: sdk.String("123"),
                Latitude: sdk.String("40.759211"),
                Line1: sdk.String("Main street"),
                Line2: sdk.String("apt #"),
                Line3: sdk.String("Suite #"),
                Line4: sdk.String("delivery instructions"),
                Longitude: sdk.String("-73.984638"),
                Name: sdk.String("HQ US"),
                PhoneNumber: sdk.String("111-111-1111"),
                PostalCode: sdk.String("94104"),
                RowVersion: sdk.String("1-12345"),
                Salutation: sdk.String("Mr"),
                State: sdk.String("CA"),
                StreetNumber: sdk.String("25"),
                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                Website: sdk.String("https://elonmusk.com"),
            },
            Note: sdk.String("An internal note about the meeting"),
            OpportunityID: sdk.String("12345"),
            OwnerID: sdk.String("12345"),
            Private: sdk.Bool(true),
            ProductID: sdk.String("12345"),
            Recurrent: sdk.Bool(false),
            ReminderDatetime: sdk.String("2021-05-01T17:00:00.000Z"),
            ReminderSet: sdk.Bool(false),
            ShowAs: shared.ActivityShowAsEnumBusy.ToPointer(),
            SolutionID: sdk.String("12345"),
            StartDatetime: sdk.String("2021-05-01T12:00:00.000Z"),
            Title: sdk.String("Meeting"),
            Type: shared.ActivityTypeEnumMeeting,
            UserID: sdk.String("12345"),
            VideoConferenceID: sdk.String("zoom:88120759396"),
            VideoConferenceURL: sdk.String("https://us02web.zoom.us/j/88120759396"),
        },
        ID: "07aff1a3-a2fa-4946-b739-251aa52c3f5a",
        Raw: sdk.Bool(false),
        XApideckAppID: "possimus",
        XApideckConsumerID: "aut",
        XApideckServiceID: sdk.String("quasi"),
    }, operations.ActivitiesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateActivityResponse != nil {
        // handle response
    }
}
```
