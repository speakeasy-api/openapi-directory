# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/crm/9.3.1/go
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
                    Value: sdk.Bool(true),
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: []string{
                        "nulla",
                        "corrupti",
                        "illum",
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
        XApideckAppID: "error",
        XApideckConsumerID: "deserunt",
        XApideckServiceID: sdk.String("suscipit"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Activities](docs/activities/README.md)

* [ActivitiesAdd](docs/activities/README.md#activitiesadd) - Create activity
* [ActivitiesAll](docs/activities/README.md#activitiesall) - List activities
* [ActivitiesDelete](docs/activities/README.md#activitiesdelete) - Delete activity
* [ActivitiesOne](docs/activities/README.md#activitiesone) - Get activity
* [ActivitiesUpdate](docs/activities/README.md#activitiesupdate) - Update activity

### [Companies](docs/companies/README.md)

* [CompaniesAdd](docs/companies/README.md#companiesadd) - Create company
* [CompaniesAll](docs/companies/README.md#companiesall) - List companies
* [CompaniesDelete](docs/companies/README.md#companiesdelete) - Delete company
* [CompaniesOne](docs/companies/README.md#companiesone) - Get company
* [CompaniesUpdate](docs/companies/README.md#companiesupdate) - Update company

### [Contacts](docs/contacts/README.md)

* [ContactsAdd](docs/contacts/README.md#contactsadd) - Create contact
* [ContactsAll](docs/contacts/README.md#contactsall) - List contacts
* [ContactsDelete](docs/contacts/README.md#contactsdelete) - Delete contact
* [ContactsOne](docs/contacts/README.md#contactsone) - Get contact
* [ContactsUpdate](docs/contacts/README.md#contactsupdate) - Update contact

### [Leads](docs/leads/README.md)

* [LeadsAdd](docs/leads/README.md#leadsadd) - Create lead
* [LeadsAll](docs/leads/README.md#leadsall) - List leads
* [LeadsDelete](docs/leads/README.md#leadsdelete) - Delete lead
* [LeadsOne](docs/leads/README.md#leadsone) - Get lead
* [LeadsUpdate](docs/leads/README.md#leadsupdate) - Update lead

### [Notes](docs/notes/README.md)

* [NotesAdd](docs/notes/README.md#notesadd) - Create note
* [NotesAll](docs/notes/README.md#notesall) - List notes
* [NotesDelete](docs/notes/README.md#notesdelete) - Delete note
* [NotesOne](docs/notes/README.md#notesone) - Get note
* [NotesUpdate](docs/notes/README.md#notesupdate) - Update note

### [Opportunities](docs/opportunities/README.md)

* [OpportunitiesAdd](docs/opportunities/README.md#opportunitiesadd) - Create opportunity
* [OpportunitiesAll](docs/opportunities/README.md#opportunitiesall) - List opportunities
* [OpportunitiesDelete](docs/opportunities/README.md#opportunitiesdelete) - Delete opportunity
* [OpportunitiesOne](docs/opportunities/README.md#opportunitiesone) - Get opportunity
* [OpportunitiesUpdate](docs/opportunities/README.md#opportunitiesupdate) - Update opportunity

### [Pipelines](docs/pipelines/README.md)

* [PipelinesAdd](docs/pipelines/README.md#pipelinesadd) - Create pipeline
* [PipelinesAll](docs/pipelines/README.md#pipelinesall) - List pipelines
* [PipelinesDelete](docs/pipelines/README.md#pipelinesdelete) - Delete pipeline
* [PipelinesOne](docs/pipelines/README.md#pipelinesone) - Get pipeline
* [PipelinesUpdate](docs/pipelines/README.md#pipelinesupdate) - Update pipeline

### [Users](docs/users/README.md)

* [UsersAdd](docs/users/README.md#usersadd) - Create user
* [UsersAll](docs/users/README.md#usersall) - List users
* [UsersDelete](docs/users/README.md#usersdelete) - Delete user
* [UsersOne](docs/users/README.md#usersone) - Get user
* [UsersUpdate](docs/users/README.md#usersupdate) - Update user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
