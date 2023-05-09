# timeOffRequests

### Available Operations

* [timeOffRequestsAdd](#timeoffrequestsadd) - Create Time Off Request
* [timeOffRequestsAll](#timeoffrequestsall) - List Time Off Requests
* [timeOffRequestsDelete](#timeoffrequestsdelete) - Delete Time Off Request
* [timeOffRequestsOne](#timeoffrequestsone) - Get Time Off Request
* [timeOffRequestsUpdate](#timeoffrequestsupdate) - Update Time Off Request

## timeOffRequestsAdd

Create Time Off Request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TimeOffRequestsAddRequest;
import org.openapis.openapi.models.operations.TimeOffRequestsAddResponse;
import org.openapis.openapi.models.operations.TimeOffRequestsAddSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeOffRequestInput;
import org.openapis.openapi.models.shared.TimeOffRequestNotes;
import org.openapis.openapi.models.shared.TimeOffRequestRequestTypeEnum;
import org.openapis.openapi.models.shared.TimeOffRequestStatusEnum;
import org.openapis.openapi.models.shared.TimeOffRequestUnitsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TimeOffRequestsAddRequest req = new TimeOffRequestsAddRequest(                new TimeOffRequestInput() {{
                                amount = 3.5;
                                approvalDate = "2022-03-21";
                                description = "Enjoying some sun.";
                                employeeId = "12345";
                                endDate = "2022-04-01";
                                notes = new TimeOffRequestNotes() {{
                                    employee = "Relaxing on the beach for a few hours.";
                                    manager = "Enjoy!";
                                }};;
                                policyId = "12345";
                                requestDate = "2022-03-21";
                                requestType = TimeOffRequestRequestTypeEnum.VACATION;
                                startDate = "2022-04-01";
                                status = TimeOffRequestStatusEnum.APPROVED;
                                units = TimeOffRequestUnitsEnum.HOURS;
                            }};, "ipsam", "alias") {{
                raw = false;
                xApideckServiceId = "fugit";
            }};            

            TimeOffRequestsAddResponse res = sdk.timeOffRequests.timeOffRequestsAdd(req, new TimeOffRequestsAddSecurity("dolorum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createTimeOffRequestResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## timeOffRequestsAll

List Time Off Requests

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TimeOffRequestsAllRequest;
import org.openapis.openapi.models.operations.TimeOffRequestsAllResponse;
import org.openapis.openapi.models.operations.TimeOffRequestsAllSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeOffRequestsFilter;
import org.openapis.openapi.models.shared.TimeOffRequestsFilterTimeOffRequestStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TimeOffRequestsAllRequest req = new TimeOffRequestsAllRequest("excepturi", "tempora") {{
                cursor = "facilis";
                fields = "tempore";
                filter = new TimeOffRequestsFilter() {{
                    employeeId = "1234";
                    endDate = "2022-04-21";
                    startDate = "2022-04-08";
                    timeOffRequestStatus = TimeOffRequestsFilterTimeOffRequestStatusEnum.APPROVED;
                }};;
                limit = 962189L;
                raw = false;
                xApideckServiceId = "eum";
            }};            

            TimeOffRequestsAllResponse res = sdk.timeOffRequests.timeOffRequestsAll(req, new TimeOffRequestsAllSecurity("non") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTimeOffRequestsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## timeOffRequestsDelete

Delete Time Off Request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TimeOffRequestsDeleteRequest;
import org.openapis.openapi.models.operations.TimeOffRequestsDeleteResponse;
import org.openapis.openapi.models.operations.TimeOffRequestsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TimeOffRequestsDeleteRequest req = new TimeOffRequestsDeleteRequest("eligendi", "sint", "aliquid") {{
                raw = false;
                xApideckServiceId = "provident";
            }};            

            TimeOffRequestsDeleteResponse res = sdk.timeOffRequests.timeOffRequestsDelete(req, new TimeOffRequestsDeleteSecurity("necessitatibus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteTimeOffRequestResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## timeOffRequestsOne

Get Time Off Request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TimeOffRequestsOneRequest;
import org.openapis.openapi.models.operations.TimeOffRequestsOneResponse;
import org.openapis.openapi.models.operations.TimeOffRequestsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TimeOffRequestsOneRequest req = new TimeOffRequestsOneRequest("sint", "officia", "dolor") {{
                fields = "debitis";
                raw = false;
                xApideckServiceId = "a";
            }};            

            TimeOffRequestsOneResponse res = sdk.timeOffRequests.timeOffRequestsOne(req, new TimeOffRequestsOneSecurity("dolorum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTimeOffRequestResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## timeOffRequestsUpdate

Update Time Off Request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TimeOffRequestsUpdateRequest;
import org.openapis.openapi.models.operations.TimeOffRequestsUpdateResponse;
import org.openapis.openapi.models.operations.TimeOffRequestsUpdateSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeOffRequestInput;
import org.openapis.openapi.models.shared.TimeOffRequestNotes;
import org.openapis.openapi.models.shared.TimeOffRequestRequestTypeEnum;
import org.openapis.openapi.models.shared.TimeOffRequestStatusEnum;
import org.openapis.openapi.models.shared.TimeOffRequestUnitsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TimeOffRequestsUpdateRequest req = new TimeOffRequestsUpdateRequest(                new TimeOffRequestInput() {{
                                amount = 3.5;
                                approvalDate = "2022-03-21";
                                description = "Enjoying some sun.";
                                employeeId = "12345";
                                endDate = "2022-04-01";
                                notes = new TimeOffRequestNotes() {{
                                    employee = "Relaxing on the beach for a few hours.";
                                    manager = "Enjoy!";
                                }};;
                                policyId = "12345";
                                requestDate = "2022-03-21";
                                requestType = TimeOffRequestRequestTypeEnum.VACATION;
                                startDate = "2022-04-01";
                                status = TimeOffRequestStatusEnum.APPROVED;
                                units = TimeOffRequestUnitsEnum.HOURS;
                            }};, "in", "in", "illum") {{
                raw = false;
                xApideckServiceId = "maiores";
            }};            

            TimeOffRequestsUpdateResponse res = sdk.timeOffRequests.timeOffRequestsUpdate(req, new TimeOffRequestsUpdateSecurity("rerum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateTimeOffRequestResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
