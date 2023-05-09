<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAssignmentsIdRequest;
import org.openapis.openapi.models.operations.DeleteAssignmentsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAssignmentsIdRequest req = new DeleteAssignmentsIdRequest("corrupti");            

            DeleteAssignmentsIdResponse res = sdk.assignment.deleteAssignmentsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->