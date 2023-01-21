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
            Raw: false,
        },
        Headers: operations.ActivitiesAddHeaders{
            XApideckAppID: "voluptas",
            XApideckConsumerID: "culpa",
            XApideckServiceID: "expedita",
        },
        Request: shared.ActivityInput{
            AccountID: "consequuntur",
            ActivityDate: "dolor",
            ActivityDatetime: "expedita",
            AllDayEvent: true,
            Archived: true,
            AssetID: "et",
            Attendees: []shared.ActivityAttendeeInput{
                shared.ActivityAttendeeInput{
                    EmailAddress: "rerum",
                    FirstName: "dicta",
                    IsOrganizer: true,
                    LastName: "voluptatum",
                    MiddleName: "et",
                    Name: "ut",
                    Prefix: "dolorem",
                    Status: "tentative",
                    Suffix: "voluptate",
                },
            },
            CampaignID: "iste",
            CaseID: "vitae",
            Child: true,
            CompanyID: "dolores",
            ContactID: "illum",
            ContractID: "debitis",
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: "odio",
                    ID: "dolore",
                    Name: "id",
                    Value: "aspernatur",
                },
                shared.CustomField{
                    Description: "accusantium",
                    ID: "totam",
                    Name: "commodi",
                    Value: "quis",
                },
            },
            CustomObjectID: "est",
            Deleted: true,
            Description: "odit",
            Done: true,
            DurationSeconds: 167566062957544642,
            EndDate: "omnis",
            EndDatetime: "aut",
            EventSubType: "illo",
            GroupEvent: false,
            GroupEventType: "officiis",
            LeadID: "autem",
            Location: "consectetur",
            LocationAddress: &shared.Address{
                City: "nobis",
                ContactName: "odio",
                Country: "qui",
                County: "recusandae",
                Email: "at",
                Fax: "ipsum",
                ID: "eveniet",
                Latitude: "modi",
                Line1: "sint",
                Line2: "inventore",
                Line3: "ut",
                Line4: "exercitationem",
                Longitude: "aut",
                Name: "reprehenderit",
                PhoneNumber: "tempore",
                PostalCode: "maiores",
                RowVersion: "incidunt",
                Salutation: "dolor",
                State: "beatae",
                StreetNumber: "veritatis",
                String: "in",
                Type: "billing",
                Website: "omnis",
            },
            Note: "ipsum",
            OpportunityID: "ex",
            OwnerID: "dolores",
            Private: true,
            ProductID: "vel",
            Recurrent: true,
            ReminderDatetime: "mollitia",
            ReminderSet: true,
            ShowAs: "busy",
            SolutionID: "reprehenderit",
            StartDatetime: "qui",
            Title: "qui",
            Type: "email",
            UserID: "in",
            VideoConferenceID: "autem",
            VideoConferenceURL: "qui",
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
