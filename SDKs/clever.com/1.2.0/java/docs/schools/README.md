# schools

### Available Operations

* [getDistrictForSchool](#getdistrictforschool) - Returns the district for a school
* [getSchool](#getschool) - Returns a specific school
* [getSchools](#getschools) - Returns a list of schools
* [getSectionsForSchool](#getsectionsforschool) - Returns the sections for a school
* [getStudentsForSchool](#getstudentsforschool) - Returns the students for a school
* [getTeachersForSchool](#getteachersforschool) - Returns the teachers for a school

## getDistrictForSchool

Returns the district for a school

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictForSchoolRequest;
import org.openapis.openapi.models.operations.GetDistrictForSchoolResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDistrictForSchoolRequest req = new GetDistrictForSchoolRequest("esse");            

            GetDistrictForSchoolResponse res = sdk.schools.getDistrictForSchool(req);

            if (res.districtResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchool

Returns a specific school

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchoolRequest;
import org.openapis.openapi.models.operations.GetSchoolResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSchoolRequest req = new GetSchoolRequest("excepturi");            

            GetSchoolResponse res = sdk.schools.getSchool(req);

            if (res.schoolResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchools

Returns a list of schools

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchoolsRequest;
import org.openapis.openapi.models.operations.GetSchoolsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSchoolsRequest req = new GetSchoolsRequest() {{
                endingBefore = "perferendis";
                limit = 324141L;
                startingAfter = "natus";
                where = "sed";
            }};            

            GetSchoolsResponse res = sdk.schools.getSchools(req);

            if (res.schoolsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSectionsForSchool

Returns the sections for a school

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSectionsForSchoolRequest;
import org.openapis.openapi.models.operations.GetSectionsForSchoolResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSectionsForSchoolRequest req = new GetSectionsForSchoolRequest("dolor") {{
                endingBefore = "natus";
                limit = 386489L;
                startingAfter = "hic";
                where = "saepe";
            }};            

            GetSectionsForSchoolResponse res = sdk.schools.getSectionsForSchool(req);

            if (res.sectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStudentsForSchool

Returns the students for a school

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStudentsForSchoolRequest;
import org.openapis.openapi.models.operations.GetStudentsForSchoolResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetStudentsForSchoolRequest req = new GetStudentsForSchoolRequest("in") {{
                endingBefore = "corporis";
                limit = 613064L;
                startingAfter = "iure";
                where = "saepe";
            }};            

            GetStudentsForSchoolResponse res = sdk.schools.getStudentsForSchool(req);

            if (res.studentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeachersForSchool

Returns the teachers for a school

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeachersForSchoolRequest;
import org.openapis.openapi.models.operations.GetTeachersForSchoolResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTeachersForSchoolRequest req = new GetTeachersForSchoolRequest("architecto") {{
                endingBefore = "ipsa";
                limit = 969810L;
                startingAfter = "est";
                where = "mollitia";
            }};            

            GetTeachersForSchoolResponse res = sdk.schools.getTeachersForSchool(req);

            if (res.teachersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
