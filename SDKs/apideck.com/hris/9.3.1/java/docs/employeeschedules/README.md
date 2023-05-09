# employeeSchedules

### Available Operations

* [employeeSchedulesAll](#employeeschedulesall) - List Employee Schedules

## employeeSchedulesAll

List schedules for employee, a schedule is a work pattern, not the actual worked hours, for an employee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmployeeSchedulesAllRequest;
import org.openapis.openapi.models.operations.EmployeeSchedulesAllResponse;
import org.openapis.openapi.models.operations.EmployeeSchedulesAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EmployeeSchedulesAllRequest req = new EmployeeSchedulesAllRequest("saepe", "quidem", "architecto") {{
                fields = "ipsa";
                raw = false;
                xApideckServiceId = "reiciendis";
            }};            

            EmployeeSchedulesAllResponse res = sdk.employeeSchedules.employeeSchedulesAll(req, new EmployeeSchedulesAllSecurity("est") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEmployeeSchedulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
