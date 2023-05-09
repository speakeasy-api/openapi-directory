# activities

### Available Operations

* [activitiesAdd](#activitiesadd) - Create activity
* [activitiesAll](#activitiesall) - List activities
* [activitiesDelete](#activitiesdelete) - Delete activity
* [activitiesOne](#activitiesone) - Get activity
* [activitiesUpdate](#activitiesupdate) - Update activity

## activitiesAdd

Create activity

### Example Usage

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
                                        value = "Uses Salesforce and Marketo";
                                    }}),
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = new String[]{{
                                            add("suscipit"),
                                            add("molestiae"),
                                        }};
                                    }}),
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = new String[]{{
                                            add("voluptatum"),
                                            add("iusto"),
                                            add("excepturi"),
                                            add("nisi"),
                                        }};
                                    }}),
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = new String[]{{
                                            add("ab"),
                                            add("quis"),
                                            add("veritatis"),
                                            add("deserunt"),
                                        }};
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
                            }};, "perferendis", "ipsam") {{
                raw = false;
                xApideckServiceId = "repellendus";
            }};            

            ActivitiesAddResponse res = sdk.activities.activitiesAdd(req, new ActivitiesAddSecurity("sapiente") {{
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

## activitiesAll

List activities

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivitiesAllRequest;
import org.openapis.openapi.models.operations.ActivitiesAllResponse;
import org.openapis.openapi.models.operations.ActivitiesAllSecurity;
import org.openapis.openapi.models.shared.ActivitiesFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivitiesAllRequest req = new ActivitiesAllRequest("quo", "odit") {{
                cursor = "at";
                fields = "at";
                filter = new ActivitiesFilter() {{
                    updatedSince = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                }};;
                limit = 978619L;
                raw = false;
                xApideckServiceId = "molestiae";
            }};            

            ActivitiesAllResponse res = sdk.activities.activitiesAll(req, new ActivitiesAllSecurity("quod") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getActivitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activitiesDelete

Delete activity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivitiesDeleteRequest;
import org.openapis.openapi.models.operations.ActivitiesDeleteResponse;
import org.openapis.openapi.models.operations.ActivitiesDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivitiesDeleteRequest req = new ActivitiesDeleteRequest("quod", "esse", "totam") {{
                raw = false;
                xApideckServiceId = "porro";
            }};            

            ActivitiesDeleteResponse res = sdk.activities.activitiesDelete(req, new ActivitiesDeleteSecurity("dolorum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteActivityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activitiesOne

Get activity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivitiesOneRequest;
import org.openapis.openapi.models.operations.ActivitiesOneResponse;
import org.openapis.openapi.models.operations.ActivitiesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivitiesOneRequest req = new ActivitiesOneRequest("dicta", "nam", "officia") {{
                fields = "occaecati";
                raw = false;
                xApideckServiceId = "fugit";
            }};            

            ActivitiesOneResponse res = sdk.activities.activitiesOne(req, new ActivitiesOneSecurity("deleniti") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getActivityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activitiesUpdate

Update activity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivitiesUpdateRequest;
import org.openapis.openapi.models.operations.ActivitiesUpdateResponse;
import org.openapis.openapi.models.operations.ActivitiesUpdateSecurity;
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

            ActivitiesUpdateRequest req = new ActivitiesUpdateRequest(                new ActivityInput(ActivityTypeEnum.MEETING) {{
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
                                        value = "Uses Salesforce and Marketo";
                                    }}),
                                    add(new CustomField("2389328923893298") {{
                                        description = "Employee Level";
                                        id = "2389328923893298";
                                        name = "employee_level";
                                        value = 10;
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
                            }};, "modi", "qui", "impedit") {{
                raw = false;
                xApideckServiceId = "cum";
            }};            

            ActivitiesUpdateResponse res = sdk.activities.activitiesUpdate(req, new ActivitiesUpdateSecurity("esse") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateActivityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
