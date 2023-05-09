# sections

### Available Operations

* [getDistrictForSection](#getdistrictforsection) - Returns the district for a section
* [getSchoolForSection](#getschoolforsection) - Returns the school for a section
* [getSection](#getsection) - Returns a specific section
* [getSections](#getsections) - Returns a list of sections
* [getStudentsForSection](#getstudentsforsection) - Returns the students for a section
* [getTeacherForSection](#getteacherforsection) - Returns the primary teacher for a section
* [getTeachersForSection](#getteachersforsection) - Returns the teachers for a section

## getDistrictForSection

Returns the district for a section

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictForSectionRequest;
import org.openapis.openapi.models.operations.GetDistrictForSectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDistrictForSectionRequest req = new GetDistrictForSectionRequest("dolores");            

            GetDistrictForSectionResponse res = sdk.sections.getDistrictForSection(req);

            if (res.districtResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchoolForSection

Returns the school for a section

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchoolForSectionRequest;
import org.openapis.openapi.models.operations.GetSchoolForSectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSchoolForSectionRequest req = new GetSchoolForSectionRequest("corporis");            

            GetSchoolForSectionResponse res = sdk.sections.getSchoolForSection(req);

            if (res.schoolResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSection

Returns a specific section

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSectionRequest;
import org.openapis.openapi.models.operations.GetSectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSectionRequest req = new GetSectionRequest("nobis");            

            GetSectionResponse res = sdk.sections.getSection(req);

            if (res.sectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSections

Returns a list of sections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSectionsRequest;
import org.openapis.openapi.models.operations.GetSectionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSectionsRequest req = new GetSectionsRequest() {{
                endingBefore = "omnis";
                limit = 363711L;
                startingAfter = "minima";
                where = "excepturi";
            }};            

            GetSectionsResponse res = sdk.sections.getSections(req);

            if (res.sectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStudentsForSection

Returns the students for a section

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStudentsForSectionRequest;
import org.openapis.openapi.models.operations.GetStudentsForSectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetStudentsForSectionRequest req = new GetStudentsForSectionRequest("iure") {{
                endingBefore = "culpa";
                limit = 988374L;
                startingAfter = "sapiente";
            }};            

            GetStudentsForSectionResponse res = sdk.sections.getStudentsForSection(req);

            if (res.studentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeacherForSection

Returns the primary teacher for a section

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeacherForSectionRequest;
import org.openapis.openapi.models.operations.GetTeacherForSectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTeacherForSectionRequest req = new GetTeacherForSectionRequest("mollitia");            

            GetTeacherForSectionResponse res = sdk.sections.getTeacherForSection(req);

            if (res.teacherResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeachersForSection

Returns the teachers for a section

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeachersForSectionRequest;
import org.openapis.openapi.models.operations.GetTeachersForSectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTeachersForSectionRequest req = new GetTeachersForSectionRequest("culpa") {{
                endingBefore = "consequuntur";
                limit = 995300L;
                startingAfter = "mollitia";
            }};            

            GetTeachersForSectionResponse res = sdk.sections.getTeachersForSection(req);

            if (res.teachersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
