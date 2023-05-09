# teachers

### Available Operations

* [getDistrictForTeacher](#getdistrictforteacher) - Returns the district for a teacher
* [getGradeLevelsForTeacher](#getgradelevelsforteacher) - Returns the grade levels for sections a teacher teaches
* [getSchoolForTeacher](#getschoolforteacher) - Retrieves school info for a teacher.
* [getSectionsForTeacher](#getsectionsforteacher) - Returns the sections for a teacher
* [getStudentsForTeacher](#getstudentsforteacher) - Returns the students for a teacher
* [getTeacher](#getteacher) - Returns a specific teacher
* [getTeachers](#getteachers) - Returns a list of teachers

## getDistrictForTeacher

Returns the district for a teacher

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictForTeacherRequest;
import org.openapis.openapi.models.operations.GetDistrictForTeacherResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDistrictForTeacherRequest req = new GetDistrictForTeacherRequest("reiciendis");            

            GetDistrictForTeacherResponse res = sdk.teachers.getDistrictForTeacher(req);

            if (res.districtResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGradeLevelsForTeacher

Returns the grade levels for sections a teacher teaches

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGradeLevelsForTeacherRequest;
import org.openapis.openapi.models.operations.GetGradeLevelsForTeacherResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetGradeLevelsForTeacherRequest req = new GetGradeLevelsForTeacherRequest("vero");            

            GetGradeLevelsForTeacherResponse res = sdk.teachers.getGradeLevelsForTeacher(req);

            if (res.gradeLevelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchoolForTeacher

Retrieves school info for a teacher.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchoolForTeacherRequest;
import org.openapis.openapi.models.operations.GetSchoolForTeacherResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSchoolForTeacherRequest req = new GetSchoolForTeacherRequest("praesentium");            

            GetSchoolForTeacherResponse res = sdk.teachers.getSchoolForTeacher(req);

            if (res.schoolResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSectionsForTeacher

Returns the sections for a teacher

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSectionsForTeacherRequest;
import org.openapis.openapi.models.operations.GetSectionsForTeacherResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSectionsForTeacherRequest req = new GetSectionsForTeacherRequest("ipsa") {{
                endingBefore = "omnis";
                limit = 451159L;
                startingAfter = "cum";
            }};            

            GetSectionsForTeacherResponse res = sdk.teachers.getSectionsForTeacher(req);

            if (res.sectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStudentsForTeacher

Returns the students for a teacher

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStudentsForTeacherRequest;
import org.openapis.openapi.models.operations.GetStudentsForTeacherResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetStudentsForTeacherRequest req = new GetStudentsForTeacherRequest("doloremque") {{
                endingBefore = "reprehenderit";
                limit = 282807L;
                startingAfter = "maiores";
            }};            

            GetStudentsForTeacherResponse res = sdk.teachers.getStudentsForTeacher(req);

            if (res.studentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeacher

Returns a specific teacher

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeacherRequest;
import org.openapis.openapi.models.operations.GetTeacherResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTeacherRequest req = new GetTeacherRequest("corporis") {{
                include = "dolore";
            }};            

            GetTeacherResponse res = sdk.teachers.getTeacher(req);

            if (res.teacherResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeachers

Returns a list of teachers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeachersRequest;
import org.openapis.openapi.models.operations.GetTeachersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTeachersRequest req = new GetTeachersRequest() {{
                endingBefore = "dicta";
                limit = 688661L;
                startingAfter = "enim";
                where = "accusamus";
            }};            

            GetTeachersResponse res = sdk.teachers.getTeachers(req);

            if (res.teachersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
