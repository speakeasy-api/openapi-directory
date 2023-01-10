# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
                ApplicationID: shared.SchemeApplicationID{
                    APIKey: "YOUR_API_KEY_HERE",
                },
                ConsumerID: shared.SchemeConsumerID{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.ActivitiesAddRequest{
        Security: operations.ActivitiesAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.ActivitiesAddQueryParams{
            Raw: true,
        },
        Headers: operations.ActivitiesAddHeaders{
            XApideckAppID: "accusantium",
            XApideckConsumerID: "ex",
            XApideckServiceID: "tenetur",
        },
        Request: shared.ActivityInput{
            AccountID: "dolorem",
            ActivityDate: "saepe",
            ActivityDatetime: "in",
            AllDayEvent: true,
            Archived: false,
            AssetID: "itaque",
            Attendees: []shared.ActivityAttendeeInput{
                shared.ActivityAttendeeInput{
                    EmailAddress: "vitae",
                    FirstName: "et",
                    IsOrganizer: true,
                    LastName: "consequuntur",
                    MiddleName: "consequatur",
                    Name: "non",
                    Prefix: "nulla",
                    Status: "accepted",
                    Suffix: "autem",
                },
            },
            CampaignID: "est",
            CaseID: "qui",
            Child: false,
            CompanyID: "ut",
            ContactID: "veniam",
            ContractID: "est",
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: "sunt",
                    ID: "omnis",
                    Name: "officia",
                    Value: "expedita",
                },
            },
            CustomObjectID: "eligendi",
            Deleted: false,
            Description: "assumenda",
            Done: false,
            DurationSeconds: 8187138516846286451,
            EndDate: "laborum",
            EndDatetime: "qui",
            EventSubType: "omnis",
            GroupEvent: true,
            GroupEventType: "enim",
            LeadID: "sit",
            Location: "autem",
            LocationAddress: &shared.Address{
                City: "reprehenderit",
                ContactName: "consequuntur",
                Country: "sit",
                County: "facilis",
                Email: "iure",
                Fax: "ad",
                ID: "nam",
                Latitude: "dolores",
                Line1: "id",
                Line2: "corrupti",
                Line3: "quod",
                Line4: "voluptas",
                Longitude: "dolorem",
                Name: "molestias",
                PhoneNumber: "dolor",
                PostalCode: "consequatur",
                RowVersion: "rem",
                Salutation: "ad",
                State: "quaerat",
                StreetNumber: "quia",
                String: "aut",
                Type: "billing",
                Website: "sunt",
            },
            Note: "eos",
            OpportunityID: "odio",
            OwnerID: "fuga",
            Private: true,
            ProductID: "dicta",
            Recurrent: true,
            ReminderDatetime: "ab",
            ReminderSet: true,
            ShowAs: "free",
            SolutionID: "quis",
            StartDatetime: "et",
            Title: "tempora",
            Type: "meeting",
            UserID: "vel",
            VideoConferenceID: "dolor",
            VideoConferenceURL: "nisi",
        },
    }
    
    res, err := s.Activities.ActivitiesAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateActivityResponse != nil {
        // handle response
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
