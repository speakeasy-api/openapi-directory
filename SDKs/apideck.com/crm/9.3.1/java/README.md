# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivitiesAddRequest;
import org.openapis.openapi.models.operations.ActivitiesAddResponse;
import org.openapis.openapi.models.operations.ActivitiesAddSecurity;
import org.openapis.openapi.models.shared.ActivityAttendeeInput;
import org.openapis.openapi.models.shared.ActivityAttendeeStatusEnum;
import org.openapis.openapi.models.shared.ActivityInput;
import org.openapis.openapi.models.shared.ActivityShowAsEnum;
import org.openapis.openapi.models.shared.ActivityTypeEnum;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CustomField;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivitiesAddRequest req = new ActivitiesAddRequest(                new ActivityInput(ActivityTypeEnum.MEETING) {{
                                accountId = "12345";
                                activityDate = "2021-05-01";
                                activityDatetime = "2021-05-01T12:00:00.000Z";
                                allDayEvent = false;
                                archived = false;
                                assetId = "12345";
                                attendees = new org.openapis.openapi.models.shared.ActivityAttendeeInput[]{{
                                    add(new ActivityAttendeeInput() {{
                                        emailAddress = "elon@musk.com";
                                        firstName = "Elon";
                                        isOrganizer = true;
                                        lastName = "Musk";
                                        middleName = "D.";
                                        name = "Elon Musk";
                                        prefix = "Mr.";
                                        status = ActivityAttendeeStatusEnum.ACCEPTED;
                                        suffix = "PhD";
                                    }}),
                                    add(new ActivityAttendeeInput() {{
                                        emailAddress = "elon@musk.com";
                                        firstName = "Elon";
                                        isOrganizer = true;
                                        lastName = "Musk";
                                        middleName = "D.";
                                        name = "Elon Musk";
                                        prefix = "Mr.";
                                        status = ActivityAttendeeStatusEnum.ACCEPTED;
                                        suffix = "PhD";
                                    }}),
                                    add(new ActivityAttendeeInput() {{
                                        emailAddress = "elon@musk.com";
                                        firstName = "Elon";
                                        isOrganizer = true;
                                        lastName = "Musk";
                                        middleName = "D.";
                                        name = "Elon Musk";
                                        prefix = "Mr.";
                                        status = ActivityAttendeeStatusEnum.ACCEPTED;
                                        suffix = "PhD";
                                    }}),
                                }};
                                campaignId = "12345";
                                caseId = "12345";
                                child = false;
                                companyId = "12345";
                                contactId = "12345";
                                contractId = "12345";
                                customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = true;
                                    }}),
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = new String[]{{
                                            add("nulla"),
                                            add("corrupti"),
                                            add("illum"),
                                        }};
                                    }}),
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = 10;
                                    }}),
                                }};
                                customObjectId = "12345";
                                deleted = false;
                                description = "More info about the meeting";
                                done = false;
                                durationSeconds = 1800L;
                                endDate = "2021-05-01";
                                endDatetime = "2021-05-01T12:30:00.000Z";
                                eventSubType = "debrief";
                                groupEvent = true;
                                groupEventType = "Proposed";
                                leadId = "12345";
                                location = "Space";
                                locationAddress = new Address() {{
                                    city = "San Francisco";
                                    contactName = "Elon Musk";
                                    country = "US";
                                    county = "Santa Clara";
                                    email = "elon@musk.com";
                                    fax = "122-111-1111";
                                    id = "123";
                                    latitude = "40.759211";
                                    line1 = "Main street";
                                    line2 = "apt #";
                                    line3 = "Suite #";
                                    line4 = "delivery instructions";
                                    longitude = "-73.984638";
                                    name = "HQ US";
                                    phoneNumber = "111-111-1111";
                                    postalCode = "94104";
                                    rowVersion = "1-12345";
                                    salutation = "Mr";
                                    state = "CA";
                                    streetNumber = "25";
                                    string = "25 Spring Street, Blackburn, VIC 3130";
                                    type = AddressTypeEnum.PRIMARY;
                                    website = "https://elonmusk.com";
                                }};;
                                note = "An internal note about the meeting";
                                opportunityId = "12345";
                                ownerId = "12345";
                                private_ = true;
                                productId = "12345";
                                recurrent = false;
                                reminderDatetime = "2021-05-01T17:00:00.000Z";
                                reminderSet = false;
                                showAs = ActivityShowAsEnum.BUSY;
                                solutionId = "12345";
                                startDatetime = "2021-05-01T12:00:00.000Z";
                                title = "Meeting";
                                userId = "12345";
                                videoConferenceId = "zoom:88120759396";
                                videoConferenceUrl = "https://us02web.zoom.us/j/88120759396";
                            }};, "error", "deserunt") {{
                raw = false;
                xApideckServiceId = "suscipit";
            }};            

            ActivitiesAddResponse res = sdk.activities.activitiesAdd(req, new ActivitiesAddSecurity("iure") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createActivityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [activities](docs/activities/README.md)

* [activitiesAdd](docs/activities/README.md#activitiesadd) - Create activity
* [activitiesAll](docs/activities/README.md#activitiesall) - List activities
* [activitiesDelete](docs/activities/README.md#activitiesdelete) - Delete activity
* [activitiesOne](docs/activities/README.md#activitiesone) - Get activity
* [activitiesUpdate](docs/activities/README.md#activitiesupdate) - Update activity

### [companies](docs/companies/README.md)

* [companiesAdd](docs/companies/README.md#companiesadd) - Create company
* [companiesAll](docs/companies/README.md#companiesall) - List companies
* [companiesDelete](docs/companies/README.md#companiesdelete) - Delete company
* [companiesOne](docs/companies/README.md#companiesone) - Get company
* [companiesUpdate](docs/companies/README.md#companiesupdate) - Update company

### [contacts](docs/contacts/README.md)

* [contactsAdd](docs/contacts/README.md#contactsadd) - Create contact
* [contactsAll](docs/contacts/README.md#contactsall) - List contacts
* [contactsDelete](docs/contacts/README.md#contactsdelete) - Delete contact
* [contactsOne](docs/contacts/README.md#contactsone) - Get contact
* [contactsUpdate](docs/contacts/README.md#contactsupdate) - Update contact

### [leads](docs/leads/README.md)

* [leadsAdd](docs/leads/README.md#leadsadd) - Create lead
* [leadsAll](docs/leads/README.md#leadsall) - List leads
* [leadsDelete](docs/leads/README.md#leadsdelete) - Delete lead
* [leadsOne](docs/leads/README.md#leadsone) - Get lead
* [leadsUpdate](docs/leads/README.md#leadsupdate) - Update lead

### [notes](docs/notes/README.md)

* [notesAdd](docs/notes/README.md#notesadd) - Create note
* [notesAll](docs/notes/README.md#notesall) - List notes
* [notesDelete](docs/notes/README.md#notesdelete) - Delete note
* [notesOne](docs/notes/README.md#notesone) - Get note
* [notesUpdate](docs/notes/README.md#notesupdate) - Update note

### [opportunities](docs/opportunities/README.md)

* [opportunitiesAdd](docs/opportunities/README.md#opportunitiesadd) - Create opportunity
* [opportunitiesAll](docs/opportunities/README.md#opportunitiesall) - List opportunities
* [opportunitiesDelete](docs/opportunities/README.md#opportunitiesdelete) - Delete opportunity
* [opportunitiesOne](docs/opportunities/README.md#opportunitiesone) - Get opportunity
* [opportunitiesUpdate](docs/opportunities/README.md#opportunitiesupdate) - Update opportunity

### [pipelines](docs/pipelines/README.md)

* [pipelinesAdd](docs/pipelines/README.md#pipelinesadd) - Create pipeline
* [pipelinesAll](docs/pipelines/README.md#pipelinesall) - List pipelines
* [pipelinesDelete](docs/pipelines/README.md#pipelinesdelete) - Delete pipeline
* [pipelinesOne](docs/pipelines/README.md#pipelinesone) - Get pipeline
* [pipelinesUpdate](docs/pipelines/README.md#pipelinesupdate) - Update pipeline

### [users](docs/users/README.md)

* [usersAdd](docs/users/README.md#usersadd) - Create user
* [usersAll](docs/users/README.md#usersall) - List users
* [usersDelete](docs/users/README.md#usersdelete) - Delete user
* [usersOne](docs/users/README.md#usersone) - Get user
* [usersUpdate](docs/users/README.md#usersupdate) - Update user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
