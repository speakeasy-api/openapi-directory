# students

### Available Operations

* [getContactsForStudent](#getcontactsforstudent) - Returns the contacts for a student
* [getDistrictForStudent](#getdistrictforstudent) - Returns the district for a student
* [getSchoolForStudent](#getschoolforstudent) - Returns the primary school for a student
* [getSectionsForStudent](#getsectionsforstudent) - Returns the sections for a student
* [getStudent](#getstudent) - Returns a specific student
* [getStudents](#getstudents) - Returns a list of students
* [getTeachersForStudent](#getteachersforstudent) - Returns the teachers for a student

## getContactsForStudent

Returns the contacts for a student

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactsForStudentRequest;
import org.openapis.openapi.models.operations.GetContactsForStudentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetContactsForStudentRequest req = new GetContactsForStudentRequest("numquam") {{
                limit = 414369L;
            }};            

            GetContactsForStudentResponse res = sdk.students.getContactsForStudent(req);

            if (res.studentContactsForStudentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistrictForStudent

Returns the district for a student

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictForStudentRequest;
import org.openapis.openapi.models.operations.GetDistrictForStudentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDistrictForStudentRequest req = new GetDistrictForStudentRequest("molestiae");            

            GetDistrictForStudentResponse res = sdk.students.getDistrictForStudent(req);

            if (res.districtResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchoolForStudent

Returns the primary school for a student

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchoolForStudentRequest;
import org.openapis.openapi.models.operations.GetSchoolForStudentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSchoolForStudentRequest req = new GetSchoolForStudentRequest("error");            

            GetSchoolForStudentResponse res = sdk.students.getSchoolForStudent(req);

            if (res.schoolResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSectionsForStudent

Returns the sections for a student

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSectionsForStudentRequest;
import org.openapis.openapi.models.operations.GetSectionsForStudentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSectionsForStudentRequest req = new GetSectionsForStudentRequest("quis") {{
                endingBefore = "vitae";
                limit = 674752L;
                startingAfter = "animi";
            }};            

            GetSectionsForStudentResponse res = sdk.students.getSectionsForStudent(req);

            if (res.sectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStudent

Returns a specific student

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStudentRequest;
import org.openapis.openapi.models.operations.GetStudentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetStudentRequest req = new GetStudentRequest("odit") {{
                include = "quo";
            }};            

            GetStudentResponse res = sdk.students.getStudent(req);

            if (res.studentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStudents

Returns a list of students

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStudentsRequest;
import org.openapis.openapi.models.operations.GetStudentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetStudentsRequest req = new GetStudentsRequest() {{
                endingBefore = "tenetur";
                limit = 368725L;
                startingAfter = "id";
                where = "possimus";
            }};            

            GetStudentsResponse res = sdk.students.getStudents(req);

            if (res.studentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeachersForStudent

Returns the teachers for a student

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeachersForStudentRequest;
import org.openapis.openapi.models.operations.GetTeachersForStudentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTeachersForStudentRequest req = new GetTeachersForStudentRequest("quasi") {{
                endingBefore = "error";
                limit = 837945L;
                startingAfter = "laborum";
            }};            

            GetTeachersForStudentResponse res = sdk.students.getTeachersForStudent(req);

            if (res.teachersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
