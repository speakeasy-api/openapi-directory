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
                    raw = true;
                }};
                headers = new ActivitiesAddHeaders() {{
                    xApideckAppId = "accusantium";
                    xApideckConsumerId = "ex";
                    xApideckServiceId = "tenetur";
                }};
                request = new ActivityInput() {{
                    accountId = "dolorem";
                    activityDate = "saepe";
                    activityDatetime = "in";
                    allDayEvent = true;
                    archived = false;
                    assetId = "itaque";
                    attendees = new openapisdk.models.shared.ActivityAttendeeInput[]() {{
                        add(new ActivityAttendeeInput() {{
                            emailAddress = "vitae";
                            firstName = "et";
                            isOrganizer = true;
                            lastName = "consequuntur";
                            middleName = "consequatur";
                            name = "non";
                            prefix = "nulla";
                            status = "accepted";
                            suffix = "autem";
                        }}),
                    }};
                    campaignId = "est";
                    caseId = "qui";
                    child = false;
                    companyId = "ut";
                    contactId = "veniam";
                    contractId = "est";
                    customFields = new openapisdk.models.shared.CustomField[]() {{
                        add(new CustomField() {{
                            description = "sunt";
                            id = "omnis";
                            name = "officia";
                            value = "expedita";
                        }}),
                    }};
                    customObjectId = "eligendi";
                    deleted = false;
                    description = "assumenda";
                    done = false;
                    durationSeconds = 8187138516846286451;
                    endDate = "laborum";
                    endDatetime = "qui";
                    eventSubType = "omnis";
                    groupEvent = true;
                    groupEventType = "enim";
                    leadId = "sit";
                    location = "autem";
                    locationAddress = new Address() {{
                        city = "reprehenderit";
                        contactName = "consequuntur";
                        country = "sit";
                        county = "facilis";
                        email = "iure";
                        fax = "ad";
                        id = "nam";
                        latitude = "dolores";
                        line1 = "id";
                        line2 = "corrupti";
                        line3 = "quod";
                        line4 = "voluptas";
                        longitude = "dolorem";
                        name = "molestias";
                        phoneNumber = "dolor";
                        postalCode = "consequatur";
                        rowVersion = "rem";
                        salutation = "ad";
                        state = "quaerat";
                        streetNumber = "quia";
                        string = "aut";
                        type = "billing";
                        website = "sunt";
                    }};
                    note = "eos";
                    opportunityId = "odio";
                    ownerId = "fuga";
                    private_ = true;
                    productId = "dicta";
                    recurrent = true;
                    reminderDatetime = "ab";
                    reminderSet = true;
                    showAs = "free";
                    solutionId = "quis";
                    startDatetime = "et";
                    title = "tempora";
                    type = "meeting";
                    userId = "vel";
                    videoConferenceId = "dolor";
                    videoConferenceUrl = "nisi";
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