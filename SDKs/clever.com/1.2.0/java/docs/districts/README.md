# districts

### Available Operations

* [getAdminsForDistrict](#getadminsfordistrict) - Returns the admins for a district
* [getDistrict](#getdistrict) - Returns a specific district
* [getDistrictStatus](#getdistrictstatus) - Returns the status of the district
* [getDistricts](#getdistricts) - Returns a list of districts. In practice this will only return the one district associated with the bearer token
* [getSchoolsForDistrict](#getschoolsfordistrict) - Returns the schools for a district
* [getSectionsForDistrict](#getsectionsfordistrict) - Returns the sections for a district
* [getStudentsForDistrict](#getstudentsfordistrict) - Returns the students for a district
* [getTeachersForDistrict](#getteachersfordistrict) - Returns the teachers for a district

## getAdminsForDistrict

Returns the admins for a district

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdminsForDistrictRequest;
import org.openapis.openapi.models.operations.GetAdminsForDistrictResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetAdminsForDistrictRequest req = new GetAdminsForDistrictRequest("molestiae");            

            GetAdminsForDistrictResponse res = sdk.districts.getAdminsForDistrict(req);

            if (res.districtAdminsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistrict

Returns a specific district

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictRequest;
import org.openapis.openapi.models.operations.GetDistrictResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDistrictRequest req = new GetDistrictRequest("placeat") {{
                include = "voluptatum";
            }};            

            GetDistrictResponse res = sdk.districts.getDistrict(req);

            if (res.districtResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistrictStatus

Returns the status of the district

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictStatusRequest;
import org.openapis.openapi.models.operations.GetDistrictStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDistrictStatusRequest req = new GetDistrictStatusRequest("excepturi");            

            GetDistrictStatusResponse res = sdk.districts.getDistrictStatus(req);

            if (res.districtStatusResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistricts

Returns a list of districts. In practice this will only return the one district associated with the bearer token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDistrictsResponse res = sdk.districts.getDistricts();

            if (res.districtsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchoolsForDistrict

Returns the schools for a district

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchoolsForDistrictRequest;
import org.openapis.openapi.models.operations.GetSchoolsForDistrictResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSchoolsForDistrictRequest req = new GetSchoolsForDistrictRequest("temporibus") {{
                endingBefore = "ab";
                limit = 337396L;
                startingAfter = "veritatis";
                where = "deserunt";
            }};            

            GetSchoolsForDistrictResponse res = sdk.districts.getSchoolsForDistrict(req);

            if (res.schoolsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSectionsForDistrict

Returns the sections for a district

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSectionsForDistrictRequest;
import org.openapis.openapi.models.operations.GetSectionsForDistrictResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSectionsForDistrictRequest req = new GetSectionsForDistrictRequest("ipsam") {{
                endingBefore = "repellendus";
                limit = 957156L;
                startingAfter = "quo";
                where = "odit";
            }};            

            GetSectionsForDistrictResponse res = sdk.districts.getSectionsForDistrict(req);

            if (res.sectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStudentsForDistrict

Returns the students for a district

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStudentsForDistrictRequest;
import org.openapis.openapi.models.operations.GetStudentsForDistrictResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetStudentsForDistrictRequest req = new GetStudentsForDistrictRequest("at") {{
                endingBefore = "maiores";
                limit = 473608L;
                startingAfter = "quod";
                where = "quod";
            }};            

            GetStudentsForDistrictResponse res = sdk.districts.getStudentsForDistrict(req);

            if (res.studentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeachersForDistrict

Returns the teachers for a district

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeachersForDistrictRequest;
import org.openapis.openapi.models.operations.GetTeachersForDistrictResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTeachersForDistrictRequest req = new GetTeachersForDistrictRequest("totam") {{
                endingBefore = "porro";
                limit = 678880L;
                startingAfter = "dicta";
                where = "nam";
            }};            

            GetTeachersForDistrictResponse res = sdk.districts.getTeachersForDistrict(req);

            if (res.teachersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
