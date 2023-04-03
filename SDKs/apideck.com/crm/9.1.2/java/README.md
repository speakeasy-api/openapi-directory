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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ActivitiesAddSecurity;
import org.openapis.openapi.models.operations.ActivitiesAddRequest;
import org.openapis.openapi.models.operations.ActivitiesAddResponse;
import org.openapis.openapi.models.shared.ActivityShowAsEnum;
import org.openapis.openapi.models.shared.ActivityTypeEnum;
import org.openapis.openapi.models.shared.ActivityInput;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CustomField;
import org.openapis.openapi.models.shared.ActivityAttendeeStatusEnum;
import org.openapis.openapi.models.shared.ActivityAttendeeInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivitiesAddRequest req = new ActivitiesAddRequest() {{
                activityInput = new ActivityInput() {{
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
                            status = "accepted";
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
                            status = "accepted";
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
                            status = "accepted";
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
                        add(new CustomField() {{
                            description = "Employee Level";
                            id = "2389328923893298";
                            name = "employee_level";
                            value = true;
                        }}),
                        add(new CustomField() {{
                            description = "Employee Level";
                            id = "2389328923893298";
                            name = "employee_level";
                            value = new String[]{{
                                add("nulla"),
                                add("corrupti"),
                                add("illum"),
                            }};
                        }}),
                        add(new CustomField() {{
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
                    durationSeconds = 1800;
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
                        type = "primary";
                        website = "https://elonmusk.com";
                    }};
                    note = "An internal note about the meeting";
                    opportunityId = "12345";
                    ownerId = "12345";
                    private_ = true;
                    productId = "12345";
                    recurrent = false;
                    reminderDatetime = "2021-05-01T17:00:00.000Z";
                    reminderSet = false;
                    showAs = "busy";
                    solutionId = "12345";
                    startDatetime = "2021-05-01T12:00:00.000Z";
                    title = "Meeting";
                    type = "meeting";
                    userId = "12345";
                    videoConferenceId = "zoom:88120759396";
                    videoConferenceUrl = "https://us02web.zoom.us/j/88120759396";
                }};
                raw = false;
                xApideckAppId = "error";
                xApideckConsumerId = "deserunt";
                xApideckServiceId = "suscipit";
            }}            

            ActivitiesAddResponse res = sdk.activities.activitiesAdd(req, new ActivitiesAddSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createActivityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activities

* `activitiesAdd` - Create activity
* `activitiesAll` - List activities
* `activitiesDelete` - Delete activity
* `activitiesOne` - Get activity
* `activitiesUpdate` - Update activity

### companies

* `companiesAdd` - Create company
* `companiesAll` - List companies
* `companiesDelete` - Delete company
* `companiesOne` - Get company
* `companiesUpdate` - Update company

### contacts

* `contactsAdd` - Create contact
* `contactsAll` - List contacts
* `contactsDelete` - Delete contact
* `contactsOne` - Get contact
* `contactsUpdate` - Update contact

### leads

* `leadsAdd` - Create lead
* `leadsAll` - List leads
* `leadsDelete` - Delete lead
* `leadsOne` - Get lead
* `leadsUpdate` - Update lead

### notes

* `notesAdd` - Create note
* `notesAll` - List notes
* `notesDelete` - Delete note
* `notesOne` - Get note
* `notesUpdate` - Update note

### opportunities

* `opportunitiesAdd` - Create opportunity
* `opportunitiesAll` - List opportunities
* `opportunitiesDelete` - Delete opportunity
* `opportunitiesOne` - Get opportunity
* `opportunitiesUpdate` - Update opportunity

### pipelines

* `pipelinesAdd` - Create pipeline
* `pipelinesAll` - List pipelines
* `pipelinesDelete` - Delete pipeline
* `pipelinesOne` - Get pipeline
* `pipelinesUpdate` - Update pipeline

### users

* `usersAdd` - Create user
* `usersAll` - List users
* `usersDelete` - Delete user
* `usersOne` - Get user
* `usersUpdate` - Update user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
