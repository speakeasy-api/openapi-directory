# payrolls

### Available Operations

* [payrollsAll](#payrollsall) - List Payroll
* [payrollsOne](#payrollsone) - Get Payroll

## payrollsAll

List Payroll

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PayrollsAllRequest;
import org.openapis.openapi.models.operations.PayrollsAllResponse;
import org.openapis.openapi.models.operations.PayrollsAllSecurity;
import org.openapis.openapi.models.shared.PayrollsFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PayrollsAllRequest req = new PayrollsAllRequest("distinctio", "quibusdam") {{
                fields = "labore";
                filter = new PayrollsFilter() {{
                    endDate = "2022-04-21";
                    startDate = "2022-04-08";
                }};;
                raw = false;
                xApideckServiceId = "modi";
            }};            

            PayrollsAllResponse res = sdk.payrolls.payrollsAll(req, new PayrollsAllSecurity("qui") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPayrollsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## payrollsOne

Get Payroll

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PayrollsOneRequest;
import org.openapis.openapi.models.operations.PayrollsOneResponse;
import org.openapis.openapi.models.operations.PayrollsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PayrollsOneRequest req = new PayrollsOneRequest("aliquid", "cupiditate", "quos") {{
                fields = "perferendis";
                raw = false;
                xApideckServiceId = "magni";
            }};            

            PayrollsOneResponse res = sdk.payrolls.payrollsOne(req, new PayrollsOneSecurity("assumenda") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPayrollResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
