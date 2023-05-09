# employeePayrolls

### Available Operations

* [employeePayrollsAll](#employeepayrollsall) - List Employee Payrolls
* [employeePayrollsOne](#employeepayrollsone) - Get Employee Payroll

## employeePayrollsAll

List payrolls for employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmployeePayrollsAllRequest;
import org.openapis.openapi.models.operations.EmployeePayrollsAllResponse;
import org.openapis.openapi.models.operations.EmployeePayrollsAllSecurity;
import org.openapis.openapi.models.shared.PayrollsFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EmployeePayrollsAllRequest req = new EmployeePayrollsAllRequest("natus", "sed", "iste") {{
                fields = "dolor";
                filter = new PayrollsFilter() {{
                    endDate = "2022-04-21";
                    startDate = "2022-04-08";
                }};;
                raw = false;
                xApideckServiceId = "natus";
            }};            

            EmployeePayrollsAllResponse res = sdk.employeePayrolls.employeePayrollsAll(req, new EmployeePayrollsAllSecurity("laboriosam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEmployeePayrollsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## employeePayrollsOne

Get payroll for employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmployeePayrollsOneRequest;
import org.openapis.openapi.models.operations.EmployeePayrollsOneResponse;
import org.openapis.openapi.models.operations.EmployeePayrollsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EmployeePayrollsOneRequest req = new EmployeePayrollsOneRequest("hic", "saepe", "fuga", "in") {{
                fields = "corporis";
                raw = false;
                xApideckServiceId = "iste";
            }};            

            EmployeePayrollsOneResponse res = sdk.employeePayrolls.employeePayrollsOne(req, new EmployeePayrollsOneSecurity("iure") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEmployeePayrollResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
