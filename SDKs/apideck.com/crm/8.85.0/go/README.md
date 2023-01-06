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
            XApideckAppID: "vel",
            XApideckConsumerID: "rerum",
            XApideckServiceID: "minus",
        },
        Request: shared.ActivityInput{
            AccountID: "asperiores",
            ActivityDate: "laboriosam",
            ActivityDatetime: "voluptate",
            AllDayEvent: true,
            Archived: true,
            AssetID: "ipsa",
            Attendees: []shared.ActivityAttendeeInput{
                shared.ActivityAttendeeInput{
                    EmailAddress: "quia",
                    FirstName: "dolore",
                    IsOrganizer: false,
                    LastName: "voluptas",
                    MiddleName: "quis",
                    Name: "dolor",
                    Prefix: "esse",
                    Status: "accepted",
                    Suffix: "omnis",
                },
            },
            CampaignID: "et",
            CaseID: "dolores",
            Child: true,
            CompanyID: "consectetur",
            ContactID: "est",
            ContractID: "ducimus",
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: "ut",
                    ID: "et",
                    Name: "vel",
                    Value: "dolores",
                },
                shared.CustomField{
                    Description: "iste",
                    ID: "ut",
                    Name: "quia",
                    Value: "dolorum",
                },
            },
            CustomObjectID: "incidunt",
            Deleted: false,
            Description: "ipsum",
            Done: false,
            DurationSeconds: 2787625745127829994,
            EndDate: "voluptates",
            EndDatetime: "repellat",
            EventSubType: "eligendi",
            GroupEvent: false,
            GroupEventType: "sit",
            LeadID: "optio",
            Location: "atque",
            LocationAddress: &shared.Address{
                City: "odio",
                ContactName: "quam",
                Country: "ut",
                County: "qui",
                Email: "voluptas",
                Fax: "in",
                ID: "aliquid",
                Latitude: "quasi",
                Line1: "impedit",
                Line2: "tempora",
                Line3: "consequatur",
                Line4: "eos",
                Longitude: "non",
                Name: "nesciunt",
                PhoneNumber: "dolorem",
                PostalCode: "facere",
                RowVersion: "magnam",
                Salutation: "aut",
                State: "eum",
                StreetNumber: "facilis",
                String: "perferendis",
                Type: "home",
                Website: "ut",
            },
            Note: "quas",
            OpportunityID: "qui",
            OwnerID: "ut",
            Private: true,
            ProductID: "qui",
            Recurrent: true,
            ReminderDatetime: "fuga",
            ReminderSet: false,
            ShowAs: "busy",
            SolutionID: "dicta",
            StartDatetime: "ea",
            Title: "accusantium",
            Type: "deadline",
            UserID: "veritatis",
            VideoConferenceID: "qui",
            VideoConferenceURL: "facere",
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
