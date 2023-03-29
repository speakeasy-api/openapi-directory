# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/crm/9.1.0/go
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

    req := operations.ActivitiesAddRequest{
        Security: operations.ActivitiesAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.ActivitiesAddQueryParams{
            Raw: false,
        },
        Headers: operations.ActivitiesAddHeaders{
            XApideckAppID: "unde",
            XApideckConsumerID: "deserunt",
            XApideckServiceID: "porro",
        },
        Request: shared.ActivityInput{
            AccountID: "12345",
            ActivityDate: "2021-05-01",
            ActivityDatetime: "2021-05-01T12:00:00.000Z",
            AllDayEvent: false,
            Archived: false,
            AssetID: "12345",
            Attendees: []shared.ActivityAttendeeInput{
                shared.ActivityAttendeeInput{
                    EmailAddress: "elon@musk.com",
                    FirstName: "Elon",
                    IsOrganizer: true,
                    LastName: "Musk",
                    MiddleName: "D.",
                    Name: "Elon Musk",
                    Prefix: "Mr.",
                    Status: "accepted",
                    Suffix: "PhD",
                },
                shared.ActivityAttendeeInput{
                    EmailAddress: "elon@musk.com",
                    FirstName: "Elon",
                    IsOrganizer: true,
                    LastName: "Musk",
                    MiddleName: "D.",
                    Name: "Elon Musk",
                    Prefix: "Mr.",
                    Status: "accepted",
                    Suffix: "PhD",
                },
                shared.ActivityAttendeeInput{
                    EmailAddress: "elon@musk.com",
                    FirstName: "Elon",
                    IsOrganizer: true,
                    LastName: "Musk",
                    MiddleName: "D.",
                    Name: "Elon Musk",
                    Prefix: "Mr.",
                    Status: "accepted",
                    Suffix: "PhD",
                },
                shared.ActivityAttendeeInput{
                    EmailAddress: "elon@musk.com",
                    FirstName: "Elon",
                    IsOrganizer: true,
                    LastName: "Musk",
                    MiddleName: "D.",
                    Name: "Elon Musk",
                    Prefix: "Mr.",
                    Status: "accepted",
                    Suffix: "PhD",
                },
            },
            CampaignID: "12345",
            CaseID: "12345",
            Child: false,
            CompanyID: "12345",
            ContactID: "12345",
            ContractID: "12345",
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: "Employee Level",
                    ID: "2389328923893298",
                    Name: "employee_level",
                    Value: []string{
                        "nulla",
                        "nihil",
                        "fuga",
                    },
                },
                shared.CustomField{
                    Description: "Employee Level",
                    ID: "2389328923893298",
                    Name: "employee_level",
                    Value: true,
                },
                shared.CustomField{
                    Description: "Employee Level",
                    ID: "2389328923893298",
                    Name: "employee_level",
                    Value: 10,
                },
            },
            CustomObjectID: "12345",
            Deleted: false,
            Description: "More info about the meeting",
            Done: false,
            DurationSeconds: 1800,
            EndDate: "2021-05-01",
            EndDatetime: "2021-05-01T12:30:00.000Z",
            EventSubType: "debrief",
            GroupEvent: true,
            GroupEventType: "Proposed",
            LeadID: "12345",
            Location: "Space",
            LocationAddress: &shared.Address{
                City: "San Francisco",
                ContactName: "Elon Musk",
                Country: "US",
                County: "Santa Clara",
                Email: "elon@musk.com",
                Fax: "122-111-1111",
                ID: "123",
                Latitude: "40.759211",
                Line1: "Main street",
                Line2: "apt #",
                Line3: "Suite #",
                Line4: "delivery instructions",
                Longitude: "-73.984638",
                Name: "HQ US",
                PhoneNumber: "111-111-1111",
                PostalCode: "94104",
                RowVersion: "1-12345",
                Salutation: "Mr",
                State: "CA",
                StreetNumber: "25",
                String: "25 Spring Street, Blackburn, VIC 3130",
                Type: "primary",
                Website: "https://elonmusk.com",
            },
            Note: "An internal note about the meeting",
            OpportunityID: "12345",
            OwnerID: "12345",
            Private: true,
            ProductID: "12345",
            Recurrent: false,
            ReminderDatetime: "2021-05-01T17:00:00.000Z",
            ReminderSet: false,
            ShowAs: "busy",
            SolutionID: "12345",
            StartDatetime: "2021-05-01T12:00:00.000Z",
            Title: "Meeting",
            Type: "meeting",
            UserID: "12345",
            VideoConferenceID: "zoom:88120759396",
            VideoConferenceURL: "https://us02web.zoom.us/j/88120759396",
        },
    }

    ctx := context.Background()
    res, err := s.Activities.ActivitiesAdd(ctx, req)
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
## SDK Available Operations


### Activities

* `ActivitiesAdd` - Create activity
* `ActivitiesAll` - List activities
* `ActivitiesDelete` - Delete activity
* `ActivitiesOne` - Get activity
* `ActivitiesUpdate` - Update activity

### Companies

* `CompaniesAdd` - Create company
* `CompaniesAll` - List companies
* `CompaniesDelete` - Delete company
* `CompaniesOne` - Get company
* `CompaniesUpdate` - Update company

### Contacts

* `ContactsAdd` - Create contact
* `ContactsAll` - List contacts
* `ContactsDelete` - Delete contact
* `ContactsOne` - Get contact
* `ContactsUpdate` - Update contact

### Leads

* `LeadsAdd` - Create lead
* `LeadsAll` - List leads
* `LeadsDelete` - Delete lead
* `LeadsOne` - Get lead
* `LeadsUpdate` - Update lead

### Notes

* `NotesAdd` - Create note
* `NotesAll` - List notes
* `NotesDelete` - Delete note
* `NotesOne` - Get note
* `NotesUpdate` - Update note

### Opportunities

* `OpportunitiesAdd` - Create opportunity
* `OpportunitiesAll` - List opportunities
* `OpportunitiesDelete` - Delete opportunity
* `OpportunitiesOne` - Get opportunity
* `OpportunitiesUpdate` - Update opportunity

### Pipelines

* `PipelinesAdd` - Create pipeline
* `PipelinesAll` - List pipelines
* `PipelinesDelete` - Delete pipeline
* `PipelinesOne` - Get pipeline
* `PipelinesUpdate` - Update pipeline

### Users

* `UsersAdd` - Create user
* `UsersAll` - List users
* `UsersDelete` - Delete user
* `UsersOne` - Get user
* `UsersUpdate` - Update user
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
