# departments

### Available Operations

* [departmentsAdd](#departmentsadd) - Create Department
* [departmentsAll](#departmentsall) - List Departments
* [departmentsDelete](#departmentsdelete) - Delete Department
* [departmentsOne](#departmentsone) - Get Department
* [departmentsUpdate](#departmentsupdate) - Update Department

## departmentsAdd

Create Department

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DepartmentsAddRequest;
import org.openapis.openapi.models.operations.DepartmentsAddResponse;
import org.openapis.openapi.models.operations.DepartmentsAddSecurity;
import org.openapis.openapi.models.shared.DepartmentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DepartmentsAddRequest req = new DepartmentsAddRequest(                new DepartmentInput() {{
                                code = "2";
                                description = "R&D";
                                name = "R&D";
                            }};, "quod", "esse") {{
                raw = false;
                xApideckServiceId = "totam";
            }};            

            DepartmentsAddResponse res = sdk.departments.departmentsAdd(req, new DepartmentsAddSecurity("porro") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createDepartmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## departmentsAll

List Departments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DepartmentsAllRequest;
import org.openapis.openapi.models.operations.DepartmentsAllResponse;
import org.openapis.openapi.models.operations.DepartmentsAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DepartmentsAllRequest req = new DepartmentsAllRequest("dolorum", "dicta") {{
                cursor = "nam";
                fields = "officia";
                limit = 582020L;
                raw = false;
                xApideckServiceId = "fugit";
            }};            

            DepartmentsAllResponse res = sdk.departments.departmentsAll(req, new DepartmentsAllSecurity("deleniti") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getDepartmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## departmentsDelete

Delete Department

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DepartmentsDeleteRequest;
import org.openapis.openapi.models.operations.DepartmentsDeleteResponse;
import org.openapis.openapi.models.operations.DepartmentsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DepartmentsDeleteRequest req = new DepartmentsDeleteRequest("hic", "optio", "totam") {{
                raw = false;
                xApideckServiceId = "beatae";
            }};            

            DepartmentsDeleteResponse res = sdk.departments.departmentsDelete(req, new DepartmentsDeleteSecurity("commodi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteDepartmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## departmentsOne

Get Department

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DepartmentsOneRequest;
import org.openapis.openapi.models.operations.DepartmentsOneResponse;
import org.openapis.openapi.models.operations.DepartmentsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DepartmentsOneRequest req = new DepartmentsOneRequest("molestiae", "modi", "qui") {{
                fields = "impedit";
                raw = false;
                xApideckServiceId = "cum";
            }};            

            DepartmentsOneResponse res = sdk.departments.departmentsOne(req, new DepartmentsOneSecurity("esse") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getDepartmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## departmentsUpdate

Update Department

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DepartmentsUpdateRequest;
import org.openapis.openapi.models.operations.DepartmentsUpdateResponse;
import org.openapis.openapi.models.operations.DepartmentsUpdateSecurity;
import org.openapis.openapi.models.shared.DepartmentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DepartmentsUpdateRequest req = new DepartmentsUpdateRequest(                new DepartmentInput() {{
                                code = "2";
                                description = "R&D";
                                name = "R&D";
                            }};, "ipsum", "excepturi", "aspernatur") {{
                raw = false;
                xApideckServiceId = "perferendis";
            }};            

            DepartmentsUpdateResponse res = sdk.departments.departmentsUpdate(req, new DepartmentsUpdateSecurity("ad") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateDepartmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
