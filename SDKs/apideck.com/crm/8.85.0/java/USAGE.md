<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    applicationId = new SchemeApplicationId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    consumerId = new SchemeConsumerId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            ActivitiesAddRequest req = new ActivitiesAddRequest() {{
                security = new ActivitiesAddSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new ActivitiesAddQueryParams() {{
                    raw = false;
                }};
                headers = new ActivitiesAddHeaders() {{
                    xApideckAppId = "voluptas";
                    xApideckConsumerId = "culpa";
                    xApideckServiceId = "expedita";
                }};
                request = new ActivityInput() {{
                    accountId = "consequuntur";
                    activityDate = "dolor";
                    activityDatetime = "expedita";
                    allDayEvent = true;
                    archived = true;
                    assetId = "et";
                    attendees = new openapisdk.models.shared.ActivityAttendeeInput[]() {{
                        add(new ActivityAttendeeInput() {{
                            emailAddress = "rerum";
                            firstName = "dicta";
                            isOrganizer = true;
                            lastName = "voluptatum";
                            middleName = "et";
                            name = "ut";
                            prefix = "dolorem";
                            status = "tentative";
                            suffix = "voluptate";
                        }}),
                    }};
                    campaignId = "iste";
                    caseId = "vitae";
                    child = true;
                    companyId = "dolores";
                    contactId = "illum";
                    contractId = "debitis";
                    customFields = new openapisdk.models.shared.CustomField[]() {{
                        add(new CustomField() {{
                            description = "odio";
                            id = "dolore";
                            name = "id";
                            value = "aspernatur";
                        }}),
                        add(new CustomField() {{
                            description = "accusantium";
                            id = "totam";
                            name = "commodi";
                            value = "quis";
                        }}),
                    }};
                    customObjectId = "est";
                    deleted = true;
                    description = "odit";
                    done = true;
                    durationSeconds = 167566062957544642;
                    endDate = "omnis";
                    endDatetime = "aut";
                    eventSubType = "illo";
                    groupEvent = false;
                    groupEventType = "officiis";
                    leadId = "autem";
                    location = "consectetur";
                    locationAddress = new Address() {{
                        city = "nobis";
                        contactName = "odio";
                        country = "qui";
                        county = "recusandae";
                        email = "at";
                        fax = "ipsum";
                        id = "eveniet";
                        latitude = "modi";
                        line1 = "sint";
                        line2 = "inventore";
                        line3 = "ut";
                        line4 = "exercitationem";
                        longitude = "aut";
                        name = "reprehenderit";
                        phoneNumber = "tempore";
                        postalCode = "maiores";
                        rowVersion = "incidunt";
                        salutation = "dolor";
                        state = "beatae";
                        streetNumber = "veritatis";
                        string = "in";
                        type = "billing";
                        website = "omnis";
                    }};
                    note = "ipsum";
                    opportunityId = "ex";
                    ownerId = "dolores";
                    private_ = true;
                    productId = "vel";
                    recurrent = true;
                    reminderDatetime = "mollitia";
                    reminderSet = true;
                    showAs = "busy";
                    solutionId = "reprehenderit";
                    startDatetime = "qui";
                    title = "qui";
                    type = "email";
                    userId = "in";
                    videoConferenceId = "autem";
                    videoConferenceUrl = "qui";
                }};
            }};

            ActivitiesAddResponse res = sdk.activities.activitiesAdd(req);

            if (res.createActivityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->